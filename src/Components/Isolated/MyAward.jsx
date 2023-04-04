import React from "react";
import { Fade } from "react-reveal";

function MyAward() {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="lg:px-24 py-14 text-[#fff] px-5">
      <Fade down>
        <h1 className="text-primary text-center text-4xl font-bold">
          অ্যাওয়ার্ড
        </h1>
      </Fade>
      <div className="flex flex-col items-center mb-14">
        <div className="mt-10 flex flex-col lg:flex-row gap-7">
          {arr.map((a) => (
            <div className="w-36 h-36 shadow-lg shadow-[#282828] rounded-md"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyAward;
