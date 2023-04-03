import React from "react";
import { Zoom } from "react-reveal";
import depressed from "../../assets/images/depression.jpg";

function Advertisement() {
  return (
    <div
      style={{
        background: `url(${depressed})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:px-24 px-5 flex flex-col items-center justify-center h-[70vh]"
    >
      <Zoom>
        <h2 className="text-primary text-center text-4xl font-bold mb-5">
          মনে হচ্ছে - জীবনটা সঠিকভাবে এগুচ্ছে না!
        </h2>
        <p className="text-[#fff] text-center text-2xl">
          পরিশ্রম করছো অনেক; কিন্তু সফলতার পাগলা ঘোড়া সেভাবে ধরা দিচ্ছে না। হতাশ
          হয়ে যাচ্ছো। <br /> সমাধান পেতে; লিখো এখানে চাচ্ছো- অভিজ্ঞ করো পরামর্শ।
          তাহলে দেরী কেনো? এখনই লিখে ফেলো তোমার কথা। আর পেয়ে যাও <br /> সুন্দর
          সমাধান।
        </p>
        <button className="my-10 py-2 border-2 border-[#AF1453] w-[230px] text-center rounded-full text-[#fff] font-bold text-xl">
          অংশ নিতে ক্লিক করো
        </button>
      </Zoom>
    </div>
  );
}

export default Advertisement;
