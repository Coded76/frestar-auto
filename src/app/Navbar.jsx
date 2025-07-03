"use client";
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdMenu, MdClose } from "react-icons/md";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className='flex items-center justify-between bg-[#08225A] py-[20px] px-[5rem]'>
            <div className='flex items-center gap-[40px]'>
                <Image height={100} width={100} src={"/logo.svg"} alt='' className='w-[200px]' />
                <ul className='hidden lg:flex items-center gap-[40px] text-[16px] font-medium text-[#FFFFFF]'>
                    <li>Home</li>
                    <li>Buy</li>
                    <li>Sell</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='items-center gap-[40px] hidden lg:flex'>
                <button className='bg-[#F2F2F2] h-[40px] w-[106px] rounded-[8px] flex items-center gap-2 justify-center'> <CiSearch />  Search</button>
                <button className='bg-[#3978F2] h-[40px] w-[106px] rounded-[8px] text-[#FFFFFF]'>Contact Us</button>
            </div>
            <div className='lg:hidden flex gap-3 items-center'>
                <button onClick={toggleMenu} className='text-3xl '>
                    {isMenuOpen ? <MdClose  color='white'/> : <MdMenu  color='white'/>}
                </button>
            </div>
            {isMenuOpen && (
                <div
                    className={`lg:hidden flex flex-col gap-2 items-start bg-[#F6F6F6] w-full px-[20px] py-[10px] absolute top-[100px] left-0 z-40 transition-all duration-300 ease-in-out 
          ${isMenuOpen ? 'opacity-100 top-[80px]' : 'opacity-0 top-[60px]'}`}
                >
                    <ul className='flex flex-col gap-6'>
                        <li>Home</li>
                        <li>Buy</li>
                        <li>Sell</li>
                        <li>Contact Us</li>
                    </ul>
                    <button className='bg-[#F2F2F2] h-[40px] w-[106px] rounded-[8px] flex items-center gap-2 justify-center'> <CiSearch />  Search</button>
                    <button className='bg-[#3978F2] h-[40px] w-[106px] rounded-[8px] text-[#FFFFFF]'>Contact Us</button>
                </div>
            )}
        </div>
    )
}

export default Navbar