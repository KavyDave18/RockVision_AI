"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Monitor, Target, TrendingUp } from "lucide-react"

interface Detection {
  id: string
  x: number
  y: number
  width: number
  height: number
  confidence: number
  type: string
  riskLevel: "low" | "medium" | "high"
}

interface Scenario {
  id: string
  name: string
  originalImage: string
  description: string
  detections: Detection[]
}

interface ControlPanelProps {
  scenarios: Scenario[]
  currentScenario: number
  onScenarioChange: (index: number) => void
  confidenceThreshold: number[]
  onConfidenceChange: (value: number[]) => void
  detections: Detection[]
}

export function ControlPanel({
  scenarios,
  currentScenario,
  onScenarioChange,
  confidenceThreshold,
  onConfidenceChange,
  detections,
}: ControlPanelProps) {
  return (
    <>
      {/* Scenario Selection */}
      <Card className="glass-dark p-6 animate-slide-up hover-glow">
        <div className="flex items-center mb-4">
          <Monitor className="h-5 w-5 text-primary-blue mr-2" />
          <h3 className="text-lg font-semibold text-white">Demo Scenarios</h3>
        </div>
        <div className="space-y-3">
          {scenarios.map((scenario, index) => (
            <Button
              key={scenario.id}
              variant={index === currentScenario ? "default" : "outline"}
              className={`w-full justify-start text-left h-auto p-3 ${
                index === currentScenario
                  ? "bg-primary-blue hover:bg-blue-600 text-white"
                  : "border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
              }`}
              onClick={() => onScenarioChange(index)}
            >
              <div>
                <p className="font-medium">{scenario.name}</p>
                <p className="text-xs opacity-75 mt-1">{scenario.detections.length} potential hazards</p>
              </div>
            </Button>
          ))}
        </div>
      </Card>

      {/* Confidence Threshold */}
      <Card className="glass-dark p-6 animate-slide-up hover-glow">
        <div className="flex items-center mb-4">
          <Target className="h-5 w-5 text-highlight-coral mr-2" />
          <h3 className="text-lg font-semibold text-white">Detection Settings</h3>
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-gray-400">Confidence Threshold</label>
              <span className="text-sm text-white font-medium">{confidenceThreshold[0]}%</span>
            </div>
            <Slider
              value={confidenceThreshold}
              onValueChange={onConfidenceChange}
              max={100}
              min={50}
              step={5}
              className="w-full"
            />
            <p className="text-xs text-gray-500 mt-1">Only show detections above this confidence level</p>
          </div>
        </div>
      </Card>

      {/* Detection List */}
      <Card className="glass-dark p-6 animate-slide-up hover-glow">
        <div className="flex items-center mb-4">
          <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
          <h3 className="text-lg font-semibold text-white">Active Detections</h3>
        </div>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {detections.length > 0 ? (
            detections.map((detection) => (
              <div key={detection.id} className="p-3 rounded-lg bg-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium capitalize">{detection.type.replace("_", " ")}</span>
                  <Badge
                    className={
                      detection.riskLevel === "high"
                        ? "bg-red-500 text-white"
                        : detection.riskLevel === "medium"
                          ? "bg-yellow-500 text-white"
                          : "bg-green-500 text-white"
                    }
                  >
                    {detection.riskLevel.toUpperCase()}
                  </Badge>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Confidence: {detection.confidence}%</span>
                  <span>
                    Size: {detection.width}×{detection.height}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-4">
              <p className="text-gray-400 text-sm">No detections above threshold</p>
            </div>
          )}
        </div>
      </Card>
    </>
  )
}
