import Sell from '@/components/Sell/Sell'
import SellHero from '@/components/Sell/SellHero'
import Team from '@/components/Sell/Team'
import WhySell from '@/components/Sell/WhySell'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#EDF3FE]'>
        <SellHero />
        <WhySell />
        <Team />
        <Sell />
    </div>
  )
}

export default page