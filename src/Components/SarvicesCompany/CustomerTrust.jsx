import image1 from '../../assets/images (8).png';
import image2 from '../../assets/images (9).png';
import image3 from '../../assets/images (10).png';
import image4 from '../../assets/images (11).png';
import image5 from '../../assets/images (12).png';
import image6 from '../../assets/images (13).png';
import image7 from '../../assets/images (14).png';
import image8 from '../../assets/images (15).png';
import image9 from '../../assets/images (16).png';

const CustomerTrust = () => {
  return (
    <div className="py-[30px] px-4">
      <div className='flex md:flex-row flex-col gap-5 justify-between items-center'>
      <div className='w-full mx-auto md:w-[500px]'>
      <h2 className="text-[19px] text-center font-semibold">Over 200 customers</h2>
      <p className="text-[19px] text-center">have put their trust in us!</p>
      </div>
      <div>
      <div className='overflow-hidden'>
        <marquee className=" " behavior="scroll" direction="left">
          <div className="flex gap-24 mt-2">
            <img className="mr-10 w-50 h-20" src={image1} alt="" />
            <img className="mr-10 w-50 h-20" src={image2} alt="" />
            <img className="mr-10 w-50 h-20 " src={image3} alt="" />
            <img className="mr-10 w-50 h-20" src={image4} alt="" />
            <img className="mr-10 w-50 h-20" src={image5} alt="" />
            <img className="mr-10 w-50 h-20" src={image6} alt="" />
            <img className="mr-10 w-50 h-20" src={image7} alt="" />
            <img className="mr-10 w-50 h-20" src={image8} alt="" />
            <img className="mr-10 w-50 h-20" src={image9} alt="" />
          </div>
        </marquee>
      </div>
    </div>
      </div>
    </div>
  );
};

export default CustomerTrust;
