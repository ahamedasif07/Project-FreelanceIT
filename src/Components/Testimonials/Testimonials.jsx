import React from 'react'
import { BsChatTextFill } from "react-icons/bs";
import ReviewCard from '../ReviewCard/ReviewCard';

const Testimonials = () => {
    const customerReviews = [
        {
          id:1,
          description: "The service provided by the team was nothing short of exceptional. They maintained clear and constant communication, ensuring that all of our requirements were met and even exceeded. The support throughout the process was outstanding, making it a stress-free and enjoyable experience. Highly recommended for anyone looking for reliable and professional services.",
          date: "2025-01-10",
          image: "https://i.ibb.co.com/yQnnW2Y/images-6.webp",
          name: "John Doe",
          companyName: "Tech Solutions Inc."
        },
        {
            id:2,
          description: "Working with this team was an absolute delight. Their professionalism and attention to detail were evident in every aspect of their work. They went above and beyond to ensure that our project was completed to the highest standards. Their ability to deliver on time and beyond expectations was truly impressive. We couldn’t have asked for a better experience.",
          date: "2025-01-12",
          image: "https://i.ibb.co.com/CKf9Wmw/images-2.webp",
          name: "Jane Smith",
          companyName: "Innovatech Ltd."
        },
        {
         id:3,
          description: "From start to finish, the team showcased remarkable dedication and expertise. Their approach was both innovative and efficient, making them a pleasure to collaborate with. They ensured that all aspects of our project were addressed with precision, resulting in a final product that surpassed our expectations. I would wholeheartedly recommend their services to anyone in need of top-notch solutions.",
          date: "2025-01-14",
          image: "https://i.ibb.co.com/xJPvHK9/images-1.webp",
          name: "Alex Johnson",
          companyName: "Future Ventures Co."
        },
        {
          id:4,
          description: "This team provided an absolutely amazing experience! Their creative vision and meticulous attention to detail brought our ideas to life in ways we never imagined possible. They were incredibly responsive and approachable, making the entire process smooth and enjoyable. The final outcome far exceeded our expectations, and we can’t thank them enough for their hard work and dedication.",
          date: "2025-01-15",
          image: "https://i.ibb.co.com/DrK6c0f/images-4.webp",
          name: "Emily Davis",
          companyName: "Creative Minds LLC"
        },
        {
          id:5,
          description: "I am thoroughly impressed by the professionalism and expertise of this team. They demonstrated a clear understanding of our needs and delivered outstanding results that aligned perfectly with our vision. The project was completed on time with exceptional quality, and their willingness to go the extra mile was truly commendable. A fantastic experience from start to finish.",
          date: "2025-01-16",
          image: "https://i.ibb.co.com/2P30pDr/images-18.png",
          name: "Michael Brown",
          companyName: "NextGen Enterprises"
        }
      ];
      
      
  return (
    <div className='max-w-screen-lg mx-auto px-4'>
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
       <div className='flex md:flex-row flex-col gap-7 py-4'>
        <div className='w-full md:w-1/3'>
         <h2 className='text-4xl font-bold leading-tight'>They trusted us and made <span className='text-[#006BFF]'>the right decision !</span> </h2>
         <h3 className='text-[16px] font-[500] mt-5'>At Wedooble, every project is a unique collaboration.
We listen, understand and translate your ideas into timeless, impactful designs.
Our customers’ comments speak for themselves: speed, creativity and tailor-made support.</h3>

<h3 className='text-[16px] font-[800] mt-5'>Find out what they have to say and be inspired!.</h3>
         
        </div>
         {/* revirw section start*/}
        <div className='md:w-2/3 w-full'>
     
        
      <div
  className="flex md:flex-row flex-col gap-5 overflow-auto min-h-screen max-h-[500px]">
  <div>
    {customerReviews.map((review) => (
      <ReviewCard key={review.id} review={review}></ReviewCard>
    ))}
  </div>
  <div className="mt-[70px]">
    {customerReviews.map((review) => (
      <ReviewCard key={review.id} review={review}></ReviewCard>
    ))}
  </div>
</div>
 </div>
 
        {/* review section ends */}
       </div>
       {/* main section of testimonials */}
    </div>
  )
}

export default Testimonials