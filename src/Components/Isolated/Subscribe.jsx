import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";

function Subscribe() {
  return (
    <div className="bg-[#0e0f14] p-7 lg:mx-20 mx-5 rounded-md text-primary mt-20 mb-10">
      <h3 className="font-bold text-3xl">
        জীবনকে এগিয়ে নিতে। সম্যকে উপভোগ করতে। এখনই সাবস্ক্রাইব করো।
      </h3>
      <div className="my-5 p-2 bg-[#333] rounded-full lg:w-1/3 flex items-center">
        <input
          placeholder="তোমার ইমেইল লিখো"
          className="w-full py-2 px-5 rounded-full bg-[#333] focus:outline-none"
          type="text"
        />
        <button className="p-3 rounded-full bg-[#222]">
          <RiSendPlane2Fill className="text-xl text-primary" />
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
