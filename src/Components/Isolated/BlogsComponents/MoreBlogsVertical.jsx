import React from "react";
import img from "../../../assets/images/bloghsm.png";

function MoreBlogsVertical() {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="my-5">
      <h3 className="text-basic text-xl font-bold text-left my-5">আরও পড়ুন</h3>
      {arr.map((a, idx) => (
        <div key={idx} className="flex text-basic my-5">
          <img className="rounded-md" src={img} alt="" />
          <div className="flex flex-col justify-between mx-5">
            <h3 className="font-bold">
              ‘২০৪০ সালে ট্রিলিয়ন ডলারের <br /> অর্থনীতিতে পরিণত হবে বাংলাদেশ’
            </h3>
            <p className="text-accent">১২ মার্চ ২০২৩</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoreBlogsVertical;
