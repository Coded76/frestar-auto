"use client";
import React from "react";
import { ArrowUpRight, MapPin, Settings2, GaugeCircle, Car } from "lucide-react";


const carData = new Array(4).fill({
  title: "2014 Mercedes Benz C63 AMG Edition 507",
  price: "₦90,000,000",
  location: "Enugu",
  engine: "8 Cycl",
  mileage: "80,100 km",
  drive: "LHD",
  image: "/car.svg",
});



const Sell = () => {
  return (
    <div className="min-h-screen lg:px-[5rem] px-3 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-[#0A1D56]">Our Collections</h2>
        <button className="text-sm font-medium text-[#0A1D56] border border-[#0A1D56] px-4 py-2 rounded-full flex items-center gap-1 hover:bg-[#0A1D56] hover:text-white transition">
          See All
          <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="flex gap-6 mb-8 border-b border-gray-200">
        <button className="text-black font-semibold border-b-2 border-black pb-2">Cars</button>
        <button className="text-gray-500 pb-2">Accessories</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-4 xl:grid-cols-4">
        {carData.map((car, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-gray-200 flex flex-col gap-[12px] w-[315px] min-h-[356px] p-4 hover:shadow-md transition bg-white hover:scale-105 transition-transform duration-300"
          >
            <div className="relative mb-4  rounded-xl w-full overflow-hidden">
              <img
                src={car.image}
                alt="Car"
                className="lg:w-[285px] w-full lg:h-40 h-52 object-cover"
              />
              <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                Car
              </span>
              <span className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                <ArrowUpRight size={16} className="text-gray-600" />
              </span>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span className="w-2 h-2 bg-gray-300 rounded-full" />
                <span className="w-2 h-2 bg-gray-300 rounded-full" />
              </div>
            </div>

            <h3 className="text-[17.69px] w-[263px] font-semibold leading-tight mb-1">
              {car.title}
            </h3>
            <p className="text-[#0A1D56] font-bold text-sm mb-2">
              {car.price}
            </p>

            <div className="text-xs text-gray-600 space-y-1 mb-4">
              <div className="flex items-center gap-2">
                <MapPin size={14} /> {car.location}
                <Settings2 size={14} className="ml-4" /> {car.engine}
              </div>
              <div className="flex items-center gap-2">
                <GaugeCircle size={14} /> {car.mileage}
                <Car size={14} className="ml-4" /> {car.drive}
              </div>
            </div>

            <button className="bg-gray-100 w-full py-2 rounded-xl text-sm text-[#0A1D56] font-medium transition group-hover:text-white group-hover:bg-orange-500">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sell