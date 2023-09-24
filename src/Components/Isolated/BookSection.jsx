import React, { useState } from "react";
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
import BookByModal from "./Modals/BookByModal";
function BookSection() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const allBooks = [
    {
      id: 1,
      title: "বই মেলায় আসছে",
      date: "এপ্রিল ১৪",
      image: book2 ,
      price: "২০৬",
    },
    {
      id: 2,
      title: "বই মেলায় আসছে",
      date: "এপ্রিল ১৪",
      image: book1 ,
      price: "২০৬",
    },
    {
      id: 3,
      title: "বই মেলায় আসছে",
      date: "এপ্রিল ১৪",
      image: book2,
      price: "২০৬",
    },
    {
      id: 4,
      title: "বই মেলায় আসছে",
      date: "এপ্রিল ১৪",
      image: book1 ,
      price: "২০৬",
    },
    {
      id: 5,
      title: "বই মেলায় আসছে",
      date: "এপ্রিল ১৪",
      image: book2 ,
      price: "২০৬",
    },
    {
      id: 6,
      title: "বই মেলায় আসছে",
      date: "এপ্রিল ১৪",
      image: book1,
      price: "২০৬",
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
                <div className="w-full py-5 md:py-16 group">
                  <div className="lg:group-hover:visible lg:invisible  lg:group-hover:transition-all lg:group-hover:duration-1000 lg:group-hover:delay-75 transition-all duration-200  delay-150 text-primary font-bold mx-16 xl:mx-64">
                    <h3 className="font-bold 2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] mb-2">
                      {book.title}
                    </h3>
                    <p className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] mb-3">
                      {book.date}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="">
                      <img
                        className="drop-shadow-xl 2xs:w-40 xs:w-48 md:w-[316px] md:h-[472px]  rounded-lg  shadow-2xl"
                        src={book.image}
                        alt=""
                      />
                      <button
                        style={{ fontFamily: "Hind Siliguri" }}
                        onClick={handleOpen}
                        className="block mx-auto 2xs:my-4 xs:my-6 sm:my-8 md:my-10 py-2 px-5 border-2 border-[#D89F17] border-dashed hover:bg-[#D89F17] sm:w-[180px] md:w-[290px] text-center rounded-full text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px] hover:text-black"
                      >
                        কিনতে চাও?
                      </button>
                    </div>
                  </div>
                  <div className="lg:group-hover:visible lg:invisible  lg:group-hover:transition-all lg:group-hover:duration-1000 lg:group-hover:delay-75 transition-all duration-200  delay-150 relative w-full h-[83px]">
                    <div className="-mt-3 md:mt-8 mr-5 lg:w-[20%] absolute right-0">
                      <button className="w-full text-primary p-5  font-bold 2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
                        মূল্যঃ {book.price} টাকা
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <BookByModal open={open} handleClose={handleClose} />
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
