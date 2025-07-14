// // pages/cars/index.tsx
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { FiPlus, FiMinus, FiSearch } from "react-icons/fi";
// import { CiSearch } from "react-icons/ci";
// import { MdMenu, MdClose } from "react-icons/md";
// import Image from "next/image";

// const cars = Array(6).fill({
//   title: "2014 Mercedes Benz C63 AMG Edition 507",
//   price: "₦90,000,000",
//   location: "Enugu",
//   engine: "8 Cyl",
//   mileage: "80,100 km",
//   drive: "LHD",
//   image: "/car.svg",
// });

// const filters = [
//   "Type",
//   "Sort",
//   "Category",
//   "Make",
//   "Model",
//   "Location",
//   "Year",
//   "Tag",
// ];

// export default function Buy() {
//   const [openSections, setOpenSections] = useState({});
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleSection = (name) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [name]: !prev[name],
//     }));
//   };
//   return (
//     <div className="bg-[#edf3fe]">
//       {/* Navigation  */}
//       <div className="flex w-full justify-between lg:items-start items-center bg-[#08225A] lg:h-[333px] py-[20px] px-[5rem]">
//         <div className="flex flex-row items-center justify-center w-full">
//           <div className="flex w-full items-center py-[10px]">
//             <div className="flex items-center gap-[40px]">
//               <Image
//                 height={100}
//                 width={100}
//                 src={"/logo.svg"}
//                 alt=""
//                 className="w-[200px]"
//               />
//               <ul className="hidden lg:flex items-center gap-[40px] text-[16px] font-medium text-[#FFFFFF]">
//                 <li>Home</li>
//                 <li>Buy</li>
//                 <li>Sell</li>
//                 <li>Contact Us</li>
//               </ul>
//             </div>
//           </div>
//           <div className="items-center gap-[40px] hidden lg:flex">
//             <button className="bg-[#F2F2F2] h-[40px] w-[106px] rounded-[8px] flex items-center gap-2 justify-center">
//               {" "}
//               <CiSearch /> Search
//             </button>
//             <button className="bg-[#3978F2] h-[40px] w-[106px] rounded-[8px] text-[#FFFFFF]">
//               Contact Us
//             </button>
//           </div>
//         </div>
//         <div className="lg:hidden flex gap-3 items-center">
//           <button onClick={toggleMenu} className="text-3xl ">
//             {isMenuOpen ? <MdClose color="white" /> : <MdMenu color="white" />}
//           </button>
//         </div>
//         {isMenuOpen && (
//           <div
//             className={`lg:hidden flex flex-col gap-2 items-start bg-[#F6F6F6] w-full px-[20px] py-[10px] absolute top-[100px] left-0 z-40 transition-all duration-300 ease-in-out
//                       ${
//                         isMenuOpen
//                           ? "opacity-100 top-[80px]"
//                           : "opacity-0 top-[60px]"
//                       }`}
//           >
//             <ul className="flex flex-col gap-6">
//               <li>Home</li>
//               <li>Buy</li>
//               <li>Sell</li>
//               <li>Contact Us</li>
//             </ul>
//             <button className="bg-[#F2F2F2] h-[40px] w-[106px] rounded-[8px] flex items-center gap-2 justify-center">
//               {" "}
//               <CiSearch /> Search
//             </button>
//             <button className="bg-[#3978F2] h-[40px] w-[106px] rounded-[8px] text-[#FFFFFF]">
//               Contact Us
//             </button>
//           </div>
//         )}
//       </div>
//       <div className="bg-white relative lg:top-[-14rem] pt-[4rem] pl-[1rem] px-3 lg:mx-[5%] rounded-4xl min-h-screen">
//         <h1 className="text-[48px] font-bold mb-6">All Listings</h1>
//         <div className="flex ">
//           {/* Sidebar Filters */}

//           <div className="w-full max-w-xs p-4  space-y-4">
//             <div className="flex justify-between items-center">
//               <h2 className="text-sm font-semibold text-gray-700">Filters</h2>
//               <button className="text-xs text-blue-600 hover:underline">
//                 Clear all
//               </button>
//             </div>

//             {/* Search Input */}
//             <div className="relative">
//               <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
//               />
//             </div>

