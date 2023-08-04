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
      {/* first part */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-20 mx-auto p-5 md:p-16 lg:p-20 text-white">
        <div className="xl:-ml-6 2xl:-ml-0">
          <div className="space-y-7 xs:text-[13px] 2xs:text-[15px] sm:text-[17px] md:text-[19px]">
            <img
              src={logo}
              alt="footer-logo"
              className="xs:w-[60px] 2xs:w-[80px] sm:w-[100px]"
            />
            <p>ঠিকানা, ঠিকানা, ঢাকা </p>
            <p>hello.shopnershandesh@gmail.com</p>
            <div className="flex space-x-3">
              {icons?.map((icon) => (
                <img
                  src={icon.icon}
                  alt="social-icon"
                  className="xs:w-[18px] 2xs:w-[20px] sm:w-[22px] md:w-[26px] lg:w-[28px] xl:w-[30px] 2xl:w-[32px]"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <ul className="space-y-5 xs:text-[13px] 2xs:text-[15px] sm:text-[17px] md:text-[19px]">
            <li className="font-bold xs:text-[16px] 2xs:text-[18px] sm:text-[20px] md:text-[22px]">
              {" "}
              কুইক লিংক
            </li>
            <li>আপকামিং লাইভ ব্যাচ</li>
            <li>ফ্রী লাইভ ক্লাস </li>
            <li>লাইভ ওয়ার্কশপ</li>
            <li> ব্লগ</li>
          </ul>
        </div>
        <div className="">
          <ul className="space-y-5 xs:text-[13px] 2xs:text-[15px] sm:text-[17px] md:text-[19px]">
            <li className="font-bold text-[21px]"> যোগাযোগ</li>
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
          <ul className="space-y-5 xs:text-[13px] 2xs:text-[15px] sm:text-[17px] md:text-[19px]">
            <li className="font-bold text-[21px]"> কোম্পানি</li>
            <li>আমাদের সম্পর্কে</li>
            <li>রিফান্ড পলিসি</li>
            <li>প্রাইভেসি পলিসি</li>
            <li>টার্মস ও শর্তাবলি</li>
          </ul>
        </div>
      </div>
      {/* second part */}
      <div className="h-[53px] bg-[#f6b50f1d]">
        <p className="text-white text-center pt-5 xs:text-[13px] 2xs:text-[15px] sm:text-[17px] md:text-[19px]">
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
