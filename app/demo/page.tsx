"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DetectionViewer } from "@/components/demo/detection-viewer"
import { ControlPanel } from "@/components/demo/control-panel"
import { AlertBanner } from "@/components/demo/alert-banner"
import { Play, Pause, RotateCcw, Zap, Eye, Settings } from "lucide-react"

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

const demoScenarios = [
  {
    id: "mountain-cliff",
    name: "Mountain Cliff Analysis",
    originalImage: "/placeholder.svg?key=cliff1",
    description: "High-resolution analysis of a steep mountain cliff face with multiple risk zones",
    detections: [
      {
        id: "1",
        x: 120,
        y: 80,
        width: 80,
        height: 60,
        confidence: 94.2,
        type: "loose_rock",
        riskLevel: "high" as const,
      },
      {
        id: "2",
        x: 250,
        y: 150,
        width: 60,
        height: 45,
        confidence: 87.5,
        type: "fracture",
        riskLevel: "medium" as const,
      },
      {
        id: "3",
        x: 180,
        y: 200,
        width: 40,
        height: 30,
        confidence: 91.8,
        type: "weathering",
        riskLevel: "medium" as const,
      },
    ],
  },
  {
    id: "highway-slope",
    name: "Highway Slope Monitoring",
    originalImage: "/placeholder.svg?key=highway1",
    description: "Real-time monitoring of a highway cut slope with active rockfall detection",
    detections: [
      {
        id: "1",
        x: 100,
        y: 60,
        width: 70,
        height: 55,
        confidence: 96.8,
        type: "unstable_block",
        riskLevel: "high" as const,
      },
      {
        id: "2",
        x: 300,
        y: 120,
        width: 50,
        height: 40,
        confidence: 83.2,
        type: "surface_erosion",
        riskLevel: "low" as const,
      },
    ],
  },
  {
    id: "quarry-wall",
    name: "Quarry Wall Assessment",
    originalImage: "/placeholder.svg?key=quarry1",
    description: "Comprehensive safety assessment of an active quarry wall with multiple detection zones",
    detections: [
      { id: "1", x: 80, y: 100, width: 90, height: 70, confidence: 92.4, type: "overhang", riskLevel: "high" as const },
      {
        id: "2",
        x: 220,
        y: 180,
        width: 65,
        height: 50,
        confidence: 88.9,
        type: "crack_system",
        riskLevel: "medium" as const,
      },
      {
        id: "3",
        x: 320,
        y: 90,
        width: 45,
        height: 35,
        confidence: 85.1,
        type: "loose_debris",
        riskLevel: "medium" as const,
      },
    ],
  },
]

