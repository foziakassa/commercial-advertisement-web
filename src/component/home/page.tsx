"use client";
import React from 'react';

const HomePage: React.FC = () => {
  
  
  return (
    <div className="max-h-screen -mt-20 bg-white">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="relative z-8 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-3"></span>
              <span className="text-sm font-medium">Waiting for You</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Commercial
              <span className="block bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Advertisement
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforming brands through innovative advertising strategies that drive growth, 
              engage audiences, and deliver exceptional results in today&apos;s competitive market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16  sm:flex">
              <a href='#contact' className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-base">
                Get In Touch
              </a>
              <a href='#our-work-page' className="border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-base">
                View Our Work
              
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-white rounded-t-[100px] pt-16 pb-8">
          <div className="container mx-auto px-4">
            <p className="mb-6 mx-auto max-w-4xl text-gray-700 text-center text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'Open Sans', lineHeight: 1.5 }}>
              Commercial Advertising and Printing is a premier provider of comprehensive advertising and printing solutions. 
              Our company specializes in a wide array of services designed to enhance brand visibility and impact through 
              innovative design and quality production. 
            </p>
            
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;