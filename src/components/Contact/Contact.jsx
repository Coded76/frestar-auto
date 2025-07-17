"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdMenu, MdClose } from "react-icons/md";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndices, setCurrentImageIndices] = useState({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiry: "",
    phone: "",
    message: "",
  });
  const pathName = usePathname();
  return (
    <div className="bg-[#EDF3FE] flex flex-col items-center text-black">
      {/* Navigation  */}
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
                    className={`w-[60px] h-[4px] bg-blue-800 hidden ${pathName === "/" ? "block" : "hidden"
                      }`}
                  ></div>
                </Link>
                <Link href={"/buy"} className=" flex flex-col items-center">
                  <p>Buy</p>
                  <div
                    className={`w-[60px] h-[4px] bg-blue-800 ${pathName === "/buy" ? "block" : "hidden"
                      }`}
                  ></div>
                </Link>
                <Link href={"/sell"} className=" flex flex-col items-center">
                  <p>Sell</p>
                  <div
                    className={`w-[60px] h-[4px] bg-blue-800  ${pathName === "/sell" ? "block" : "hidden"
                      }`}
                  ></div>
                </Link>
                <Link href={"/contact"} className=" flex flex-col items-center">
                  <p>Contact Us</p>
                  <div
                    className={`w-[60px] h-[4px] bg-blue-800 ${pathName === "/contact" ? "block" : "hidden"
                      }`}
                  ></div>
                </Link>
              </ul>
            </div>
          </div>
          <div className="items-center gap-[40px] hidden lg:flex">
            <button className="bg-[#F2F2F2] h-[40px] w-[106px] rounded-[8px] flex items-center gap-2 justify-center">
              {" "}
              <CiSearch /> Search
            </button>
            <button className="bg-[#3978F2] h-[40px] w-[106px] rounded-[8px] text-[#FFFFFF]">
              Contact Us
            </button>
          </div>
        </div>
        <div className="lg:hidden flex gap-3 items-center">
          <button onClick={toggleMenu} className="text-3xl ">
            {isMenuOpen ? <MdClose color="white" /> : <MdMenu color="white" />}
          </button>
        </div>
        {isMenuOpen && (
          <div
            className={`lg:hidden flex flex-col gap-2 items-start bg-[#F6F6F6] w-full px-[20px] py-[10px] absolute top-[17%] left-0 z-40 transition-all duration-300 ease-in-out 
                          ${isMenuOpen
                ? "opacity-100 top-[80px]"
                : "opacity-0 top-[60px]"
              }`}
          >
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
            <button className="bg-[#F2F2F2] h-[40px] w-[106px] rounded-[8px] flex items-center gap-2 justify-center">
              {" "}
              <CiSearch /> Search
            </button>
            <button className="bg-[#3978F2] h-[40px] w-[106px] rounded-[8px] text-[#FFFFFF]">
              Contact Us
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col bgImage lg:w-[1324px] w-full relative lg:top-[-14rem] h-[453px] lg:rounded-[24px] text-white lg:px-[56px] px-[15px] justify-center">
        {/* <div className={styles.bgImage}> */}
        <h2 className="lg:text-[64px] text-[30px] font-bold">Get in touch</h2>
        <p className="lg:text-[32px] text-[20px] font-normal w-full lg:w-[1038px]">
          Whether you have a question, need support, or just want to get in
          touch, we’d love to hear from you.
        </p>
        {/* </div> */}
      </div>

      <div className="grid md:grid-cols-2 gap-10 lg:px-8 px-3 mt-[2rem] lg:mt-0 md:px-20 pb-16">
        <div>
          <h2 className="lg:text-[48px] text-[30px] font-bold mb-4">Our Address:</h2>
          <p className="text-[20px] lg:text-[32px] lg:w-[470px] w-full font-medium mb-6">
            Hopewell Adekunle, 0984 Place, Willout Estate, VI, Lagos
          </p>

          <h2 className="text-[48px] font-bold mb-4">Email:</h2>
          <p className="lg:text-[32px] text-[20px] lg:w-[470px] w-full font-medium mb-2">
            For inquiries, feel free to email us at
            <a href="mailto:contact@frestar.com" className="font-bold">
              {" "}
              contact@frestar.com
            </a>
            , or fill out the form below.
          </p>
        </div>

        <div className="w-full lg:w-[672px] mx-auto bg-white shadow-md rounded-xl p-8 mt-10">
          <h1 className="text-3xl font-bold text-[#0A1F44] mb-8">Fill Form</h1>

          <form className="space-y-6">
            <div>
              <label className="block text-[14px] font-medium text-gray-700 mb-1">
                Full Name <span className="text-green-500">*</span>
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Placeholder text..."
                  className="pl-10 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <label className="block text-[14px] font-medium text-gray-700 mb-1">
                Email Address <span className="text-green-500">*</span>
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="hello@alignui.com"
                  className="pl-10 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[4px]">
              <label className="block text-[14px] font-medium text-gray-700 mb-1">
                Enquiry <span className="text-green-500">*</span>
              </label>
              <div className="relative">
                <select className="appearance-none w-full border border-gray-300 rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select</option>
                  <option>Support</option>
                  <option>Sales</option>
                  <option>Feedback</option>
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="flex flex-col gap-[4px]">
              <label className="block text-[14px] font-medium text-gray-700 mb-1">
                Phone Number <span className="text-green-500">*</span>
              </label>
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                <span className="px-3 bg-gray-100 text-sm text-gray-700">
                  +234
                </span>
                <input
                  type="tel"
                  placeholder="80 0000 0000"
                  className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[4px]">
              <label className="block text-[14px] font-medium text-gray-700 mb-1">
                Message <span className="text-green-500">*</span>
              </label>
              <div className="relative">
                <textarea
                  rows="4"
                  placeholder="Enter detailed message"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-[79px] bg-black text-white h-[40px] rounded-md hover:bg-gray-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
