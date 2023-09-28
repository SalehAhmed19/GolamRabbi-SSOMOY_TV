import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import reporter from "../../assets/images/image.png";
import BannerCard from "./Cards/BannerCard";
import icon7 from "../../assets/SVGs/socilaIcons/behance.png";
import icon1 from "../../assets/SVGs/socilaIcons/facebook (1).png";
import icon2 from "../../assets/SVGs/socilaIcons/insta.png";
import icon4 from "../../assets/SVGs/socilaIcons/linkedin.png";
import icon3 from "../../assets/SVGs/socilaIcons/twitter.png";
import icon6 from "../../assets/SVGs/socilaIcons/whatsapp.png";
import icon5 from "../../assets/SVGs/socilaIcons/youtube.png";
function Banner() {
  // const socialLinks = [
  //   { _id: 1, icon: <GrFacebook />, href: "" },
  //   { _id: 2, icon: <GrFacebook />, href: "" },
  //   { _id: 3, icon: <GrFacebook />, href: "" },
  // ];
  const icons = [
    { id: 1, icon: icon1 },
    { id: 2, icon: icon2 },
    { id: 3, icon: icon3 },
    { id: 4, icon: icon4 },
    { id: 5, icon: icon5 },
    { id: 6, icon: icon6 },
    { id: 7, icon: icon7 },
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
        className=" flex flex-col justify-center lg:px-24 p-5"
      >
        {/* <Fade left>
          <div className="pt-20 grid grid-cols-2 p-5">
            <div>
              <h1 className="text-5xl font-bold text-[#fff]">
                ভয়, জড়তা, শঙ্কা আর
              </h1>
              <h1
                style={{ fonFamily: "MyBanglaFont" }}
                className="text-[#F90162] my-6 text-5xl font-bold"
              >
                অনিশ্চয়তাকে পেছনে ফেলে
              </h1>
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
            <div>
              <div className="base bg-[#fff] w-96 p-5 rounded-md">
                <h1 className="font-bold">Title</h1>
                <p className="des">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                  nobis quas nam aliquam rem earum! Similique suscipit ullam
                  mollitia. Voluptatum numquam esse molestias quis quasi
                  voluptas eaque sequi sit perferendis?
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div className="inline-block my-5">
              <div className="flex text-[#8A8EA0] text-3xl">
                <a
                  target="_blank"
                  href="https://www.facebook.com/golam.rabby.739326"
                  className="px-2 cursor-pointer hover:text-[#2C7DEB] duration-500"
                >
                  <BsFacebook />
                </a>
                <a
                  href="https://www.instagram.com/golam.rabby.739326"
                  target="_blank"
                  className="px-2 cursor-pointer hover:text-[#F2A65B] duration-500"
                >
                  <BsInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/golam-rabby/"
                  target="_blank"
                  className="px-2 cursor-pointer hover:text-[#2C7DEB] duration-500"
                >
                  <BsLinkedin />
                </a>
                <div className="px-2 cursor-pointer hover:text-[#F50103] duration-500">
                  <BsYoutube />
                </div>
              </div>
            </div>
          </div>
        </Fade> */}

        <div className="flex justify-between items-center flex-col md:flex-row h-screen relative">
          <div className="mt-36">
            <h1 className="2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[33px] lg:text-[38px] xl:text-[43px] 2xl:text-[48px] font-bold text-[#fff]">
              ভয়, জড়তা, শঙ্কা আর
            </h1>
            <h1
              style={{ fonFamily: "MyBanglaFont" }}
              className="2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[33px] lg:text-[38px] xl:text-[43px] 2xl:text-[48px] text-[#F90162] my-6 font-bold"
            >
              অনিশ্চয়তাকে পেছনে ফেলে
            </h1>
            <h1 className="2xs:text-[10px] xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] text-[#F3B004] font-bold">
              <Typewriter
                options={{
                  strings: ["বিজয়ের গল্পের শুরু এখানেই ..."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <div className="flex space-x-3 mt-5">
              {icons?.map((icon) => (
                <img
                  src={icon.icon}
                  alt="social-icon"
                  className="2xs:w-[18px] xs:w-[30px] sm:w-[35px] 2xl:w-[32px]"
                />
              ))}
            </div>
          </div>
          <div>
            <BannerCard />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Banner;
