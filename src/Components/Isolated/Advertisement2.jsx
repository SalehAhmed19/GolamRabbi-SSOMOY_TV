import React from "react";
import bg from "../../assets/images/add2-bg.jpg";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { Fade } from "react-reveal";

function Advertisement2() {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:px-24 py-20 text-[#fff]"
    >
      <Fade down>
        <h2 className="text-center text-4xl font-bold mb-5 text-primary">
          মিডিয়া জব। বিশেষ করে সংবাদ উপস্থাপনা। তাও আবার টিভিতে। এ চাকরি নিয়ে
          জানতে চাও? তাহলে দেরী না করে এখনই ওয়াটস্ অ্যাপ করো অথবা মেইল করো।
        </h2>
      </Fade>
      <Fade right>
        <div className="flex flex-col items-end text-xl">
          <span>
            <p className="flex items-center">
              <IoLogoWhatsapp className="text-primary mr-5" /> (+880)
              1721-576389
            </p>
            <p className="flex items-center">
              <SiMinutemailer className="text-primary mr-5" />{" "}
              info@golamrabby.me
            </p>
          </span>
        </div>
      </Fade>
    </div>
  );
}

export default Advertisement2;
