'use client'
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
import { usePathname, useRouter } from "next/navigation";

const Details = () => {
    const [openSections, setOpenSections] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndices, setCurrentImageIndices] = useState({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter()

      const pathName = usePathname();

      const handleBack = ()=>{
        router.back()
      }
  return (
    <div className="bg-[#edf3fe] flex flex-col">
        {/* Navigation */}
      <div className="flex w-full justify-between lg:items-start items-center bg-[#08225A] lg:h-[333px] px-[5rem]">
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
      <div className="bg-yellow-500 relative lg:top-[-14rem] h-[717px] p-[2rem] lg:mx-[5%] rounded-4xl">
        <div onClick={handleBack} className="flex flex-row items-center cursor-pointer">
            
            <p>Back</p>
        </div>
      </div>
      
      </div>
  )
}

export default Details