"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Calendar, Clock, User, Search, ArrowRight, TrendingUp } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Advanced AI Techniques in Rockfall Detection: A Deep Learning Approach",
    excerpt:
      "Explore how cutting-edge machine learning algorithms are revolutionizing geological hazard monitoring and prediction systems.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "/mountain-cliff-ai-technology.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Case Study: Preventing Disasters in the Swiss Alps",
    excerpt:
      "A comprehensive analysis of how our rockfall detection system helped prevent a major disaster in the Swiss mountain region.",
    author: "Prof. Michael Rodriguez",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Case Studies",
    image: "/swiss-alps-mountains-safety.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "The Science Behind Geological Risk Assessment",
    excerpt:
      "Understanding the fundamental principles of geological hazard evaluation and how modern technology enhances traditional methods.",
    author: "Dr. Emily Watson",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Research",
    image: "/geological-research-rocks-analysis.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Real-time Monitoring: The Future of Infrastructure Safety",
    excerpt:
      "How continuous monitoring systems are transforming the way we protect critical infrastructure from geological hazards.",
    author: "James Thompson",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Infrastructure",
    image: "/infrastructure-monitoring-sensors-technology.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Climate Change and Increased Rockfall Activity",
    excerpt:
      "Examining the correlation between changing climate patterns and the frequency of rockfall events worldwide.",
    author: "Dr. Lisa Park",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "Climate Science",
    image: "/climate-change-mountain-erosion.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Integration with Emergency Response Systems",
    excerpt:
      "How our detection technology seamlessly connects with emergency services to ensure rapid response to geological threats.",
    author: "Captain Mark Davis",
    date: "2024-01-03",
    readTime: "5 min read",
    category: "Emergency Response",
    image: "/emergency-response-team-mountain-rescue.jpg",
    featured: false,
  },
]

const categories = [
  "All",
  "AI & Technology",
  "Case Studies",
  "Research",
  "Infrastructure",
  "Climate Science",
  "Emergency Response",
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-900 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Research & <span className="text-primary-blue">Insights</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Stay updated with the latest research, case studies, and insights in rockfall detection and geological
            hazard management.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-slide-up">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search articles..."
              className="pl-10 bg-slate-800 border-gray-600 text-white placeholder-gray-400 focus:border-primary-blue"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={
                  category === "All"
                    ? "bg-primary-blue hover:bg-blue-600 text-white"
                    : "border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {blogPosts.find((post) => post.featured) && (
          <Card className="glass-dark p-6 mb-8 animate-slide-up hover-glow">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-5 w-5 text-highlight-coral mr-2" />
              <Badge className="bg-highlight-coral text-white">Featured Article</Badge>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Badge className="bg-primary-blue text-white mb-3">
                    {blogPosts.find((post) => post.featured)?.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-balance">
                    {blogPosts.find((post) => post.featured)?.title}
                  </h2>
                  <p className="text-gray-300 text-lg text-pretty">
                    {blogPosts.find((post) => post.featured)?.excerpt}
                  </p>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {blogPosts.find((post) => post.featured)?.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {blogPosts.find((post) => post.featured)?.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {blogPosts.find((post) => post.featured)?.readTime}
                  </div>
                </div>
                <Link href={`/blog/${blogPosts.find((post) => post.featured)?.id}`}>
                  <Button className="bg-primary-blue hover:bg-blue-600 text-white hover-scale hover-glow">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src={blogPosts.find((post) => post.featured)?.image || "/placeholder.svg"}
                  alt="Featured article"
                  className="w-full h-64 lg:h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </Card>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts
            .filter((post) => !post.featured)
            .map((post, index) => (
              <Card key={post.id} className="glass-dark overflow-hidden hover-scale hover-glow animate-slide-up">
                <div className="relative">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary-blue text-white">{post.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 text-balance">{post.title}</h3>
                  <p className="text-gray-300 mb-4 text-pretty">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary-blue hover:text-blue-400 hover:bg-slate-800"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12 animate-fade-in">
          <Button
            variant="outline"
            className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-3 hover-scale bg-transparent"
          >
            Load More Articles
          </Button>
        </div>

        {/* Newsletter Signup */}
        <Card className="glass-dark p-8 mt-12 text-center animate-slide-up hover-glow">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest research findings, case studies, and insights in rockfall
            detection technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1 bg-slate-800 border-gray-600 text-white placeholder-gray-400 focus:border-primary-blue"
            />
            <Button className="bg-primary-blue hover:bg-blue-600 text-white hover-scale hover-glow">Subscribe</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
