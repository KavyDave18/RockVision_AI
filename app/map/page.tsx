"use client"

import { MapComponent } from "@/components/map-component"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Users, Heart, Shield } from "lucide-react"

export default function MapPage() {
  return (
    <div className="min-h-screen bg-slate-900 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Human Focus */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Protecting <span className="text-primary-blue">Communities</span> Together
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Real-time monitoring that keeps families safe, roads open, and communities connected. Every marker
            represents real people whose lives are protected by our early warning system.
          </p>
        </div>

        {/* Human-Centered Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 animate-slide-up">
          <Card className="glass-dark p-4 hover-scale">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-green-500 mr-3">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">People Protected</p>
                <p className="text-2xl font-bold text-white">6,600</p>
                <p className="text-xs text-green-400">Daily</p>
              </div>
            </div>
          </Card>

          <Card className="glass-dark p-4 hover-scale">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-blue-500 mr-3">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Families Safe</p>
                <p className="text-2xl font-bold text-white">1,850</p>
                <p className="text-xs text-blue-400">This month</p>
              </div>
            </div>
          </Card>

          <Card className="glass-dark p-4 hover-scale">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-purple-500 mr-3">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Incidents Prevented</p>
                <p className="text-2xl font-bold text-white">23</p>
                <p className="text-xs text-purple-400">This year</p>
              </div>
            </div>
          </Card>

          <Card className="glass-dark p-4 hover-scale">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-orange-500 mr-3">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Response Time</p>
                <p className="text-2xl font-bold text-white">2.3</p>
                <p className="text-xs text-orange-400">Minutes avg</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Map and Community Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Real Interactive Map */}
          <div className="lg:col-span-3">
            <Card className="glass-dark p-4 h-[600px] animate-slide-up">
              <MapComponent />
            </Card>
          </div>

          {/* Community Stories and Legend */}
          <div className="space-y-6 animate-slide-up">
            <Card className="glass-dark p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Risk Levels</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-red-500 mr-3"></div>
                  <span className="text-gray-300">High Risk - Immediate alerts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-yellow-500 mr-3"></div>
                  <span className="text-gray-300">Medium Risk - Regular monitoring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
                  <span className="text-gray-300">Low Risk - Preventive watch</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-500 mr-3"></div>
                  <span className="text-gray-300">Monitoring Station</span>
                </div>
              </div>
            </Card>

            <Card className="glass-dark p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Recent Community Updates</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Badge className="bg-green-500 text-white mr-2 mt-1">SAFE</Badge>
                  <div>
                    <p className="text-sm text-white">Big Sur families evacuated safely</p>
                    <p className="text-xs text-gray-400">2 hours ago - All clear given</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Badge className="bg-blue-500 text-white mr-2 mt-1">INFO</Badge>
                  <div>
                    <p className="text-sm text-white">Yosemite trails reopened</p>
                    <p className="text-xs text-gray-400">6 hours ago - Visitors returning</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Badge className="bg-purple-500 text-white mr-2 mt-1">UPDATE</Badge>
                  <div>
                    <p className="text-sm text-white">New station protecting school route</p>
                    <p className="text-xs text-gray-400">1 day ago - 200 students safer</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-dark p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Community Testimonial</h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-300 italic">
                  "Thanks to the early warning system, we had time to safely evacuate our campground. What could have
                  been a tragedy became just another day we're grateful to be alive."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3"></div>
                  <div>
                    <p className="text-sm text-white font-semibold">Maria Santos</p>
                    <p className="text-xs text-gray-400">Campground Manager, Big Sur</p>
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
