import React, { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import bg from "../../assets/images/course-bg.png";
import img1 from "../../assets/images/mediacourse.jpg";
import img2 from "../../assets/images/leadership.jpg";
import img3 from "../../assets/images/lifecourse.jpg";
import Modal from "./Modals/Modal";
import { Link, Outlet } from "react-router-dom";

function Course() {
  const [show, setShow] = useState(false);
  const handleOnClose = () => setShow(false);
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
      <div className="flex flex-col items-center lg:flex-row justify-center mx-5 gap-2 ">
        {data.map((d, idx) => (
          <Zoom>
            <Link to={d.route}>
              <button
                key={idx}
                className="bg-[#222] text-primary lg:bg-[#B8084F] lg:my-7 lg:mx-5 w-40 py-2 rounded-full cursor-pointer lg:text-[#fff] text-xl text-center"
              >
                <h3>{d.title}</h3>
              </button>
            </Link>
          </Zoom>
        ))}
      </div>
      <div className=" my-5 mx-5">
        <Fade up>
          <Outlet />
        </Fade>
        <button
          className="block mx-auto my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl"
          onClick={() => setShow(true)}
        >
          এনরোল করো
        </button>
      </div>
      <Fade up>
        <div className="flex justify-center"></div>
      </Fade>
      <Modal onClose={handleOnClose} visible={show}>
        <form action="">
          <select class="form-select text-primary w-full bg-[#333] rounded my-2 py-1 px-3 focus:outline-none">
            <option>মিডিয়া কোর্স</option>
            <option>লিডারশীপ কোর্স</option>
            <option>লাইফ কোর্স</option>
          </select>
          <input
            placeholder="তোমার নাম লিখো"
            className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
            type="text"
          />
          <input
            placeholder="তোমার ইমেইল লিখো"
            className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
            type="text"
          />
          <input
            placeholder="তোমার মোবাইল নাম্বার লিখো"
            className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
            type="text"
          />
        </form>
        <button></button>
      </Modal>
    </div>
  );
}

export default Course;
