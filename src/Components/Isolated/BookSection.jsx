import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import book1 from "../../assets/images/book1.jpg";

function BookSection() {
  return (
    <>
      <div className="py-20 relative bg-[#111118]">
        <div className="absolute  md:left-[240px] lg:left-[650px]  border-2 border-[#D89F17] border-dashed  opacity-[0.5] md:w-[150px] md:h-[150px]  lg:w-[180px] lg:h-[180px]  rounded-full"></div>
        <div className="absolute md:-top-[80px] md:right-1  border-b-2  border-[#D89F17] border-dashed   md:w-[150px] md:h-[150px]  lg:w-[180px] lg:h-[180px]  rounded-full"></div>
        <div className="absolute md:-bottom-[80px] md:left-1 border-t-2  border-[#D89F17] border-dashed   md:w-[150px] md:h-[150px]  lg:w-[180px] lg:h-[180px]  rounded-full"></div>
        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            navigation={{
              prevEl: ".btn-prev",
              nextEl: ".btn-next",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className=""
          >
            <SwiperSlide>
              <div className="w-full mb-5">
                <div className="text-primary font-bold mx-16 lg:mx-20">
                  <h3 className="text-4xl mb-2">বই মেলায় আসছে</h3>
                  <p className="text-xl mb-3">এপ্রিল ১৪</p>
                </div>
                <div className="flex justify-center items-center">
                  <div className="">
                    <img
                      className="w-64 md:72 lg:w-96 rounded-lg  shadow-2xl"
                      src={book1}
                      alt=""
                    />
                    <button className="mx-8 mt-8 lg:mx-24  border-2 border-[#D89F17] border-dashed px-14 py-2 rounded-full text-white font-bold text-xl">
                      কিনতে চাও?
                    </button>
                  </div>
                </div>
                <div className="flex justify-end mt-8 lg:-my-10">
                  <button className="bg-primary font-bold p-5 text-base md:text-3xl">
                    মূল্যঃ ২০৬ টাকা
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full mb-5">
                <div className="text-primary font-bold mx-16 lg:mx-20">
                  <h3 className="text-4xl mb-2">বই মেলায় আসছে</h3>
                  <p className="text-xl mb-3">এপ্রিল ১৪</p>
                </div>
                <div className="flex justify-center items-center">
                  <div className="">
                    <img
                      className="w-64 md:72 lg:w-96 rounded-lg  shadow-2xl"
                      src={book1}
                      alt=""
                    />
                    <button className="mx-8 mt-8 lg:mx-24  border-2 border-[#D89F17] border-dashed px-14 py-2 rounded-full text-white font-bold text-xl">
                      কিনতে চাও?
                    </button>
                  </div>
                </div>
                <div className="flex justify-end mt-8 lg:-my-10">
                  <button className="bg-primary font-bold p-5 text-base md:text-3xl">
                    মূল্যঃ ২০৬ টাকা
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full mb-5">
                <div className="text-primary font-bold mx-16 lg:mx-20">
                  <h3 className="text-4xl mb-2">বই মেলায় আসছে</h3>
                  <p className="text-xl mb-3">এপ্রিল ১৪</p>
                </div>
                <div className="flex justify-center items-center">
                  <div className="">
                    <img
                      className="w-64 md:72 lg:w-96 rounded-lg  shadow-2xl"
                      src={book1}
                      alt=""
                    />
                    <button className="mx-8 mt-8 lg:mx-24  border-2 border-[#D89F17] border-dashed px-14 py-2 rounded-full text-white font-bold text-xl">
                      কিনতে চাও?
                    </button>
                  </div>
                </div>
                <div className="flex justify-end mt-8 lg:-my-10">
                  <button className="bg-primary font-bold p-5 text-base md:text-3xl">
                    মূল্যঃ ২০৬ টাকা
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full mb-5">
                <div className="text-primary font-bold mx-16 lg:mx-20">
                  <h3 className="text-4xl mb-2">বই মেলায় আসছে</h3>
                  <p className="text-xl mb-3">এপ্রিল ১৪</p>
                </div>
                <div className="flex justify-center items-center">
                  <div className="">
                    <img
                      className="w-64 md:72 lg:w-96 rounded-lg  shadow-2xl"
                      src={book1}
                      alt=""
                    />
                    <button className="mx-8 mt-8 lg:mx-24  border-2 border-[#D89F17] border-dashed px-14 py-2 rounded-full text-white font-bold text-xl">
                      কিনতে চাও?
                    </button>
                  </div>
                </div>
                <div className="flex justify-end mt-8 lg:-my-10">
                  <button className="bg-primary font-bold p-5 text-base md:text-3xl">
                    মূল্যঃ ২০৬ টাকা
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full mb-5">
                <div className="text-primary font-bold mx-16 lg:mx-20">
                  <h3 className="text-4xl mb-2">বই মেলায় আসছে</h3>
                  <p className="text-xl mb-3">এপ্রিল ১৪</p>
                </div>
                <div className="flex justify-center items-center">
                  <div className="">
                    <img
                      className="w-64 md:72 lg:w-96 rounded-lg  shadow-2xl"
                      src={book1}
                      alt=""
                    />
                    <button className="mx-8 mt-8 lg:mx-24  border-2 border-[#D89F17] border-dashed px-14 py-2 rounded-full text-white font-bold text-xl">
                      কিনতে চাও?
                    </button>
                  </div>
                </div>
                <div className="flex justify-end mt-8 lg:-my-10">
                  <button className="bg-primary font-bold p-5 text-base md:text-3xl">
                    মূল্যঃ ২০৬ টাকা
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* previous btn */}
          <div className="btn-prev z-10 cursor-pointer absolute top-[240px] left-[10px] md:top-[250px] lg:top-[320px] md:left-[90px] bg-[#111118] rounded-full p-1 lg:p-3 w-[30px] lg:w-[45px] ">
            <span className="text-primary font-bold text-xl">
              <MdOutlineKeyboardArrowLeft />
            </span>
          </div>
          {/* next btn */}
          <div className="btn-next z-10 cursor-pointer absolute top-[240px] right-[10px] md:top-[250px] lg:top-[320px] md:right-[90px] bg-[#111118] rounded-full p-1 lg:p-3 w-[30px] lg:w-[45px] ">
            <span className="text-primary font-bold text-xl">
              <MdOutlineKeyboardArrowRight />
            </span>
          </div>
        </div>

        <div className="relative space-y-5 top-0">
          <div className="absolute -top-[490px] w-full text-white text-4xl bg-primary h-[10px]"></div>
          <div className="absolute -top-[480px] w-full bg-primary h-[40px]"></div>
          <div className="absolute -top-[420px] w-full bg-primary h-[40px]"></div>
          <div className="absolute -top-[360px] w-full bg-primary h-[10px]"></div>
        </div>
      </div>
    </>
  );
}

export default BookSection;




