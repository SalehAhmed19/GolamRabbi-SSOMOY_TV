import React, { useState } from "react";
import Modal from "./Modals/Modal";
import { Fade } from "react-reveal";

const FanFunLeft = ({ setOpen }) => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <h2 className="text-secondary text-3xl font-bold mb-5">
          এমন দাবির এবার হবে অবসান:
        </h2>
        <p className="text-[#fff] text-xl">
          <span className="text-2xl font-bold text-primary">ফ্যানরা </span>{" "}
          নানাকিছু লিখে। ইউটিউবে কমেন্ট। করে সেলফি তুলতে চায়। দেখা করতে চায়।
          শিখতে চায়। হতে চায় সংবাদ উপস্থাপক।
        </p>
        <p className="my-5 text-basic text-xl text-primary">
          সবার এমন ভালোবাসার সরাসরি উত্তর দিতে আয়োজন ফান উইথ ফ্যান।
        </p>
        <ul className="list-disc text-basic text-xl ml-10">
          <li>অংশ নিতে পারবে যেকেউ।</li>
          <li>অংশ নিতে পারো তুমিও।</li>
          <li>শিখতে পারো। থাকবে মজাও।</li>
          <li>আর সেলফি, আড্ডাতো থাকছেই..!</li>
        </ul>
        <Fade up>
          <button
            onClick={() => setOpen(true)}
            className="block my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl"
          >
            অংশ নিতে ক্লিক করো
          </button>
        </Fade>
      </div>
    </>
  );
};

export default FanFunLeft;
