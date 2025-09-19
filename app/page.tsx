"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Shield, Activity, MapPin, BarChart3, Upload, Eye } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Advanced <span className="text-primary-blue">Rockfall</span>
              <br />
              Detection System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              Harness the power of AI to monitor, detect, and predict rockfall events with unprecedented accuracy and
              real-time alerts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button className="bg-primary-blue hover:bg-blue-600 text-white px-8 py-3 text-lg hover-scale hover-glow">
                  View Live Demo
                </Button>
              </Link>
              <Link href="/map">
                <Button
                  variant="outline"
                  className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-3 text-lg hover-scale bg-transparent"
                >
                  Explore Map
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Monitoring Solutions</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our advanced system provides real-time monitoring, predictive analytics, and instant alerts for rockfall
              detection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map Integration */}
            <Card className="glass-dark p-6 hover-scale hover-glow animate-slide-up">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary-blue mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Interactive Map</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Real-time visualization of high-risk zones with detailed geological data and historical incident
                tracking.
              </p>
              <Link href="/map">
                <Button variant="ghost" className="text-primary-blue hover:text-blue-400">
                  Explore Map →
                </Button>
              </Link>
            </Card>

            {/* Analytics Dashboard */}
            <Card className="glass-dark p-6 hover-scale hover-glow animate-slide-up">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-highlight-coral mr-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Analytics Dashboard</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Comprehensive analytics with predictive modeling, trend analysis, and detailed reporting capabilities.
              </p>
              <Link href="/dashboard">
                <Button variant="ghost" className="text-highlight-coral hover:text-orange-400">
                  View Analytics →
                </Button>
              </Link>
            </Card>

            {/* Data Upload */}
            <Card className="glass-dark p-6 hover-scale hover-glow animate-slide-up">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary-blue mr-4">
                  <Upload className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Data Processing</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Upload and process geological data, images, and sensor readings with our advanced AI algorithms.
              </p>
              <Link href="/upload">
                <Button variant="ghost" className="text-primary-blue hover:text-blue-400">
                  Upload Data →
                </Button>
              </Link>
            </Card>

            {/* Live Demo */}
            <Card className="glass-dark p-6 hover-scale hover-glow animate-slide-up">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-highlight-coral mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Live Detection</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Experience real-time rockfall detection with our interactive demo showcasing AI-powered analysis.
              </p>
              <Link href="/demo">
                <Button variant="ghost" className="text-highlight-coral hover:text-orange-400">
                  Try Demo →
                </Button>
              </Link>
            </Card>

            {/* Monitoring */}
            <Card className="glass-dark p-6 hover-scale hover-glow animate-slide-up">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary-blue mr-4">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">24/7 Monitoring</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Continuous monitoring with instant alerts and automated response systems for critical situations.
              </p>
              <Link href="/dashboard">
                <Button variant="ghost" className="text-primary-blue hover:text-blue-400">
                  Monitor Now →
                </Button>
              </Link>
            </Card>

            {/* Research */}
            <Card className="glass-dark p-6 hover-scale hover-glow animate-slide-up">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-highlight-coral mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Research & Insights</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Access cutting-edge research, case studies, and insights from our geological monitoring experts.
              </p>
              <Link href="/blog">
                <Button variant="ghost" className="text-highlight-coral hover:text-orange-400">
                  Read More →
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glass-dark p-8 hover-glow">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Enhance Safety?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Join leading organizations using our rockfall detection system to protect lives and infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button className="bg-primary-blue hover:bg-blue-600 text-white px-8 py-3 text-lg hover-scale hover-glow">
                  Get Started
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  variant="outline"
                  className="border-highlight-coral text-highlight-coral hover:bg-highlight-coral hover:text-white px-8 py-3 text-lg hover-scale bg-transparent"
                >
                  Try Demo
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
