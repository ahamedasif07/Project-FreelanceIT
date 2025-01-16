import React from 'react';
import { CgProfile } from "react-icons/cg";



const protfoliyo = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <button className="px-[8px] text-[#006BFF] font-semibold text-[14px] mt-[81px] py-[3px] rounded-full border-[1px] border-blue-500">
          {/* Button content */}
          <h2 className='flex gap-2 items-center'> <span className=' text-[18px] font-semibold'><CgProfile></CgProfile></span> protfoliyo</h2>
        </button>
      </div>
      <h2 className='text-center text-5xl font-semibold max-w-[600px] mt-[35px] mx-auto'>We don't “just” design,
      we create impact</h2>
      <p className='text-[16px] max-w-[880px] mx-auto text-center py-[30px]'>Our aim is to make you more professional, strengthen your authority and set you apart from the competition.
      Take a look at some of our projects, carried out for customers all over the world, in a variety of sectors.</p>
    </div>
  );
};

export default protfoliyo;
