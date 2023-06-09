import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Fade } from "react-reveal";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../Styles/Events.css";
import img from "../../assets/images/user.jpeg";
import ReviewCard from "./ReviewCard";
function Testimonals() {
  const animation = { duration: 105000, easing: (t) => t };
  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 1, spacing: 5 },
      },
    },
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  const data = [
    {
      img: img,
      name: "আমির ইলতেবার",
      review:
        "আমি একজন নিয়মিত সময় টিভি এর সংবাদ প্রদানকারী গোলাম রাব্বী- এর কাজে সন্মান জানাতে চাই। তাঁর দক্ষতা, সতর্কতা এবং পেশাদারী আচরণ নিয়ে আমি সর্বদা প্রভাবিত হই। তাঁর সংবাদ প্রদান মানসম্পন্ন এবং সরল হয়ে থাকে। সংবাদের জগতে তাঁর প্রতিভার স্তর অত্যন্ত উন্নত এবং তাঁর সংবাদ প্রদান সব সময় আলোচনামূলক হয়।",
    },
    {
      img: img,
      name: "কমুতান নাইমান",
      review:
        "আমি একজন নিয়মিত সময় টিভি এর সংবাদ প্রদানকারী গোলাম রাব্বী- এর কাজে সন্মান জানাতে চাই। তাঁর দক্ষতা, সতর্কতা এবং পেশাদারী আচরণ নিয়ে আমি সর্বদা প্রভাবিত হই। তাঁর সংবাদ প্রদান মানসম্পন্ন এবং সরল হয়ে থাকে। সংবাদের জগতে তাঁর প্রতিভার স্তর অত্যন্ত উন্নত এবং তাঁর সংবাদ প্রদান সব সময় আলোচনামূলক হয়।",
    },
    {
      img: img,
      name: "হাসান সাব্বাহ",
      review:
        "আমি একজন নিয়মিত সময় টিভি এর সংবাদ প্রদানকারী গোলাম রাব্বী- এর কাজে সন্মান জানাতে চাই। তাঁর দক্ষতা, সতর্কতা এবং পেশাদারী আচরণ নিয়ে আমি সর্বদা প্রভাবিত হই। তাঁর সংবাদ প্রদান মানসম্পন্ন এবং সরল হয়ে থাকে। সংবাদের জগতে তাঁর প্রতিভার স্তর অত্যন্ত উন্নত এবং তাঁর সংবাদ প্রদান সব সময় আলোচনামূলক হয়।",
    },
  ];
  return (
    <div className="lg:mx-20 mx-5 my-14">
      <Fade down>
        <h1 className="text-primary text-center text-4xl font-bold my-5">
          টেস্টিমনিয়ালস
        </h1>
      </Fade>
      <div className="relative">
        <Swiper
          navigation={{
            prevEl: ".btn-prev",
            nextEl: ".btn-next",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              ref={sliderRef}
              className="grid grid-cols-2 gap-5 bg-[#16181D]"
            >
              {data.map((d, idx) => (
                <ReviewCard d={d} key={idx} />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              ref={sliderRef}
              className="grid grid-cols-2 gap-5 bg-[#16181D]"
            >
              {data.map((d, idx) => (
                <ReviewCard d={d} key={idx} />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              ref={sliderRef}
              className="grid grid-cols-2 gap-5 bg-[#16181D]"
            >
              {data.map((d, idx) => (
                <ReviewCard d={d} key={idx} />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              ref={sliderRef}
              className="grid grid-cols-2 gap-5 bg-[#16181D]"
            >
              {data.map((d, idx) => (
                <ReviewCard d={d} key={idx} />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="relative">
          <div className="z-10 absolute -top-[180px] right-[300px] flex space-x-10">
            {/* previous btn */}
            <div className="hidden md:block btn-prev cursor-pointer  bg-primary rounded-full p-1 lg:p-3 lg:w-[45px] ">
              <span className="font-bold text-xl">
                <MdOutlineKeyboardArrowLeft />
              </span>
            </div>
            {/* next btn */}
            <div className="hidden md:block btn-next cursor-pointer  bg-primary  rounded-full p-1 lg:p-3 lg:w-[45px] ">
              <span className="font-bold text-xl">
                <MdOutlineKeyboardArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Testimonals;
// {data.map((d, idx) => (
//   <div
//     key={idx}
//     className="bg-white/10 w-full group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-md text-base lg:mx-5"
//   >
//     <img
//       className="rounded-full h-20 mx-auto"
//       src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
//       alt=""
//     />
//     <h4 className="uppercase text-xl font-bold text-center text-primary">
//       {d.name}
//     </h4>
//     <p className="text-sm leading-7 my-3 text-basic text-basic">
//       {d.review}
//     </p>
//     {/* <button className="bg-primary py-2.5 px-8 rounded-full mx-auto block">
//       Get in Touch
//     </button> */}
//   </div>
// ))}

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
