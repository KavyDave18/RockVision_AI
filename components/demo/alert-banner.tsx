"use client"
import { AlertTriangle, X } from "lucide-react"

interface AlertBannerProps {
  riskLevel: "low" | "medium" | "high"
  detectionCount: number
  onDismiss: () => void
}

export function AlertBanner({ riskLevel, detectionCount, onDismiss }: AlertBannerProps) {
  const getBannerColor = () => {
    switch (riskLevel) {
      case "high":
        return "bg-red-500 border-red-400"
      case "medium":
        return "bg-yellow-500 border-yellow-400"
      case "low":
        return "bg-green-500 border-green-400"
      default:
        return "bg-gray-500 border-gray-400"
    }
  }

  const getAlertMessage = () => {
    switch (riskLevel) {
      case "high":
        return "⚠️ HIGH RISK ROCKFALL DETECTED"
      case "medium":
        return "⚠️ MEDIUM RISK GEOLOGICAL ACTIVITY"
      case "low":
        return "✓ LOW RISK CONDITIONS DETECTED"
      default:
        return "ANALYSIS COMPLETE"
    }
  }

  return (
    <div className={`${getBannerColor()} text-white p-4 rounded-lg mb-8 animate-slide-up border-2`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="h-6 w-6 animate-pulse" />
          <div>
            <p className="font-bold text-lg">{getAlertMessage()}</p>
            <p className="text-sm opacity-90">
              {detectionCount} potential hazard{detectionCount !== 1 ? "s" : ""} identified • Immediate attention
              required
            </p>
          </div>
        </div>
        <button onClick={onDismiss} className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors">
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
