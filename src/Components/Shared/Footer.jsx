import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";
import logo from "../../assets/logo/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#14161C] pt-36">
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
            <h2 className="text-white text-center mt-2 font-bold text-2xl">
              GOLAM RABBY
            </h2>
          </div>
        </div>
      </div>
      {/* second part */}
      <div className="max-w-7xl mx-auto mt-[150px] p-10">
        <div className="grid gird-cl md:grid-cols-2 lg:grid-cols-3">
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
        <div className="absolute top-0 left-[30px] md:left-[24%] lg:left-[40%] w-[350px] md:w-[413px] h-[50px] bg-[#f6b93f] rounded-tl-full rounded-tr-full">
          <h2 className="absolute top-[10px] left-[25%] md:left-[19%] lg:left-[10%] font-bold  text-center text-xl md:text-2xl lg:text-3xl">
            Developed by CodeVexa
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