//             {/* Filter Items */}
//             <div className="space-y-2">
//               {filters.map((filter) => (
//                 <div key={filter}>
//                   <button
//                     onClick={() => toggleSection(filter)}
//                     className="w-full flex justify-between items-center border-b border-b-gray-400  text-sm font-medium text-[#0A1F44] py-4 focus:outline-none"
//                   >
//                     <span>{filter}</span>
//                     {openSections[filter] ? <FiMinus /> : <FiPlus />}
//                   </button>
//                   {openSections[filter] && (
//                     <div
//                       className={`ml-2 mt-1 text-sm text-gray-500 transition-all duration-300 ease-in-out overflow-hidden`}
//                     >
//                       <p className="py-1">Option 1</p>
//                       <p className="py-1">Option 2</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Listings */}
//           <main className="flex-1 p-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {cars.map((car, idx) => (
//                 <div key={idx} className="bg-white rounded-xl shadow-md p-4">
//                   <img
//                     src={car.image}
//                     alt={car.title}
//                     className="rounded-md mb-4"
//                   />
//                   <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">
//                     Car
//                   </span>
//                   <h3 className="text-lg font-semibold mt-2">{car.title}</h3>
//                   <p className="font-bold">{car.price}</p>
//                   <div className="text-sm text-gray-600 space-y-1">
//                     <p>{car.location}</p>
//                     <p>{car.engine}</p>
//                     <p>{car.mileage}</p>
//                     <p>{car.drive}</p>
//                   </div>
//                   <Link href={`/cars/${idx}`}>
//                     <button className="mt-3 w-full bg-black text-white py-2 rounded-md text-sm">
//                       View Details
//                     </button>
//                   </Link>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-center mt-8 space-x-2">
//               {[1, 2, 3, 4, 5].map((n) => (
//                 <button
//                   key={n}
//                   className="px-3 py-1 border rounded hover:bg-black hover:text-white text-sm"
//                 >
//                   {n}
//                 </button>
//               ))}
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }
// pages/cars/index.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FiPlus,
  FiMinus,
  FiSearch,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { MdMenu, MdClose } from "react-icons/md";
import Image from "next/image";
import { usePathname } from "next/navigation";

