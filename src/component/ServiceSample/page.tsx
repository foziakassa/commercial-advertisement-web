"use client";
import React from "react";
import Card1 from "./Card1";
import Link from "next/link";

export default function ServiceSample() {
  // Mock data simulating fetched services
  const mockData = {
    data: [
      {
        id: 1,
        name: "Web Development",
        description: "Creating responsive and modern websites.",
        coverPage: "/image/business.jpg",
      },
      {
        id: 2,
        name: "Graphic Design",
        description: "Designing visually appealing graphics.",
        coverPage: "/image/Car-branding.jpeg",
      },
      {
        id: 3,
        name: "Digital Marketing",
        description: "Promoting your brand online effectively.",
        coverPage: "/image/printing.jpg",
      },
      {
        id: 4,
        name: "UI/UX Design",
        description: "Creating intuitive user experiences.",
        coverPage: "/image/business.jpg",
      },
      {
        id: 5,
        name: "Brand Strategy",
        description: "Building powerful brand identities.",
        coverPage: "/image/grapicdesign.jpeg",
      },
      {
        id: 6,
        name: "Content Creation",
        description: "Engaging content that tells your story.",
        coverPage: "/image/wall-art.jpeg",
      },
    ],
  };

  // Simulate loading and error states
  const isLoading = false;
  const error = false;

  if (isLoading) return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
    </div>
  );
  
  if (error) return (
    <div className="flex justify-center items-center py-20">
      <div className="text-red-600 text-lg font-semibold">Failed to load services</div>
    </div>
  );

  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h1
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent
              relative z-10 pb-3"
              style={{ fontFamily: 'Open Sans' }}
            >
              Our Services
            </h1>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl opacity-60 blur-sm"></div>
          </div>
          <p className="text-gray-600 text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive range of professional services designed to elevate your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {mockData.data.map((item) => (
            <div
              className="group transform hover:scale-[1.02] transition-all duration-300"
              key={item.id}
            >
              <Card1 serviceData={item} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative inline-block group">
            <Link
              href="/Service"
              className="relative inline-flex items-center justify-center px-8 py-4 
              bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700
              text-white font-semibold text-lg rounded-2xl 
              shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-blue-500/30
              transition-all duration-300 ease-out
              transform hover:scale-105 hover:-translate-y-1
              border border-transparent hover:border-white/20"
            >
              <span className="relative z-10">Explore All Services</span>
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
            
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>
          
          <p className="text-gray-500 mt-6 text-sm">
            Unlock your business potential with our expert solutions
          </p>
        </div>
      </div>
    </div>
  );
}