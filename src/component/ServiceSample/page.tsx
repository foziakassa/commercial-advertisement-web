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
        name: "Web Development", // Changed from title to name
        description: "Creating responsive and modern websites.",
        coverPage: "/image/business.jpg", // Changed from imageUrl to coverPage
      },
      {
        id: 2,
        name: "Graphic Design", // Changed from title to name
        description: "Designing visually appealing graphics.",
        coverPage: "/image/grapicdesign", // Changed from imageUrl to coverPage
      },
      {
        id: 3,
        name: "Digital Marketing", // Changed from title to name
        description: "Promoting your brand online effectively.",
        coverPage: "/image/wall-art", // Changed from imageUrl to coverPage
      },
    ],
  };

  // Simulate loading and error states
  const isLoading = false;
  const error = false;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="overflow-x-hidden">
      <div className="mt-70">
        <div className="flex justify-center items-center">
          <h1
            className="text-teal-700 text-center text-4xl 
            font-bold 
            p-2 bg-opacity-40 rounded-sm "
            style={{ fontFamily: 'Open Sans' }}
          >
            Our Services
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-24 mt-5">
          {mockData.data.map((item) => (
            <div
              className="flex-0 w-full md:w-1/3 xl:w-1/4"
              key={item.id}
            >
              <Card1 serviceData={item} />
            </div>
          ))}
        </div>
      </div>
      <Link
        href="/Service"
        className="text-blue-500 hover:text-blue-600 font-medium text-center text-2xl"
      >
        <h1 className="my-5">
          Explore our services <span className="ml-2">&#8594;</span>
        </h1>
      </Link>
    </div>
  );
}