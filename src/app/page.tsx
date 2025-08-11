'use client'
import Image from "next/image";
import HomePage from "@/component/home/page";
import WeAre from "@/component/weare/page";
import Service from "./service/page";
import AboutPage from "@/component/about/page";
import ServiceSample from "@/component/ServiceSample/page";
import Footers from "@/component/footer/page";
import Navbar from "@/component/nav/page";
import ContactSection from "@/component/contact/page";
import Testinomial from "@/component/testimonial/page";
export default function Home() {
  return (
    <div className="bg-white">
      <Navbar/>
      <HomePage/>
      {/* <WeAre/> */}

      <AboutPage/>
      {/* <ServiceSample/> */}
      <Service/>
      <Testinomial/>

      <ContactSection/>
      <Footers/>
      
    </div>
    
  );
}
