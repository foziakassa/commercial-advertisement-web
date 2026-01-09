'use client'
import { useState } from "react";
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
import Modals from "@/component/modals/page";
import Contact from "./contact/page";
import OurWorkPage from "@/component/ourwork/page";
import Work from "./recentwork/page";
export default function Home() {
  const [visibles, setVisibles] = useState(false);
  function showModalss() {
    setVisibles(true);
  }
  function handleOkss() {
    setVisibles(false);
  }
  function handleCancelss() {
    setVisibles(false);
  }
  return (
    <div className="bg-white">
      {/* <Navbar/> */}
      <HomePage/>
      {/* <WeAre/> */}

      {/* <AboutPage/> */}
      {/* <ServiceSample/> */}
      <Service/>
      {/* <Work/> */}
      <OurWorkPage />

      <Testinomial/>

      {/* <ContactSection/> */}
      <Contact/>
      <Modals
          visibless={visibles}
          showModals={showModalss}
          handleCancels={handleCancelss}
          handleOks={handleOkss}
        />
      {/* <Footers/> */}

      
    </div>
    
  );
}
