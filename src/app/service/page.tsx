"use client";
import React, { useState } from "react";
import Card from '@/component/sevice/page';

interface ServiceData {
  name: string;
  description: string;
  coverPage: string;
}

const mockData: ServiceData[] = [
  {
    name: "Billboards",
    description: "Large-format outdoor advertising to capture attention.",
    coverPage: "/image/calander.jpeg", // Replace with actual image path
  },
  {
    name: "Digital Advertising",
    description: "Engaging digital solutions for online visibility.",
    coverPage: "/image/car-branding.jpeg", // Replace with actual image path
  },
  {
    name: "Vehicle Branding",
    description: "Transform vehicles into mobile advertisements.",
    coverPage: "/image/car-branding.jpeg", // Replace with actual image path
  },
  {
    name: "Light Boxes",
    description: "Illuminated displays for enhanced visibility.",
    coverPage: "path/to/light-box-image.jpg", // Replace with actual image path
  },
  {
    name: "Banners",
    description: "Custom banners for events and promotions.",
    coverPage: "path/to/banner-image.jpg", // Replace with actual image path
  },
];

const Service = () => {
  const [perPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedService, setSelectedService] = useState<ServiceData | null>(mockData[0]); // Set the first service as selected
  const totalPage = Math.ceil(mockData.length / perPage);

  const handleServiceClick = (service: ServiceData) => {
    setSelectedService(service);
  };

  const paginatedServices = mockData.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <div>
      <div className="h-full flex px-2 mx-10 -my-14">
        <div
          id="service"
          className="flex flex-col justify-center gap-40 pt-24 border my-20 rounded-md border-teal-50 shadow-lg bg-teal-50 max-w-6xl mx-auto"
          style={{ overflowX: "hidden", overflowY: "hidden" }}
        >
          <h1 className="text-5xl font-bold">
            <section>
              <div className="max-w-6xl mx-8 md:mx-20 lg:mx-10 xl:mx-auto pt-12">
                <div className="md:mb-6 md:text-center">
                  <h1 className="text-4xl -mt-20 font-bold text-teal-700 relative">
                    Our Services
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-5 px-16">
                {paginatedServices.map((item: ServiceData, index: number) => (
                  <div className="flex-0 w-full justify-center" key={index}>
                    <Card
                      serviceData={item}
                      onClick={() => handleServiceClick(item)}
                      isSelected={selectedService?.name === item.name} // Check if this item is selected
                    />
                  </div>
                ))}
              </div>
              <div className="join my-7 ml-40">
                {Array.from({ length: totalPage }).map((_, index) => (
                  <button
                    key={index}
                    className={`join-item btn mx-2 ${currentPage === index + 1 ? "btn-active" : ""} text-black bg-teal-50 hover:bg-teal-800 hover:text-white p-3 rounded`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </section>
          </h1>
        </div>

        <div className="flex-3 mt-20 pt-28 bg-white p-4 mb-20">
          {selectedService ? (
            <div>
              <div className="relative flex  h-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 mx-40 hover:translate-x-1 shadow-md">
                <div className="relative mx-auto -mt-12 h-64 w-96 overflow-hidden rounded-xl text-white shadow-xl bg-cover bg-center">
                  <img
                    className="object-fill h-48 w-full"
                    src={selectedService.coverPage}
                    alt={selectedService.name}
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-bold mb-2 text-teal-800 text-3xl">
                    {selectedService.name}
                  </h2>
                  <p className="block font-sans xl:text-lg lg:text-base md:text-sm sm:text-xs font-light leading-relaxed text-inherit antialiased">
                    {selectedService.description}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-blue-900 justify-center font-bold text-xl text-center mt-16">
                Please select from the services to see the description
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;