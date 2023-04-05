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

function Services() {
  const data = [
    {
      _id: 1,
      title: "সিভি রাইটিং",
      list: ["০১. মিডিয়া সিভি", "০২. অন্যান্য জবের সিভি"],
      icon: <TfiWrite />,
    },
    {
      _id: 2,
      title: "ট্রেনিং",
      list: ["০১. মিডিয়া জবের ট্রেনিং", "০২. লিডারশিপ ট্রেনিং"],
      icon: <GiTeacher />,
    },
    {
      _id: 3,
      title: "বায়ো ইন্টার্ভিউ মেকিং",
      list: [],
      icon: <GiTeacher />,
    },
    {
      _id: 4,
      title: "ফিচার রাইটিং",
      list: [
        "০১. গণমাধ্যমের জন্য",
        "০২. ব্যক্তি বা কর্পোরেট প্রতিষ্ঠানের জন্য",
      ],
      icon: <MdOutlineFeaturedVideo />,
    },
    {
      _id: 5,
      title: "কন্টেন্ট রাইটিং",
      list: ["গণমাধ্যমের জন্য"],
      icon: <TfiWrite />,
    },
    {
      _id: 6,
      title: "গোল সেটিং",
      list: ["০১. ওয়ান-টু-ওয়ান কোচিং", "০২. প্রতিষ্ঠানের স্ট্যাটেজিক গোল"],
      icon: <GiTeacher />,
    },
    {
      _id: 7,
      title: "পিআর, কম্পিউনিকেশন্স এন্ড ব্র্যান্ডিং",
      list: [],
      icon: <RiMessage3Fill />,
    },
    {
      _id: 8,
      title: "ভলেন্টিয়ারিং",
      list: [],
      icon: <FaHandsHelping />,
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
                  className="p-5 border-2 rounded-lg lg:w-48 flex flex-col justify-center items-center bg-[#14161C] mx-5 lg:mx-0"
                >
                  <h4 className="text-primary text-3xl mb-5 flex justify-center">
                    {d.icon}
                  </h4>
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
                  className="p-5 border-2 rounded-lg lg:w-48 flex flex-col justify-center items-center bg-[#14161C] mx-5 lg:mx-0"
                >
                  <h4 className="text-primary text-3xl mb-5 flex justify-center">
                    {d.icon}
                  </h4>
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
                  className="p-5 border-2 rounded-lg lg:w-48 flex flex-col justify-center items-center bg-secondary bg-[#14161C] mx-5 lg:mx-0"
                >
                  <h4 className="text-primary text-3xl mb-5 ">{d.icon}</h4>
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
