import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Autoplay, EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import book2 from "../../assets/images/book-2.png";
import book1 from "../../assets/images/book1.jpg";
import hafCircle from "../../assets/images/half-circle.png";
function BookSection() {
  return (
    <>
      <div className="py-20 relative bg-[#111118]">
        <div className="absolute top-[150px] left-[30px] md:top-[120px] md:left-[200px] lg:left-[650px]  border-4 border-[#D89F17] border-dashed  opacity-[0.5] w-[80px] h-[80px] md:w-[120px] md:h-[120px]  lg:w-[180px] lg:h-[180px]  rounded-full"></div>
        {/* <div className="absolute md:-top-[80px] md:right-1  border-b-4  border-[#D89F17] border-dashed   md:w-[150px] md:h-[150px]  lg:w-[180px] lg:h-[180px]  rounded-full"></div> */}
        {/* <div className="absolute md:-bottom-[80px] md:left-1 border-t-4  border-[#D89F17] border-dashed   md:w-[150px] md:h-[150px]  lg:w-[180px] lg:h-[180px]  rounded-full"></div> */}
        <div className="relative">
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
            loop={true}
            navigation={{
              prevEl: ".book-btn-prev",
              nextEl: ".book-btn-next",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className=""
          >
            <SwiperSlide className="">
              <div className="w-full mb-5">
                <div className="text-primary font-bold mx-16 lg:mx-20">
                  <h3 className="text-4xl mb-2">বই মেলায় আসছে</h3>
                  <p className="text-xl mb-3">এপ্রিল ১৪</p>
                </div>
                <div className="flex justify-center items-center">
                  <div className="">
                    <img
                      className="drop-shadow-xl w-64 md:72 lg:w-96 rounded-lg  shadow-2xl"
                      src={book2}
                      alt=""
                    />
                    <button className="mx-8 mt-8 lg:mx-24  border-2 border-[#D89F17] border-dashed px-14 py-2 rounded-full text-white font-bold text-xl">
                      কিনতে চাও?
                    </button>
                  </div>
                </div>
                <div className="relative w-full h-[83px]">
                  <div className="mt-8 mr-5 lg:w-[20%] absolute right-0">
                    <button className="w-full bg-primary font-bold p-5  text-base md:text-2xl">
                      মূল্যঃ ২০৬ টাকা
                    </button>
                  </div>
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
                      className="drop-shadow-xl w-64 md:72 lg:w-96 rounded-lg  shadow-2xl"
                      src={book1}
                      alt=""
                    />
                    <button className="mx-8 mt-8 lg:mx-24  border-2 border-[#D89F17] border-dashed px-14 py-2 rounded-full text-white font-bold text-xl">
                      কিনতে চাও?
                    </button>
                  </div>
                </div>
                <div className="relative w-full h-[83px]">
                  <div className="mt-8 mr-5 lg:w-[20%] absolute right-0">
                    <button className="w-full bg-primary font-bold p-5  text-base md:text-2xl">
                      মূল্যঃ ২০৬ টাকা
                    </button>
                  </div>
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
                      className="drop-shadow-xl w-64 md:72 lg:w-96 rounded-lg  shadow-2xl"
                      src={book2}
                      alt=""
                    />
                    <button className="mx-8 mt-8 lg:mx-24  border-2 border-[#D89F17] border-dashed px-14 py-2 rounded-full text-white font-bold text-xl">
                      কিনতে চাও?
                    </button>
                  </div>
                </div>
                <div className="relative w-full h-[83px]">
                  <div className="mt-8 mr-5 lg:w-[20%] absolute right-0">
                    <button className="w-full bg-primary font-bold p-5  text-base md:text-2xl">
                      মূল্যঃ ২০৬ টাকা
                    </button>
                  </div>
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
                      className="drop-shadow-xl w-64 md:72 lg:w-96 rounded-lg  shadow-2xl"
                      src={book1}
                      alt=""
                    />
                    <button className="mx-8 mt-8 lg:mx-24  border-2 border-[#D89F17] border-dashed px-14 py-2 rounded-full text-white font-bold text-xl">
                      কিনতে চাও?
                    </button>
                  </div>
                </div>
                <div className="relative w-full h-[83px]">
                  <div className="mt-8 mr-5 lg:w-[20%] absolute right-0">
                    <button className="w-full bg-primary font-bold p-5  text-base md:text-2xl">
                      মূল্যঃ ২০৬ টাকা
                    </button>
                  </div>
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
                      className="drop-shadow-xl w-64 md:72 lg:w-96 rounded-lg  shadow-2xl"
                      src={book2}
                      alt=""
                    />
                    <button className="mx-8 mt-8 lg:mx-24  border-2 border-[#D89F17] border-dashed px-14 py-2 rounded-full text-white font-bold text-xl">
                      কিনতে চাও?
                    </button>
                  </div>
                </div>
                <div className="relative w-full h-[83px]">
                  <div className="mt-8 mr-5 lg:w-[20%] absolute right-0">
                    <button className="w-full bg-primary font-bold p-5  text-base md:text-2xl">
                      মূল্যঃ ২০৬ টাকা
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* previous btn */}
          <div className="book-btn-prev z-10 cursor-pointer absolute top-[230px] left-[10px]  lg:top-[415px] md:left-[90px] bg-[#111118] rounded-full p-1 lg:p-3 w-[30px] lg:w-[45px] ">
            <span className="text-primary font-bold text-xl">
              <MdOutlineKeyboardArrowLeft />
            </span>
          </div>
          {/* next btn */}
          <div className="book-btn-next z-10 cursor-pointer absolute top-[230px] right-[10px]  lg:top-[415px] md:right-[90px] bg-[#111118] rounded-full p-1 lg:p-3 w-[30px] lg:w-[45px] ">
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
        {/* right top shape */}
        <div className="absolute -top-[23px] right-[30px] md:-top-[40px] md:right-14 w-[50px] md:w-[100px] md:h-[100] -rotate-[90deg]">
          <img src={hafCircle} alt="" />
        </div>
        {/* left bottom shape */}
        <div className="absolute left-[29px] -bottom-[22px] md:-bottom-[47px] md:left-14 w-[50px] md:w-[100px] md:h-[100] rotate-[92deg]">
          <img src={hafCircle} alt="" />
        </div>
      </div>
    </>
  );
}

export default BookSection;




