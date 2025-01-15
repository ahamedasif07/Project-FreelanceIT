import { useState, useEffect } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { RxCross2 } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectLen, setSelectLen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    // Add event listener for scroll
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-[#E9EFFE] ${scroll ? 'fixed top-0 left-0 right-0 z-50 shadow-sm' : ''}`}>
      <div className="flex justify-between md:justify-start px-[30px] md:gap-[60px] items-center py-6 md:max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold">Freelance It</h2>

        {/* Main Navigation for larger screens */}
        <div className="hidden md:flex items-center gap-3">
          <ul className="flex items-center gap-5">
            <li className="text-lg font-[400]">Portfolio</li>
            <li className="text-lg font-[400]">Process</li>
            <li className="text-lg font-[400]">Testimonials</li>
            <li className="text-lg font-[400]">Pricing</li>
            <li className="text-lg font-[400]">
              <button 
                className="flex items-center space-x-2"
                onClick={() => setSelectLen(!selectLen)}
              >
                <div className='flex gap-3 items-center'>
                  <span>Eng</span>
                  {selectLen ? <FaAngleUp /> : <FaAngleDown />}
                </div>
              </button>

              {/* Language Dropdown menu */}
              <ul 
                className={`absolute left-120 mt-2 w-40 bg-white shadow-lg rounded-md text-black 
                            transform transition-all duration-500 ease-in-out ${selectLen ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0 hidden'}`}
              >
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Frn</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3">
          {isDropdownOpen ? (
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="md:hidden text-[22px] block"
            >
              <RxCross2 />
            </button>
          ) : (
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="md:hidden text-[22px] block"
            >
              <RiMenu3Fill />
            </button>
          )}

          {/* Mobile Dropdown Menu */}
          <div className={`${isDropdownOpen ? 'opacity-100' : 'opacity-100'}`}>
            <ul 
              className={`absolute left-0 w-full bg-[#E9EFFE] text-center py-2 text-black mt-10 z-10 
                          transform transition-all duration-500 ease-in-out opacity-0 
                          ${isDropdownOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-20px]'}`}
            >
              <li className="px-4 py-2 text-[17px] font-[400] hover:bg-gray-100 cursor-pointer">Portfolio</li>
              <li className="px-4 py-2 text-[17px] font-[400] hover:bg-gray-100 cursor-pointer">Process</li>
              <li className="px-4 py-2 text-[17px] font-[400] hover:bg-gray-100 cursor-pointer">Testimonials</li>
              <li className="px-4 py-2 text-[17px] font-[400] hover:bg-gray-100 cursor-pointer">Pricing</li>
              <li className="font-semibold flex justify-center">
                <button 
                  className="flex items-center space-x-2"
                  onClick={() => setSelectLen(!selectLen)}
                >
                  <div className='flex gap-3 items-center'>
                    <span>Eng</span>
                    {selectLen ? <FaAngleUp /> : <FaAngleDown />}
                  </div>
                </button>

                {/* Language Dropdown menu */}
                <ul 
                  className={`absolute left-30 mt-10 w-40 bg-white shadow-lg rounded-md text-black 
                              transform transition-all duration-500 ease-in-out ${selectLen ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0 hidden'}`}
                >
                  <li className="px-4 py-2 bg-[#E9EFFE] cursor-pointer">frn</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
