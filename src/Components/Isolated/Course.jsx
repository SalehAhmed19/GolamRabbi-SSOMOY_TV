import React, { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import bg from "../../assets/images/course-bg.png";
import img1 from "../../assets/images/mediacourse.jpg";
import img2 from "../../assets/images/leadership.jpg";
import img3 from "../../assets/images/lifecourse.jpg";
import { Modal } from "antd";
import CourseModal from "./Modals/CourseModal";
import { Link, Outlet } from "react-router-dom";
import MediaCourse from "./Courses/MediaCourse";
import LeaderShipCourse from "./Courses/LeaderShipCourse";
import LifeCourse from "./Courses/LifeCourse";

function Course() {
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };
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
        {/* {image.map((im, idx) => ( */}
        <Fade up>
          <Outlet />
        </Fade>
        {/* ))} */}
      </div>
      <Fade up>
        <div className="flex justify-center">
          <CourseModal open={open} onCreate={onCreate} />
        </div>
      </Fade>
    </div>
  );
}

export default Course;
