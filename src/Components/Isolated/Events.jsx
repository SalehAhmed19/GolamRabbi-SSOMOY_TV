import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  MdLocationOn
} from "react-icons/md";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../Styles/Events.css";
import bg from "../../assets/images/event-bg.jpg";
function Events() {
  const arr = [1, 2, 3, 4, 5, 6];
  const events = [
    {
      title: "জীবনের রূপকথা",
      date: "১২",
      month: "এপ্রিল",
      startingTime: "সকাল ০৮:০০",
      endingTime: "দুপুর ০২:০০",
      location: "মিরপুর, ঢাকা",
    },
    {
      title: "বেকারত্বের কালো মেঘ",
      date: "২৩",
      month: "এপ্রিল",
      startingTime: "সকাল ১০:০০",
      endingTime: "দুপুর ০১:০০",
      location: "ধানমন্ডি, ঢাকা",
    },
    {
      title: "জীবন নিয়ে কিছু কথা",
      date: "১০",
      month: "মে",
      startingTime: "সকাল ০৮:০০",
      endingTime: "দুপুর ০২:০০",
      location: "মিরপুর, ঢাকা",
    },
    {
      title: "জীবনের রূপকথা",
      date: "১৯",
      month: "জুন",
      startingTime: "সকাল ০৮:০০",
      endingTime: "দুপুর ০২:০০",
      location: "মিরপুর, ঢাকা",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow: "inset 0 0 0 2000px rgba(255, 0, 150, 0.1)",
      }}
      className=" lg:px-24 py-14 text-[#fff] px-5"
    >
      <Zoom>{/* <Advertisement2 /> */}</Zoom>
      <h1 className="-mb-20 custom-text-stroke-2 text-center text-[100px] my-5">
        আসন্ন ইভেন্টস
      </h1>
      <Fade down>
        <h1
          style={{ fontFamily: "Hind Siliguri" }}
          className="text-white text-center text-[41px] font-bold"
        >
          আসন্ন ইভেন্টস
        </h1>
      </Fade>
      <Fade up>
        <div className="relative mt-10 cursor-pointer max-w-7xl mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            // loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".previous-btn",
              nextEl: ".next-btn",
            }}
            modules={[Navigation, Pagination]}
            className=""
          >
            {events.map((event, idx) => (
              <SwiperSlide key={idx}>
                <div className="mb-10">
                  <div className="-p-5 flex items-center">
                    <div className="text-primary mr-5 border-2 bg-white text-secondary shadow-xl p-5  rounded-md">
                      <h2
                        className="text-6xl font-bold drop-shadow-xl"
                        style={{ fontFamily: "Hind Siliguri" }}
                      >
                        {event.date}
                      </h2>
                      <p
                        className="text-center text-black font-bold"
                        style={{ fontFamily: "Hind Siliguri" }}
                      >
                        {event.month}
                      </p>
                    </div>
                    <div>
                      <h4 className="my-3 font-bold text-2xl text-white">
                        {event.title}
                      </h4>
                      <hr />
                      <p className="my-3 flex items-center text-[#c5c5c5]">
                        <AiOutlineClockCircle className="mr-2" />
                        {event.startingTime} ঘটিকা - {event.endingTime} ঘটিকা
                      </p>
                      <p className="my-3 flex items-center text-[#c5c5c5]">
                        <MdLocationOn className="mr-2" />
                        {event.location}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* previous btn */}
          {/* <div
            className={`hidden md:block previous-btn cursor-pointer absolute top-14  -left-4 lg:-left-16 text-black bg-primary rounded-full p-1 lg:p-3 lg:w-[45px] `}
          >
            <span className="font-bold text-xl">
              <MdOutlineKeyboardArrowLeft />
            </span>
          </div> */}
          {/* next btn */}
          {/* <div className="hidden md:block next-btn cursor-pointer absolute top-14  -right-4 lg:-right-16 text-black bg-primary rounded-full p-1 lg:p-3 lg:w-[45px] ">
            <span className="font-bold text-xl">
              <MdOutlineKeyboardArrowRight />
            </span>
          </div> */}
          <div className="my-5 select-none">
            <p className="font-bold">
              জীবনের এক রাস অনুভূতি ও অভিজ্ঞতা নিয়ে কিছু কথা হবে তোমাদের সাথে...
            </p>
            <Fade up>
              <Link
                to="/events"
                className="block mx-auto my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl"
              >
                আরও দেখুন
              </Link>
            </Fade>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Events;
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
