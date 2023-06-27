import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ReviewCard = ({ d }) => {
  return (
    <div className="py-10 px-5 shadow-lg flex flex-col items-center lg:flex-row  mx-auto bg-[#111118] rounded-md">
      <div>
        <div className="bg-primary h-3 w-14 mx-auto rounded-t-md"></div>
        <div className="lg:w-20 bg-[#fff] inline-block p-2 shadow-lg">
          <img
            className="lg:w-20 shadow-lg rounded-md mx-auto"
            src={d.img}
            alt=""
          />
          <h2 className="text-center font-bold my-2 text-[#333] text-sm">
            {d.name}
          </h2>
        </div>
        <div className="bg-primary h-3 w-14 mx-auto rounded-b-md"></div>
      </div>
      <div>
        {/* <div className="bg-[#fff] h-2 w-40 mt-5"></div> */}
        {/* <h2 className="text-primary m-3 font-bold text-xl">অডিয়েন্স রিভিউ</h2> */}
        <div className="lg:mx-5">
          <FaQuoteLeft className="text-[#363636] text-3xl" />
          <div className=" mt-5 lg:mt-0">
            <p className="text-primary">{d.review}</p>
          </div>
          {/* <FaQuoteRight className="text-[#363636] text-3xl ml-auto" /> */}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
