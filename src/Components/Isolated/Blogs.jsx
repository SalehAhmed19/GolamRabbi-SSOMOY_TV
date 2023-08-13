import "keen-slider/keen-slider.min.css";
import React, { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import "../../Styles/MediaJobCircular.css";
import blog from "../../assets/images/bolg1.png";

const Blogs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <h1 className="pt-[26px] -mb-5 md:-mb-10 lg:-mb-20 custom-text-stroke-2 text-center text-[28px] md:text-[55px] lg:text-[100px] my-5">
        ব্লগ সমূহ
      </h1>
      <Fade down>
        <h1 className="text-primary text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold">
          ব্লগ সমূহ
        </h1>
      </Fade>
      <div className="lg:px-24 py-14 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-5 mx-5">
          <Zoom>
            <Link to={"/blogs"}>
              <div className="bg-white rounded-lg">
                <img className="w-full  rounded-lg" src={blog} alt="" />
                <div className="p-5">
                  <h3 className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-secondary font-bold">
                    বিশ্বের এক নম্বর কারখানা <br />
                    এখন বাংলাদেশে
                  </h3>
                  <p className="text-[#7B7B7B] 2xs:text-[12px]">
                    আজ ৩০ জুলাই ২০২৩ ইং রোজ রবিবার প্রকাশিত হয়েছে। জিপিএ ৫
                    <br />
                    পেয়েছে ১ লক্ষ্য ৮৫ হাজার...
                  </p>
                </div>
              </div>
            </Link>
          </Zoom>
          <Zoom>
            <Link to={"/blogs"}>
              <div className="bg-white rounded-lg">
                <img className="w-full  rounded-lg" src={blog} alt="" />
                <div className="p-5">
                  <h3 className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-secondary font-bold">
                    বিশ্বের এক নম্বর কারখানা <br />
                    এখন বাংলাদেশে
                  </h3>
                  <p className="text-[#7B7B7B] 2xs:text-[12px]">
                    আজ ৩০ জুলাই ২০২৩ ইং রোজ রবিবার প্রকাশিত হয়েছে। জিপিএ ৫
                    <br />
                    পেয়েছে ১ লক্ষ্য ৮৫ হাজার...
                  </p>
                </div>
              </div>
            </Link>
          </Zoom>
          <Zoom>
            <Link to={"/blogs"}>
              <div className="bg-white rounded-lg">
                <img className="w-full  rounded-lg" src={blog} alt="" />
                <div className="p-5">
                  <h3 className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-secondary font-bold">
                    বিশ্বের এক নম্বর কারখানা <br />
                    এখন বাংলাদেশে
                  </h3>
                  <p className="text-[#7B7B7B] 2xs:text-[12px]">
                    আজ ৩০ জুলাই ২০২৩ ইং রোজ রবিবার প্রকাশিত হয়েছে। জিপিএ ৫
                    <br />
                    পেয়েছে ১ লক্ষ্য ৮৫ হাজার...
                  </p>
                </div>
              </div>
            </Link>
          </Zoom>
        </div>
        <Zoom>
          <Link to="/blogs">
            <button
              style={{ fontFamily: "Hind Siliguri" }}
              className="block mx-auto 2xs:my-4 xs:my-6 sm:my-8 md:my-10 py-2 px-5 border-2 border-[#f40a5c] hover:bg-[#f40a5c] sm:w-[180px] md:w-[290px] text-center rounded-full text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]"
            >
              আরও ব্লগ দেখতে
            </button>
          </Link>
        </Zoom>
      </div>
    </div>
  );
};

export default Blogs;
