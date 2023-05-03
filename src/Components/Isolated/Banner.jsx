import React from "react";
import reporter from "../../assets/Banner/reporter.jpg";
import { BsFacebook, BsLinkedin, BsInstagram, BsYoutube } from "react-icons/bs";
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
        <div className="flex flex-col lg:flex-row h-[500px] relative">
          <div className="mt-36">
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
          </div>
          <div className="relative hidden lg:block">
            <div className="w-80 base p-5 cursor-pointer rounded-md absolute top-[250px] mx-5 duration-200">
              <h1 className="font-bold text-2xl text-center">
                শেয়ার করে স্বপ্নকে জয় করো
              </h1>
              <p className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                necessitatibus itaque commodi aperiam error veritatis? Nobis,
                tenetur dignissimos libero veniam autem quos cumque cupiditate
                esse, repellendus, eligendi nemo asperiores magnam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Banner;
