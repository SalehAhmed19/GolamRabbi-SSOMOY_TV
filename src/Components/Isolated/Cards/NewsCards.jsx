import React from "react";

function NewsCards() {
  return (
    <div className="bg-[#16181D]  shadow-lg rounded-xl">
      <div className="flex items-center px-5 mb-5">
        <img
          src="https://icon2.cleanpng.com/20180526/wpl/kisspng-prothom-alo-newspaper-dhaka-bengali-the-daily-star-5b0a1ae0c72e71.7298795815273888968159.jpg"
          alt=""
          className="w-9 rounded-full"
        />
        <div className="mx-3">
          <h2 className="text-primary text-lg font-bold ">দৈনিক প্রথম আলো</h2>
          <p className="text-[9px] text-[#A8A8A8]">২৮ মে ২০২৩</p>
        </div>
      </div>
      <div className="">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-old-newspaper-pattern-design_23-2149614908.jpg?w=2000"
          alt=""
          className="rounded-t-xl"
        />
        <blockquote className="p-5 text-white font-bold">
          জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে
          সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন নিয়ে আসে
          প্রকৃতির মালখানা থেকে। জীবরঙ্গভূমিতে মানুষ এসে দেখা দেয় দুই শূন্য
          হাতে মুঠো বেঁধে। মানুষ আসবার পূর্বেই জীবসৃষ্টিযজ্ঞে প্রকৃতির
          ভূরিব্যয়ের পালা শেষ হয়ে এসেছে। &nbsp;
          <span className="text-primary">
            <a href="" target="_blank">
              আরও পড়ুন...
            </a>
          </span>
        </blockquote>
      </div>
    </div>
  );
}

export default NewsCards;
