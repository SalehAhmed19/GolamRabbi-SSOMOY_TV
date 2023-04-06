import React, { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import bg from "../../assets/images/course-bg.png";
import img1 from "../../assets/images/mediacourse.jpg";
import img2 from "../../assets/images/leadership.jpg";
import img3 from "../../assets/images/lifecourse.jpg";
import { Modal } from "antd";
import CourseModal from "./Modals/CourseModal";

function Course() {
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };
  const data = ["মিডিয়া", "লিডারশীপ", "লাইফ কোর্স"];
  const image = [img1, img2, img3];
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:px-24 py-14"
    >
      <Fade down>
        <h2 className="text-center text-4xl font-bold text-primary pt-14">
          কোর্স
        </h2>
      </Fade>
      <div className="flex lg:flex-row justify-center mx-5 gap-2 ">
        {data.map((d) => (
          <Zoom>
            <div
              key={d}
              className="bg-secondary my-7 lg:mx-5 w-40 py-2 rounded-full cursor-pointer text-[#fff] text-xl text-center"
            >
              <h3>{d}</h3>
            </div>
          </Zoom>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-5 mx-5">
        {image.map((im, idx) => (
          <Fade up>
            <img
              key={idx}
              src={im}
              className="lg:mx-5 rounded-xl cursor-pointer"
              alt=""
            />
          </Fade>
        ))}
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
