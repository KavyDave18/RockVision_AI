"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileImage, Play } from "lucide-react"

interface FilePreviewProps {
  file: {
    id: string
    name: string
    size: number
    type: string
    url: string
    status: "uploading" | "processing" | "completed" | "error"
    progress: number
  }
}

export function FilePreview({ file }: FilePreviewProps) {
  const isImage = file.type.startsWith("image/")
  const isVideo = file.type.startsWith("video/")

  return (
    <Card className="glass-dark p-6 animate-slide-up hover-glow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">File Preview</h3>
        <Badge className="bg-slate-700 text-gray-300">{isImage ? "Image" : isVideo ? "Video" : "File"}</Badge>
      </div>

      <div className="space-y-4">
        {/* File Preview */}
        <div className="relative bg-slate-800 rounded-lg overflow-hidden aspect-video">
          {isImage ? (
            <img src={file.url || "/placeholder.svg"} alt={file.name} className="w-full h-full object-cover" />
          ) : isVideo ? (
            <div className="relative w-full h-full">
              <video src={file.url} className="w-full h-full object-cover" controls={false} />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="p-4 rounded-full bg-primary-blue">
                  <Play className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <FileImage className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-400">Preview not available</p>
              </div>
            </div>
          )}

          {/* Processing Overlay */}
          {file.status === "processing" && (
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue mx-auto mb-4"></div>
                <p className="text-white font-medium">Processing with AI...</p>
                <p className="text-sm text-gray-400">Analyzing for rockfall detection</p>
              </div>
            </div>
          )}

          {/* Upload Progress */}
          {file.status === "uploading" && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-sm">Uploading...</span>
                <span className="text-white text-sm">{file.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-primary-blue h-2 rounded-full transition-all duration-300"
                  style={{ width: `${file.progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* File Info */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-400">File Name:</span>
            <span className="text-white font-medium">{file.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">File Size:</span>
            <span className="text-white">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Type:</span>
            <span className="text-white">{file.type}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Status:</span>
            <Badge
              className={
                file.status === "completed"
                  ? "bg-green-500 text-white"
                  : file.status === "processing"
                    ? "bg-highlight-coral text-white"
                    : file.status === "uploading"
                      ? "bg-primary-blue text-white"
                      : "bg-red-500 text-white"
              }
            >
              {file.status.toUpperCase()}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  )
}
