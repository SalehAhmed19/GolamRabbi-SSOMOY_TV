import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
const ReviewCard = ({ d }) => {
  return (
    <>
      <div
        className="md:flex relative"
        // style={{ fontFamily: "Hind Siliguri"}}
      >
        {/* desktop rating info */}
        <div className="hidden md:block">
          <div className="flex justify-center items-center  w-[200px] h-[200px] rounded-lg bg-secondary">
            <div className="text-white mx-8">
              <h2 className="text-3xl font-bold">আহনাফ</h2>
              <h2 className="text-3xl font-bold">শাহারিয়ার</h2>
              <p className="text-lg">সাইবার সিকিউরিটি স্পেশালিষ্ট</p>
              <div className="flex space-x-1">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[504px] md:h-[784px] md:flex md:absolute md:left-[180px] md:top-[45px]">
          <img
            src={d.img}
            alt="image"
            className="w-[90px] h-[90px] rounded-lg"
          />
          {/* mobile rating info */}
          <div className="absolute top-0 left-24 w-[350px] h-[90px] bg-secondary md:hidden rounded-lg">
            <div className="text-white mx-8">
              <h2 className="text-3xl font-bold">আহনাফ শাহারিয়ার</h2>
              <p className="text-lg">সাইবার সিকিউরিটি স্পেশালিষ্ট</p>
              <div className="flex space-x-1">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
            </div>
          </div>
          <div className="md:mx-6 mt-5 md:mt-0">
            <p>
              আমি একজন নিয়মিত সময় টিভি এর সংবাদ প্রদানকারী গোলাম রাব্বী- এর কাজে
              সন্মান জানাতে চাই। তাঁর দক্ষতা, সতর্কতা এবং পেশাদারী আচরণ নিয়ে আমি
              সর্বদা প্রভাবিত হই। তাঁর সংবাদ প্রদান মানসম্পন্ন এবং সরল হয়ে থাকে।
              সংবাদের জগতে তাঁর প্রতিভার স্তর অত্যন্ত উন্নত এবং তাঁর সংবাদ
              প্রদান সব সময় আলোচনামূলক হয়।
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
//  <div className="p-5 lg:p-10 shadow-lg flex flex-col lg:flex-row mx-auto bg-[#111118] rounded-md">
//    <div>
//      <div className="bg-primary h-3 w-14 mx-auto rounded-t-md"></div>
//      <div className="lg:w- c20 bg-[#fff] inline-block p-2 shadow-lg">
//        <img
//          className="lg:w-20 shadow-lg rounded-md mx-auto"
//          src={d.img}
//          alt=""
//        />
//        <h2 className="text-center font-bold my-2 text-[#333] text-sm">
//          {d.name}
//        </h2>
//      </div>
//      <div className="bg-primary h-3 w-14 mx-auto rounded-b-md"></div>
//    </div>
//    <div>
//      {/* <div className="bg-[#fff] h-2 w-40 mt-5"></div> */}
//      {/* <h2 className="text-primary m-3 font-bold text-xl">অডিয়েন্স রিভিউ</h2> */}
//      <div className="lg:mx-5">
//        <FaQuoteLeft className="text-[#363636] text-3xl" />
//        <div className=" mt-5 lg:mt-0">
//          <p className="text-primary">{d.review}</p>
//        </div>
//        {/* <FaQuoteRight className="text-[#363636] text-3xl ml-auto" /> */}
//      </div>
//    </div>
//  </div>;
