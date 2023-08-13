import React from "react";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
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
      className="md:px-14 md:pb-14"
      style={{ fontFamily: "Hind Siliguri" }}
    >
      <h1 className="-mb-5 md:-mb-10 lg:-mb-20  custom-text-stroke-2 text-center  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[55px] lg:text-[100px] my-5">
        কোর্স সমূহ
      </h1>
      <Zoom>
        <h1 className="text-primary text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold">
          কোর্স সমূহ
        </h1>
      </Zoom>
      <div className="2xs:mt-3 xs:mt-5 sm:mt-7 md:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Link to="/media-courses">
          <Zoom>
            <img className="rounded-md" src={img1} alt="" />
          </Zoom>
        </Link>
        <Link to="/leadership-courses">
          <Zoom>
            <img className="rounded-md" src={img2} alt="" />
          </Zoom>
        </Link>
        <Link to="/life-courses">
          <Zoom>
            <img className="rounded-md" src={img3} alt="" />
          </Zoom>
        </Link>
      </div>
      <Zoom>
        <Link to="/courses">
          <button
            onClick={() => setOpen(true)}
            style={{ fontFamily: "Hind Siliguri" }}
            className="block mx-auto 2xs:my-4 xs:my-6 sm:my-8 md:my-10 py-2 px-5 border-2 border-[#f40a5c] hover:bg-[#f40a5c] sm:w-[180px] md:w-[290px] text-center rounded-full text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]"
          >
            আরও দেখুন
          </button>
        </Link>
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
