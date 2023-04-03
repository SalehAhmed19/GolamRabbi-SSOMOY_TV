import React from "react";
import { Fade } from "react-reveal";
import presenter from "../../assets/images/presenter.png";

function MockTest() {
  return (
    <div className="lg:px-24 py-14 text-[#fff]">
      <Fade down>
        <h2 className="text-center text-4xl font-bold mb-5 text-primary">
          মক টেস্ট
        </h2>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <div>
          <Fade left>
            <img src={presenter} alt="" />
          </Fade>
        </div>
        <div className="flex flex-col justify-center lg:ml-10 mx-5">
          <Fade right>
            <p className="text-xl">
              অল্প সময়ে টিভি স্ক্রিনে আসার প্রস্তুতি ঝালাই করে নিতে চাও। আবার
              এটাও ভাবছো শিখছো অনেক জায়গায়। কিন্তু এখনো কনফিডেন্ট পাচ্ছো না।{" "}
              <br />
            </p>
            <p className="text-xl text-primary">এবার তাহলে চেক করে নাও-</p>
            <ul className="text-xl list-disc mx-5">
              <li>তোমার ভয়েস ও উচ্চারণ</li>
              <li>তোমার স্কিল ও নলেজ</li>
              <li>তোমার প্রফেশনাল লুক</li>
              <li>সর্বোপরি তোমার সিভি/ আবেদন প্রক্রিয়া ও অডিশন প্রস্তুতি</li>
            </ul>
            <p className="text-secondary font-bold text-xl my-5">
              নিজেকে ডেভেলপ করতে আর টিপস পেতে
            </p>
          </Fade>
        </div>
      </div>
      <Fade up>
        <button className="block mx-auto my-10 py-2 border-2 border-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl">
          টেস্ট দিতে সেট করে নাও টাইম
        </button>
      </Fade>
    </div>
  );
}

export default MockTest;
