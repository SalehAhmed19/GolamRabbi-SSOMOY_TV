import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import bg from "../../assets/images/book-bg.png";
import book from "../../assets/images/book1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../Styles/BookSection.css";
import { EffectCoverflow, Pagination } from "swiper";

function BookSection() {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="py-20"
    >
      <div>
        <div className="mb-5 text-center">
          <h3 className="text-primary font-bold text-4xl mb-2">
            বই মেলায় আসছে
          </h3>
          <p className="text-basic text-xl font-bold">এপ্রিল ১৪</p>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          // pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {/* <SwiperSlide>
            <img
              className="md:w-72 lg:w-96 mx-auto shadow-2xl"
              src={book}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:w-72 lg:w-96 mx-auto shadow-2xl"
              src={book}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:w-72 lg:w-96 mx-auto shadow-2xl"
              src={book}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:w-72 lg:w-96 mx-auto shadow-2xl"
              src={book}
              alt=""
            />
          </SwiperSlide> */}
          {/* <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
          <SwiperSlide>
            <img
              className="md:w-72 lg:w-96 mx-auto shadow-2xl"
              src={book}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:w-72 lg:w-96 mx-auto shadow-2xl"
              src={book}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:w-72 lg:w-96 mx-auto shadow-2xl"
              src={book}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:w-72 lg:w-96 mx-auto shadow-2xl"
              src={book}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:w-72 lg:w-96 mx-auto shadow-2xl"
              src={book}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:w-72 lg:w-96 mx-auto shadow-2xl"
              src={book}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:w-72 lg:w-96 mx-auto shadow-2xl"
              src={book}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:w-72 lg:w-96 mx-auto shadow-2xl"
              src={book}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:w-72 lg:w-96 mx-auto shadow-2xl"
              src={book}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <button className="block shadow-lg mx-auto my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl">
          কিনতে ক্লিক করো
        </button>
      </div>
    </div>
  );
}

export default BookSection;
