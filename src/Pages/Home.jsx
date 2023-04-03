import React from "react";
import Advertisement from "../Components/Isolated/Advertisement";
import Banner from "../Components/Isolated/Banner";
import Blogs from "../Components/Isolated/Blogs";
import Course from "../Components/Isolated/Course";
import FanFun from "../Components/Isolated/FanFun";
import Features from "../Components/Isolated/Features";
import MediaJobCircular from "../Components/Isolated/MediaJobCircular";
import Mentor from "../Components/Isolated/Mentor";
import MockTest from "../Components/Isolated/MockTest";
import Services from "../Components/Isolated/Services";
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
      <MockTest />
      <Blogs />
      <Services />
    </div>
  );
}

export default Home;
