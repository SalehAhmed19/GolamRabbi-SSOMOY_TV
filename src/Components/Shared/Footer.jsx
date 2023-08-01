import React from "react";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import icon7 from "../../assets/SVGs/socilaIcons/behance.png";
import icon1 from "../../assets/SVGs/socilaIcons/facebook (1).png";
import icon2 from "../../assets/SVGs/socilaIcons/insta.png";
import icon4 from "../../assets/SVGs/socilaIcons/linkedin.png";
import icon3 from "../../assets/SVGs/socilaIcons/twitter.png";
import icon6 from "../../assets/SVGs/socilaIcons/whatsapp.png";
import icon5 from "../../assets/SVGs/socilaIcons/youtube.png";
import bg from "../../assets/images/pexels-felix-mittermeier-2832084.jpg";
import logo from "../../assets/logo/logo.png";
const Footer = () => {
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
    <footer
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        backgroundPosition: "10% 40%",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.9)",
        fontFamily: "Hind Siliguri",
      }}
      className=""
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:max-w-[90%] mx-auto p-8 md:p-16 lg:p-20 text-white ">
        <div className="">
          <div className="space-y-7 text-[16px]">
            <img src={logo} alt="footer-logo" className="w-[80px] h-[65px]" />
            <p>ঠিকানা, ঠিকানা, ঢাকা </p>
            <p>hello.shopnershandesh@gmail.com</p>
            <div className="flex space-x-3">
              {icons?.map((icon) => (
                <img src={icon.icon} alt="social-icon" className="w-[25px] lg:w-[38px]" />
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <ul className="space-y-5 text-[20px]">
            <li className="font-bold text-[22px]"> কুইক লিংক</li>
            <li>আপকামিং লাইভ ব্যাচ</li>
            <li>ফ্রী লাইভ ক্লাস </li>
            <li>লাইভ ওয়ার্কশপ</li>
            <li> ব্লগ</li>
          </ul>
        </div>
        <div className="">
          <ul className="space-y-5 text-[20px]">
            <li className="font-bold text-[22px]"> যোগাযোগ</li>
            <li className="flex items-center">
              <BsTelephone className="mr-2" /> +880 1777 777777
            </li>
            <li className="flex items-center">
              <HiOutlineMail className="mr-2" /> info@gr.com
            </li>
            <li className="flex items-center">
              <CiLocationOn className="mr-2" /> ঢাকা, বাংলাদেশ
            </li>
          </ul>
    <footer>
      <div className="relative z-50  bg-[#14161C]">
        {/* top part */}
        <div className="relative">
          <div className="w-full h-[35px] bg-[#f6b30f] opacity-[.5] "></div>
          <div className="w-full h-[3px] bg-[#f6b30f]"></div>
          <div className="w-[90%] border-[#f6b30f] border-[2px] border-dashed mx-auto mt-5 "></div>
          <div className="w-[80%] border-[#f6b30f] border-[2px] border-dashed mx-auto mt-5 opacity-[.5]"></div>
          <div className="w-[70%] border-[#f6b30f] border-[2px] border-dashed mx-auto mt-5 opacity-[.3]"></div>
          {/* logo */}
          <div className="absolute -top-[77px] left-[30%] md:left-[40%] lg:left-[45%]">
            <div className="bg-black w-[184px] h-[184px] p-[20px] border-[8px] border-[#f6b30f] rounded-full">
              <img
                src={logo}
                alt=""
                className="w-[92px] h-[76px] mt-7 mx-[18px]"
              />
            </div>
            <div className="">
              <h2 className="text-white text-center mt-2 font-bold text-2xl py-5">
                GOLAM RABBY
              </h2>
            </div>
          </div>
        </div>
        {/* left shape */}
        <div className="before:opacity-[.5] before:-z-50 before:absolute before:top-[500px] before:-left-[45px]  before:w-[200px] before:h-[100px] before:bg-[#f6b30f] before:rounded-t-full before:rotate-90 before:blur-xl"></div>
        {/* right shape */}
        <div className="before:absolute before:top-[270px] before:-right-[50px]  before:w-[200px] before:h-[100px] before:bg-[#f40a5c] before:rounded-t-full before:-rotate-90 before:blur-xl"></div>
        {/* second part */}
        <div className="cursor-pointer max-w-7xl mx-auto mt-[150px] p-20">
          <div className=" grid gird-cl md:grid-cols-2 lg:grid-cols-3">
            {/* item 1 */}
            <div
              className=" text-white mb-6"
              style={{ fontFamily: "Hind Siliguri" }}
            >
              <h2 className="font-bold mb-5 text-primary text-xl">কুইক লিংক</h2>
              <ul className="space-y-4">
                <li>আপকামিং লাইভ ব্যাচ</li>
                <li>ফ্রী লাইভ ক্লাস</li>
                <li>লাইভ ওয়ার্কশপ</li>
                <li>ব্লগ</li>
              </ul>
            </div>
            {/* item 2 */}
            <div
              className=" text-white mb-6"
              style={{ fontFamily: "Hind Siliguri" }}
            >
              <h2 className="font-bold mb-5 text-primary text-xl">যোগাযোগ</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <AiOutlinePhone />
                  <span className="mx-2">+880 1777 777777</span>
                </li>
                <li className="flex items-center">
                  <HiOutlineMailOpen />
                  <span className="mx-2">info@gr.com</span>
                </li>
                <li className="flex items-center">
                  <BiLocationPlus />
                  <span className="mx-2">ঢাকা, বাংলাদেশ</span>
                </li>
              </ul>
            </div>
            {/* item 3 */}
            <div
              className="text-white mb-6"
              style={{ fontFamily: "Hind Siliguri" }}
            >
              <h2 className="font-bold mb-5 text-primary text-xl">কোম্পানি</h2>
              <ul className="space-y-4">
                <li>আমাদের সম্পর্কে</li>
                <li>রিফান্ড পলিসি</li>
                <li>প্রাইভেসি পলিসি</li>
                <li>টার্মস ও শর্তাবলি</li>
              </ul>
            </div>
          </div>
        </div>
        {/* bottom part */}
        <div className="relative">
          <a href="https://www.codevexa.com/" target="_black">
            <div className="absolute bottom-0 left-[30px] md:left-[22%] lg:left-[35%] w-[350px] md:w-[413px] h-[50px] bg-[#f6b30f] hover:transition-all hover:duration-500 hover:delay-100 rounded-tl-full rounded-tr-full">
              <h2 className="absolute inset-0 top-[20px] left-[135px] flex  text-center text-sm">
                Developed by &nbsp;{" "}
                <span style={{ fontWeight: 700 }}>CodeVexa</span>
              </h2>
            </div>
          </a>
        </div>
        <div className="">
          <ul className="space-y-5 text-[20px]">
            <li className="font-bold text-[22px]"> কোম্পানি</li>
            <li>আমাদের সম্পর্কে</li>
            <li>রিফান্ড পলিসি</li>
            <li>প্রাইভেসি পলিসি</li>
            <li>টার্মস ও শর্তাবলি</li>
          </ul>
        </div>
      </div>
      <div className="h-[53px] bg-[#f6b50f1d]">
        <p className="text-white text-center pt-5">
          Developed by &nbsp;
          <span className="font-bold">
            <a
              href="https://www.codevexa.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeVexa
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
