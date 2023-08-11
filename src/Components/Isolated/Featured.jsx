import React from "react";
import { Fade } from "react-reveal";
import FeaturedTabs from "./Tabs/FeaturedTabs";

function Featured() {
  return (
    <div className="lg:mx-20 mx-5 my-14 p-5">
      <h1 className="pt-[26px] -mb-5 md:-mb-10 lg:-mb-20 custom-text-stroke-2 text-center text-[28px] md:text-[55px] lg:text-[100px] my-5">
          ফিচারড
      </h1>
      <Fade down>
        <h1 className="text-primary text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold">
            ফিচারড
        </h1>
      </Fade>
      <FeaturedTabs />
    </div>
  );
}

export default Featured;
