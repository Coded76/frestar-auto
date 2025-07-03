import React from 'react'

const OurTeam = () => {
    return (
        <div
            className="bg-[url('/team.svg')] bg-cover bg-center w-full min-h-[709px] flex items-center px-[40px]"
        >
            <div className='min-h-[545px] bg-[#08225A] min-w-[553px] flex flex-col px-[30px] gap-3 justify-center rounded-[20px] text-[#FFFFFF]'>
                <h2 className='w-[457px] text-[64px] font-bold leading-[68px]'>Our team is here to help</h2>
                <p className='text-[24px] w-[457px] font-normal leading-[36px] '>
                    Call or email our team for assistance with Boosted and Brokered Sales. If you have any other questions or want to know more about our selling process, then please email our team.
                </p>
                <button className='w-[112px] h-[40px] font-normal text-[16px] border-2 border-[#ffffff] rounded-[8px]'>Get in touch</button>
            </div>
        </div>
    )
}

export default OurTeam