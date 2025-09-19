"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

const data = [
  { name: "High Risk", value: 23, color: "#EF4444" },
  { name: "Medium Risk", value: 45, color: "#F59E0B" },
  { name: "Low Risk", value: 32, color: "#10B981" },
]

const COLORS = ["#EF4444", "#F59E0B", "#10B981"]

export function SeverityChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#1E293B",
              border: "1px solid #7695FF",
              borderRadius: "8px",
              color: "#FFFFFF",
            }}
          />
          <Legend
            wrapperStyle={{
              color: "#FFFFFF",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
