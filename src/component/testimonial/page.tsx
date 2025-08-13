'use client';
// import "./Card.css";
import TestinomialCard from "./TestinomialCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { useTranslations } from 'next-intl';

export default function Testinomial() {
//   const t = useTranslations('testinomial');

  // Mock data for testimonials
  const mockTestimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO at Company A",
      cover: "https://i.pravatar.cc/300?img=1",
      message: "This service is fantastic! It has transformed our business."
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Marketing Manager at Company B",
      cover: "https://i.pravatar.cc/300?img=2",
      message: "I highly recommend this to anyone looking to improve their brand visibility."
    },
    {
      id: 3,
      name: "Alice Johnson",
      position: "Product Owner at Company C",
      cover: "https://i.pravatar.cc/300?img=3",
      message: "An amazing experience! The team is very professional."
    },
    {
      id: 4,
      name: "Bob Brown",
      position: "Designer at Company D",
      cover: "https://i.pravatar.cc/300?img=4",
      message: "Great results in a short time. I'm very satisfied!"
    },
  ];

  return (
    <div className="">
      <h1 className="text-teal-700 text-center text-4xl font-bold p-2 bg-opacity-40 rounded-sm">
        {/* {t("client")} */}
        client
      </h1>
      {/* <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard]} 
        spaceBetween={50}
        slidesPerView={1}
        speed={3000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        keyboard={{ enabled: true }}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active index on slide change
      ></Swiper> */}

      <Swiper
        modules={[Navigation, Pagination,  Autoplay, Keyboard]}
        spaceBetween={50}
        slidesPerView={3}
         speed={3000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        keyboard={{ enabled: true }}
        navigation
        pagination={{ clickable: true }}
        className="justify-center"
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {mockTestimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex justify-center">
              <TestinomialCard testimonialData={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}