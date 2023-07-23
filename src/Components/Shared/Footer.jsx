import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";
import logo from "../../assets/logo/logo.png";
const Footer = () => {
  return (
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
          <div className="absolute -top-[50px] left-[30%] md:left-[40%] lg:left-[45%]">
            <div className="bg-black w-[155px] h-[155px] border-[8px] border-[#f6b30f] rounded-full ">
              <img
                src={logo}
                alt=""
                className="w-[92px] h-[76px] mt-[35px] mx-[24px]"
              />
            </div>
            <div className="">
              <h2 className="text-white text-center font-bold text-2xl">
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
              <h2 className="font-bold mb-5 text-primary text-xl md:text-2xl lg:text-3xl">
                কুইক লিংক
              </h2>
              <ul className="space-y-4 md:text-xl">
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
              <h2 className="font-bold mb-5 text-primary text-xl md:text-2xl lg:text-3xl">
                যোগাযোগ
              </h2>
              <ul className="space-y-4 md:text-xl">
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
              <h2 className="font-bold mb-5 text-primary text-xl md:text-2xl lg:text-3xl">
                কোম্পানি
              </h2>
              <ul className="space-y-4 md:text-xl">
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
                Developed by &nbsp; <span style={{fontWeight:700}}>CodeVexa</span> 
              </h2>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
