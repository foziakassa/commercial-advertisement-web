import type React from "react"

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-blue-700 overflow-hidden text-white py-24 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">About Our Company</h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-pretty">
            We&apos;ve been crafting innovative solutions that transform businesses and drive real results since day one.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Existing content section */}
      <div className="sm:flex items-center max-w-screen-xl mx-auto">
        {/* Image Section */}
        <div className="sm:w-1/2 p-10 hidden sm:block">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" alt="About Our Company" />
          </div>
        </div>
        {/* Text Section */}
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-blue-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-blue-900">Our Company</span>
            </h2>
            <p
              className="text-gray-700"
              style={{
                fontFamily: "Open Sans",
                lineHeight: 1.5,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi doloremque, fugiat illum magni
              minus nisi nulla numquam obcaecati placeat quia, repellat tempore voluptatum.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
