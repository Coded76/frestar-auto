import Image from 'next/image'
import React from 'react'

const SellHero = () => {
    return (
        <div
            className="w-full min-h-[709px] flex items-center flex-col justify-center px-[40px]"
        >
            <Image height={100} width={100} src={"/sell.svg"} alt='' className='w-[1324px]' />
            <div className="bg-[#3B82F6] text-white rounded-b-[20px] text-center w-[1324px] py-6 px-4">
                <p className="text-lg font-medium">Ready to Sell? <span className="font-bold">Contact Support Agent</span> ▶</p>
            </div>
        </div>
    )
}

export default SellHero