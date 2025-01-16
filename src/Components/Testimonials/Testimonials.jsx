import React from 'react'
import { BsChatTextFill } from "react-icons/bs";

const Testimonials = () => {
  return (
    <div className='max-w-screen-lg mx-auto'>
        <div>
                    <div className='flex justify-center'>
                        <button className="px-[8px] text-[#006BFF] font-semibold text-[14px] mt-[81px] py-[3px] rounded-full border-[1px] border-blue-500">
                          {/* Button content */}
                          <h2 className='flex gap-2 items-center'> <span className=' text-[18px] font-semibold'><BsChatTextFill/></span> Testimonials</h2>
                        </button>
                      </div>
                       <div>
                       <h2 className='text-center text-5xl font-semibold max-w-[600px] mt-[35px] mx-auto'>Still not sure?
                       Here are our customers' opinions:</h2>
                      <p className='text-[16px] font-[600] max-w-[880px] mx-auto text-center pt-[30px] pb-3'>Total satisfaction and revisions :
                      For the past year, this promise has been at the heart of our success, earning us the trust of over 200 customers.</p>
                      <p className='text-[16px] font-[600] max-w-[880px] mx-auto text-center pt-[5px] pb-3'>They talk about their experience !!</p>
            
                       </div>
       </div>

       {/* main section of testimonials */}
       <div className='flex gap-7 py-4'>
        <div className='w-1/3'>
         <h2 className='text-4xl font-bold leading-tight'>They trusted us and made <span className='text-[#006BFF]'>the right decision !</span> </h2>
         <h3 className='text-[16px] font-[500] mt-5'>At Wedooble, every project is a unique collaboration.
We listen, understand and translate your ideas into timeless, impactful designs.
Our customers’ comments speak for themselves: speed, creativity and tailor-made support.</h3>

<h3 className='text-[16px] font-[800] mt-5'>Find out what they have to say and be inspired!.</h3>
         
        </div>
        <div className='w-2/3'>
        <h2>left section</h2>
        </div>
       </div>
       {/* main section of testimonials */}
    </div>
  )
}

export default Testimonials