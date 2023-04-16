import React from "react";
import img from "../../../assets/images/bloghsm.png";

function MoreBlogsVertical({ data }) {
  let split3 = data?.headline.split(/\s+/);
  return (
    <div className="flex text-basic my-5">
      <img className="rounded-md" src={img} alt="" />
      <div className="flex flex-col justify-between mx-5">
        <h3 className="font-bold">
          {/* {split3} */}
          ‘২০৪০ সালে ট্রিলিয়ন ডলারের <br /> অর্থনীতিতে পরিণত হবে বাংলাদেশ’
        </h3>
        <p className="text-accent">{data?.date}</p>
      </div>
    </div>
  );
}

export default MoreBlogsVertical;
