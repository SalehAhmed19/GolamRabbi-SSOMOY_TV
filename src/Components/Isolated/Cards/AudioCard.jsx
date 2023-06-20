import React from 'react';
import audio from "../../../../public/paper-flutter-.mp3";
const AudioCard = () => {
 
  return (
    <div className="bg-[#111118]  shadow-lg rounded-xl">
      <div className="flex items-center px-5 mb-5">
        <img
          src="https://icon2.cleanpng.com/20180526/wpl/kisspng-prothom-alo-newspaper-dhaka-bengali-the-daily-star-5b0a1ae0c72e71.7298795815273888968159.jpg"
          alt=""
          className="w-9 rounded-full"
        />
        <div
          className="mx-3"
          style={{ fontFamily: "Hind Siliguri", fontWeight: 500 }}
        >
          <h2 className="text-primary text-lg font-bold ">FM 98.6</h2>
          <p className="text-base text-[#A8A8A8]">২৮ মে ২০২৩</p>
        </div>
      </div>
      <div className="">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-old-newspaper-pattern-design_23-2149614908.jpg?w=2000"
          alt=""
          className="rounded-t-xl"
        />
        <div
          className="p-5 text-white text-base"
          style={{ fontFamily: "Hind Siliguri", fontWeight: 500 }}
        >
          <p className="mb-5">শুনুন প্রাণ খুলে</p>
          <audio controls src={audio} style={{width:"90%",margin:"10px"}}></audio>
        </div>
      </div>
    </div>
  );
};

export default AudioCard;