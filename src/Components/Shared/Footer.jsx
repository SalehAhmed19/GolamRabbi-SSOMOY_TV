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
                <img
                  src={icon.icon}
                  alt="social-icon"
                  className="w-[25px] lg:w-[38px]"
                />
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
