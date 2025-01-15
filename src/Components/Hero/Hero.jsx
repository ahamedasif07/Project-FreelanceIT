import { IoMdArrowRoundForward } from "react-icons/io";
const Hero = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-center">
            <button className="px-[8px] text-[#006BFF] font-semibold text-[14px] mt-[81px] py-[3px] rounded-full  border-[1px] border-blue-500">Fast, but smart</button>
        </div>
        <div>
          <div className="mt-[40px]">
          <h2 className="text-[56px] font-extrabold px-[56px] text-center leading-snug">
      Optimizing your brand image has become
      <span className="text-6xl font-bold ml-[30px] text-[#006BFF] animate-underline-pulse duration-2000">
  essential!
</span>
       </h2>
       <h2 className="text-center px-5 mt-[40px] max-w-[600px] mx-auto font-semibold">
        
We create customized logos with minimalist, timeless designs
for Solopreneurs, Startups, SaaS and SMEs.
       </h2>

       <div className="flex gap-3 items-center justify-center mt-5">
       <button className="bg-[#006BFF] text-white px-3 py-2 text-[14px] rounded-lg flex items-center gap-1 hover:scale-105 hover:shadow-lg transition-all duration-300">
  See Our Offer 
  <span><IoMdArrowRoundForward/></span>
</button>

<button className="text-[#006BFF] bg-white px-3 py-2 border border-blue-500 hover:text-white hover:bg-[#006BFF] text-[14px] rounded-lg transition-all duration-300">
  See Our Offer 
</button>

       </div>

      
          </div>
            
        </div>
    </div>
  )
}

export default Hero