import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-[#EDF3FE] w-full'>
            <div className="bg-[#3B82F6] text-white rounded-t-[20px] text-center lg:w-[1324px] w-full py-6 px-4">
                <p className="text-lg font-medium">Ready to Sell? <span className="font-bold">Contact Support Agent</span> ▶</p>
            </div>
            <footer className="bg-[#0D0D0D]  min-h-[463px] text-white w-full text-sm px-8 md:px-20 py-10">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-8 mb-6">
                    <div className='w-[496px] flex flex-col gap-[20px]'>
                        <img src="/logo.svg" alt="Frestar Logo" className="h-8 w-[198.5px] mb-4" />
                        <p className='lg:w-[496px] w-full font-light text-[16px] leading-[24px]'>
                            Frestar Digital is authorised and regulated by the Central Bank of Nigeria to offer banking services. Deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC).
                        </p>
                    </div>

                    <div className='grid grid-cols-3 lg:grid-cols-2 gap-[3rem] lg:w-[451px] w-full'>
                        <div className='flex flex-col gap-[16px]'>
                            <h4 className="font-semibold mb-2">Quick Links</h4>
                            <ul className="flex flex-col text-[#9E9FA4] gap-[8px] text-[14px] font-medium">
                                <li>Home</li>
                                <li>Buy</li>
                                <li>Sell</li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-[16px]'>
                            <h4 className="font-semibold mb-2">Solutions</h4>
                            <ul className="flex flex-col text-[#9E9FA4] gap-[8px] text-[14px] font-medium">
                                <li>Digitals</li>
                                <li>Electronics</li>
                                <li>Property</li>
                                <li>Salon</li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-[16px]'>
                            <h4 className="font-semibold mb-2">Company</h4>
                            <ul className="flex flex-col text-[#9E9FA4] gap-[8px] text-[14px] font-medium">
                                <li>About</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row mt-[3rem] justify-between'>
                    <h2 className='text-[12px] font-normal'>Frestar BN 12345, Nigeria</h2>
                    <div className='flex gap-3'>
                        <Image height={30} width={30} src={"/link.svg"} alt='' className=''/>
                        <Image height={30} width={30} src={"/twitter.svg"} alt='' className=''/>
                        <Image height={30} width={30} src={"/instagram.svg"} alt='' className=''/>
                        <Image height={30} width={30} src={"/youtube.svg"} alt='' className=''/>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-[3rem] border-t border-gray-700 pt-4">
                    <p>Copyright © 2025, Frestar Inc.</p>
                    <div className="flex space-x-4">
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookies Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer