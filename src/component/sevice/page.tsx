import React from 'react';

interface ServiceData {
  name: string;
  description: string;
}

interface ServicesProps {
  serviceData: ServiceData;
  onClick: () => void;
  isSelected: boolean; // New prop to indicate if the card is selected
}

const Card = ({ serviceData, onClick, isSelected }: ServicesProps) => {
  return (
    <div
      className={`flex flex-col 
       ${isSelected ? 'bg-blue-700' : 'bg-white'} 
       justify-center gap-20 overflow-hidden 
       shadow-lg rounded-md
       hover:bg-blue-700  transition w-80 h-14`}
      onClick={onClick}
    >
      <div className="p-2 space-y-2">
        <h3 className={`text-lg font-semibold hover:text-white ${isSelected ? 'text-white' : 'text-gray-900'}`}>
          {serviceData.name}
        </h3>
      </div>
    </div>
  );
};

export default Card;