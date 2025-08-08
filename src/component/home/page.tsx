'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import business from '../../../public/image/business.jpg';
import calendar from '../../../public/image/calander.jpeg';
import graphics from '../../../public/image/grapic design.jpeg';
import printing from '../../../public/image/printing.jpg';

interface HomeProps {}

const HomePage: React.FC<HomeProps> = () => {
  const apiData = [
    {
      cover: "/image/business.jpg",
      title: 'Welcome to Our Restaurant',
      description: 'Enjoy a delightful dining experience with our exquisite menu.',
    },
    {
      cover: "/image/calander.jpeg",
      title: 'Fresh Ingredients Daily',
      description: 'We source fresh ingredients to ensure top quality in every dish.',
    },
    {
      cover: "/image/grapic design.jpeg",
      title: 'Special Offers Every Week',
      description: 'Check out our weekly specials for great deals!',
    },
    {
      cover: "/image/printing.jpg",
      title: 'Book Your Table Online',
      description: 'Reserve your table easily through our online booking system.',
    },
  ];

  const handleGetStartedClick = () => {
    const newWindow = window.open('about:blank', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <h1>Welcome!</h1>
        <p>Get ready to explore our amazing menu.</p>
      `);
    } else {
      console.error("Failed to open new window");
    }
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard]} 
        spaceBetween={50}
        slidesPerView={1}
        speed={3000}
        autoplay={{
          delay: 2000,  // Set autoplay delay to 2 seconds
          disableOnInteraction: false,
        }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}  // Enable keyboard navigation
      >
        {apiData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="top-0 left-0 w-full relative bg-cover bg-center h-[700px] overflowX-hidden"
              style={{
                backgroundImage: `url('${slide.cover}')`,
                backgroundSize: 'contain',
                width: '100vw',
                overflowY: 'hidden',
              }}
            >
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-blue"></div>
              <div className="relative h-full">
                <section className="max-w-5xl pt-52 pb-24 mx-auto text-white body-font">
                  <div className="flex flex-col items-center justify-center h-full px-4">
                    <h1
                      className="text-3xl md:text-5xl text-white font-bold text-center mb-6 animate__animated"
                      style={{
                        textShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                        animation: 'float 2s infinite',
                      }}
                    >
                      {slide.title}
                    </h1>
                    <h2
                      className="text-xl md:text-2xl text-white font-bold text-center mb-12 animate__animated"
                      style={{
                        textShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                        animation: 'bounce 2s infinite',
                      }}
                    >
                      {slide.description}
                    </h2>
                    <div className="flex justify-center w-full">
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-800 hover:from-blue-300 hover:to-blue-900 text-white font-bold py-2 px-4 rounded-lg shadow-md animate__animated"
                        style={{
                          animation: 'pulse 2s infinite',
                          fontSize: 18,
                        }}
                        onClick={handleGetStartedClick}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePage;