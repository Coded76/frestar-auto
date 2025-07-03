import Image from 'next/image'
import React from 'react'

const OurClients = () => {
  return (
    <div className='min-h-[546px] flex items-center justify-center bg-[#EDF3FE]'>
      <div className=''>
        <h2 className='text-[48px] font-bold w-[428px]'>What our clients are saying</h2>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-[32px]'>
            <p className='text-[18px] font-medium w-[533px]'>Frestar Autos got me my dream SUV with easy financing. The process was seamless!</p>
            <div className='flex items-center gap-4'>
              <Image height={60} width={60} src={"/avatar.svg"} alt='' />
              <div>
                <p className='text-[20px] font-semibold'>Adewale Onyeka</p>
                <h2 className='text-[18px] font-medium'>CEO of Tech Innovators Inc.</h2>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[32px]'>
            <p className='text-[18px] font-medium w-[533px]'>Their insights are truly exceptional, and the team is always responsive."</p>
            <div className='flex items-center gap-4'>
              <Image height={60} width={60} src={"/avatar2.svg"} alt='' />
              <div>
                <p className='text-[20px] font-semibold'>Dr. Evelyn Tokunbo</p>
                <h2 className='text-[18px] font-medium'>Private Investor</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurClients