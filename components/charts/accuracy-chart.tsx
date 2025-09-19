"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { station: "Station A", accuracy: 96.2, detections: 145 },
  { station: "Station B", accuracy: 94.8, detections: 132 },
  { station: "Station C", accuracy: 97.1, detections: 156 },
  { station: "Station D", accuracy: 93.5, detections: 128 },
  { station: "Station E", accuracy: 95.9, detections: 141 },
  { station: "Station F", accuracy: 92.3, detections: 119 },
  { station: "Station G", accuracy: 96.7, detections: 148 },
  { station: "Station H", accuracy: 94.1, detections: 135 },
]

export function AccuracyChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="station" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" domain={[90, 100]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1E293B",
              border: "1px solid #7695FF",
              borderRadius: "8px",
              color: "#FFFFFF",
            }}
            formatter={(value, name) => [
              name === "accuracy" ? `${value}%` : value,
              name === "accuracy" ? "Accuracy" : "Detections",
            ]}
          />
          <Bar dataKey="accuracy" fill="#7695FF" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
