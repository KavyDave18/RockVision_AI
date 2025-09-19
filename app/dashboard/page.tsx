"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IncidentsChart } from "@/components/charts/incidents-chart"
import { SeverityChart } from "@/components/charts/severity-chart"
import { AccuracyChart } from "@/components/charts/accuracy-chart"
import { AlertTriangle, Activity, Shield, TrendingUp, Download, Filter } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-900 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Analytics <span className="text-primary-blue">Dashboard</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Comprehensive insights and predictive analytics for rockfall detection systems.
            </p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-primary-blue hover:bg-blue-600 text-white">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Live Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-slide-up">
          <Card className="glass-dark p-6 hover-scale hover-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Active Alerts</p>
                <p className="text-3xl font-bold text-white">7</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-sm text-red-500">+2 from yesterday</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-red-500">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>

          <Card className="glass-dark p-6 hover-scale hover-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Total Detections</p>
                <p className="text-3xl font-bold text-white">1,247</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+15% this month</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-primary-blue">
                <Activity className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>

          <Card className="glass-dark p-6 hover-scale hover-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">System Accuracy</p>
                <p className="text-3xl font-bold text-white">94.2%</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+1.2% improved</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-green-500">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>

          <Card className="glass-dark p-6 hover-scale hover-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Response Time</p>
                <p className="text-3xl font-bold text-white">2.3s</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">-0.5s faster</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-highlight-coral">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Incidents Over Time */}
          <Card className="glass-dark p-6 animate-slide-up hover-glow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Rockfall Incidents Over Time</h3>
              <Badge className="bg-primary-blue text-white">Last 12 Months</Badge>
            </div>
            <IncidentsChart />
          </Card>

          {/* Severity Distribution */}
          <Card className="glass-dark p-6 animate-slide-up hover-glow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Severity Distribution</h3>
              <Badge className="bg-highlight-coral text-white">Current Period</Badge>
            </div>
            <SeverityChart />
          </Card>
        </div>

        {/* Detection Accuracy Chart */}
        <Card className="glass-dark p-6 mb-8 animate-slide-up hover-glow">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Detection Accuracy Statistics</h3>
            <div className="flex space-x-2">
              <Badge className="bg-green-500 text-white">High Accuracy</Badge>
              <Badge className="bg-primary-blue text-white">Real-time</Badge>
            </div>
          </div>
          <AccuracyChart />
        </Card>

        {/* Recent Activity and System Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card className="glass-dark p-6 animate-slide-up hover-glow">
            <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-slate-800">
                <div className="p-2 rounded-full bg-red-500">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">High-risk detection at Mount Cascade</p>
                  <p className="text-sm text-gray-400">Confidence: 96.8% • 2 hours ago</p>
                </div>
                <Badge className="bg-red-500 text-white">HIGH</Badge>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-slate-800">
                <div className="p-2 rounded-full bg-yellow-500">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Medium-risk event at Eagle Point</p>
                  <p className="text-sm text-gray-400">Confidence: 89.2% • 4 hours ago</p>
                </div>
                <Badge className="bg-yellow-500 text-white">MED</Badge>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-slate-800">
                <div className="p-2 rounded-full bg-primary-blue">
                  <Activity className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">System calibration completed</p>
                  <p className="text-sm text-gray-400">All sensors operational • 6 hours ago</p>
                </div>
                <Badge className="bg-primary-blue text-white">INFO</Badge>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-slate-800">
                <div className="p-2 rounded-full bg-green-500">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Weekly safety report generated</p>
                  <p className="text-sm text-gray-400">94.2% accuracy maintained • 1 day ago</p>
                </div>
                <Badge className="bg-green-500 text-white">SUCCESS</Badge>
              </div>
            </div>
          </Card>

          {/* System Status */}
          <Card className="glass-dark p-6 animate-slide-up hover-glow">
            <h3 className="text-xl font-semibold text-white mb-6">System Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-white">Monitoring Stations</span>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">42/45</p>
                  <p className="text-xs text-gray-400">Online</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-white">AI Processing Units</span>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">8/8</p>
                  <p className="text-xs text-gray-400">Active</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-white">Data Storage</span>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">78%</p>
                  <p className="text-xs text-gray-400">Capacity</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-white">Network Connectivity</span>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">99.9%</p>
                  <p className="text-xs text-gray-400">Uptime</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-white">Alert System</span>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">Operational</p>
                  <p className="text-xs text-gray-400">2.3s avg response</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
