import React from "react";
import bg from "../../assets/images/event-bg.jpg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { Fade } from "react-reveal";

function Events() {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:px-24 py-14 text-[#fff]"
    >
      <Fade down>
        <h1 className="text-primary text-center text-4xl font-bold">
          আসন্ন ইভেন্টস
        </h1>
      </Fade>
      <div className="-p-5 flex items-center">
        <div className="text-primary mr-5">
          <h2 className="text-6xl">১২</h2>
          <p className="text-center">এপ্রিল</p>
        </div>
        <div>
          <h4 className="my-3 font-bold text-2xl">জীবনের রূপকথা</h4>
          <hr />
          <p className="my-3 flex items-center text-[#c5c5c5]">
            <AiOutlineClockCircle className="mr-2" />
            সকাল ০৮:০০ ঘটিকা - দুপুর ০২:০০ ঘটিকা
          </p>
          <p className="my-3 flex items-center text-[#c5c5c5]">
            <MdLocationOn className="mr-2" />
            মিরপুর, ঢাকা
          </p>
        </div>
      </div>
      <div className="my-5">
        <p className="font-bold">
          জীবনের এক রাস অনুভূতি ও অভিজ্ঞতা নিয়ে কিছু কথা হবে তোমাদের সাথে...
        </p>
        <Fade up>
          <button className="block mx-auto my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl">
            আরও দেখুন
          </button>
        </Fade>
      </div>
    </div>
  );
}

export default Events;
