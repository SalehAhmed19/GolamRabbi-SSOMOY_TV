import React from "react";
import "../../../App.css";
import { AiOutlineShareAlt } from "react-icons/ai";

function BannerCard() {
  return (
    <div className="scaling-div2 my-5 relative">
      <div className="">
        <AiOutlineShareAlt className="text-3xl icon" />
        <div className="flex justify-between items-center">
          <div>
            <AiOutlineShareAlt className="text-3xl icon2" />
          </div>
          <h1 className="text-xl font-bold mr-4 text-right">
            শেয়ার করে; <br /> স্বপ্নকে জয় করো
          </h1>
        </div>
      </div>
      <p className="text text-[#222] mx-2 mt-5 text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
        ipsa.
      </p>
      <form className="input">
        <input
          placeholder="তোমার কথা লিখো"
          className="outline-none rounded-full px-5 py-2 my-2 w-full border mt-5"
          type="text"
        />
        <button className="bg-primary w-full text-[#222] py-1 rounded-full font-bold">
          Send
        </button>
      </form>
    </div>
  );
}

export default BannerCard;
