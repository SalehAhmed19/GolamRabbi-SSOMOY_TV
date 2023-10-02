import React from "react";

const BlogsHeading = ({ headline, heading, date, editor }) => {
  return (
    <div className="border-b border-[#333] my-10">
      <h4 className="text-primary pt-20 mb-5 font-semibold md:mb-5 2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[16px] 2xl:text-[22px]">
        {heading}
      </h4>
      <h1 className="2xs:text-[16px] xs:text-[23px] sm:text-[28px] md:text-[33px] lg:text-[38px] xl:text-[35px] 2xl:text-[28px] font-bold text-basic">
        {headline}
      </h1>
      <h3 className="mt-5 text-accent font-semibold md:mb-5 2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[16px] 2xl:text-[22px]">
        {editor}
      </h3>
      <h3 className="text-accent font-semibold md:mb-5 2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[16px] 2xl:text-[22px] my-5">
        {date}
      </h3>
    </div>
  );
};

export default BlogsHeading;
