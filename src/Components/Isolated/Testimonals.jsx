import React from "react";
import { Fade, Zoom } from "react-reveal";
import { CgUserlane } from "react-icons/cg";
import img from "../../assets/images/user.jpeg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Testimonals() {
  const data = [
    {
      name: "সাদিকুর রহমান",
      review:
        "আমি একজন নিয়মিত সময় টিভি এর সংবাদ প্রদানকারী গোলাম রাব্বী- এর কাজে সন্মান জানাতে চাই। তাঁর দক্ষতা, সতর্কতা এবং পেশাদারী আচরণ নিয়ে আমি সর্বদা প্রভাবিত হই। তাঁর সংবাদ প্রদান মানসম্পন্ন এবং সরল হয়ে থাকে। সংবাদের জগতে তাঁর প্রতিভার স্তর অত্যন্ত উন্নত এবং তাঁর সংবাদ প্রদান সব সময় আলোচনামূলক হয়। আমি তার কাজে জনাই সম্মান ও শুভেচ্ছা।",
    },
    {
      name: "আলাউদ্দিন কায়কোবাদ",
      review:
        "আমি একজন নিয়মিত সময় টিভি এর সংবাদ প্রদানকারী গোলাম রাব্বী- এর কাজে সন্মান জানাতে চাই। তাঁর দক্ষতা, সতর্কতা এবং পেশাদারী আচরণ নিয়ে আমি সর্বদা প্রভাবিত হই। তাঁর সংবাদ প্রদান মানসম্পন্ন এবং সরল হয়ে থাকে। সংবাদের জগতে তাঁর প্রতিভার স্তর অত্যন্ত উন্নত এবং তাঁর সংবাদ প্রদান সব সময় আলোচনামূলক হয়। আমি তার কাজে জনাই সম্মান ও শুভেচ্ছা।",
    },
    {
      name: "সাদেত্তিন কোপেক",
      review:
        "আমি একজন নিয়মিত সময় টিভি এর সংবাদ প্রদানকারী গোলাম রাব্বী- এর কাজে সন্মান জানাতে চাই। তাঁর দক্ষতা, সতর্কতা এবং পেশাদারী আচরণ নিয়ে আমি সর্বদা প্রভাবিত হই। তাঁর সংবাদ প্রদান মানসম্পন্ন এবং সরল হয়ে থাকে। সংবাদের জগতে তাঁর প্রতিভার স্তর অত্যন্ত উন্নত এবং তাঁর সংবাদ প্রদান সব সময় আলোচনামূলক হয়। আমি তার কাজে জনাই সম্মান ও শুভেচ্ছা।",
    },
  ];
  return (
    <div className="lg:mx-20 mx-5 my-14">
      <Fade down>
        <h1 className="text-primary text-center text-4xl font-bold my-5">
          টেস্টিমনিয়ালস
        </h1>
      </Fade>

      <div className="p-5 lg:p-10 shadow-lg flex flex-col lg:flex-row lg:w-2/3 mx-auto bg-[#222] rounded-md">
        <div>
          <div className="bg-primary h-3 w-24 mx-auto rounded-t-md"></div>
          <div className="lg:w-40 bg-[#fff] inline-block p-4">
            <img
              className="lg:w-36 shadow-lg rounded-md mx-auto"
              src={img}
              alt=""
            />
            <h2 className="text-center font-bold my-2 text-[#333]">
              সাদিকুর রহমান
            </h2>
          </div>
          <div className="bg-primary h-3 w-24 mx-auto rounded-b-md"></div>
        </div>
        <div>
          <div className="bg-[#fff] h-2 w-40 mt-5"></div>
          <h2 className="text-primary m-3 font-bold text-xl">অডিয়েন্স রিভিউ</h2>
          <div className="lg:mx-5">
            <FaQuoteLeft className="text-[#363636] text-3xl" />
            <div className="lg:p-5 mt-5 lg:mt-0">
              <p className="text-primary">
                আমি একজন নিয়মিত সময় টিভি এর সংবাদ প্রদানকারী গোলাম রাব্বী- এর
                কাজে সন্মান জানাতে চাই। তাঁর দক্ষতা, সতর্কতা এবং পেশাদারী আচরণ
                নিয়ে আমি সর্বদা প্রভাবিত হই। তাঁর সংবাদ প্রদান মানসম্পন্ন এবং
                সরল হয়ে থাকে। সংবাদের জগতে তাঁর প্রতিভার স্তর অত্যন্ত উন্নত এবং
                তাঁর সংবাদ প্রদান সব সময় আলোচনামূলক হয়। আমি তার কাজে জনাই সম্মান
                ও শুভেচ্ছা।
              </p>
            </div>
            <FaQuoteRight className="text-[#363636] text-3xl ml-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonals;
// {data.map((d, idx) => (
//   <div
//     key={idx}
//     className="bg-white/10 w-full group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-md text-base lg:mx-5"
//   >
//     <img
//       className="rounded-full h-20 mx-auto"
//       src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
//       alt=""
//     />
//     <h4 className="uppercase text-xl font-bold text-center text-primary">
//       {d.name}
//     </h4>
//     <p className="text-sm leading-7 my-3 text-basic text-basic">
//       {d.review}
//     </p>
//     {/* <button className="bg-primary py-2.5 px-8 rounded-full mx-auto block">
//       Get in Touch
//     </button> */}
//   </div>
// ))}
