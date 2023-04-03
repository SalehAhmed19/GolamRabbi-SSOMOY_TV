import React from "react";
import reporter from "../../assets/Banner/reporter.jpg";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { Fade } from "react-reveal";

function Banner() {
  const socialLinks = [
    { _id: 1, icon: <FiFacebook />, href: "" },
    { _id: 2, icon: <FiTwitter />, href: "" },
    { _id: 3, icon: <FiLinkedin />, href: "" },
  ];
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
                  strings: ["বিজয়ের গল্পের শুরু এখানেই ............"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <div className="mt-24">
            <h4 className="text-[#F3B004] font-bold">
              শেয়ার করে স্বপ্নকে জয় করো
            </h4>
            <div className="bg-[#212429] inline-block my-5">
              <div className="flex text-[#8A8EA0] text-xl">
                {socialLinks.map((socialLink) => (
                  <div key={socialLink._id} className="p-4 hover:bg-[#171a1d]">
                    {socialLink.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </React.Fragment>
  );
}

export default Banner;
