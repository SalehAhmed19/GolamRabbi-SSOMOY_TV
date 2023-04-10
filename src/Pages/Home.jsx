import React, { useState } from "react";
import Advertisement from "../Components/Isolated/Advertisement";
import Advertisement2 from "../Components/Isolated/Advertisement2";
import Banner from "../Components/Isolated/Banner";
import Blogs from "../Components/Isolated/Blogs";
import Course from "../Components/Isolated/Course";
import Events from "../Components/Isolated/Events";
import FanFun from "../Components/Isolated/FanFun";
import Features from "../Components/Isolated/Features";
import MediaJobCircular from "../Components/Isolated/MediaJobCircular";
import Mentor from "../Components/Isolated/Mentor";
import MockTest from "../Components/Isolated/MockTest";
import MyAward from "../Components/Isolated/MyAward";
import Services from "../Components/Isolated/Services";
import Skills from "../Components/Isolated/Skills";
import SocialMedia from "../Components/Isolated/SocialMedia";
import Statistics from "../Components/Isolated/Statistics";
import Quotes from "../Components/Isolated/Quotes";
import Subscribe from "../Components/Isolated/Subscribe";
import Testimonals from "../Components/Isolated/Testimonals";
import About from "../Components/Isolated/About";
import Invite from "../Components/Isolated/Invite";
import CustomModal from "../Components/Isolated/Modals/CourseModal";

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
      <Skills />
      <Advertisement2 />
      <Events />
      <MyAward />
      <Quotes />
      <Subscribe />
      <Testimonals />
      <Invite />
      <About />
      <SocialMedia />
    </div>
  );
}

export default Home;
