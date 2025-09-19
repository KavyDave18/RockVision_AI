"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", incidents: 12, predictions: 15 },
  { month: "Feb", incidents: 8, predictions: 10 },
  { month: "Mar", incidents: 15, predictions: 18 },
  { month: "Apr", incidents: 22, predictions: 20 },
  { month: "May", incidents: 18, predictions: 16 },
  { month: "Jun", incidents: 25, predictions: 28 },
  { month: "Jul", incidents: 31, predictions: 29 },
  { month: "Aug", incidents: 28, predictions: 32 },
  { month: "Sep", incidents: 19, predictions: 22 },
  { month: "Oct", incidents: 16, predictions: 18 },
  { month: "Nov", incidents: 23, predictions: 21 },
  { month: "Dec", incidents: 20, predictions: 24 },
]

export function IncidentsChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="month" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1E293B",
              border: "1px solid #7695FF",
              borderRadius: "8px",
              color: "#FFFFFF",
            }}
          />
          <Line
            type="monotone"
            dataKey="incidents"
            stroke="#7695FF"
            strokeWidth={3}
            dot={{ fill: "#7695FF", strokeWidth: 2, r: 4 }}
            name="Actual Incidents"
          />
          <Line
            type="monotone"
            dataKey="predictions"
            stroke="#FF9874"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: "#FF9874", strokeWidth: 2, r: 3 }}
            name="Predicted"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
