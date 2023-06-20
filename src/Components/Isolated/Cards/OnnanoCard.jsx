import React from 'react';

const OnnanoCard = () => {
  return (
    <div className=" bg-[#111118]  shadow-lg rounded-xl">
      <div className="flex items-center px-5 my-5">
        <img
          src="https://icon2.cleanpng.com/20180526/wpl/kisspng-prothom-alo-newspaper-dhaka-bengali-the-daily-star-5b0a1ae0c72e71.7298795815273888968159.jpg"
          alt=""
          className="w-9 rounded-full"
        />
        <div
          className="mx-3"
          style={{ fontFamily: "Hind Siliguri", fontWeight: 500 }}
        >
          <h2 className="text-primary text-lg font-bold ">দৈনিক প্রথম আলো</h2>
          <p className="text-base text-[#A8A8A8]">২৮ মে ২০২৩</p>
        </div>
      </div>
      <div className="">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-old-newspaper-pattern-design_23-2149614908.jpg?w=2000"
          alt=""
          className="rounded-t-xl"
        />
        <blockquote
          className="p-5 text-white"
          style={{ fontFamily: "Hind Siliguri", fontWeight: 500 }}
        >
          জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে
          সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন নিয়ে আসে
          প্রকৃতির মালখানা থেকে। &nbsp;
          <span className="text-primary">
            <a href="" target="_blank">
              আরও পড়ুন...
            </a>
          </span>
        </blockquote>
      </div>
    </div>
  );
};

export default OnnanoCard;