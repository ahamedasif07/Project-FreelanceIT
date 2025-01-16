import React from 'react'
import { BsChatTextFill } from "react-icons/bs";

const Testimonials = () => {
  return (
    <div>
        <div>
                    <div className='flex justify-center'>
                        <button className="px-[8px] text-[#006BFF] font-semibold text-[14px] mt-[81px] py-[3px] rounded-full border-[1px] border-blue-500">
                          {/* Button content */}
                          <h2 className='flex gap-2 items-center'> <span className=' text-[18px] font-semibold'><BsChatTextFill/></span> protfoliyo</h2>
                        </button>
                      </div>
                       <div>
                       <h2 className='text-center text-5xl font-semibold max-w-[600px] mt-[35px] mx-auto'>Delegate the creation of your logo</h2>
                      <p className='text-[16px] font-[600] max-w-[880px] mx-auto text-center pt-[30px] pb-3'>We’ve created the simplest possible process, so that you can get on with your business without worry.</p>
        
                      <p className='text-[16px] max-w-[880px] mx-auto text-center py-[5px]'>Focus your energy on what makes your company grow: your customers, your projects, your ambitions.
        We turn your ideas into a strong identity, effortlessly.
        
        .</p>
                       </div>
                    </div>
    </div>
  )
}

export default Testimonials