export default function DemoPage() {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showDetections, setShowDetections] = useState(true)
  const [confidenceThreshold, setConfidenceThreshold] = useState([80])
  const [detectionProgress, setDetectionProgress] = useState(0)
  const [alertVisible, setAlertVisible] = useState(false)

  const scenario = demoScenarios[currentScenario]
  const filteredDetections = scenario.detections.filter((d) => d.confidence >= confidenceThreshold[0])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setDetectionProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false)
            setAlertVisible(true)
            return 100
          }
          return prev + 2
        })
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const handlePlay = () => {
    if (detectionProgress >= 100) {
      setDetectionProgress(0)
      setAlertVisible(false)
    }
    setIsPlaying(true)
  }

  const handleReset = () => {
    setIsPlaying(false)
    setDetectionProgress(0)
    setAlertVisible(false)
  }

  const getHighestRiskLevel = () => {
    const risks = filteredDetections.map((d) => d.riskLevel)
    if (risks.includes("high")) return "high"
    if (risks.includes("medium")) return "medium"
    return "low"
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Live <span className="text-primary-blue">Detection Demo</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Experience our AI-powered rockfall detection system in action. Watch as our algorithms analyze geological
            formations and identify potential hazards in real-time.
          </p>
        </div>

        {/* Alert Banner */}
        {alertVisible && (
          <AlertBanner
            riskLevel={getHighestRiskLevel()}
            detectionCount={filteredDetections.length}
            onDismiss={() => setAlertVisible(false)}
          />
        )}

        {/* Demo Controls */}
        <Card className="glass-dark p-6 mb-8 animate-slide-up">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Button
                onClick={handlePlay}
                disabled={isPlaying}
                className="bg-primary-blue hover:bg-blue-600 text-white hover-scale hover-glow"
              >
                {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isPlaying ? "Processing..." : "Start Analysis"}
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">Show Detections:</span>
                <Button
                  size="sm"
                  variant={showDetections ? "default" : "outline"}
                  onClick={() => setShowDetections(!showDetections)}
                  className={
                    showDetections
                      ? "bg-primary-blue hover:bg-blue-600 text-white"
                      : "border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                  }
                >
                  {showDetections ? "ON" : "OFF"}
                </Button>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          {(isPlaying || detectionProgress > 0) && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Analysis Progress</span>
                <span className="text-sm text-white">{Math.round(detectionProgress)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-primary-blue h-2 rounded-full transition-all duration-300"
                  style={{ width: `${detectionProgress}%` }}
                ></div>
              </div>
            </div>
          )}
        </Card>

        {/* Main Demo Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Detection Viewer */}
          <div className="lg:col-span-3">
            <DetectionViewer
              scenario={scenario}
              detections={filteredDetections}
              showDetections={showDetections}
              progress={detectionProgress}
            />
          </div>

          {/* Control Panel */}
          <div className="space-y-6">
            <ControlPanel
              scenarios={demoScenarios}
              currentScenario={currentScenario}
              onScenarioChange={setCurrentScenario}
              confidenceThreshold={confidenceThreshold}
              onConfidenceChange={setConfidenceThreshold}
              detections={filteredDetections}
            />

            {/* Stats Card */}
            <Card className="glass-dark p-6 animate-slide-up hover-glow">
              <div className="flex items-center mb-4">
                <Zap className="h-5 w-5 text-highlight-coral mr-2" />
                <h3 className="text-lg font-semibold text-white">Detection Stats</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Detections:</span>
                  <span className="text-white font-medium">{filteredDetections.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Confidence:</span>
                  <span className="text-white font-medium">
                    {filteredDetections.length > 0
                      ? Math.round(
                          filteredDetections.reduce((sum, d) => sum + d.confidence, 0) / filteredDetections.length,
                        )
                      : 0}
                    %
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Processing Time:</span>
                  <span className="text-white font-medium">2.3s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Risk Level:</span>
                  <Badge
                    className={
                      getHighestRiskLevel() === "high"
                        ? "bg-red-500 text-white"
                        : getHighestRiskLevel() === "medium"
                          ? "bg-yellow-500 text-white"
                          : "bg-green-500 text-white"
                    }
                  >
                    {getHighestRiskLevel().toUpperCase()}
                  </Badge>
                </div>
              </div>
            </Card>

            {/* System Info */}
            <Card className="glass-dark p-6 animate-slide-up hover-glow">
              <div className="flex items-center mb-4">
                <Settings className="h-5 w-5 text-primary-blue mr-2" />
                <h3 className="text-lg font-semibold text-white">System Info</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Model Version:</span>
                  <span className="text-white">v2.1.3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Resolution:</span>
                  <span className="text-white">4K Ultra HD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Frame Rate:</span>
                  <span className="text-white">30 FPS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">GPU Usage:</span>
                  <span className="text-white">78%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="glass-dark p-6 text-center hover-scale hover-glow animate-slide-up">
            <div className="p-3 rounded-lg bg-primary-blue w-fit mx-auto mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Real-time Processing</h3>
            <p className="text-gray-300 text-sm">
              Advanced AI algorithms process geological data in real-time with sub-second response times.
            </p>
          </Card>

          <Card className="glass-dark p-6 text-center hover-scale hover-glow animate-slide-up">
            <div className="p-3 rounded-lg bg-highlight-coral w-fit mx-auto mb-4">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Multi-spectral Analysis</h3>
            <p className="text-gray-300 text-sm">
              Combines visible light, infrared, and thermal imaging for comprehensive hazard detection.
            </p>
          </Card>

          <Card className="glass-dark p-6 text-center hover-scale hover-glow animate-slide-up">
            <div className="p-3 rounded-lg bg-green-500 w-fit mx-auto mb-4">
              <Settings className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Adaptive Learning</h3>
            <p className="text-gray-300 text-sm">
              Machine learning models continuously improve accuracy based on new geological data.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
