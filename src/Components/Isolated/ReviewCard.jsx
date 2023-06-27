import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
// 
const ReviewCard = ({ d }) => {
  return (
    <div className="p-5 lg:p-10 shadow-lg flex flex-col lg:flex-row mx-auto bg-[#111118] rounded-md">
      <div>
        <div className="bg-primary h-3 w-24 mx-auto rounded-t-md"></div>
        <div className="lg:w-40 bg-[#fff] inline-block p-4 shadow-lg">
          <img
            className="lg:w-36 shadow-lg rounded-md mx-auto"
            src={d.img}
            alt=""
          />
          <h2 className="text-center font-bold my-2 text-[#333]">{d.name}</h2>
        </div>
        <div className="bg-primary h-3 w-24 mx-auto rounded-b-md"></div>
      </div>
      <div>
        {/* <div className="bg-[#fff] h-2 w-40 mt-5"></div> */}
        {/* <h2 className="text-primary m-3 font-bold text-xl">অডিয়েন্স রিভিউ</h2> */}
        <div className="lg:mx-5">
          <FaQuoteLeft className="text-[#363636] text-3xl" />
          <div className="lg:p-5 mt-5 lg:mt-0">
            <p className="text-primary">{d.review}</p>
          </div>
          {/* <FaQuoteRight className="text-[#363636] text-3xl ml-auto" /> */}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
