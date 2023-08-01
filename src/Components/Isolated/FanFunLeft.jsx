import React from "react";
import { Fade } from "react-reveal";
// mt-10 flex flex-col justify-center font-semibold
const FanFunLeft = ({ setOpen }) => {
  return (
    <>
      <div className="font-semibold">
        <h2 className="text-[15px] md:text-[25px] lg:text-[29px] text-secondary font-bold mb-5">
          এমন দাবির এবার হবে অবসান:
        </h2>
        <p className=" text-sm md:text-xl">
          <span className="text-2xl font-bold text-primary">ফ্যানরা </span>
          নানাকিছু লিখে। ইউটিউবে কমেন্ট। করে সেলফি তুলতে চায়। দেখা করতে চায়।
          শিখতে চায়। হতে চায় সংবাদ উপস্থাপক।
        </p>
        <p className="my-5 text-[15px] md:text-[25px]">
          সবার এমন ভালোবাসার সরাসরি উত্তর দিতে আয়োজন ফান উইথ ফ্যান।
        </p>
        <ul className="list-disc text-sm md:text-xl md:ml-16">
          <li>অংশ নিতে পারবে যেকেউ।</li>
          <li>অংশ নিতে পারো তুমিও।</li>
          <li>শিখতে পারো। থাকবে মজাও।</li>
          <li>আর সেলফি, আড্ডাতো থাকছেই..!</li>
        </ul>
        <Fade up>
          <button
            onClick={() => setOpen(true)}
            className="block my-10 py-2 border-2 border-[#f40a5c] hover:bg-[#f40a5c] w-[180px] md:w-[290px] text-center rounded-full hover:text-white font-bold text-sm md:text-xl"
          >
            অংশ নিতে ক্লিক করো
          </button>
        </Fade>
      </div>
    </>
  );
};

export default FanFunLeft;
