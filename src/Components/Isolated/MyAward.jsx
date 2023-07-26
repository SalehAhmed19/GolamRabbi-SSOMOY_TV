import React from "react";
import { Fade } from "react-reveal";
import Award from "../../assets/images/award.png";
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
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-5">
          {arr.map((a) => (
            <div className="p-5 shadow-lg shadow-[#0000005c] rounded-md">
              <img src={Award} alt="" />
              {/* <FaAward className="text-primary text-[88px]" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyAward;
