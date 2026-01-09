"use client"

import { useState, useEffect } from "react"
import Card from "@/component/sevice/page"

interface ServiceData {
  name: string
  description: string
  coverPage: string
}

const mockData: ServiceData[] = [
  {
    name: "Billboards",
    description: "Large-format outdoor advertising to capture attention.",
    coverPage: "/image/calander.jpeg",
  },
  {
    name: "Digital Advertising",
    description:
      "Engaging digital solutions for online visibility. Our comprehensive digital advertising services help businesses reach their target audience through strategic online campaigns.",
    coverPage: "/image/car-branding.jpeg",
  },
  {
    name: "Vehicle Branding",
    description: "Transform vehicles into mobile advertisements.",
    coverPage: "/image/car-branding.jpeg",
  },
  {
    name: "Light Boxes",
    description: "Illuminated displays for enhanced visibility.",
    coverPage: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Banners",
    description: "Custom banners for events and promotions.",
    coverPage: "/placeholder.svg?height=300&width=400",
  },
]

const ServicePage = () => {
  const [perPage, setPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedService, setSelectedService] = useState<ServiceData | null>(mockData[0])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile breakpoint
        setPerPage(4)
      } else {
        setPerPage(5)
      }
      // Reset to first page when changing items per page
      setCurrentPage(1)
    }

    // Set initial value
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalPage = Math.ceil(mockData.length / perPage)

  const handleServiceClick = (service: ServiceData) => {
    setSelectedService(service)
  }

  const paginatedServices = mockData.slice((currentPage - 1) * perPage, currentPage * perPage)

  return (
    <>
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-blue-700 overflow-hidden text-white py-24 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">About Our Company</h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-pretty">
            We&apos;ve been crafting innovative solutions that transform businesses and drive real results since day one.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Get In Touch
          </button>
        </div>
      </div>
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Services List Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-blue-50 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="text-center mb-6">
                <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-blue-900">Our Services</h1>
              </div>

              <div className="space-y-4">
                {paginatedServices.map((item: ServiceData, index: number) => (
                  <div key={index} className="w-full">
                    <Card
                      serviceData={item}
                      onClick={() => handleServiceClick(item)}
                      isSelected={selectedService?.name === item.name}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center mt-6 flex-wrap gap-2">
                {Array.from({ length: totalPage }).map((_, index) => (
                  <button
                    key={index}
                    className={`px-3 py-2 rounded transition-colors ${
                      currentPage === index + 1 ? "bg-blue-900 text-white" : "bg-white text-blue-900 hover:bg-blue-100"
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Service Details Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 min-h-[400px] lg:min-h-[557px]">
              {selectedService ? (
                <div className="h-full">
                  <div className="relative mb-6">
                    <div className="aspect-video w-full overflow-hidden rounded-lg shadow-md">
                      <img
                        className="w-full h-full object-cover"
                        src={selectedService.coverPage || "/placeholder.svg"}
                        alt={selectedService.name}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800">{selectedService.name}</h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-blue-900 font-bold text-lg sm:text-xl text-center">
                    Please select from the services to see the description
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ServicePage
