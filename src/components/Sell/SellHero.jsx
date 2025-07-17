"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdMenu, MdClose } from "react-icons/md";

const SellHero = () => {
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
  const pathName = usePathname();

  return (
    <div className="w-full flex items-center flex-col justify-center lg:px-[40px]">
      {/* Navigation */}
      <div className="flex w-full justify-between lg:items-start items-center bg-[#08225A] lg:h-[333px] py-[20px] px-0 lg:px-[5rem]">
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
                    className={`w-[60px] h-[4px] bg-blue-800 ${pathName === "/" ? "block" : "hidden"
                      }`}
                  ></div>
                </Link>
                <Link href={"/buy"} className=" flex flex-col items-center">
                  <p>Buy</p>
                  <div
                    className={`w-[60px] h-[4px] bg-blue-800  ${pathName === "/buy" ? "block" : "hidden"
                      }`}
                  ></div>
                </Link>
                <Link href={"/sell"} className=" flex flex-col items-center">
                  <p>Sell</p>
                  <div
                    className={`w-[60px] h-[4px] bg-blue-800 ${pathName === "/sell" ? "block" : "hidden"
                      }`}
                  ></div>
                </Link>
                <Link href={"/contact"} className=" flex flex-col items-center">
                  <p>Contact Us</p>
                  <div
                    className={`w-[60px] h-[4px] bg-blue-800  hidden ${pathName === "/contact" ? "block" : "hidden"
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
                                  ${isMenuOpen
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
      <div className="w-full  relative lg:top-[-14rem] flex items-center flex-col justify-center lg:px-[40px]">
        <div className="w-full bg-[#3B82F6] rounded-4xl">
          <div className="bg-[url(/sell.svg)] bg-cover bg-center w-full lg:h-[800px] h-[400px] lg:rounded-4xl flex items-end justify-start lg:p-[5rem] p-4">
            <div className="flex flex-col gap-[20px]">
              <p className="font-bold text-white md:text-[64px] leading-none text-2xl">
                Sell your car <br /> with Frestar Autos
              </p>
              <p className="md:text-[32px] text-white leading-none">
                The curated marketplace for enthusiasts
              </p>
              <Link
                href={"#"}
                className="w-[159px] h-[40px] rounded-[8px] text-[14px] text-white bg-[#090909] flex items-center justify-center"
              >
                Sell now
              </Link>
            </div>
          </div>
          <div className="bg-[#3B82F6] text-white rounded-b-4xl text-center w-full py-6 px-4">
            <p className="text-lg font-medium md:text-[36px]">
              Ready to Sell?{" "}
              <span className="font-bold">Contact Support Agent</span> ▶
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellHero;
