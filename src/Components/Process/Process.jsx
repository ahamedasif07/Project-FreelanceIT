import React, { useEffect } from 'react'
import { FaWandMagicSparkles } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const Process = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration (in milliseconds)
          offset: 200, // Offset from the top before the animation starts
          easing: "ease-in-out", // Animation easing
          delay: 100, // Delay before the animation starts
        });
      }, []);

  return (
    <div className='max-w-screen-md px-4 mx-auto'>
          <div>
            <div className='flex justify-center'>
                <button className="px-[8px] text-[#006BFF] font-semibold text-[14px] mt-[81px] py-[3px] rounded-full border-[1px] border-blue-500">
                  {/* Button content */}
                  <h2 className='flex gap-2 items-center'> <span className=' text-[18px] font-semibold'><FaWandMagicSparkles/> </span> protfoliyo</h2>
                </button>
              </div>
               <div>
               <h2 className='text-center text-5xl font-semibold max-w-[600px] mt-[35px] mx-auto'>Delegate the creation of your logo</h2>
              <p className='text-[16px] font-[600] max-w-[880px] mx-auto text-center pt-[30px] pb-3'>We’ve created the simplest possible process, so that you can get on with your business without worry.</p>

              <p className='text-[16px] max-w-[880px] mx-auto text-center py-[5px]'>Focus your energy on what makes your company grow: your customers, your projects, your ambitions.
We turn your ideas into a strong identity, effortlessly.

.</p>
               </div>
               <div data-aos="fade-up">
               <img className='text-center border   mt-[30px] md:mt-[50px] mb-4 h-[300px]  md:h-[400px] w-full'
        src="https://wedooble.com/wp-content/uploads/2024/12/jhjh.svg" 
        alt="Example SVG" 
      
      />
               </div>
            </div>
    </div>
  )
}

export default Process