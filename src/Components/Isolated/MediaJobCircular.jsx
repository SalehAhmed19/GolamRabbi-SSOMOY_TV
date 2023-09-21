import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../Styles/MediaJobCircular.css";
import mySwiper from "../../Styles/mySwiper.css";
import job from "../../assets/images/Job.png";
import bg from "../../assets/images/job-bg.jpg";

function MediaJobCircular() {
  const arr = [
    { id: 1, image: 1 },
    { id: 2, image: 2 },
    { id: 3, image: 3 },
    { id: 4, image: 4 },
    { id: 5, image: 5 },
    { id: 6, image: 6 },
    { id: 7, image: 7 },
    { id: 8, image: 8 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 40 },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="pb-10"
    >
      <Fade down>
        <h2 className="2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[33px] lg:text-[38px] xl:text-[43px] 2xl:text-[48px] text-primary text-center py-10  font-bold">
          মিডিয়া জব সার্কুলার
        </h2>
      </Fade>
      <div className="lg:mx-24 mx-5">
        <div>
          <Zoom>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                668: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[FreeMode, Pagination]}
              className={mySwiper}
            >
              {arr.map((a) => (
                <SwiperSlide className="mb-14 cursor-pointer">
                  <Link to={`/jobs/${a.id}`}>
                    <div key={a} className="rounded-lg bg-[#222]">
                      <img src={job} alt="" />
                      <div className="text-basic p-5">
                        <h3 className="text-xl">
                          <span className="font-bold">পদবিঃ </span> সাংবাদিক
                        </h3>
                        <p>
                          <span className="font-bold">আবেদনের শেষ তারিখঃ </span>{" "}
                          সাংবাদিক
                        </p>
                        <p>
                          <span className="font-bold">প্রতিষ্ঠানঃ </span> সময়
                          টিভি
                        </p>
                        <button className="block 2xs:my-4 xs:my-6 sm:my-8 md:my-5 md:mx-5 py-2 px-5 border-2 border-[#f40a5c] hover:bg-[#f40a5c] 2xs: sm:w-[180px] md:w-[290px] text-center rounded-full text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]">
                          আবেদন করো এখনি
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default MediaJobCircular;
