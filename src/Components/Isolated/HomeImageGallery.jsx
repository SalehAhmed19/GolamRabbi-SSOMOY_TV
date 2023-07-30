import React from "react";
import { Fade } from "react-reveal";
import person3 from "../../assets/galleryImages/perons-3.jpg";
import person1 from "../../assets/galleryImages/person-1.jpeg";
import person2 from "../../assets/galleryImages/person-2.jpeg";
import person4 from "../../assets/galleryImages/person-4.jpg";
const HomeImageGallery = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <h1 className="pt-[26px] -mb-5 md:-mb-10 lg:-mb-20 custom-text-stroke-1 text-center text-[28px] md:text-[55px] lg:text-[100px] my-5">
       গ্যালারি
        </h1>
        <Fade down>
          <h1 className="text-primary text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold">
         গ্যালারি
          </h1>
        </Fade>   
          <div className="grid grid-cols-6 gap-7 pt-16 pb-28">
          <img src={person1} alt="gallery-images" className="w-[268px] h-[268px] object-cover rounded-lg shadow-lg" />
          <img src={person2} alt="gallery-images" className="w-[268px] h-[268px] object-cover rounded-lg shadow-lg" />
          <img src={person3} alt="gallery-images" className="w-[268px] h-[268px] object-cover rounded-lg shadow-lg" />
          <img src={person4} alt="gallery-images" className="w-[54px] h-[268px] object-cover rounded-lg shadow-lg" />
          <img src={person1} alt="gallery-images" className="w-[36px] h-[268px] object-cover rounded-lg shadow-lg" />
          <img src={person2} alt="gallery-images" className="w-[8px] h-[268px] object-cover rounded-lg shadow-lg" />
          </div>
        {/* <Link
          to="/gallery"
          className="block md:mx-[270px] lg:mx-[450px] my-10  py-2 border-2 border-[#d89f17] hover:bg-[#d89f17] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl"
        >
          আরও দেখুন
        </Link> */}
      </div>
    </div>
  );
};

export default HomeImageGallery;
