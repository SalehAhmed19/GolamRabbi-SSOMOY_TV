import React from "react";
import bg from "../../assets/images/service-bg.png";
import image from "../../assets/images/gr2.png";
import { TfiWrite } from "react-icons/tfi";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { Fade, Zoom } from "react-reveal";
import ServiceRow from "./ServiceRow";
import cv from "../../assets/SVGs/cv-writting.png";
import training from "../../assets/SVGs/training.png";
import bio from "../../assets/SVGs/bio-interview.png";
import feature from "../../assets/SVGs/feature-writting.png";
import content from "../../assets/SVGs/content-writting.png";
import goal from "../../assets/SVGs/set-goal.png";
import pr from "../../assets/SVGs/pr.png";
import volanteer from "../../assets/SVGs/volanteer.png";

function Services() {
  const data = [
    {
      _id: 1,
      title: "সিভি রাইটিং",
      list: [],
      icon: cv,
    },
    {
      _id: 2,
      title: "ট্রেনিং",
      list: [],
      icon: training,
    },
    {
      _id: 3,
      title: "বায়ো ইন্টার্ভিউ মেকিং",
      list: [],
      icon: bio,
    },
    {
      _id: 4,
      title: "ফিচার রাইটিং",
      list: [],
      icon: feature,
    },
    {
      _id: 5,
      title: "কন্টেন্ট রাইটিং",
      list: [],
      icon: content,
    },
    {
      _id: 6,
      title: "গোল সেটিং",
      list: [],
      icon: goal,
    },
    {
      _id: 7,
      title: "পিআর, কম্পিউনিকেশন্স এন্ড ব্র্যান্ডিং",
      list: [],
      icon: pr,
    },
    {
      _id: 8,
      title: "ভলেন্টিয়ারিং",
      list: [],
      icon: volanteer,
    },
  ];
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:px-24 py-14 text-[#fff]"
    >
      <div className="flex flex-col lg:flex-row">
        <div>
          <Fade left>
            <img
              className="border-4 border-[#fff] w-[500px]"
              src={image}
              alt=""
            />
          </Fade>
        </div>
        <div className="w-full lg:mx-5">
          <div className="flex items-center justify-center">
            <div className="h-[2px] w-20 bg-[#fff] rounded-2xl"></div>
            <Fade down>
              <h2 className="text-center text-4xl font-bold mb-5 text-primary mx-10">
                সেবা
              </h2>
            </Fade>
            <div className="h-[2px] w-20 bg-[#fff] rounded-2xl"></div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-5 mt-10 mb-5">
            {data.slice(0, 2).map((d) => (
              <Zoom>
                <div
                  key={d._id}
                  className="p-5 shadow-lg shadow-[#0000005c] rounded-lg lg:w-48 flex flex-col justify-center items-center bg-[#14161C] mx-5 lg:mx-0"
                >
                  <img className="w-10 mb-3" src={d.icon} alt="" />
                  <h3
                    className={
                      d.list.length === 0
                        ? "text-center text-xl text-primary font-bold"
                        : "text-center text-primary font-bold"
                    }
                  >
                    {d.title}
                  </h3>
                  <p>
                    {d.list.map((list, idx) => (
                      <p key={idx}>{list}</p>
                    ))}
                  </p>
                </div>
              </Zoom>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-5 my-5">
            {data.slice(2, 6).map((d) => (
              <Zoom>
                <div
                  key={d._id}
                  className="p-5 shadow-lg shadow-[#0000005c] rounded-lg lg:w-48 flex flex-col justify-center items-center bg-[#14161C] mx-5 lg:mx-0"
                >
                  <img className="w-10 mb-3" src={d.icon} alt="" />
                  <h3
                    className={
                      d.list.length === 0
                        ? "text-center text-xl text-primary font-bold"
                        : "text-center text-primary font-bold"
                    }
                  >
                    {d.title}
                  </h3>
                  <>
                    {d.list.map((list, idx) => (
                      <p key={idx}>{list}</p>
                    ))}
                  </>
                </div>
              </Zoom>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-5 my-5">
            {data.slice(6, 9).map((d) => (
              <Zoom>
                <div
                  key={d._id}
                  className="p-5 shadow-lg shadow-[#0000005c] rounded-lg lg:w-48 flex flex-col justify-center items-center bg-secondary bg-[#14161C] mx-5 lg:mx-0"
                >
                  <img className="w-10 mb-3" src={d.icon} alt="" />
                  <h3
                    className={
                      d.list.length === 0
                        ? "text-center text-xl text-primary font-bold"
                        : "text-center text-primary font-bold"
                    }
                  >
                    {d.title}
                  </h3>
                  <>
                    {d.list.map((list, idx) => (
                      <p key={idx}>{list}</p>
                    ))}
                  </>
                </div>
              </Zoom>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
// "০১. মিডিয়া জবের ট্রেনিং", "০২. লিডারশিপ ট্রেনিং"
