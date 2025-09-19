"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, AlertTriangle, TrendingUp, Users, Heart } from "lucide-react"

// Real locations with human stories
const realRiskZones = [
  {
    id: 1,
    name: "Highway 1 - Big Sur",
    lat: 36.2704,
    lng: -121.8081,
    riskLevel: "high",
    lastIncident: "2024-01-15",
    detections: 23,
    accuracy: 94.2,
    description: "Protecting the iconic coastal highway that connects communities",
    humanStory:
      "This stretch of Highway 1 is vital for local residents and emergency services. Our system has prevented 3 major road closures this year, keeping families connected.",
    peopleProtected: 1200,
    communityImpact: "Local businesses report 40% fewer disruptions since monitoring began",
  },
  {
    id: 2,
    name: "Mount Washington - New Hampshire",
    lat: 44.2706,
    lng: -71.3036,
    riskLevel: "medium",
    lastIncident: "2023-11-08",
    detections: 12,
    accuracy: 91.8,
    description: "Safeguarding hiking trails used by thousands of outdoor enthusiasts",
    humanStory:
      "Popular with hikers and climbers, this area sees over 250,000 visitors annually. Early warning systems help park rangers keep adventurers safe.",
    peopleProtected: 800,
    communityImpact: "Zero hiking accidents related to rockfall since system installation",
  },
  {
    id: 3,
    name: "Yosemite Valley - California",
    lat: 37.7459,
    lng: -119.5936,
    riskLevel: "high",
    lastIncident: "2024-01-20",
    detections: 31,
    accuracy: 96.1,
    description: "Protecting visitors and staff in America's beloved national park",
    humanStory:
      "Home to park rangers, hotel staff, and millions of visitors. Our monitoring helps ensure families can safely enjoy this natural wonder.",
    peopleProtected: 2500,
    communityImpact: "Park operations continue safely with 95% fewer evacuation false alarms",
  },
  {
    id: 4,
    name: "Rocky Mountain National Park - Colorado",
    lat: 40.3428,
    lng: -105.6836,
    riskLevel: "low",
    lastIncident: "2023-08-12",
    detections: 5,
    accuracy: 88.5,
    description: "Ensuring safe passage for families exploring mountain trails",
    humanStory:
      "This family-friendly area hosts school groups and nature programs. Our system gives parents peace of mind during educational visits.",
    peopleProtected: 600,
    communityImpact: "Educational programs continue year-round with enhanced safety",
  },
  {
    id: 5,
    name: "Glacier National Park - Montana",
    lat: 48.7596,
    lng: -113.787,
    riskLevel: "medium",
    lastIncident: "2023-12-03",
    detections: 18,
    accuracy: 92.7,
    description: "Protecting the Going-to-the-Sun Road and its travelers",
    humanStory:
      "This scenic route is a once-in-a-lifetime experience for many families. Our monitoring ensures safe passage through this mountain corridor.",
    peopleProtected: 1500,
    communityImpact: "Tourism season extended by 3 weeks with improved safety confidence",
  },
]

const monitoringStations = [
  {
    id: 1,
    name: "Coastal Watch Station",
    lat: 36.2804,
    lng: -121.8181,
    status: "active",
    operator: "Sarah Chen, Geologist",
  },
  {
    id: 2,
    name: "Mountain Guardian Post",
    lat: 44.2806,
    lng: -71.3136,
    status: "active",
    operator: "Mike Rodriguez, Park Ranger",
  },
  {
    id: 3,
    name: "Valley Safety Hub",
    lat: 37.7559,
    lng: -119.6036,
    status: "maintenance",
    operator: "Dr. Lisa Park, Research Lead",
  },
]

