import React from "react";
import bg from "../../assets/images/service-bg.png";
import image from "../../assets/images/gr2.png";
import { TfiWrite } from "react-icons/tfi";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";

function Services() {
  const data = [
    {
      _id: 1,
      titel: "সিভি রাইটিং",
      list: ["০১. মিডিয়া সিভি", "০২. অন্যান্য জবের সিভি"],
      icon: <TfiWrite />,
    },
    {
      _id: 2,
      titel: "ট্রেনিং",
      list: ["০১. মিডিয়া জবের ট্রেনিং", "০২. লিডারশিপ ট্রেনিং"],
      icon: <GiTeacher />,
    },
    {
      _id: 3,
      titel: "বায়ো ইন্টার্ভিউ মেকিং",
      list: [],
      icon: <GiTeacher />,
    },
    {
      _id: 4,
      titel: "ফিচার রাইটিং",
      list: [
        "০১. গণমাধ্যমের জন্য",
        "০২. ব্যক্তি বা কর্পোরেট প্রতিষ্ঠানের জন্য",
      ],
      icon: <MdOutlineFeaturedVideo />,
    },
    {
      _id: 5,
      titel: "কন্টেন্ট রাইটিং",
      list: ["গণমাধ্যমের জন্য"],
      icon: <TfiWrite />,
    },
    {
      _id: 6,
      titel: "গোল সেটিং",
      list: ["০১. ওয়ান-টু-ওয়ান কোচিং", "০২. প্রতিষ্ঠানের স্ট্যাটেজিক গোল"],
      icon: <GiTeacher />,
    },
    {
      _id: 7,
      titel: "পিআর, কম্পিউনিকেশন্স এন্ড ব্র্যান্ডিং",
      list: [],
      icon: <RiMessage3Fill />,
    },
    {
      _id: 8,
      titel: "ভলেন্টিয়ারিং",
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
      <div className="flex items-center justify-center">
        <div className="h-[2px] w-20 bg-[#fff] rounded-2xl"></div>
        <h2 className="text-center text-4xl font-bold mb-5 text-primary mx-10">
          সেবা
        </h2>
        <div className="h-[2px] w-20 bg-[#fff] rounded-2xl"></div>
      </div>
      <div className="flex">
        <img className="w-96 border-4 border-[#fff]" src={image} alt="" />
        <div className="w-full mx-5">
          <div className="flex justify-center gap-5 mt-10 mb-5">
            {data.slice(0, 2).map((d) => (
              <div
                key={d._id}
                className="p-5 border-2 rounded-lg w-48 flex flex-col justify-center items-center"
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
                  {d.titel}
                </h3>
                <p>
                  {d.list.map((list, idx) => (
                    <p key={idx}>{list}</p>
                  ))}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-5 my-5">
            {data.slice(2, 6).map((d) => (
              <div
                key={d._id}
                className="p-5 border-2 rounded-lg w-48 flex flex-col justify-center items-center"
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
                  {d.titel}
                </h3>
                <>
                  {d.list.map((list, idx) => (
                    <p key={idx}>{list}</p>
                  ))}
                </>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-5 my-5">
            {data.slice(6, 9).map((d) => (
              <div
                key={d._id}
                className="p-5 border-2 rounded-lg w-48 flex flex-col justify-center items-center"
              >
                <h4 className="text-primary text-3xl mb-5 ">{d.icon}</h4>
                <h3
                  className={
                    d.list.length === 0
                      ? "text-center text-xl text-primary font-bold"
                      : "text-center text-primary font-bold"
                  }
                >
                  {d.titel}
                </h3>
                <>
                  {d.list.map((list, idx) => (
                    <p key={idx}>{list}</p>
                  ))}
                </>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
