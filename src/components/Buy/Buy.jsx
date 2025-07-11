// pages/cars/index.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiPlus, FiMinus, FiSearch } from "react-icons/fi";

const cars = Array(6).fill({
    title: "2014 Mercedes Benz C63 AMG Edition 507",
    price: "₦90,000,000",
    location: "Enugu",
    engine: "8 Cyl",
    mileage: "80,100 km",
    drive: "LHD",
    image: "/car.svg", // replace with actual
});

const filters = [
    "Type",
    "Sort",
    "Category",
    "Make",
    "Model",
    "Location",
    "Year",
    "Tag",
];


export default function Buy() {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (name) => {
        setOpenSections((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };
    return (
        <div className="flex bg-gray-50 min-h-screen">
            {/* Sidebar Filters */}
            <div className="w-full max-w-xs p-4 bg-white shadow rounded-md space-y-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-sm font-semibold text-gray-700">Filters</h2>
                    <button className="text-xs text-blue-600 hover:underline">Clear all</button>
                </div>

                {/* Search Input */}
                <div className="relative">
                    <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Filter Items */}
                <div className="space-y-2">
                    {filters.map((filter) => (
                        <div key={filter}>
                            <button
                                onClick={() => toggleSection(filter)}
                                className="w-full flex justify-between items-center border-b border-b-gray-400  text-sm font-medium text-[#0A1F44] py-4 focus:outline-none"
                            >
                                <span>{filter}</span>
                                {openSections[filter] ? <FiMinus /> : <FiPlus />}
                            </button>
                            {openSections[filter] && (
                                <div
                                    className={`ml-2 mt-1 text-sm text-gray-500 transition-all duration-300 ease-in-out overflow-hidden`}
                                >
                                    <p className="py-1">Option 1</p>
                                    <p className="py-1">Option 2</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Listings */}
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold mb-6">All Listings</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cars.map((car, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-md p-4">
                            <img src={car.image} alt={car.title} className="rounded-md mb-4" />
                            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">Car</span>
                            <h3 className="text-lg font-semibold mt-2">{car.title}</h3>
                            <p className="font-bold">{car.price}</p>
                            <div className="text-sm text-gray-600 space-y-1">
                                <p>{car.location}</p>
                                <p>{car.engine}</p>
                                <p>{car.mileage}</p>
                                <p>{car.drive}</p>
                            </div>
                            <Link href={`/cars/${idx}`}>
                                <button className="mt-3 w-full bg-black text-white py-2 rounded-md text-sm">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8 space-x-2">
                    {[1, 2, 3, 4, 5].map((n) => (
                        <button
                            key={n}
                            className="px-3 py-1 border rounded hover:bg-black hover:text-white text-sm"
                        >
                            {n}
                        </button>
                    ))}
                </div>
            </main>
        </div>
    );
}
