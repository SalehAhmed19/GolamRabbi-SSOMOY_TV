import React from "react";
import Advertisement from "../Components/Isolated/Advertisement";
import Banner from "../Components/Isolated/Banner";
import Course from "../Components/Isolated/Course";
import FanFun from "../Components/Isolated/FanFun";
import Features from "../Components/Isolated/Features";
import MediaJobCircular from "../Components/Isolated/MediaJobCircular";
import Mentor from "../Components/Isolated/Mentor";
import Statistics from "../Components/Isolated/Statistics";

function Home() {
  return (
    <div>
      <Banner />
      <Statistics />
      <Features />
      <FanFun />
      <Advertisement />
      <MediaJobCircular />
      <Course />
      <Mentor />
    </div>
  );
}

export default Home;
