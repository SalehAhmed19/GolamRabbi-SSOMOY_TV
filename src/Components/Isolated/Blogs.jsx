import "keen-slider/keen-slider.min.css";
import React, { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import "../../Styles/MediaJobCircular.css";
import blog from "../../assets/images/blogh.png";

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
              <div className="bg-white rounded-lg flex">
                <img className="w-[200px]  rounded-l-lg" src={blog} alt="" />
                <div className="p-5">
                  <h3 className="text-2xl text-secondary font-bold">
                    বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে
                  </h3>
                  <p className="text-[#7B7B7B]">
                    বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে
                  </p>
                </div>
              </div>
            </Link>
          </Zoom>
          <Zoom>
            <Link to={"/blogs"}>
              <div className="bg-white rounded-lg flex flex-col">
                <img className="w-  rounded-l-lg" src={blog} alt="" />
                <div className="p-5">
                  <h3 className="text-2xl text-secondary font-bold">
                    বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে
                  </h3>
                  <p className="text-[#7B7B7B]">
                    বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে
                  </p>
                </div>
              </div>
            </Link>
          </Zoom>
          <Zoom>
            <Link to={"/blogs"}>
              <div className="bg-white rounded-lg flex">
                <img className="w-[200px]  rounded-l-lg" src={blog} alt="" />
                <div className="p-5">
                  <h3 className="text-2xl text-secondary font-bold">
                    বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে
                  </h3>
                  <p className="text-[#7B7B7B]">
                    বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে
                  </p>
                </div>
              </div>
            </Link>
          </Zoom>
        </div>
        <Fade up>
          <Link to="/blogs">
            <button className="block mx-auto my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl">
              আরও ব্লগ দেখতে
            </button>
          </Link>
        </Fade>
      </div>
    </div>
  );
};

export default Blogs;
