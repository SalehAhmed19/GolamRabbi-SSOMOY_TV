import React from "react";
import { Fade, Zoom } from "react-reveal";
import { EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/galleryImages/perons-3.jpg";
import img from "../../assets/images/quote.webp";
import signature from "../../assets/images/signeture.webp";
function Quotes() {
  return (
    <Fade down>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-2 relative lg:mx-40 text-basic xl:h-[70vh]">
            <div className="bg-[#0e0f14] lg:p-10 p-5 rounded-md relative flex items-center">
              <div className="w-1 rounded-full lg:h-1/2 h-2/5 bg-[#D9A017] mt-28 lg:mt-0"></div>
              <h3 className="pt-5 z-20 absolute 2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] mt-20 lg:mt-0 ml-5">
                " আপনার কি ইতিবাচক একটি স্বপ্ন আছে...?
                <br />
                সৎ সাহস নিয়ে সাধনা করে যান,
                <br />
                সফলতার পাশাপশি সার্থক আপনি হবেন-ই "
              </h3>
              <img
                className="lg:mt-60 mt-96 w-48 z-20"
                src={signature}
                alt=""
              />
            </div>
            <Zoom>
              <img
                className="absolute rounded-md right-0 lg:top-16 lg:w-7/12"
                src={img}
                alt=""
              />
            </Zoom>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-2 relative lg:mx-40 text-basic xl:h-[70vh]">
            <div className="bg-[#0e0f14] lg:p-10 p-5 rounded-md relative flex items-center">
              <div className="w-1 rounded-full lg:h-1/2 h-2/5 bg-[#D9A017] mt-28 lg:mt-0"></div>
              <h3 className="pt-5 z-20 absolute 2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] mt-20 lg:mt-0 ml-5">
                " আপনার কি ইতিবাচক একটি স্বপ্ন আছে...?
                <br />
                সৎ সাহস নিয়ে সাধনা করে যান,
                <br />
                সফলতার পাশাপশি সার্থক আপনি হবেন-ই "
              </h3>
              <img
                className="lg:mt-60 mt-96 w-48 z-20"
                src={signature}
                alt=""
              />
            </div>
            <Zoom>
              <img
                className="absolute rounded-md right-0 lg:top-16 lg:w-7/12"
                src={img1}
                alt=""
              />
            </Zoom>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-2 relative lg:mx-40 text-basic xl:h-[70vh]">
            <div className="bg-[#0e0f14] lg:p-10 p-5 rounded-md relative flex items-center">
              <div className="w-1 rounded-full lg:h-1/2 h-2/5 bg-[#D9A017] mt-28 lg:mt-0"></div>
              <h3 className="pt-5 z-20 absolute 2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] mt-20 lg:mt-0 ml-5">
                " আপনার কি ইতিবাচক একটি স্বপ্ন আছে...?
                <br />
                সৎ সাহস নিয়ে সাধনা করে যান,
                <br />
                সফলতার পাশাপশি সার্থক আপনি হবেন-ই "
              </h3>
              <img
                className="lg:mt-60 mt-96 w-48 z-20"
                src={signature}
                alt=""
              />
            </div>
            <Zoom>
              <img
                className="absolute rounded-md right-0 lg:top-16 lg:w-7/12"
                src={img}
                alt=""
              />
            </Zoom>
          </div>
        </SwiperSlide>
      </Swiper>
    </Fade>
  );
}

export default Quotes;
