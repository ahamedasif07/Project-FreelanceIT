import { IoMdArrowRoundForward } from "react-icons/io";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import CustomerTrust from "../SarvicesCompany/CustomerTrust";

const Hero = () => {
    const ourSarviceList = [
        {title : 'Specializing in timeless, minimalist customization'},
        {title : 'Designed by real experts, not AI'},
        {title : '100% automated process'},
        {title : 'Delivered in 5 days'},
    ]
  return (
   
   <div className="bg-gradient-to-b from-white shadow-b-lg to-[#E9EFFE]">
    <div className="max-w-screen-lg mx-auto">
    <div className="flex justify-center">
        <button className="px-[8px]  text-[#006BFF] font-semibold text-[14px] mt-[81px] py-[3px] rounded-full  border-[1px] border-blue-500">Fast, but smart</button>
    </div>
    <div className="">
        <div className="mt-[40px]">
            <h2 className="lg:text-[56px] text-wrap lg:text-6xl text-4xl font-extrabold px-4 md:px-[46px] text-center leading-snug">
                Optimizing your brand image has become
                {/* <span className="lg:text-[56px] text-4xl font-bold ml-[10px] md:ml-[30px] text-[#006BFF] animate-underline-pulse duration-2000">
                    essential!
                </span> */}
                <span className="text-blue-600"> essential!</span>
            </h2>
            <h2 className="text-center px-5 mt-[40px] max-w-[600px] mx-auto font-semibold">
                We create customized logos with minimalist, timeless designs for Solopreneurs, Startups, SaaS, and SMEs.
            </h2>

            <div className="flex md:flex-row flex-col gap-3 items-center justify-center mt-5">
                <button className="bg-[#006BFF] text-white px-4 py-2 text-[14px] rounded-lg flex items-center gap-1 hover:scale-105 hover:shadow-lg transition-all duration-300">
                    See Our Offer 
                    <span><IoMdArrowRoundForward/></span>
                </button>

                <button className="text-[#006BFF] bg-white px-4 py-2 border border-blue-500 hover:text-white  hover:bg-[#006BFF] text-[14px] rounded-lg transition-all duration-300">
                    See Our Offer 
                </button>
            </div>

            {/* Our services titles */}
            <div className="mt-5 md:mt-[50px] flex gap-3 px-4 md:px-[40px] flex-wrap mx-auto justify-center">
                {ourSarviceList.map(sarvice => (
                    <div key={sarvice} className="text-center">
                        <div>
                            <h2 className="flex items-center gap-3"><span className="text-[#006BFF]"><IoCheckmarkDoneCircleSharp/></span>{sarvice.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>

    {/* Marquee tags section starts */}
    <CustomerTrust />
    {/* Marquee tags section ends */}
</div>
   </div>


  )
}

export default Hero