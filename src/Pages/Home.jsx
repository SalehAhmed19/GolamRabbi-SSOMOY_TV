import React from "react";
import Advertisement from "../Components/Isolated/Advertisement";
import Banner from "../Components/Isolated/Banner";
import FanFun from "../Components/Isolated/FanFun";
import Features from "../Components/Isolated/Features";
import Statistics from "../Components/Isolated/Statistics";

function Home() {
  return (
    <div>
      <Banner />
      <Statistics />
      <Features />
      <FanFun />
      <Advertisement />
    </div>
  );
}

export default Home;
