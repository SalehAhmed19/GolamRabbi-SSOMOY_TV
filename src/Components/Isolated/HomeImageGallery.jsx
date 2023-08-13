import React from "react";
import { Zoom } from "react-reveal";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import person3 from "../../assets/galleryImages/perons-3.jpg";
import person1 from "../../assets/galleryImages/person-1.jpeg";
import person2 from "../../assets/galleryImages/person-2.jpeg";
import person4 from "../../assets/galleryImages/person-4.jpg";
const HomeImageGallery = () => {
  return (
    <div className="p-5 md:p-16">
      <h1 className="-mb-5 md:-mb-10 lg:-mb-20  custom-text-stroke-2 text-center  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[55px] lg:text-[100px] my-5">
        গ্যালারি
      </h1>
      <Zoom>
        <h1 className="text-primary text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold">
          গ্যালারি
        </h1>
      </Zoom>
      <div className="max-w-[1440px] mx-auto mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            668: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="2xs:mx-0 mx-[40px]"
        >
          <SwiperSlide className="mb-16">
            <img
              src={person1}
              alt="gallery-images"
              className="w-[268px] h-[268px] object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={person2}
              alt="gallery-images"
              className="w-[268px] h-[268px] object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={person3}
              alt="gallery-images"
              className="w-[268px] h-[268px] object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={person4}
              alt="gallery-images"
              className="w-[268px] h-[268px] object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={person1}
              alt="gallery-images"
              className="w-[268px] h-[268px] object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={person2}
              alt="gallery-images"
              className="w-[268px] h-[268px] object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <Link
          to="/gallery"
          className="block md:mx-[270px] lg:mx-[450px] my-10  py-2 border-2 border-[#d89f17] hover:bg-[#d89f17] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl"
        >
          আরও দেখুন
        </Link> */}
    </div>
  );
};

export default HomeImageGallery;
