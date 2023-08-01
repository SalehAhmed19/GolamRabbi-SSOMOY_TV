import React from "react";
import { Zoom } from "react-reveal";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../Styles/Features.css";
import bg from "../../assets/images/feature-bg.jpg";
function Features() {
  const features = [
    { _id: 1, qty: "২৩০+", title: "ফিচার লেখা" },
    { _id: 2, qty: "১০০০+", title: "সিভি রাইটিং" },
    { _id: 3, qty: "২৩০+", title: "ফিচার লেখা" },
  ];
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="p-14 rounded-lg"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        // loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={{
        //   prevEl: ".personal-btn-prev",
        //   nextEl: ".personal-btn-next",
        // }}
        modules={[ Pagination]}
        breakpoints={{
          668: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className=""
      >
         {features.map((feature , index) => (
          <SwiperSlide key={index} className="mb-10">
            <Zoom>
            <div
              key={feature._id}
              className="text-xl lg:text-3xl font-bold text-[#FCAE01] text-center bg-[#03273B] custom-round h-56 px-5 flex justify-center items-center mx-5"
            >
              <div className="">
                <h3 className="mr-3">{feature.qty}</h3>
                <h3 className="text-[#fff]">{feature.title}</h3>
              </div>
            </div>
          </Zoom>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Features;
