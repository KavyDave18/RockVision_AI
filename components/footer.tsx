import Link from "next/link"
import { Shield, Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-dark-gray border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-primary-blue">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Rockfall <span className="text-primary-blue">Detection</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Advanced AI-powered rockfall detection and monitoring system for enhanced safety and risk management in
              mountainous regions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/map" className="text-gray-400 hover:text-primary-blue transition-colors">
                  Map View
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-primary-blue transition-colors">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="/upload" className="text-gray-400 hover:text-primary-blue transition-colors">
                  Upload Data
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-400 hover:text-primary-blue transition-colors">
                  Live Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors hover-scale">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors hover-scale">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors hover-scale">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors hover-scale">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Rockfall Detection System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
