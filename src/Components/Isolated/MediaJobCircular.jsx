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
import jobImage from "../../assets/images/Job.png";
import bg from "../../assets/images/job-bg.jpg";
import MediaJobCard from "./Cards/MediaJobCard";
const MediaJobCircular = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);
  const medialJobCirculars = [
    { id: 1, image: jobImage },
    { id: 2, image: jobImage },
    { id: 3, image: jobImage },
    { id: 4, image: jobImage },
    { id: 5, image: jobImage },
    { id: 6, image: jobImage },
    { id: 7, image: jobImage },
    { id: 8, image: jobImage },
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
              {medialJobCirculars.map((circulars, index) => (
                <SwiperSlide className="mb-14 cursor-pointer">
                  <MediaJobCard circulars={circulars} key={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default MediaJobCircular;