"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileUploadZone } from "@/components/upload/file-upload-zone"
import { FilePreview } from "@/components/upload/file-preview"
import { ProcessingResults } from "@/components/upload/processing-results"
import { Upload, FileImage, FileVideo, Zap, Clock, CheckCircle } from "lucide-react"

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  url: string
  status: "uploading" | "processing" | "completed" | "error"
  progress: number
  results?: {
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

export default function UploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [selectedFile, setSelectedFile] = useState<UploadedFile | null>(null)

  const handleFileUpload = (files: FileList) => {
    Array.from(files).forEach((file) => {
      const newFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file),
        status: "uploading",
        progress: 0,
      }

      setUploadedFiles((prev) => [...prev, newFile])

      // Simulate upload and processing
      simulateProcessing(newFile.id)
    })
  }

  const simulateProcessing = (fileId: string) => {
    // Simulate upload progress
    const uploadInterval = setInterval(() => {
      setUploadedFiles((prev) =>
        prev.map((file) => {
          if (file.id === fileId && file.status === "uploading") {
            const newProgress = Math.min(file.progress + 10, 100)
            if (newProgress === 100) {
              clearInterval(uploadInterval)
              setTimeout(() => startProcessing(fileId), 500)
              return { ...file, progress: newProgress, status: "processing" }
            }
            return { ...file, progress: newProgress }
          }
          return file
        }),
      )
    }, 200)
  }

  const startProcessing = (fileId: string) => {
    // Simulate AI processing
    setTimeout(() => {
      setUploadedFiles((prev) =>
        prev.map((file) => {
          if (file.id === fileId) {
            return {
              ...file,
              status: "completed",
              results: {
                detections: Math.floor(Math.random() * 5) + 1,
                confidence: Math.floor(Math.random() * 20) + 80,
                riskLevel: ["low", "medium", "high"][Math.floor(Math.random() * 3)] as "low" | "medium" | "high",
                boundingBoxes: [
                  {
                    x: Math.random() * 300 + 50,
                    y: Math.random() * 200 + 50,
                    width: Math.random() * 100 + 50,
                    height: Math.random() * 80 + 40,
                    confidence: Math.floor(Math.random() * 20) + 80,
                    type: "rockfall",
                  },
                  {
                    x: Math.random() * 300 + 200,
                    y: Math.random() * 200 + 100,
                    width: Math.random() * 80 + 40,
                    height: Math.random() * 60 + 30,
                    confidence: Math.floor(Math.random() * 15) + 75,
                    type: "loose_rock",
                  },
                ],
              },
            }
          }
          return file
        }),
      )
    }, 3000)
  }

  const getStatusIcon = (status: UploadedFile["status"]) => {
    switch (status) {
      case "uploading":
        return <Upload className="h-4 w-4 text-primary-blue animate-pulse" />
      case "processing":
        return <Zap className="h-4 w-4 text-highlight-coral animate-pulse" />
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "error":
        return <Clock className="h-4 w-4 text-red-500" />
    }
  }

  const getStatusColor = (status: UploadedFile["status"]) => {
    switch (status) {
      case "uploading":
        return "bg-primary-blue text-white"
      case "processing":
        return "bg-highlight-coral text-white"
      case "completed":
        return "bg-green-500 text-white"
      case "error":
        return "bg-red-500 text-white"
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dataset <span className="text-primary-blue">Upload & Processing</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Upload images and videos for AI-powered rockfall detection analysis. Our advanced algorithms will process
            your data and provide detailed insights.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 animate-slide-up">
          <Card className="glass-dark p-4 hover-scale">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-primary-blue mr-3">
                <FileImage className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Images Processed</p>
                <p className="text-2xl font-bold text-white">2,847</p>
              </div>
            </div>
          </Card>

          <Card className="glass-dark p-4 hover-scale">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-highlight-coral mr-3">
                <FileVideo className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Videos Analyzed</p>
                <p className="text-2xl font-bold text-white">1,234</p>
              </div>
            </div>
          </Card>

          <Card className="glass-dark p-4 hover-scale">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-green-500 mr-3">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Avg Processing Time</p>
                <p className="text-2xl font-bold text-white">2.3s</p>
              </div>
            </div>
          </Card>

          <Card className="glass-dark p-4 hover-scale">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-primary-blue mr-3">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Detection Accuracy</p>
                <p className="text-2xl font-bold text-white">94.2%</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* File Upload Zone */}
            <Card className="glass-dark p-6 animate-slide-up hover-glow">
              <h3 className="text-xl font-semibold text-white mb-4">Upload Files</h3>
              <FileUploadZone onFileUpload={handleFileUpload} />
            </Card>

            {/* Uploaded Files List */}
            {uploadedFiles.length > 0 && (
              <Card className="glass-dark p-6 animate-slide-up hover-glow">
                <h3 className="text-xl font-semibold text-white mb-4">Processing Queue</h3>
                <div className="space-y-3">
                  {uploadedFiles.map((file) => (
                    <div
                      key={file.id}
                      className={`flex items-center justify-between p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer ${
                        selectedFile?.id === file.id ? "ring-2 ring-primary-blue" : ""
                      }`}
                      onClick={() => setSelectedFile(file)}
                    >
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(file.status)}
                        <div>
                          <p className="text-white font-medium">{file.name}</p>
                          <p className="text-sm text-gray-400">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                            {file.status === "uploading" && ` • ${file.progress}%`}
                            {file.status === "completed" && file.results && (
                              <span> • {file.results.detections} detections found</span>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(file.status)}>{file.status.toUpperCase()}</Badge>
                        {file.status === "completed" && file.results && (
                          <Badge
                            className={
                              file.results.riskLevel === "high"
                                ? "bg-red-500 text-white"
                                : file.results.riskLevel === "medium"
                                  ? "bg-yellow-500 text-white"
                                  : "bg-green-500 text-white"
                            }
                          >
                            {file.results.riskLevel.toUpperCase()}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>

          {/* Preview and Results Section */}
          <div className="space-y-6">
            {selectedFile ? (
              <>
                <FilePreview file={selectedFile} />
                {selectedFile.status === "completed" && selectedFile.results && (
                  <ProcessingResults file={selectedFile} />
                )}
              </>
            ) : (
              <Card className="glass-dark p-6 animate-slide-up">
                <div className="text-center py-8">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">No File Selected</h3>
                  <p className="text-gray-400">Upload a file or select from the processing queue to view details.</p>
                </div>
              </Card>
            )}

            {/* Processing Info */}
            <Card className="glass-dark p-6 animate-slide-up">
              <h3 className="text-lg font-semibold text-white mb-4">Supported Formats</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FileImage className="h-5 w-5 text-primary-blue" />
                  <div>
                    <p className="text-white font-medium">Images</p>
                    <p className="text-sm text-gray-400">JPG, PNG, TIFF, BMP</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FileVideo className="h-5 w-5 text-highlight-coral" />
                  <div>
                    <p className="text-white font-medium">Videos</p>
                    <p className="text-sm text-gray-400">MP4, AVI, MOV, MKV</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
