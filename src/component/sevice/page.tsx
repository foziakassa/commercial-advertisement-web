"use client"

interface ServiceData {
  name: string
  description: string
}

interface ServicesProps {
  serviceData: ServiceData
  onClick: () => void
  isSelected: boolean
}

const Card = ({ serviceData, onClick, isSelected }: ServicesProps) => {
  return (
    <div
      className={`
        w-full p-4 rounded-lg shadow-md cursor-pointer transition-all duration-200
        ${
          isSelected
            ? "bg-blue-700 text-white transform scale-105"
            : "bg-white text-gray-900 hover:bg-blue-700 hover:text-white hover:transform hover:scale-105"
        }
      `}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-semibold truncate">{serviceData.name}</h3>
        <div className={`w-2 h-2 rounded-full ${isSelected ? "bg-white" : "bg-blue-700"}`} />
      </div>
    </div>
  )
}

export default Card