const cars = Array(6).fill({
  title: "2014 Mercedes Benz C63 AMG Edition 507",
  price: "₦90,000,000",
  location: "Enugu",
  engine: "8 Cyl",
  mileage: "80,100 km",
  drive: "LHD",
  images: ["/car.svg", "/car2.svg", "/car3.svg"],
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndices, setCurrentImageIndices] = useState({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSection = (name) => {
    setOpenSections((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const nextImage = (carIndex) => {
    setCurrentImageIndices((prev) => {
      const currentIndex = prev[carIndex] || 0;
      const car = cars[carIndex];
      const nextIndex = (currentIndex + 1) % car.images.length;
      return { ...prev, [carIndex]: nextIndex };
    });
  };

  const prevImage = (carIndex) => {
    setCurrentImageIndices((prev) => {
      const currentIndex = prev[carIndex] || 0;
      const car = cars[carIndex];
      const prevIndex =
        (currentIndex - 1 + car.images.length) % car.images.length;
      return { ...prev, [carIndex]: prevIndex };
    });
  };

  const pathName = usePathname();

  return (
    <div className="bg-[#edf3fe]">
      {/* Navigation */}
      <div className="flex w-full justify-between lg:items-start items-center bg-[#08225A] lg:h-[333px] py-[20px] px-[5rem]">
        <div className="flex flex-row items-center justify-center w-full">
          <div className="flex w-full items-center py-[10px]">
            <div className="flex items-center gap-[40px]">
              <Image
                height={100}
                width={100}
                src={"/logo.svg"}
                alt=""
                className="w-[200px]"
              />
              <ul className="hidden lg:flex items-center gap-[40px] text-[16px] font-medium text-[#FFFFFF]">
                <Link href={"/"} className=" flex flex-col items-center">
                  <p>Home</p>
                  <div
                    className={`w-[60px] h-[4px] bg-blue-800 hidden ${
                      pathName === "/" ? "block" : "hidden"
                    }`}
                  ></div>
                </Link>
                <Link href={"/buy"} className=" flex flex-col items-center">
                  <p>Buy</p>
                  <div
                    className={`w-[60px] h-[4px] bg-blue-800 ${
                      pathName === "/buy" ? "block" : "hidden"
                    }`}
                  ></div>
                </Link>
                <Link href={"/sell"} className=" flex flex-col items-center">
                  <p>Sell</p>
                  <div
                    className={`w-[60px] h-[4px] bg-blue-800  ${
                      pathName === "/sell" ? "block" : "hidden"
                    }`}
                  ></div>
                </Link>
                <Link href={"/contact"} className=" flex flex-col items-center">
                  <p>Contact Us</p>
                  <div
                    className={`w-[60px] h-[4px] bg-blue-800 ${
                      pathName === "/contact" ? "block" : "hidden"
                    }`}
                  ></div>
                </Link>
              </ul>
            </div>
          </div>
          <div className="items-center gap-[40px] hidden lg:flex">
            <button className="bg-[#F2F2F2] h-[40px] w-[106px] rounded-[8px] flex items-center gap-2 justify-center">
              <CiSearch /> Search
            </button>
            <button className="bg-[#3978F2] h-[40px] w-[106px] rounded-[8px] text-[#FFFFFF]">
              Contact Us
            </button>
          </div>
        </div>
        <div className="lg:hidden flex gap-3 items-center">
          <button onClick={toggleMenu} className="text-3xl">
            {isMenuOpen ? <MdClose color="white" /> : <MdMenu color="white" />}
          </button>
        </div>
        {isMenuOpen && (
          <div
            className={`lg:hidden flex flex-col gap-2 items-start bg-[#F6F6F6] w-full px-[20px] py-[10px] absolute top-[100px] left-0 z-40 transition-all duration-300 ease-in-out 
                      ${
                        isMenuOpen
                          ? "opacity-100 top-[80px]"
                          : "opacity-0 top-[60px]"
                      }`}
          >
            <ul className="flex flex-col gap-6">
              <li>Home</li>
              <li>Buy</li>
              <li>Sell</li>
              <li>Contact Us</li>
            </ul>
            <button className="bg-[#F2F2F2] h-[40px] w-[106px] rounded-[8px] flex items-center gap-2 justify-center">
              <CiSearch /> Search
            </button>
            <button className="bg-[#3978F2] h-[40px] w-[106px] rounded-[8px] text-[#FFFFFF]">
              Contact Us
            </button>
          </div>
        )}
      </div>

      <div className="bg-white relative lg:top-[-14rem] pt-[4rem] pl-[1rem] px-3 lg:mx-[5%] rounded-4xl min-h-screen">
        <h1 className="text-[48px] font-bold mb-6">All Listings</h1>
        <div className="flex">
          {/* Sidebar Filters */}
          <div className="w-full max-w-xs p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-semibold text-gray-700">Filters</h2>
              <button className="text-xs text-blue-600 hover:underline">
                Clear all
              </button>
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
                    className="w-full flex justify-between items-center border-b border-b-gray-400 text-sm font-medium text-[#0A1F44] py-4 focus:outline-none"
                  >
                    <span>{filter}</span>
                    {openSections[filter] ? <FiMinus /> : <FiPlus />}
                  </button>
                  {openSections[filter] && (
                    <div className="ml-2 mt-1 text-sm text-gray-500 transition-all duration-300 ease-in-out overflow-hidden">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car, idx) => {
                const currentImageIndex = currentImageIndices[idx] || 0;
                const currentImage = car.images[currentImageIndex];

                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative group">
                      <img
                        src={currentImage}
                        alt={car.title}
                        className="rounded-md mb-4 w-full h-48 object-cover "
                      />
                      {/* Navigation Arrows */}
                      {car.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevImage(idx);
                            }}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          >
                            <FiChevronLeft size={20} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextImage(idx);
                            }}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          >
                            <FiChevronRight size={20} />
                          </button>
                          {/* Image Indicator Dots */}
                          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                            {car.images.map((_, dotIdx) => (
                              <button
                                key={dotIdx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImageIndices((prev) => ({
                                    ...prev,
                                    [idx]: dotIdx,
                                  }));
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  dotIdx === currentImageIndex
                                    ? "bg-blue-500 w-3"
                                    : "bg-white bg-opacity-50"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                    <span className="text-xs px-2 py-1 absolute top-[17%] bg-blue-100 text-blue-600 rounded">
                      Car
                    </span>
                    <h3 className="text-lg font-semibold mt-2 line-clamp-2">
                      {car.title}
                    </h3>
                    <p className="font-bold">{car.price}</p>
                    <div className="text-sm text-gray-600 space-y-1 mt-2">
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span className="font-medium">{car.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Engine:</span>
                        <span className="font-medium">{car.engine}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mileage:</span>
                        <span className="font-medium">{car.mileage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Drive:</span>
                        <span className="font-medium">{car.drive}</span>
                      </div>
                    </div>
                    <Link href={`/cars/${idx}`}>
                      <button className="mt-4 w-full bg-black text-white py-2 rounded-md text-sm hover:bg-gray-800 transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  className="px-3 py-1 border rounded hover:bg-black hover:text-white text-sm transition-colors"
                >
                  {n}
                </button>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
