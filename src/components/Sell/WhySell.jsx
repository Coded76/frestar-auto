import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const WhySell = () => {
    return (
        <div className='bg-[#EDF3FE] min-h-[713px] lg:px-[100px] mt-[2rem] px-[20px] flex flex-col  gap-[64px] justify-center'>
            <div className='flex flex-col gap-[10px] '>
                <h2 className='lg:text-[64px] text-[30px] font-bold'>Why sell with Frestar Auto</h2>
                <p className='lg:text-[32px] text-[20px] font-normal'>The curated marketplace for enthusiasts</p>
            </div>
            <div className='flex lg:flex-row flex-col items-center gap-[31px]'>
                <div className='flex flex-col justify-center bg-[#FFFFFF] h-[303.3px] px-[21px] rounded-[16px] gap-[16px]'>
                    <Image height={100} width={100} src={"/shake.svg"} alt='' className='w-[83px]' />
                    <h2 className='text-[24px] font-extrabold'>Expert Local Team</h2>
                    <p className='text-[18px] font-normal lg:w-[352.7px] w-full'>Talk to our in-house team for unmatched market knowledge and customer service..</p>
                </div>
                <div className='flex flex-col justify-center bg-[#FFFFFF] h-[303.3px] px-[21px] rounded-[16px] gap-[16px]'>
                    <Image height={100} width={100} src={"/shake.svg"} alt='' className='w-[83px]' />
                    <h2 className='text-[24px] font-extrabold'>Curated Listings</h2>
                    <p className='text-[18px] font-normal lg:w-[352.7px] w-full'>We only feature Classic, Performance and Collectibles.</p>
                </div>
                <div className='flex flex-col justify-center bg-[#FFFFFF] h-[303.3px] w-full px-[21px] rounded-[16px] gap-[16px]'>
                    <Image height={100} width={100} src={"/shake.svg"} alt='' className='w-[83px]' />
                    <h2 className='text-[24px] font-extrabold'>Flexible Selling Options</h2>
                    <p className='text-[18px] font-normal lg:w-[352.7px] w-full'>Choose the listing type that suits you best.</p>
                </div>
            </div>
            {/* </Marquee> */}
        </div>
    )
}

export default WhySell