import React from "react";
import { Zoom } from "react-reveal";
import FeaturedTabs from "./Tabs/FeaturedTabs";

function Featured() {
  return (
    <div className="p-5 md:p-16">
      <h1 className="-mb-5 md:-mb-10 lg:-mb-20  custom-text-stroke-2 text-center  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[55px] lg:text-[100px] my-5">
       ফিচারড
      </h1>
      <Zoom>
        <h1 className="text-primary text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold">
         ফিচারড
        </h1>
      </Zoom>
      <FeaturedTabs />
    </div>
  );
}

export default Featured;
