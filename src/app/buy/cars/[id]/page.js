"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/Navbar";
import Image from "next/image";

export default function CarDetails() {
    const router = useRouter();
    const cars = [
        "/car1.svg",
        "/car2.svg",
        "/car3.svg",
        "/car4.svg",
    ]

    return (
        <div>
            <Navbar />
            <div className="py-6 px-2 lg:px-6 w-full flex flex-col items-center gap-[5rem] mx-auto bg-[#EDF3FE]">

                <div className="bg-[#FFFFFF] w-full lg:w-[1324px] flex flex-col lg:px-[33px] px- rounded-[24px] py-[40px] ">
                    <button onClick={() => router.back()} className="text-[#6A7181] cursor-pointer mb-4 w-[150px]">
                        ← Go back
                    </button>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                            <img src="/redCar.svg" className="rounded-lg mb-4" />
                            <div className="grid lg:grid-cols-5 grid-cols-2 gap-3 space-x-2">
                                {cars.map((i) => (
                                    <img
                                        key={i}
                                        src={i}
                                        className="lg:w-[172px] w-full h-[125px] object-cover rounded cursor-pointer"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Details */}
                        <div className="lg:w-[465px] space-y-3 bg-white p-6">
                            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">Car</span>
                            <h2 className="text-[36px] font-bold">
                                2014 Mercedes Benz C63 AMG Edition 507
                            </h2>
                            <p className="text-[32px] font-bold text-gray-800">₦90,000,000</p>
                            <ul className="text-sm grid lg:grid-cols-2 h-[213px] border-[#E0E0E0] rounded-[10px] px-[20px] border gap-3 text-gray-700 space-y-1">
                                <li className="flex items-center gap-2"><Image height={20} width={20} src={"/location.svg"} alt="" /> Enugu</li>
                                <li className="flex items-center gap-2"><Image height={20} width={20} src={"/engine.svg"} alt="" /> 8 Cyl</li>
                                <li className="flex items-center gap-2"><Image height={20} width={20} src={"/speed.svg"} alt="" /> 80,100 km</li>
                                <li className="flex items-center gap-2"><Image height={20} width={20} src={"/steer.svg"} alt="" /> LHD</li>
                                <li className="flex items-center gap-2"><Image height={20} width={20} src={"/steer.svg"} alt="" /> LHD</li>
                                <li className="flex items-center gap-2"><Image height={20} width={20} src={"/steer.svg"} alt="" /> LHD</li>
                            </ul>

                            {/* Share Icons */}
                            <div className="flex flex-col gap-[10px] pt-4">
                                <h2 className="text-[16px] font-normal">Share this post</h2>
                                <div className="flex flex-row justify-between">
                                    <Image height={100} width={40} src={"/ping.svg"} alt="" className="46.34px" />
                                    <Image height={100} width={40} src={"/insta.svg"} alt="" className="46.34px" />
                                    <Image height={100} width={40} src={"/face.svg"} alt="" className="46.34px" />
                                    <Image height={100} width={40} src={"/thread.svg"} alt="" className="46.34px" />
                                    <Image height={100} width={40} src={"/what.svg"} alt="" className="46.34px" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="mx-auto flex flex-col bg-[#FFFFFF] rounded-[24px] w-full lg:w-[1324px] px-[33px] py-[40px] md:flex-row gap-10">
                    <div className="flex-1 text-[#0B2C66] lg:w-[708px] w-full">
                        <h2 className="text-2xl font-semibold mb-4">Description</h2>
                        <p className="text-[20px] leading-7 mb-6">
                            This beautiful 2014 c63 Edition 507 is the last of the glorious 6.2 Ltr V8’s.
                            <br />
                            <br />
                            It will power from zero to 100 km/h in a claimed 4.2 seconds. That’s
                            0.2 of second quicker to 100km/h than the standard car and 0.1 of a
                            second faster than the Performance Pack.
                            <br />
                            <br />
                            Mercedes-Benz achieved the additional performance by utilising the
                            technology found in the significantly more expensive SLS AMG.
                            <br />
                            These include forged pistons plus a lighter crankshaft and
                            connecting rods, all of which reduce engine weight by a healthy
                            three kilograms.
                            <br />
                            <br />
                            With 373 KW of power or 507 HP and 610 Nm (that’s 37kw more than the
                            standard c63 and 15kw more than the performance pack) this is the
                            W204 C63 to own aside from the Black Series. This particular c63 has
                            been part of my collection for the last 4+ years covering less than
                            11,000k’ms during that time.
                        </p>

                        <h3 className="text-xl font-semibold mb-2">Details</h3>
                        <div className="flex flex-col gap-[40px]">
                            <div className="bg-[#F2F2F2] h-10 w-full rounded-md shadow-sm" />
                            <div className="bg-[#F2F2F2] h-10 w-full rounded-md shadow-sm" />
                        </div>
                    </div>

                    {/* RIGHT SIDE: Contact Form */}
                    <div className="flex-1 max-w-md bg-white h-fit rounded-xl shadow-md p-6">
                        <h3 className="text-xl font-semibold text-[#0B2C66] mb-4">
                            Contact Agent
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Message*
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter detailed message"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Full Name*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Placeholder text..."
                                    className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Email Address*
                                </label>
                                <input
                                    type="email"
                                    placeholder="hello@frestar.com"
                                    className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Phone Number*
                                </label>
                                <div className="flex">
                                    <select className="border rounded-l-md p-2 bg-white">
                                        <option value="+234">+234</option>
                                    </select>
                                    <input
                                        type="tel"
                                        placeholder="80 0000 0000"
                                        className="w-full border-t border-b border-r rounded-r-md p-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#3B82F6] text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
