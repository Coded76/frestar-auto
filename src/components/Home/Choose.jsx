import React from 'react'
import Marquee from 'react-fast-marquee'

const Choose = () => {
    return (
        <div className='bg-[#EDF3FE] min-h-[713px] flex flex-col  gap-[64px] justify-center'>
            <div className='flex flex-col gap-[20px] px-[100px]'>
                <h2 className='text-[64px] font-bold'>Why choose Frestar Autos</h2>
                <p className='text-[32px] font-normal'>The curated marketplace for enthusiasts</p>
            </div>
            <Marquee speed={50} gradient={false} >
                <div className='flex items-center gap-[31px]'>
                    <div className='flex flex-col justify-center bg-[#FFFFFF] h-[303.3px] px-[21px] rounded-[16px] gap-[16px]'>
                        <h2 className='text-[24px] font-extrabold'>Certified Vehicles</h2>
                        <p className='text-[18px] font-normal w-[352.7px]'>Every car undergoes a 150-point inspection for quality assurance.</p>
                    </div>
                    <div className='flex flex-col justify-center bg-[#FFFFFF] h-[303.3px] px-[21px] rounded-[16px] gap-[16px]'>
                        <h2 className='text-[24px] font-extrabold'>Flexible Financing</h2>
                        <p className='text-[18px] font-normal w-[352.7px]'>Affordable payment plans with trusted partners.</p>
                    </div>
                    <div className='flex flex-col justify-center bg-[#FFFFFF] h-[303.3px] px-[21px] rounded-[16px] gap-[16px]'>
                        <h2 className='text-[24px] font-extrabold'>Premium Accessories</h2>
                        <p className='text-[18px] font-normal w-[352.7px]'>Customize your ride with top-tier parts and gadgets.</p>
                    </div>
                </div>
            </Marquee>
        </div>
    )
}

export default Choose