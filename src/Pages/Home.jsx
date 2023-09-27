import React from "react";
import "../App.css";
import About from "../Components/Isolated/About";
import Advertisement2 from "../Components/Isolated/Advertisement2";
import Banner from "../Components/Isolated/Banner";
import Blogs from "../Components/Isolated/Blogs";
import BookSection from "../Components/Isolated/BookSection";
import Events from "../Components/Isolated/Events";
import FanFun from "../Components/Isolated/FanFun";
import Featured from "../Components/Isolated/Featured";
import HomeImageGallery from "../Components/Isolated/HomeImageGallery";
import MediaJobCircular from "../Components/Isolated/MediaJobCircular";
import Mentor from "../Components/Isolated/Mentor";
import MyAward from "../Components/Isolated/MyAward";
import Quotes from "../Components/Isolated/Quotes";
import Services from "../Components/Isolated/Services";
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
        <MediaJobCircular />
        <FanFun />
        <Blogs />
        <Mentor />
        <Advertisement2 />
        <Services />
        <Events />
        <MyAward />
        <Quotes />
        <Subscribe />
        <Testimonals />
        <Featured />
        <About />
        <BookSection />
        <SocialMedia />
        <HomeImageGallery /> 
      </div>
    </div>
  );
}

export default Home;
