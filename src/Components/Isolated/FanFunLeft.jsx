import React from "react";
import { Fade } from "react-reveal";
// mt-10 flex flex-col justify-center font-semibold
const FanFunLeft = ({ setOpen }) => {
  return (
    <>
      <div className="font-semibold">
        <h2 className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-secondary font-bold">
          এমন দাবির এবার হবে অবসান:
        </h2>
        <p className="py-2 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]">
          <span className="text-2xl font-bold text-primary">ফ্যানরা </span>
          নানাকিছু লিখে। ইউটিউবে কমেন্ট। করে সেলফি তুলতে চায়। দেখা করতে চায়।
          শিখতে চায়। হতে চায় সংবাদ উপস্থাপক।
        </p>
        <p className="my-5 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]">
          সবার এমন ভালোবাসার সরাসরি উত্তর দিতে আয়োজন ফান উইথ ফ্যান।
        </p>
        <ul className="list-disc 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px] 2xs:ml-4 xs:ml-5 md:ml-16">
          <li>অংশ নিতে পারবে যেকেউ।</li>
          <li>অংশ নিতে পারো তুমিও।</li>
          <li>শিখতে পারো। থাকবে মজাও।</li>
          <li>আর সেলফি, আড্ডাতো থাকছেই..!</li>
        </ul>
        <Fade up>
          <button
            onClick={() => setOpen(true)}
            className="block 2xs:my-4 xs:my-6 sm:my-8 md:my-10 py-2 px-5 border-2 border-[#f40a5c] hover:bg-[#f40a5c] 2xs: sm:w-[180px] md:w-[290px] text-center rounded-full hover:text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]"
          >
            অংশ নিতে ক্লিক করো
          </button>
        </Fade>
      </div>
    </>
  );
};

export default FanFunLeft;
