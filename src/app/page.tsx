import Image from "next/image";
import HomePage from "@/component/home/page";
import WeAre from "@/component/weare/page";
import Service from "./service/page";
export default function Home() {
  return (
    <div className="bg-white">
      <HomePage/>
      <WeAre/>
      <Service/>
    </div>
    
  );
}
