import React from "react";
import { Fade, Zoom } from "react-reveal";

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
      <div className="flex flex-col lg:flex-row mx-auto gap-2 group">
        {data.map((d, idx) => (
          <Zoom>
            <div
              key={idx}
              className="bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-md text-base mx-5"
            >
              <img
                className="rounded-full h-20 mx-auto"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
                alt=""
              />
              <h4 className="uppercase text-xl font-bold text-center text-primary">
                {d.name}
              </h4>
              <p className="text-sm leading-7 my-3 text-basic text-basic">
                {d.review}
              </p>
              {/* <button className="bg-primary py-2.5 px-8 rounded-full mx-auto block">
            Get in Touch
          </button> */}
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
}

export default Testimonals;
