import React, { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import bg from "../../assets/images/course-bg.png";
import Modal from "./Modals/Modal";
import { Link, Outlet } from "react-router-dom";
import CourseTabs from "./Tabs/CourseTabs";
import { toast } from "react-hot-toast";
import img1 from "../../assets/images/media.jpg";
import img2 from "../../assets/images/leadership.jpg";
import img3 from "../../assets/images/life.jpg";

function Course() {
  const data = [
    { title: "মিডিয়া", route: "/" },
    { title: "লিডারশীপ", route: "/course/leadership-course" },
    { title: "লাইফ কোর্স", route: "course/life-course" },
  ];

  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:px-24 py-10"
    >
      <Fade down>
        <h2 className="text-center text-4xl font-bold text-primary pt-14 my-5">
          কোর্স
        </h2>
      </Fade>
      {/* <CourseTabs /> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Link to="/media-courses">
          <img className="rounded-md" src={img1} alt="" />
        </Link>
        <Link to="/leadership-courses">
          <img className="rounded-md" src={img2} alt="" />
        </Link>
        <Link to="/life-courses">
          <img className="rounded-md" src={img3} alt="" />
        </Link>
      </div>
      <div className=" my-5 mx-5">
        <Link to="/courses">
          <button
            className="block mx-auto my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl"
            // onClick={() => setShow(true)}
          >
            এনরোল করো
          </button>
        </Link>
      </div>
      <Fade up>
        <div className="flex justify-center"></div>
      </Fade>
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