export function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedZone, setSelectedZone] = useState<(typeof realRiskZones)[0] | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [leafletMap, setLeafletMap] = useState<any>(null)

  useEffect(() => {
    // Load Leaflet dynamically
    const loadLeaflet = async () => {
      if (typeof window !== "undefined") {
        const L = (await import("leaflet")).default

        // Import CSS
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        document.head.appendChild(link)

        if (mapRef.current && !leafletMap) {
          // Initialize map centered on western US
          const map = L.map(mapRef.current).setView([39.8283, -98.5795], 4)

          // Add OpenStreetMap tiles
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
          }).addTo(map)

          // Custom marker icons
          const createCustomIcon = (color: string) =>
            L.divIcon({
              html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
              className: "custom-marker",
              iconSize: [20, 20],
              iconAnchor: [10, 10],
            })

          const getRiskColor = (riskLevel: string) => {
            switch (riskLevel) {
              case "high":
                return "#ef4444"
              case "medium":
                return "#eab308"
              case "low":
                return "#22c55e"
              default:
                return "#6b7280"
            }
          }

          // Add risk zone markers
          realRiskZones.forEach((zone) => {
            const marker = L.marker([zone.lat, zone.lng], {
              icon: createCustomIcon(getRiskColor(zone.riskLevel)),
            }).addTo(map)

            marker.bindPopup(`
              <div style="color: #1e293b; font-family: system-ui;">
                <h3 style="margin: 0 0 8px 0; font-weight: bold;">${zone.name}</h3>
                <p style="margin: 0 0 8px 0; font-size: 14px;">${zone.description}</p>
                <div style="display: flex; gap: 8px; margin-bottom: 8px;">
                  <span style="background: ${getRiskColor(zone.riskLevel)}; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: bold;">
                    ${zone.riskLevel.toUpperCase()} RISK
                  </span>
                </div>
                <p style="margin: 0; font-size: 12px; color: #64748b;">
                  <strong>👥 ${zone.peopleProtected}</strong> people protected daily
                </p>
              </div>
            `)

            marker.on("click", () => setSelectedZone(zone))
          })

          // Add monitoring stations
          monitoringStations.forEach((station) => {
            const stationIcon = L.divIcon({
              html: `<div style="background-color: #7c3aed; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
              className: "station-marker",
              iconSize: [16, 16],
              iconAnchor: [8, 8],
            })

            L.marker([station.lat, station.lng], { icon: stationIcon })
              .addTo(map)
              .bindPopup(`
                <div style="color: #1e293b; font-family: system-ui;">
                  <h4 style="margin: 0 0 4px 0;">${station.name}</h4>
                  <p style="margin: 0 0 4px 0; font-size: 12px;">Operated by: ${station.operator}</p>
                  <span style="background: ${station.status === "active" ? "#22c55e" : "#eab308"}; color: white; padding: 2px 6px; border-radius: 8px; font-size: 11px;">
                    ${station.status.toUpperCase()}
                  </span>
                </div>
              `)
          })

          setLeafletMap(map)
          setMapLoaded(true)
        }
      }
    }

    loadLeaflet()

    return () => {
      if (leafletMap) {
        leafletMap.remove()
      }
    }
  }, [])

  const getRiskBadgeColor = (riskLevel: string) => {
    switch (riskLevel) {
      case "high":
        return "bg-red-500 text-white"
      case "medium":
        return "bg-yellow-500 text-white"
      case "low":
        return "bg-green-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  if (!mapLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue mx-auto mb-4"></div>
          <p className="text-gray-300">Loading real-time map data...</p>
          <p className="text-sm text-gray-400 mt-2">Connecting to monitoring stations...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      {/* Real Leaflet Map */}
      <div ref={mapRef} className="w-full h-full" />

      {/* Selected Zone Popup with Human Stories */}
      {selectedZone && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in z-[1000]">
          <Card className="glass-dark p-6 max-w-lg w-full mx-4 animate-slide-up">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{selectedZone.name}</h3>
                <Badge className={getRiskBadgeColor(selectedZone.riskLevel)}>
                  {selectedZone.riskLevel.toUpperCase()} RISK
                </Badge>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedZone(null)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-gray-300 mb-4">{selectedZone.description}</p>

            {/* Human Impact Section */}
            <div className="bg-slate-800 rounded-lg p-4 mb-4">
              <div className="flex items-center mb-2">
                <Heart className="h-5 w-5 text-red-400 mr-2" />
                <span className="text-sm font-semibold text-white">Community Impact</span>
              </div>
              <p className="text-sm text-gray-300 mb-3">{selectedZone.humanStory}</p>
              <p className="text-xs text-blue-300 italic">{selectedZone.communityImpact}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-green-400 mr-1" />
                  <span className="text-xs text-gray-400">Protected</span>
                </div>
                <p className="text-lg font-bold text-white">{selectedZone.peopleProtected}</p>
                <p className="text-xs text-gray-400">people daily</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <AlertTriangle className="h-5 w-5 text-highlight-coral mr-1" />
                  <span className="text-xs text-gray-400">Detections</span>
                </div>
                <p className="text-lg font-bold text-white">{selectedZone.detections}</p>
                <p className="text-xs text-gray-400">this year</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-primary-blue mr-1" />
                  <span className="text-xs text-gray-400">Accuracy</span>
                </div>
                <p className="text-lg font-bold text-white">{selectedZone.accuracy}%</p>
                <p className="text-xs text-gray-400">reliable</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Last Incident:</span>
                <span className="text-white">{selectedZone.lastIncident}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Monitoring Status:</span>
                <Badge className="bg-green-500 text-white">Active 24/7</Badge>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button className="flex-1 bg-primary-blue hover:bg-blue-600 text-white">View Community Stories</Button>
              <Button
                variant="outline"
                className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
              >
                Get Alerts
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
