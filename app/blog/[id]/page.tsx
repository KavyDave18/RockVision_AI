"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, ChevronRight } from "lucide-react"

// Mock blog post data - in a real app, this would come from a CMS or API
const getBlogPost = (id: string) => {
  const posts = {
    "1": {
      id: 1,
      title: "Advanced AI Techniques in Rockfall Detection: A Deep Learning Approach",
      content: `
        <p>The field of geological hazard monitoring has undergone a revolutionary transformation with the advent of artificial intelligence and machine learning technologies. Our latest research demonstrates how deep learning algorithms can significantly enhance the accuracy and speed of rockfall detection systems.</p>

        <h2>The Challenge of Traditional Methods</h2>
        <p>Traditional rockfall detection methods have relied heavily on manual observation, seismic sensors, and basic image analysis. While these approaches have served the geological community well, they often suffer from limitations in accuracy, response time, and the ability to process large volumes of data in real-time.</p>

        <p>The increasing frequency of extreme weather events and the growing need to protect critical infrastructure have highlighted the urgent need for more sophisticated monitoring systems. This is where artificial intelligence steps in to bridge the gap.</p>

        <h2>Deep Learning Architecture</h2>
        <p>Our system employs a multi-layered convolutional neural network (CNN) architecture specifically designed for geological hazard detection. The network processes high-resolution imagery from multiple sources, including satellite data, drone surveillance, and ground-based cameras.</p>

        <p>The key innovation lies in our custom loss function that prioritizes the detection of potential rockfall events while minimizing false positives. This approach has resulted in a 94.2% accuracy rate in field testing, representing a significant improvement over traditional methods.</p>

        <h2>Real-World Applications</h2>
        <p>The practical applications of this technology extend far beyond academic research. Transportation authorities are using our system to monitor critical mountain passes, while mining companies employ it to ensure worker safety in unstable geological environments.</p>

        <p>One notable success story involves the monitoring of a major highway in the Rocky Mountains, where our system detected and predicted a significant rockfall event 48 hours before it occurred, allowing authorities to close the road and prevent potential casualties.</p>

        <h2>Future Developments</h2>
        <p>Looking ahead, we are working on integrating weather data, geological surveys, and historical incident reports to create an even more comprehensive prediction model. The goal is to move from reactive detection to proactive prevention.</p>

        <p>We are also exploring the use of edge computing to reduce latency in remote monitoring locations, ensuring that critical alerts can be transmitted even in areas with limited connectivity.</p>
      `,
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Technology",
      image: "/mountain-cliff-ai-technology-research.jpg",
    },
    "2": {
      id: 2,
      title: "Case Study: Preventing Disasters in the Swiss Alps",
      content: `
        <p>In the heart of the Swiss Alps, where towering peaks meet vital transportation corridors, the threat of rockfall events poses constant challenges to public safety and infrastructure integrity. This case study examines how our advanced detection system successfully prevented a major disaster in one of Europe's most geologically active regions.</p>

        <h2>The Setting</h2>
        <p>The Gotthard Pass, a critical transportation link connecting northern and southern Europe, has historically been vulnerable to rockfall events. The combination of steep terrain, freeze-thaw cycles, and heavy traffic makes this area particularly challenging for traditional monitoring approaches.</p>

        <p>In collaboration with Swiss authorities, we deployed a comprehensive monitoring network consisting of 15 high-resolution cameras, seismic sensors, and weather monitoring stations along a 12-kilometer stretch of the pass.</p>

        <h2>The Event</h2>
        <p>On March 15, 2023, our AI system detected unusual patterns in the geological data that suggested an imminent rockfall event. The system identified micro-fractures in a cliff face approximately 200 meters above the main highway, triggered by a combination of temperature fluctuations and recent precipitation.</p>

        <p>What made this detection remarkable was the system's ability to predict not just the likelihood of an event, but also its probable magnitude and timing. The AI model indicated a 89% probability of a significant rockfall within the next 72 hours.</p>

        <h2>Response and Prevention</h2>
        <p>Based on the system's alert, Swiss authorities immediately implemented emergency protocols. The affected section of highway was closed to traffic, and specialized geological teams were dispatched to assess the situation. Controlled blasting was used to safely remove unstable rock formations before they could fall naturally.</p>

        <p>The operation successfully removed approximately 150 cubic meters of unstable rock material. Post-event analysis confirmed that without intervention, this material would have fallen within the predicted timeframe, potentially causing multiple casualties and significant infrastructure damage.</p>

        <h2>Lessons Learned</h2>
        <p>This case demonstrates the critical importance of integrating multiple data sources for accurate prediction. The success was not just due to advanced AI algorithms, but also the seamless coordination between technology and human expertise.</p>

        <p>The economic impact analysis showed that the prevention effort, while costly, saved an estimated €2.3 million in potential damages and immeasurable value in terms of lives protected.</p>
      `,
      author: "Prof. Michael Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Case Studies",
      image: "/swiss-alps-mountains-safety-highway.jpg",
    },
  }

  return posts[id as keyof typeof posts] || null
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-900 pt-20 pb-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-300 mb-6">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="bg-primary-blue hover:bg-blue-600 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8 animate-fade-in">
          <Link href="/blog" className="hover:text-primary-blue">
            Blog
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">{post.category}</span>
        </div>

        {/* Article Header */}
        <div className="mb-8 animate-slide-up">
          <Badge className="bg-primary-blue text-white mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex space-x-3">
            <Link href="/blog">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8 animate-slide-up">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Article Content */}
        <Card className="glass-dark p-8 mb-8 animate-slide-up">
          <div
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              color: "#e2e8f0",
              lineHeight: "1.7",
            }}
          />
        </Card>

        {/* Author Bio */}
        <Card className="glass-dark p-6 mb-8 animate-slide-up hover-glow">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded-full bg-primary-blue flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{post.author}</h3>
              <p className="text-gray-300 mb-3">
                Leading researcher in geological hazard detection and AI applications in earth sciences. Published over
                50 papers in peer-reviewed journals and holds multiple patents in detection technology.
              </p>
              <div className="flex space-x-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                >
                  View Profile
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                >
                  More Articles
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Related Articles */}
        <Card className="glass-dark p-6 animate-slide-up hover-glow">
          <div className="flex items-center mb-6">
            <BookOpen className="h-5 w-5 text-primary-blue mr-2" />
            <h3 className="text-xl font-bold text-white">Related Articles</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/3" className="group">
              <div className="flex space-x-4 p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
                <img
                  src="/geological-research.jpg"
                  alt="Related article"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="text-white font-medium group-hover:text-primary-blue transition-colors">
                    The Science Behind Geological Risk Assessment
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">Dr. Emily Watson • 10 min read</p>
                </div>
              </div>
            </Link>
            <Link href="/blog/4" className="group">
              <div className="flex space-x-4 p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
                <img
                  src="/infrastructure-monitoring.jpg"
                  alt="Related article"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="text-white font-medium group-hover:text-primary-blue transition-colors">
                    Real-time Monitoring: The Future of Infrastructure Safety
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">James Thompson • 7 min read</p>
                </div>
              </div>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
