import React from "react";
import img1 from "../../../assets/images/blogh.png";

const BlogsSubHeading = ({ subHeading }) => {
  return (
    <div className="border-b border-[#333] mb-10">
      <img src={img1} alt="" />
      <div className="flex flex-col lg:flex-row items-center text-accent my-10 text-sm justify-between">
        <p className="2xs:text-[12px] lg:mr-14">{subHeading}</p>
        <p className="my-5">| ছবিঃ সংগৃহীত</p>
      </div>
    </div>
  );
};

export default BlogsSubHeading;
