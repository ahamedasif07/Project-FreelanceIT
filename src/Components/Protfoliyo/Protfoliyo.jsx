import React from 'react';
import { CgProfile } from "react-icons/cg";




const protfoliyo = () => {
  const portfolio = [
    { id: 1, image: "https://i.ibb.co.com/Sx0YSZb/protfoliyo-Image1.png" },
    { id: 2, image: "https://i.ibb.co.com/PYB3xr3/protfoliyo-Image2.png" },
    { id: 3, image: "https://i.ibb.co.com/pKSrPSX/protfoliyo-Image3.png" },
    { id: 4, image: "https://i.ibb.co.com/xmf47FK/protfoliyo-Image4.png" },
    { id: 5, image: "https://i.ibb.co.com/bPFMPQ2/protfoliyo-Image5.png" },
    { id: 6, image: "https://i.ibb.co.com/1MThRMc/protfoliyo-Image6.png" },
    { id: 7, image: "https://i.ibb.co.com/xHHnJpY/protfoliyo-Image7.png" },
    { id: 8, image: "https://i.ibb.co.com/sbwtHR5/protfoliyo-Image8.png" },
    { id: 9, image: "https://i.ibb.co.com/KqNtFf5/protfoliyo-Image9.png" }
  ];
  
  return (
    <div className='max-w-screen-lg mx-auto'>
    <div>
    <div className='flex justify-center'>
        <button className="px-[8px] text-[#006BFF] font-semibold text-[14px] mt-[81px] py-[3px] rounded-full border-[1px] border-blue-500">
          {/* Button content */}
          <h2 className='flex gap-2 items-center'> <span className=' text-[18px] font-semibold'><CgProfile></CgProfile></span> protfoliyo</h2>
        </button>
      </div>
       <div>
       <h2 className='text-center text-5xl font-semibold max-w-[600px] mt-[35px] mx-auto'>We don't “just” design,
      we create impact</h2>
      <p className='text-[16px] max-w-[880px] mx-auto text-center py-[30px]'>Our aim is to make you more professional, strengthen your authority and set you apart from the competition.
      Take a look at some of our projects, carried out for customers all over the world, in a variety of sectors.</p>
       </div>
    </div>
     <div className='grid grid-cols-3 justify-center gap-2 '>
     {portfolio.map(item => <div key={item.id}>
        <img className='border-2 border-gray-300 hover:border-gray-400 rounded-md' src={item.image} alt='image'></img>
      </div>)}
     </div>
    </div>
  );
};

export default protfoliyo;
