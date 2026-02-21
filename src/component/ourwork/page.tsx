"use client"
import { useState } from "react"

interface WorkItem {
  id: number
  title: string
  category: string
  image: string
  description: string
}

function WorkCard({ item, onClick }: { item: WorkItem; onClick: () => void }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-lg bg-card" onClick={onClick}>
      <div className="relative h-80 overflow-hidden bg-muted">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="p-8">
        <div className="mb-3 inline-block">
          <span className="rounded-full border border-border bg-blue-900 px-4 py-1 text-md  font-bold text-muted-foreground transition-colors group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary">
            {item.category}
          </span>
        </div>
        <h3 className="mb-2 text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
          {item.title}
        </h3>
        <p className="text-md text-gray-600">{item.description}</p>
      </div>
    </div>
  )
}

export default function OurWorkPage() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null)

  const workData: WorkItem[] = [
    {
      id: 1,
      title: "Google Ads Campaign",
      category: "Digital Advertising",
      image: "/image/printing.jpg",
      description: "Strategic digital advertising campaign that increased client engagement by 150%.",
    },
    {
      id: 2,
      title: "Brand Identity Redesign",
      category: "Branding",
      image: "/image/business.jpg",
      description: "Complete brand identity redesign with logo, color palette, and visual guidelines.",
    },
    {
      id: 3,
      title: "Social Media Campaign",
      category: "Social Media",
      image: "/image/grapicdesign.jpeg",
      description: "Multi-platform campaign that generated over 1 million impressions.",
    },
    {
      id: 4,
      title: "Website Redesign",
      category: "Web Design",
      image: "/image/wall-art.jpeg",
      description: "Complete website redesign with responsive design and improved UX.",
    },
    {
      id: 5,
      title: "Mobile App Launch",
      category: "Mobile Development",
      image: "/image/printing.jpg",
      description: "End-to-end mobile app development resulting in 50,000+ downloads.",
    },
    {
      id: 6,
      title: "Email Marketing",
      category: "Marketing",
      image: "/image/business.jpg",
      description: "Comprehensive email marketing strategy with 35% open rate improvement.",
    },
  ]
  //
  //

  return (
    <div className="min-h-screen bg-white" id="our-work-page">
      {/* Hero Section */}
      <section className="border-b border-border px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
         
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-blue-900 sm:text-6xl">Recent Work</h1>
          <p className="text-lg text-gray-600">
            Explore our latest projects and campaigns that delivered exceptional results for our clients.
          </p>
        </div>
      </section>
      

      {/* Work Grid */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {workData.map((item) => (
              <WorkCard key={item.id} item={item} onClick={() => setSelectedWork(item)} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-card p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
            <img
              src={selectedWork.image || "/placeholder.svg"}
              alt={selectedWork.title}
              className="mb-6 w-full rounded-lg"
            />
            <div className="mb-4 inline-block">
              <span className="rounded-full border border-border bg-muted px-4 py-1 text-sm font-medium text-muted-foreground">
                {selectedWork.category}
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground">{selectedWork.title}</h2>
            <p className="mb-6 text-muted-foreground">{selectedWork.description}</p>
            <button className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:opacity-90">
              Learn More
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
