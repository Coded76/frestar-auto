"use client";

import React from "react";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";
// import styles from "./Contact.module.css";


export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        enquiry: "",
        phone: "",
        message: "",
    });
    return (
        <div className="bg-[#EDF3FE] flex flex-col items-center text-black">
            <div className="flex flex-col bgImage w-[1324px] h-[453px] rounded-[24px] text-white px-[56px] justify-center">
                {/* <div className={styles.bgImage}> */}
                    <h2 className="text-[64px] font-bold">Get in touch</h2>
                    <p className="text-[32px] font-normal w-[1038px]">Whether you have a question, need support, or just want to get in touch, we’d love to hear from you.</p>
                {/* </div> */}
            </div>
            {/* Header Section */}
            {/* <div className="bg-[#0F172A] text-white px-8 md:px-20 pt-8 pb-16">
                <div className="rounded-xl overflow-hidden w-full max-h-[350px]">
                    <img
                        src="/logo.svg"
                        alt="Contact Banner"
                        className="w-full h-[350px] object-cover object-center"
                    />
                </div>
                <div className="mt-6">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Get in touch</h1>
                    <p className="text-sm md:text-base text-gray-300">
                        Whether you have a question, need support, or just want to get in touch, we'd love to hear from you.
                    </p>
                </div>
            </div> */}

            <div className="grid md:grid-cols-2 gap-10 px-8 md:px-20 py-16">
                <div>
                    <h2 className="text-[48px] font-bold mb-4">Our Address:</h2>
                    <p className="text-[32px] w-[470px] font-medium mb-6">
                        Hopewell Adekunle, 0984 Place, Willout Estate, VI, Lagos
                    </p>

                    <h2 className="text-[48px] font-bold mb-4">Email:</h2>
                    <p className="text-[32px] w-[470px] font-medium mb-2">
                        For inquiries, feel free to email us at
                        <a href="mailto:contact@frestar.com" className="font-bold"> contact@frestar.com</a>,
                        or fill out the form below.
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
                                <span className="px-3 bg-gray-100 text-sm text-gray-700">+234</span>
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
