import React from "react";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from "../../assets/images/leadership.jpg";
import img3 from "../../assets/images/life.jpg";
import img1 from "../../assets/images/media.jpg";
function Course() {
  const data = [
    { title: "মিডিয়া", route: "/" },
    { title: "লিডারশীপ", route: "/course/leadership-course" },
    { title: "লাইফ কোর্স", route: "course/life-course" },
  ];

  return (
    <div
      // style={{
      //   background: `url(${bg})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      // }}
      className="lg:px-24"
    >
      {/* <h1 className="pt-[26px] -mb-5 md:-mb-10 lg:-mb-20 custom-text-stroke-3 text-center text-[28px] md:text-[55px] lg:text-[100px]  my-5">
        কোর্স সমূহ
      </h1>
      <Zoom down>
        <h1
          style={{ fontFamily: "Hind Siliguri" }}
          className="text-primary text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold"
        >
          কোর্স সমূহ
        </h1>
      </Zoom> */}
      <div className="p-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          // loop={true}
          pagination={{
            clickable: true,
          }}
          // navigation={{
          //   prevEl: ".personal-btn-prev",
          //   nextEl: ".personal-btn-next",
          // }}
          modules={[Pagination]}
          breakpoints={{
            668: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className=""
        >
          <SwiperSlide className="mb-10">
            <Link to="/media-courses">
              <img className="rounded-md" src={img1} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="mb-10">
            <Link to="/leadership-courses">
              <img className="rounded-md" src={img2} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="mb-10">
            <Link to="/life-courses">
              <img className="rounded-md" src={img3} alt="" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="md:my-5 md:mx-5">
        <Link to="/courses">
          <button
            className="block mx-auto md:my-10 py-2 border-2 border-[#f40a5c] hover:bg-[#f40a5c] w-[120px] md:w-[290px] text-center rounded-full text-[#fff] font-bold text-sm md:text-xl"
            // onClick={() => setShow(true)}
          >
            আরও দেখুন
          </button>
        </Link>
      </div>
      <Zoom>
        <div className="flex justify-center"></div>
      </Zoom>
    </div>
  );
}

export default Course;

{
  /* <Modal onClose={handleOnClose} visible={show}>
  <h4 className="text-primary font-bold text-xl">কোর্সে এনরোল করতে চাও?</h4>
  <form onSubmit={() => handleSubmit(event)} className="lg:w-96" action="">
    <input
      type="text"
      value="কোর্সের নাম"
      className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
      readOnly
    />
    <input
      name="name"
      placeholder="তোমার নাম লিখো"
      className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
      type="text"
    />
    <input
      name="email"
      placeholder="তোমার ইমেইল লিখো"
      className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
      type="text"
    />
    <input
      name="mobile"
      placeholder="তোমার মোবাইল নাম্বার লিখো"
      className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
      type="text"
    />
    <button className="bg-primary w-full block ml-auto my-3 px-10 py-1 text-[#222] rounded">
      সাবমিট করো
    </button>
  </form>
</Modal>; */
}
