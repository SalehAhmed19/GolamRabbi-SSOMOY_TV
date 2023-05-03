import React, { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../Styles/MediaJobCircular.css";

function Blogs() {
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
    <div className="lg:px-24 py-14 text-[#fff]">
      <div className="flex items-center justify-center">
        <div className="h-[2px] w-20 bg-[#fff] rounded-2xl"></div>
        <Fade down>
          <h2 className="text-center text-4xl font-bold mb-5 text-primary mx-10">
            ব্লগ
          </h2>
        </Fade>
        <div className="h-[2px] w-20 bg-[#fff] rounded-2xl"></div>
      </div>
      <Link to="/">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-5 mx-5">
          <Zoom>
            <Link to={"/professional-blogs"}>
              <h3 className="text-primary my-6 font-bold text-2xl">
                প্রফেশনাল ব্লগ
              </h3>
              <div className="relative">
                <img
                  className="opacity-50 rounded-md"
                  src="https://images.unsplash.com/photo-1484766280341-87861644c80d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                  alt=""
                />
                <div className="absolute bottom-[20px] mx-10">
                  <h3 className="text-2xl text-basic font-bold">
                    আবহাওয়া - আজকের আবহাওয়া কেমন থাকবে
                  </h3>
                  <p>
                    পড়ুন আজকের আবহাওয়ার খবর, ঢাকা সহ এই মুহুর্তের বাংলাদেশের
                    আবহাওয়ার খবর। জেনে নিন আবহাওয়ার পূর্বাভাস...
                  </p>
                </div>
              </div>
            </Link>
            <Link to={"/personal-blogs"}>
              <h3 className="text-primary my-6 font-bold text-2xl">
                পার্সোনাল ব্লগ
              </h3>
              <div className="relative">
                <img
                  className="opacity-50 rounded-md"
                  src="https://images.unsplash.com/photo-1484766280341-87861644c80d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                  alt=""
                />
                <div className="absolute bottom-[20px] mx-10">
                  <h3 className="text-2xl text-basic font-bold">
                    আবহাওয়া - আজকের আবহাওয়া কেমন থাকবে
                  </h3>
                  <p>
                    পড়ুন আজকের আবহাওয়ার খবর, ঢাকা সহ এই মুহুর্তের বাংলাদেশের
                    আবহাওয়ার খবর। জেনে নিন আবহাওয়ার পূর্বাভাস...
                  </p>
                </div>
              </div>
            </Link>
          </Zoom>
        </div>
      </Link>
      <Fade up>
        <Link to="/blogs">
          <button className="block mx-auto my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl">
            সব ব্লগ দেখতে
          </button>
        </Link>
      </Fade>
    </div>
  );
}

export default Blogs;
