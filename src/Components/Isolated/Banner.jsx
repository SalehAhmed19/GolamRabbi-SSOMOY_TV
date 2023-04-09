import React from "react";
import reporter from "../../assets/Banner/reporter.jpg";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { Fade } from "react-reveal";

function Banner() {
  // const socialLinks = [
  //   { _id: 1, icon: <GrFacebook />, href: "" },
  //   { _id: 2, icon: <GrFacebook />, href: "" },
  //   { _id: 3, icon: <GrFacebook />, href: "" },
  // ];
  return (
    <React.Fragment>
      <div
        style={{
          background: `url(${reporter})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
        className="pt-20 h-screen flex flex-col justify-center lg:px-24 px-5"
      >
        <Fade left>
          <div className="pt-20">
            <h1 className="text-5xl font-bold text-[#fff]">
              ভয়, জড়তা, শঙ্কা আর
            </h1>
            <h1
              style={{ fonFamily: "MyBanglaFont" }}
              className="text-[#F90162] my-6 text-5xl font-bold"
            >
              অনিশ্চয়তাকে পেছনে ফেলে
            </h1>
            {/* <h3 className="text-[#F3B004] font-bold text-xl">
            বিজয়ের গল্পের শুরু এখানেই ............
          </h3> */}
            <h1 className="text-[#F3B004] font-bold text-xl">
              <Typewriter
                options={{
                  strings: ["বিজয়ের গল্পের শুরু এখানেই ..."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <div className="mt-24">
            <h4 className="text-[#F3B004] font-bold text-center cursor-pointer">
              শেয়ার করে স্বপ্নকে জয় করো
            </h4>
            <div className="inline-block my-5">
              <div className="flex text-[#8A8EA0] text-3xl">
                <div className="px-2 cursor-pointer hover:text-[#2C7DEB]">
                  <BsFacebook />
                </div>
                <div className="px-2 cursor-pointer hover:text-[#F2A65B]">
                  <BsInstagram />
                </div>
                <div className="px-2 cursor-pointer hover:text-[#2C7DEB]">
                  <BsTwitter />
                </div>
                <div className="px-2 cursor-pointer hover:text-[#F50103]">
                  <BsYoutube />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </React.Fragment>
  );
}

export default Banner;
