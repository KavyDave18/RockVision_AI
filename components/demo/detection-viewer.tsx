"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

interface DetectionViewerProps {
  scenario: Scenario
  detections: Detection[]
  showDetections: boolean
  progress: number
}

export function DetectionViewer({ scenario, detections, showDetections, progress }: DetectionViewerProps) {
  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case "high":
        return "border-red-500 bg-red-500"
      case "medium":
        return "border-yellow-500 bg-yellow-500"
      case "low":
        return "border-green-500 bg-green-500"
      default:
        return "border-gray-500 bg-gray-500"
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Original Image */}
      <Card className="glass-dark p-4 animate-slide-up hover-glow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Original Image</h3>
          <Badge className="bg-slate-700 text-gray-300">Input</Badge>
        </div>
        <div className="relative bg-slate-800 rounded-lg overflow-hidden aspect-video">
          <img
            src={scenario.originalImage || "/placeholder.svg"}
            alt="Original"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-black bg-opacity-75 rounded-lg p-3">
              <p className="text-white text-sm font-medium">{scenario.name}</p>
              <p className="text-gray-300 text-xs">{scenario.description}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Processed Image with Detections */}
      <Card className="glass-dark p-4 animate-slide-up hover-glow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">AI Analysis Result</h3>
          <Badge className="bg-primary-blue text-white">Processed</Badge>
        </div>
        <div className="relative bg-slate-800 rounded-lg overflow-hidden aspect-video">
          <img
            src={scenario.originalImage || "/placeholder.svg"}
            alt="Processed"
            className="w-full h-full object-cover"
          />

          {/* Processing Overlay */}
          {progress < 100 && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue mx-auto mb-4"></div>
                <p className="text-white font-medium">AI Processing...</p>
                <p className="text-sm text-gray-400">Analyzing geological features</p>
              </div>
            </div>
          )}

          {/* Detection Bounding Boxes */}
          {showDetections &&
            progress >= 100 &&
            detections.map((detection, index) => (
              <div
                key={detection.id}
                className={`absolute border-2 bg-opacity-20 animate-fade-in ${getRiskColor(detection.riskLevel)}`}
                style={{
                  left: `${(detection.x / 400) * 100}%`,
                  top: `${(detection.y / 300) * 100}%`,
                  width: `${(detection.width / 400) * 100}%`,
                  height: `${(detection.height / 300) * 100}%`,
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                <div
                  className={`absolute -top-8 left-0 px-2 py-1 rounded text-xs text-white ${getRiskColor(detection.riskLevel).split(" ")[1]}`}
                >
                  {detection.type.replace("_", " ")} ({detection.confidence}%)
                </div>
              </div>
            ))}

          {/* Detection Summary */}
          {progress >= 100 && (
            <div className="absolute top-4 left-4 right-4">
              <div className="bg-slate-900 bg-opacity-90 rounded-lg p-3 border border-primary-blue">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-white text-sm font-medium">Analysis Complete</span>
                  </div>
                  <Badge className="bg-primary-blue text-white text-xs">{detections.length} detections</Badge>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
