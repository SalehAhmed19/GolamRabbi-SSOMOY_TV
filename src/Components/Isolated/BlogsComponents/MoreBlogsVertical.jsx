import React from "react";
import img from "../../../assets/images/bloghsm.png";

function MoreBlogsVertical({ data }) {
  let split3 = data?.headline.split(/\s+/);
  return (
    <div className="flex 2xs:flex-col text-basic my-5">
      <img className="rounded-md" src={img} alt="" />
      <div className="flex flex-col justify-between 2xs:mx-0 mx-5">
        <h3 className="font-bold 2xs:text-[12px] 2xs:my-5">
          {data.headline}
          {/* ‘২০৪০ সালে ট্রিলিয়ন ডলারের <br /> অর্থনীতিতে পরিণত হবে বাংলাদেশ’ */}
        </h3>
        <p className=" text-accent 2xs:text-[12px]">{data?.date}</p>
      </div>
    </div>
  );
}

export default MoreBlogsVertical;
