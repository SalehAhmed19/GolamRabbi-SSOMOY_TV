import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
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
      <Fade down>
        <h1
          style={{ fontFamily: "Hind Siliguri" }}
          className="text-primary text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold"
        >
          কোর্স সমূহ
        </h1>
      </Fade> */}
      {/* <CourseTabs /> */}
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
            className="block mx-auto my-10 py-2 border-2 border-[#f40a5c] hover:bg-[#f40a5c] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl"
            // onClick={() => setShow(true)}
          >
            আরও দেখুন
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
