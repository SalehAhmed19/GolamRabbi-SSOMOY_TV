import React from "react";
import "../App.css";
import About from "../Components/Isolated/About";
import Advertisement from "../Components/Isolated/Advertisement";
import Advertisement2 from "../Components/Isolated/Advertisement2";
import Banner from "../Components/Isolated/Banner";
import Blogs from "../Components/Isolated/Blogs";
import BookSection from "../Components/Isolated/BookSection";
import Course from "../Components/Isolated/Course";
import Events from "../Components/Isolated/Events";
import FanFun from "../Components/Isolated/FanFun";
import Featured from "../Components/Isolated/Featured";
import Features from "../Components/Isolated/Features";
import HomeImageGallery from "../Components/Isolated/HomeImageGallery";
import Invite from "../Components/Isolated/Invite";
import MediaJobCircular from "../Components/Isolated/MediaJobCircular";
import Mentor from "../Components/Isolated/Mentor";
import MockTest from "../Components/Isolated/MockTest";
import MyAward from "../Components/Isolated/MyAward";
import Quotes from "../Components/Isolated/Quotes";
import Services from "../Components/Isolated/Services";
import Skills from "../Components/Isolated/Skills";
import SocialMedia from "../Components/Isolated/SocialMedia";
import Statistics from "../Components/Isolated/Statistics";
import Subscribe from "../Components/Isolated/Subscribe";
import Testimonals from "../Components/Isolated/Testimonals";

function Home() {
  return (
    <div className="relative">
      {/* <div className="absolute">
        <img className="w-full object-cover blur-3xl" src={bg} alt="" />
      </div> */}
      <div className="relative bg-opacity-75 backdrop-filter backdrop-blur-3xl">
        <Banner />
        <Statistics />
        <FanFun />
        <Features />
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
        <Featured />
        <Invite />
        <About />
        <BookSection />
        <HomeImageGallery />
        <SocialMedia />
      </div>
    </div>
  );
}

export default Home;
