import React from 'react'

const ReviewCard = ({review}) => {
    const {name,description,date,image,companyName}=review;
  return (
    <div className='pb-[30px]'>
        <div className='bg-[#EDEDED] rounded-2xl p-4 '>
            <h2 className='text-[14px] font-[400] pb-4'>{description}</h2>

            <p className='pb-4 text-[12px] text-gray-800'>{date}</p>

            <div className='flex gap-4 items-center'>
                <img className='h-[40px] w-[40px] rounded-full ' src={image} alt="img"/>
                <div>
                    <h2 className='font-semibold text-[16px]'>{name}</h2>
                    <h2 className='text-[12px] text-gray-600'>{companyName}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard