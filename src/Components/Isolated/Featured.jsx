import React from "react";
import FeaturedTabs from "./Tabs/FeaturedTabs";
import { Fade } from "react-reveal";

function Featured() {
  return (
    <div className="lg:mx-20 mx-5 my-14 p-5">
      <Fade down>
        <h1 className="text-primary text-center text-4xl font-bold my-5">
          ফিচারড
        </h1>
      </Fade>
      <FeaturedTabs />
    </div>
  );
}

export default Featured;
