import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import { Fade, Zoom } from "react-reveal";
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
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
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
        <h2 className="text-primary text-center py-10 text-4xl font-bold">
          মিডিয়া জব সার্কুলার
        </h2>
      </Fade>
      <div className="lg:mx-24 mx-5">
        <div>
          <Zoom>
            <Swiper
              style={{
                "--swiper-pagination-color": "#FFBA08",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "20spx",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
              }}
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
                <SwiperSlide className="mb-14">
                  <div
                    key={a}
                    className="keen-slider__slide rounded-lg bg-[#222]"
                  >
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
                        <span className="font-bold">প্রতিষ্ঠানঃ </span> সময় টিভি
                      </p>
                    </div>
                  </div>
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
