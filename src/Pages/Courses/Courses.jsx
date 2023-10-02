import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Fade } from "react-reveal";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseCard from "../../Components/Isolated/Cards/CourseCard";
import "../../Styles/Events.css";
import leadership from "../../assets/images/leadership.jpg";
import life from "../../assets/images/life.jpg";
import media from "../../assets/images/media.jpg";

function Courses() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 20 },
      },
    },
    slides: { perView: 1 },
    created() {
      setLoaded(true);
    },
  });

  const mediaCourse = [
    {
      name: "1Media Mastery: Unleashing the Power of Communication",
      img: media,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "2Media Mastery: Unleashing the Power of Communication",
      img: media,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "3Media Mastery: Unleashing the Power of Communication",
      img: media,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "Digital Storytelling: Crafting Compelling Media Narratives",
      img: media,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "Media Evolution: Adapting to the Digital Landscape",
      img: media,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "Media Magic: The Art and Science of Engaging Audiences",
      img: media,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "Media Magic: The Art and Science of Engaging Audiences",
      img: media,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
  ];
  const leadershipCourse = [
    {
      name: "Leadership Mastery: Unlocking Your Full Potential",
      img: leadership,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "Leadership Mastery: Unlocking Your Full Potential",
      img: leadership,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "Leadership Mastery: Unlocking Your Full Potential",
      img: leadership,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "The Art of Effective Leadership: Inspire, Influence, and Impact",
      img: leadership,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "Leading with Purpose: Guiding Others Towards Success",
      img: leadership,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "Strategic Leadership: Navigating Complexity and Driving Results",
      img: leadership,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "Strategic Leadership: Navigating Complexity and Driving Results",
      img: leadership,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
  ];
  const lifeCourse = [
    {
      name: "Life Mastery: Unlocking Your Full Potential",
      img: life,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "Life Mastery: Unlocking Your Full Potential",
      img: life,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "Life Mastery: Unlocking Your Full Potential",
      img: life,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "The Art of Living: Cultivating a Fulfilling and Balanced Life",
      img: life,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "Personal Growth and Development: Nurturing Your Best Self",
      img: life,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "Discovering Your Life's Purpose: Aligning Passion and Meaning",
      img: life,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
    {
      name: "Discovering Your Life's Purpose: Aligning Passion and Meaning",
      img: life,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
    },
  ];

  return (
    <div className="lg:px-24 py-20 p-5 pb-36">
      <Fade down>
        <h2 className="mt-5 md:mt-20 mb-5  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[33px] lg:text-[38px] xl:text-[43px] 2xl:text-[48px] text-primary text-center font-bold">
          কোর্স সমূহ
        </h2>
      </Fade>
      {/* mediaCourse */}
      <div className="my-10">
        {/* title and arrows */}
        <div className="flex justify-between items-center">
          <h3 className="text-primary 2xs:text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold my-5">
            মিডিয়া কোর্স
          </h3>
          <div className="flex space-x-5">
            {/* prev btn */}
            <div className="media-btn-prev cursor-pointer bg-primary rounded-full w-[20px]">
              <span className="font-bold text-xl">
                <MdOutlineKeyboardArrowLeft />
              </span>
            </div>
            {/* next btn */}
            <div className="media-btn-next cursor-pointer  bg-primary rounded-full w-[20px] ">
              <span className="font-bold text-xl">
                <MdOutlineKeyboardArrowRight />
              </span>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          // loop={true}
          navigation={{
            prevEl: ".media-btn-prev",
            nextEl: ".media-btn-next",
          }}
          modules={[Navigation]}
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
          className=""
        >
          {mediaCourse?.map((course, index) => (
            <SwiperSlide key={index}>
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* leadershipCourse */}
      <div className="my-10">
        {/* title and arrows */}
        <div className="flex justify-between items-center">
          <h3 className="text-primary 2xs:text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold my-5">
            লিডারশীপ কোর্স
          </h3>
          <div className="flex space-x-5">
            {/* prev btn */}
            <div className="leadership-btn-prev cursor-pointer bg-primary rounded-full w-[20px]">
              <span className="font-bold text-xl">
                <MdOutlineKeyboardArrowLeft />
              </span>
            </div>
            {/* next btn */}
            <div className="leadership-btn-next cursor-pointer  bg-primary rounded-full w-[20px] ">
              <span className="font-bold text-xl">
                <MdOutlineKeyboardArrowRight />
              </span>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          // loop={true}
          navigation={{
            prevEl: ".leadership-btn-prev",
            nextEl: ".leadership-btn-next",
          }}
          modules={[Navigation]}
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
          className=""
        >
          {leadershipCourse?.map((course, index) => (
            <SwiperSlide key={index}>
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* lifeCourse */}
      <div className="my-10">
        {/* title and arrows */}
        <div className="flex justify-between items-center">
          <h3 className="text-primary 2xs:text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold my-5">
            লাইফ কোর্স
          </h3>
          <div className="flex space-x-5">
            {/* prev btn */}
            <div className="life-btn-prev cursor-pointer bg-primary rounded-full w-[20px]">
              <span className="font-bold text-xl">
                <MdOutlineKeyboardArrowLeft />
              </span>
            </div>
            {/* next btn */}
            <div className="life-btn-next cursor-pointer  bg-primary rounded-full w-[20px] ">
              <span className="font-bold text-xl">
                <MdOutlineKeyboardArrowRight />
              </span>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          // loop={true}
          navigation={{
            prevEl: ".life-btn-prev",
            nextEl: ".life-btn-next",
          }}
          modules={[Navigation]}
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
          className=""
        >
          {lifeCourse?.map((course, index) => (
            <SwiperSlide key={index}>
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Courses;

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
