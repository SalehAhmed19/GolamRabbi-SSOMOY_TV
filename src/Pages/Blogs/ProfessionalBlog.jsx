import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../Styles/MediaJobCircular.css";
import blog from "../../assets/images/blog.jpeg";
const data = [
  {
    id: 1,
    heading: "প্রথম সন্দেশ, সবচেয়ে সেরা 1",
    headline: "বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে 1",
    editor: "গোলাম রাব্বী",
    date: "২ এপ্রিল ২০২৩",
    subHeading:
      " লিড তালিকার শীর্ষ ১০০টি কোম্পানির মধ্যে ৫২টি বাংলাদেশের, অর্থাৎ তালিকায় থাকা সবচেয়ে বেশি কোম্পানি এখন বাংলাদেশের। এরপর সবচেয়ে বেশিবেশি কোম্পানি আছে চীনের। তাদের আছে ১০টি কারখানা। এরপর পাকিস্তানের আছে৯টি কারখানা। শ্রীলঙ্কা ও ভারতের আছে ৬টি করে কারখানা। ভিয়েতনাম ওতাইওয়ানের আছে ৪টি করে কারখানা।",
    blogContent:
      " বিশ্বসেরা পরিবেশবান্ধব কারখানার স্বীকৃতি পেয়েছে বাংলাদেশের গ্রিনটেক্সটাইল লিমিটেড ইউনিট-৪। লিড সনদে সর্বোচ্চ নম্বর পেয়ে সবুজ কারখানা শীর্ষস্থান দখল করে নিয়েছে কারখানাটি। ১১০ নম্বরের মধ্যে প্রতিষ্ঠানটিপেয়েছে ১০৪। আর তাই বিশ্বের সবচেয়ে পরিবেশবান্ধব ১০টি কারখানার ৮টিইবাংলাদেশের। আর বিশ্বসেরা ১০০ কারখানার মধ্যে বাংলাদেশের ৫২টি। শনিবার লিড সনদের এই তালিকা প্রকাশিত হলে বিজিএমইএ এ খবর নিশ্চিত করে।",
  },
  {
    id: 2,
    heading: "প্রথম সন্দেশ, সবচেয়ে সেরা 2",
    headline: "বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে 2",
    editor: "গোলাম রাব্বী",
    date: "২৬ এপ্রিল ২০২৩",
    subHeading:
      " লিড তালিকার শীর্ষ ১০০টি কোম্পানির মধ্যে ৫২টি বাংলাদেশের, অর্থাৎ তালিকায় থাকা সবচেয়ে বেশি কোম্পানি এখন বাংলাদেশের। এরপর সবচেয়ে বেশিবেশি কোম্পানি আছে চীনের। তাদের আছে ১০টি কারখানা। এরপর পাকিস্তানের আছে৯টি কারখানা। শ্রীলঙ্কা ও ভারতের আছে ৬টি করে কারখানা। ভিয়েতনাম ওতাইওয়ানের আছে ৪টি করে কারখানা।",
    blogContent:
      " বিশ্বসেরা পরিবেশবান্ধব কারখানার স্বীকৃতি পেয়েছে বাংলাদেশের গ্রিনটেক্সটাইল লিমিটেড ইউনিট-৪। লিড সনদে সর্বোচ্চ নম্বর পেয়ে সবুজ কারখানা শীর্ষস্থান দখল করে নিয়েছে কারখানাটি। ১১০ নম্বরের মধ্যে প্রতিষ্ঠানটিপেয়েছে ১০৪। আর তাই বিশ্বের সবচেয়ে পরিবেশবান্ধব ১০টি কারখানার ৮টিইবাংলাদেশের। আর বিশ্বসেরা ১০০ কারখানার মধ্যে বাংলাদেশের ৫২টি। শনিবার লিড সনদের এই তালিকা প্রকাশিত হলে বিজিএমইএ এ খবর নিশ্চিত করে।",
  },
  {
    id: 3,
    heading: "প্রথম সন্দেশ, সবচেয়ে সেরা 3",
    headline: "বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে 3",
    editor: "গোলাম রাব্বী",
    date: "12 এপ্রিল ২০২৩",
    subHeading:
      " লিড তালিকার শীর্ষ ১০০টি কোম্পানির মধ্যে ৫২টি বাংলাদেশের, অর্থাৎ তালিকায় থাকা সবচেয়ে বেশি কোম্পানি এখন বাংলাদেশের। এরপর সবচেয়ে বেশিবেশি কোম্পানি আছে চীনের। তাদের আছে ১০টি কারখানা। এরপর পাকিস্তানের আছে৯টি কারখানা। শ্রীলঙ্কা ও ভারতের আছে ৬টি করে কারখানা। ভিয়েতনাম ওতাইওয়ানের আছে ৪টি করে কারখানা।",
    blogContent:
      " বিশ্বসেরা পরিবেশবান্ধব কারখানার স্বীকৃতি পেয়েছে বাংলাদেশের গ্রিনটেক্সটাইল লিমিটেড ইউনিট-৪। লিড সনদে সর্বোচ্চ নম্বর পেয়ে সবুজ কারখানা শীর্ষস্থান দখল করে নিয়েছে কারখানাটি। ১১০ নম্বরের মধ্যে প্রতিষ্ঠানটিপেয়েছে ১০৪। আর তাই বিশ্বের সবচেয়ে পরিবেশবান্ধব ১০টি কারখানার ৮টিইবাংলাদেশের। আর বিশ্বসেরা ১০০ কারখানার মধ্যে বাংলাদেশের ৫২টি। শনিবার লিড সনদের এই তালিকা প্রকাশিত হলে বিজিএমইএ এ খবর নিশ্চিত করে।",
  },
  {
    id: 4,
    heading: "প্রথম সন্দেশ, সবচেয়ে সেরা 3",
    headline: "বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে 3",
    editor: "গোলাম রাব্বী",
    date: "12 এপ্রিল ২০২৩",
    subHeading:
      " লিড তালিকার শীর্ষ ১০০টি কোম্পানির মধ্যে ৫২টি বাংলাদেশের, অর্থাৎ তালিকায় থাকা সবচেয়ে বেশি কোম্পানি এখন বাংলাদেশের। এরপর সবচেয়ে বেশিবেশি কোম্পানি আছে চীনের। তাদের আছে ১০টি কারখানা। এরপর পাকিস্তানের আছে৯টি কারখানা। শ্রীলঙ্কা ও ভারতের আছে ৬টি করে কারখানা। ভিয়েতনাম ওতাইওয়ানের আছে ৪টি করে কারখানা।",
    blogContent:
      " বিশ্বসেরা পরিবেশবান্ধব কারখানার স্বীকৃতি পেয়েছে বাংলাদেশের গ্রিনটেক্সটাইল লিমিটেড ইউনিট-৪। লিড সনদে সর্বোচ্চ নম্বর পেয়ে সবুজ কারখানা শীর্ষস্থান দখল করে নিয়েছে কারখানাটি। ১১০ নম্বরের মধ্যে প্রতিষ্ঠানটিপেয়েছে ১০৪। আর তাই বিশ্বের সবচেয়ে পরিবেশবান্ধব ১০টি কারখানার ৮টিইবাংলাদেশের। আর বিশ্বসেরা ১০০ কারখানার মধ্যে বাংলাদেশের ৫২টি। শনিবার লিড সনদের এই তালিকা প্রকাশিত হলে বিজিএমইএ এ খবর নিশ্চিত করে।",
  },
  {
    id: 5,
    heading: "প্রথম সন্দেশ, সবচেয়ে সেরা 3",
    headline: "বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে 3",
    editor: "গোলাম রাব্বী",
    date: "12 এপ্রিল ২০২৩",
    subHeading:
      " লিড তালিকার শীর্ষ ১০০টি কোম্পানির মধ্যে ৫২টি বাংলাদেশের, অর্থাৎ তালিকায় থাকা সবচেয়ে বেশি কোম্পানি এখন বাংলাদেশের। এরপর সবচেয়ে বেশিবেশি কোম্পানি আছে চীনের। তাদের আছে ১০টি কারখানা। এরপর পাকিস্তানের আছে৯টি কারখানা। শ্রীলঙ্কা ও ভারতের আছে ৬টি করে কারখানা। ভিয়েতনাম ওতাইওয়ানের আছে ৪টি করে কারখানা।",
    blogContent:
      " বিশ্বসেরা পরিবেশবান্ধব কারখানার স্বীকৃতি পেয়েছে বাংলাদেশের গ্রিনটেক্সটাইল লিমিটেড ইউনিট-৪। লিড সনদে সর্বোচ্চ নম্বর পেয়ে সবুজ কারখানা শীর্ষস্থান দখল করে নিয়েছে কারখানাটি। ১১০ নম্বরের মধ্যে প্রতিষ্ঠানটিপেয়েছে ১০৪। আর তাই বিশ্বের সবচেয়ে পরিবেশবান্ধব ১০টি কারখানার ৮টিইবাংলাদেশের। আর বিশ্বসেরা ১০০ কারখানার মধ্যে বাংলাদেশের ৫২টি। শনিবার লিড সনদের এই তালিকা প্রকাশিত হলে বিজিএমইএ এ খবর নিশ্চিত করে।",
  },
  {
    id: 6,
    heading: "প্রথম সন্দেশ, সবচেয়ে সেরা 3",
    headline: "বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে 3",
    editor: "গোলাম রাব্বী",
    date: "12 এপ্রিল ২০২৩",
    subHeading:
      " লিড তালিকার শীর্ষ ১০০টি কোম্পানির মধ্যে ৫২টি বাংলাদেশের, অর্থাৎ তালিকায় থাকা সবচেয়ে বেশি কোম্পানি এখন বাংলাদেশের। এরপর সবচেয়ে বেশিবেশি কোম্পানি আছে চীনের। তাদের আছে ১০টি কারখানা। এরপর পাকিস্তানের আছে৯টি কারখানা। শ্রীলঙ্কা ও ভারতের আছে ৬টি করে কারখানা। ভিয়েতনাম ওতাইওয়ানের আছে ৪টি করে কারখানা।",
    blogContent:
      " বিশ্বসেরা পরিবেশবান্ধব কারখানার স্বীকৃতি পেয়েছে বাংলাদেশের গ্রিনটেক্সটাইল লিমিটেড ইউনিট-৪। লিড সনদে সর্বোচ্চ নম্বর পেয়ে সবুজ কারখানা শীর্ষস্থান দখল করে নিয়েছে কারখানাটি। ১১০ নম্বরের মধ্যে প্রতিষ্ঠানটিপেয়েছে ১০৪। আর তাই বিশ্বের সবচেয়ে পরিবেশবান্ধব ১০টি কারখানার ৮টিইবাংলাদেশের। আর বিশ্বসেরা ১০০ কারখানার মধ্যে বাংলাদেশের ৫২টি। শনিবার লিড সনদের এই তালিকা প্রকাশিত হলে বিজিএমইএ এ খবর নিশ্চিত করে।",
  },
  {
    id: 7,
    heading: "প্রথম সন্দেশ, সবচেয়ে সেরা 3",
    headline: "বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে 3",
    editor: "গোলাম রাব্বী",
    date: "12 এপ্রিল ২০২৩",
    subHeading:
      " লিড তালিকার শীর্ষ ১০০টি কোম্পানির মধ্যে ৫২টি বাংলাদেশের, অর্থাৎ তালিকায় থাকা সবচেয়ে বেশি কোম্পানি এখন বাংলাদেশের। এরপর সবচেয়ে বেশিবেশি কোম্পানি আছে চীনের। তাদের আছে ১০টি কারখানা। এরপর পাকিস্তানের আছে৯টি কারখানা। শ্রীলঙ্কা ও ভারতের আছে ৬টি করে কারখানা। ভিয়েতনাম ওতাইওয়ানের আছে ৪টি করে কারখানা।",
    blogContent:
      " বিশ্বসেরা পরিবেশবান্ধব কারখানার স্বীকৃতি পেয়েছে বাংলাদেশের গ্রিনটেক্সটাইল লিমিটেড ইউনিট-৪। লিড সনদে সর্বোচ্চ নম্বর পেয়ে সবুজ কারখানা শীর্ষস্থান দখল করে নিয়েছে কারখানাটি। ১১০ নম্বরের মধ্যে প্রতিষ্ঠানটিপেয়েছে ১০৪। আর তাই বিশ্বের সবচেয়ে পরিবেশবান্ধব ১০টি কারখানার ৮টিইবাংলাদেশের। আর বিশ্বসেরা ১০০ কারখানার মধ্যে বাংলাদেশের ৫২টি। শনিবার লিড সনদের এই তালিকা প্রকাশিত হলে বিজিএমইএ এ খবর নিশ্চিত করে।",
  },
];
const ProfessionalBlog = () => {
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
    <div className="my-10">
      {/* title and arrows */}
      <div className="flex justify-between items-center">
        <h2 className="text-primary text-2xl font-bold my-5">প্রফেশনাল ব্লগ</h2>
        <div className="flex space-x-5">
          {/* prev btn */}
          <div className="professional-btn-prev cursor-pointer bg-primary rounded-full w-[20px]">
            <span className="font-bold text-xl">
              <MdOutlineKeyboardArrowLeft />
            </span>
          </div>
          {/* next btn */}
          <div className="professional-btn-next cursor-pointer  bg-primary rounded-full w-[20px] ">
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
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".professional-btn-prev",
          nextEl: ".professional-btn-next",
        }}
        modules={[Navigation, Pagination]}
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
        {data?.map((d, index) => (
          <SwiperSlide key={index} className="mb-10">
            <Zoom>
              <Link to={`/blogs/${d.id}`}>
                <div className="bg-white rounded-lg">
                  <img className="w-full  rounded-t-lg" src={blog} alt="" />
                  <div className="p-5">
                    <h3 className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-secondary font-bold">
                      {/* {d.heading} <br /> */}
                      {d.headline}
                    </h3>
                    <p className="text-[#7B7B7B] 2xs:text-[12px]">
                      {d.subHeading?.slice(0, 155)}
                      <span className="2xs:text-[12px] text-[15px] font-semibold text-secondary">
                        <Link to={`/blogs/${d.id}`}>আরও পড়ুন ...</Link>
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </Zoom>
            ;
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProfessionalBlog;
