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
import BookSectionCard from "./Cards/BookSectionCard";
function BookSection() {
  const allBooks = [
    {
      id: 1,
      name: "Book One",
      title: "বই মেলায় আসছে",
      date: "এপ্রিল ১৪",
      image: book2,
      price: "২০৬ টাকা",
    },
    {
      id: 2,
      name: "Book Two",
      title: "বই মেলায় আসছে",
      date: "এপ্রিল ১৪",
      image: book1,
      price: "২০৬ টাকা",
    },
    {
      id: 3,
      name: "Book Three",
      title: "বই মেলায় আসছে",
      date: "এপ্রিল ১৪",
      image: book2,
      price: "২০৬ টাকা",
    },
    {
      id: 4,
      name: "Book Four",
      title: "বই মেলায় আসছে",
      date: "এপ্রিল ১৪",
      image: book1,
      price: "২০৬ টাকা",
    },
    {
      id: 5,
      name: "Book Five",
      title: "বই মেলায় আসছে",
      date: "এপ্রিল ১৪",
      image: book2,
      price: "২০৬ টাকা",
    },
    {
      id: 6,
      name: "Book Six",
      title: "বই মেলায় আসছে",
      date: "এপ্রিল ১৪",
      image: book1,
      price: "২০৬ টাকা",
    },
  ];
  return (
    <>
      <div className="relative bg-[#111118]">
        <div className="2xs:hidden xs:hidden block md:w-[130px] md:h-[130px] xl:w-[150px] xl:h-[150px] absolute md:top-[105px] md:left-[160px] lg:top-[120px] lg:left-[300px] xl:top-[100px] xl:left-[400px] 2xl:left-[720px] border-4 border-[#D89F17] border-dashed opacity-[0.5] rounded-full"></div>
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
            {allBooks?.map((book, index) => (
              <SwiperSlide key={index}>
                <BookSectionCard book={book}/>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* previous btn */}
          <div className="book-btn-prev z-10 cursor-pointer 2xs:w-[20px] xs:w-[30px] md:w-[50px] absolute 2xs:top-[195px] 2xs:left-[5px] xs:top-[250px] xs:left-[10px]  md:top-[365px] md:left-[90px] bg-[#111118] rounded-full p-1 md:p-3  ">
            <span className="text-primary font-bold 2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
              <MdOutlineKeyboardArrowLeft />
            </span>
          </div>
          {/* next btn */}
          <div className="book-btn-next z-10 cursor-pointer 2xs:w-[20px] xs:w-[30px] md:w-[50px] absolute 2xs:top-[195px] 2xs:right-[5px] xs:top-[250px] xs:right-[10px] md:top-[365px] md:right-[90px] bg-[#111118] rounded-full p-1 md:p-3">
            <span className="text-primary font-bold 2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
              <MdOutlineKeyboardArrowRight />
            </span>
          </div>
        </div>
        {/* background shape*/}
        <div className="relative space-y-5 ">
          <div className="absolute 2xs:-top-[350px] xs:-top-[380px] md:-top-[590px] w-full bg-primary h-[10px]"></div>
          <div className="absolute 2xs:-top-[350px] xs:-top-[380px] md:-top-[580px] w-full bg-primary h-[40px]"></div>
          <div className="absolute 2xs:-top-[300px] xs:-top-[330px] md:-top-[520px] w-full bg-primary h-[40px]"></div>
          <div className="absolute 2xs:-top-[250px] xs:-top-[280px] md:-top-[460px] w-full bg-primary h-[10px]"></div>
        </div>
        {/* right top shape */}
        <div className="2xs:hidden xs:hidden absolute -top-[23px] right-[30px] md:-top-[40px] md:right-11 w-[50px] md:w-[80px] -rotate-[90deg]">
          <img src={hafCircle} alt="" />
        </div>
        {/* left bottom shape */}
        <div className="2xs:hidden xs:hidden absolute left-[29px] -bottom-5 md:-bottom-9 md:left-11 w-[50px] md:w-[80px] rotate-[92deg]">
          <img src={hafCircle} alt="" />
        </div>
      </div>
    </>
  );
}

export default BookSection;
