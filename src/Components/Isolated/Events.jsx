import "keen-slider/keen-slider.min.css";
import React from "react";
import { Zoom } from "react-reveal";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../Styles/Events.css";
import bg from "../../assets/images/event-bg.jpg";
import EventsCard from "./Cards/EventsCard";
import EventRegistrationModal from "./Modals/EventRegistrationModal";

const Events = () => {
  const allEvents = [
    {
      id: 1,
      title: "আইডিয়া ডেভেলপমেন্ট অ্যান্ড ক্রিয়েটিভ রাইটিং ",
      date: "০১",
      month: "সেপ্টেম্বর",
      startingTime: "সকাল ১০:০০ টা",
      endingTime: "বিকাল ০৪:০০ টা",
      location: "বিশ্বসাহিত্য কেন্দ্র, বাংলা মোটর, ঢাকা",
    },
    {
      id: 2,
      title: "কীভাবে হবো নিউজ প্রেজেন্টার?",
      date: "১০",
      month: "সেপ্টেম্বর",
      startingTime: "সকাল ১০:০০ টা",
      endingTime: "বিকাল ০৪:০০ টা",
      location: "বিশ্বসাহিত্য কেন্দ্র, বাংলা মোটর, ঢাকা",
      btnHidden: "hidden",
    },
    {
      id: 3,
      title: "জীবনের রূপকথা",
      date: "১২",
      month: "এপ্রিল",
      startingTime: "সকাল ০৮:০০",
      endingTime: "দুপুর ০২:০০",
      location: "মিরপুর, ঢাকা",
      btnHidden: "hidden",
    },
    {
      id: 4,
      title: "বেকারত্বের কালো মেঘ",
      date: "২৩",
      month: "এপ্রিল",
      startingTime: "সকাল ১০:০০",
      endingTime: "দুপুর ০১:০০",
      location: "ধানমন্ডি, ঢাকা",
      btnHidden: "hidden",
    },
    {
      id: 5,
      title: "জীবন নিয়ে কিছু কথা",
      date: "১০",
      month: "মে",
      startingTime: "সকাল ০৮:০০",
      endingTime: "দুপুর ০২:০০",
      location: "মিরপুর, ঢাকা",
      btnHidden: "hidden",
    },
    {
      id: 6,
      title: "জীবনের রূপকথা",
      date: "১৯",
      month: "জুন",
      startingTime: "সকাল ০৮:০০",
      endingTime: "দুপুর ০২:০০",
      location: "মিরপুর, ঢাকা",
      btnHidden: "hidden",
    },
  ];
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow: "inset 0 0 0 2000px rgba(255, 0, 150, 0.1)",
        opacity: 0.9,
      }}
      className=" lg:px-24 py-14 text-[#fff] px-5"
    >
      <h1 className="pt-[26px] -mb-5 md:-mb-10 lg:-mb-20 custom-text-stroke-3 text-center text-[28px] md:text-[55px] lg:text-[100px] my-5">
        আসন্ন ইভেন্টস
      </h1>
      <Zoom>
        <h1 className="text-white text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold">
          আসন্ন ইভেন্টস
        </h1>
      </Zoom>
      <Zoom>
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
            {allEvents?.map((evened, index) => (
              <SwiperSlide key={index} className="mb-10">
                <EventsCard
                  evened={evened}
                />
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
        </div>
      </Zoom>
    </div>
  );
};

export default Events;
