'use client'
// import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
interface serviceProps {
  serviceData: {
    name:string
    description:string;
    coverPage: string;
  };
}
export default function Card1(props:serviceProps) {
  const router= useRouter()
  const {serviceData} =props;
  // const t = useTranslations('product');
  

  return (
    <div className="relative flex w-85 h-[400px]
    flex-col rounded-2xl bg-white bg-clip-border
     text-gray-700 my-10 shadow-2xl  
     hover:shadow-3xl hover:-translate-y-2 mx-4
     transition-all duration-500 ease-out
     border border-gray-100
     group overflow-hidden
     ">
     
      {/* Image Container with Enhanced Styling */}
      <div
        className="relative mx-4 -mt-6 h-48 overflow-hidden rounded-xl text-white shadow-xl bg-cover bg-center group-hover:shadow-2xl transition-all duration-500"
      >
        <img 
          className="object-cover h-48 w-96 group-hover:scale-110 transition-transform duration-700 ease-out" 
          src={serviceData?.coverPage}  
          alt="Bonnie Green image"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col">
        <h5 className="mb-3 block font-sans 
        xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs 
        font-bold leading-tight tracking-wide text-gray-900 antialiased
        group-hover:text-blue-600 transition-colors duration-300">
          {serviceData?.name}
        </h5>
        <p className="block font-sans 
        xl:text-base lg:text-sm md:text-sm sm:text-xs
        font-normal leading-relaxed 
        text-gray-600 antialiased line-clamp-3
        group-hover:text-gray-700 transition-colors duration-300
        ">
          {serviceData?.description}
        </p>
      </div>
      
      {/* Button Container */}
      <div className="p-6 pt-0 mt-auto">
        <button
          onClick={()=> router.push('/ServiceDetail')}
          data-ripple-light="true"
          type="button"
          className="group/btn select-none rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 py-3 px-8
           text-center align-middle font-sans text-sm font-semibold 
           uppercase text-white shadow-lg shadow-teal-500/25 
           transition-all duration-300 ease-out
           hover:shadow-xl hover:shadow-blue-500/30 
           hover:scale-105
           focus:opacity-[0.85] focus:shadow-none 
           active:opacity-[0.85] active:shadow-none 
           disabled:pointer-events-none disabled:opacity-50 
           disabled:shadow-none
           relative overflow-hidden
           "
        >
          <span className="relative z-10">readmore</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
         {/* {t('readmore')} */}
        </button>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-teal-200 group-hover:bg-gradient-to-br group-hover:from-teal-50/5 group-hover:to-blue-50/5 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
}