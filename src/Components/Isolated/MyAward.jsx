import React from "react";
import { Zoom } from "react-reveal";
import Award from "../../assets/images/award.png";
function MyAward() {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="p-5 md:p-16 text-[#fff]">
      <h1 className="-mb-5 md:-mb-10 lg:-mb-20  custom-text-stroke-2 text-center  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[55px] lg:text-[100px] my-5">
      অ্যাওয়ার্ড
      </h1>
      <Zoom>
        <h1 className="text-primary text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold">
        অ্যাওয়ার্ড
        </h1>
      </Zoom>
      <div className="flex flex-col items-center mb-14">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6  gap-5">
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
