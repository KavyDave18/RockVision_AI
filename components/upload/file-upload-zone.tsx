"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Upload, FileImage, FileVideo } from "lucide-react"

interface FileUploadZoneProps {
  onFileUpload: (files: FileList) => void
}

export function FileUploadZone({ onFileUpload }: FileUploadZoneProps) {
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragOver(false)
      const files = e.dataTransfer.files
      if (files.length > 0) {
        onFileUpload(files)
      }
    },
    [onFileUpload],
  )

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files && files.length > 0) {
        onFileUpload(files)
      }
    },
    [onFileUpload],
  )

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 hover-scale ${
        isDragOver
          ? "border-primary-blue bg-blue-500 bg-opacity-10"
          : "border-gray-600 hover:border-primary-blue hover:bg-slate-800"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="space-y-4">
        <div className="flex justify-center space-x-4">
          <div className="p-3 rounded-lg bg-primary-blue">
            <Upload className="h-8 w-8 text-white" />
          </div>
          <div className="p-3 rounded-lg bg-highlight-coral">
            <FileImage className="h-8 w-8 text-white" />
          </div>
          <div className="p-3 rounded-lg bg-green-500">
            <FileVideo className="h-8 w-8 text-white" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {isDragOver ? "Drop files here" : "Upload your files"}
          </h3>
          <p className="text-gray-400 mb-4">Drag and drop your images or videos here, or click to browse</p>
        </div>

        <div className="space-y-2">
          <input
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleFileSelect}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="inline-flex items-center px-6 py-3 bg-primary-blue hover:bg-blue-600 text-white rounded-lg cursor-pointer hover-scale hover-glow transition-all"
          >
            <Upload className="h-5 w-5 mr-2" />
            Choose Files
          </label>
        </div>

        <div className="text-sm text-gray-500">
          <p>Maximum file size: 100MB</p>
          <p>Supported formats: JPG, PNG, TIFF, BMP, MP4, AVI, MOV, MKV</p>
        </div>
      </div>
    </div>
  )
}
