"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Target, TrendingUp, Download, Eye } from "lucide-react"

interface ProcessingResultsProps {
  file: {
    id: string
    name: string
    url: string
    results: {
      detections: number
      confidence: number
      riskLevel: "low" | "medium" | "high"
      boundingBoxes: Array<{
        x: number
        y: number
        width: number
        height: number
        confidence: number
        type: string
      }>
    }
  }
}

export function ProcessingResults({ file }: ProcessingResultsProps) {
  const { results } = file

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case "high":
        return "bg-red-500 text-white"
      case "medium":
        return "bg-yellow-500 text-white"
      case "low":
        return "bg-green-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <Card className="glass-dark p-6 animate-slide-up hover-glow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Detection Results</h3>
        <Badge className="bg-green-500 text-white">Analysis Complete</Badge>
      </div>

      {/* Results Summary */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
          <div className="flex items-center space-x-3">
            <Target className="h-5 w-5 text-primary-blue" />
            <span className="text-white">Detections Found</span>
          </div>
          <span className="text-2xl font-bold text-white">{results.detections}</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
          <div className="flex items-center space-x-3">
            <TrendingUp className="h-5 w-5 text-highlight-coral" />
            <span className="text-white">Confidence Score</span>
          </div>
          <span className="text-2xl font-bold text-white">{results.confidence}%</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <span className="text-white">Risk Level</span>
          </div>
          <Badge className={getRiskColor(results.riskLevel)}>{results.riskLevel.toUpperCase()}</Badge>
        </div>
      </div>

      {/* Bounding Box Preview */}
      <div className="mb-6">
        <h4 className="text-white font-medium mb-3">Detection Preview</h4>
        <div className="relative bg-slate-800 rounded-lg overflow-hidden aspect-video">
          <img src={file.url || "/placeholder.svg"} alt="Detection preview" className="w-full h-full object-cover" />

          {/* Simulated Bounding Boxes */}
          {results.boundingBoxes.map((box, index) => (
            <div
              key={index}
              className="absolute border-2 border-red-500 bg-red-500 bg-opacity-20"
              style={{
                left: `${(box.x / 500) * 100}%`,
                top: `${(box.y / 300) * 100}%`,
                width: `${(box.width / 500) * 100}%`,
                height: `${(box.height / 300) * 100}%`,
              }}
            >
              <div className="absolute -top-6 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {box.type} ({box.confidence}%)
              </div>
            </div>
          ))}

          {/* Detection Alert */}
          <div className="absolute top-4 left-4 right-4">
            <div className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center animate-pulse">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <span className="font-medium">⚠️ Rockfall Detected</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detection Details */}
      <div className="mb-6">
        <h4 className="text-white font-medium mb-3">Detection Details</h4>
        <div className="space-y-2">
          {results.boundingBoxes.map((box, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
              <div>
                <p className="text-white font-medium capitalize">{box.type.replace("_", " ")}</p>
                <p className="text-sm text-gray-400">
                  Position: ({Math.round(box.x)}, {Math.round(box.y)}) • Size: {Math.round(box.width)}×
                  {Math.round(box.height)}
                </p>
              </div>
              <Badge className="bg-primary-blue text-white">{box.confidence}%</Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <Button className="flex-1 bg-primary-blue hover:bg-blue-600 text-white hover-scale">
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </Button>
        <Button
          variant="outline"
          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent hover-scale"
        >
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>
    </Card>
  )
}
