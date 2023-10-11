import React from "react";
import { useParams } from "react-router-dom";
const JobsDetail = () => {
  const { id } = useParams();
  return (
    <div className="mt-[40px] xl:mt-5 p-5 xl:p-24 text-white">
      {/* top item */}
      <div className="grid grid-cols-1 xl:grid-cols-5">
        {/* left side */}
        <div className="col-span-3 md:pr-10">
          <h1 className="mt-16 2xs:text-[16px] xs:text-[23px] sm:text-[28px] md:text-[33px] lg:text-[38px] xl:text-[35px] 2xl:text-[28px] font-bold">
            শিল্পকলা একাডেমিতে ৯ম-২০তম গ্রেডে চাকরির সুযোগ, আবেদন ফি ২০০-৬০০
          </h1>
          <ul>
            <li>
              {/* item 1  */}
              <div className="">
                <h2 className="mt-10 font-semibold md:mb-5 2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[16px] 2xl:text-[22px] text-primary">
                  শূন্যপদ:
                </h2>
                <span className="2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[16px] 2xl:text-[16px]">
                  &bull; ০২
                </span>
              </div>
            </li>
            <li>
              {/* item 2 */}
              <div className="">
                <h2 className="mt-5 md:mt-10 font-semibold md:mb-5 2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[16px] 2xl:text-[22px] text-primary">
                  কাজের প্রসঙ্গ:
                </h2>
                <span className="2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[16px] 2xl:text-[16px]">
                  &bull; সূত্রের বরাত দিয়ে এই তথ্য দিয়েছে যুক্তরাজ্যভিত্তিক
                  সংবাদমাধ্যম দ্য গার্ডিয়ান। তাদের এক প্রতিবেদনে বলা হয়েছে,
                  রাশিয়া যদি ইউক্রেনের ভেতরে বা কাছাকাছি এলাকায় পরমাণু বোমার
                  বিস্ফোরণ ঘটায়, তাহলে নিজেদের দেশে যেন নৈরাজ্য দেখা না দেয় এবং
                  মানুষের মধ্যে আতঙ্ক ছড়িয়ে না পড়ে, সে জন্য করণীয় বিষয়ে
                  পরিকল্পনা করছে পশ্চিমা দেশগুলো। তারা এটা করছে অনেকটা নীরবে। এ
                  ধরনের পরিস্থিতিতে কীভাবে জরুরি সহায়তা দেওয়া হবে, তার
                  কর্মপরিকল্পনাও খতিয়ে দেখছেন পশ্চিমা কর্মকর্তারা। পরমাণু
                  অস্ত্রের ব্যবহার নিয়ে শঙ্কিত না হতে জনগণকে আশ্বস্ত করছেন
                  তাঁরা।
                </span>
              </div>
            </li>
            <li>
              {/* item 3 */}
              <div className="">
                <h2 className="mt-5 md:mt-10 font-semibold mb-5 2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[16px] 2xl:text-[22px] text-primary">
                  কাজের দায়িত্ব:
                </h2>
                <span className="2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[16px] 2xl:text-[16px]">
                  &bull; সূত্রের বরাত দিয়ে এই তথ্য দিয়েছে যুক্তরাজ্যভিত্তিক
                  সংবাদমাধ্যম দ্য গার্ডিয়ান। তাদের এক প্রতিবেদনে বলা হয়েছে,
                  রাশিয়া যদি ইউক্রেনের ভেতরে বা কাছাকাছি এলাকায় পরমাণু বোমার
                  বিস্ফোরণ ঘটায়, তাহলে নিজেদের দেশে যেন নৈরাজ্য দেখা না দেয় এবং
                  মানুষের মধ্যে আতঙ্ক ছড়িয়ে না পড়ে, সে জন্য করণীয় বিষয়ে
                  পরিকল্পনা করছে পশ্চিমা দেশগুলো। তারা এটা করছে অনেকটা নীরবে। এ
                  ধরনের পরিস্থিতিতে কীভাবে জরুরি সহায়তা দেওয়া হবে, তার
                  কর্মপরিকল্পনাও খতিয়ে দেখছেন পশ্চিমা কর্মকর্তারা। পরমাণু
                  অস্ত্রের ব্যবহার নিয়ে শঙ্কিত না হতে জনগণকে আশ্বস্ত করছেন
                  তাঁরা।
                </span>
              </div>
            </li>
            <li>
              {/* item 4  */}
              <div className="">
                <h2 className="my-5  md:mt-10 font-semibold 2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[16px] 2xl:text-[22px] text-primary">
                  কর্মসংস্থানের অবস্থা:
                </h2>
                <span className="2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[16px] 2xl:text-[16px]">
                  &bull; পূর্ণকাল
                </span>
              </div>
            </li>
          </ul>
        </div>
        {/* right side  */}
        <div className="mt-5 xl:mt-0 lg:flex flex-row xl:flex-col">
          <div className="w-full xl:w-[350px] rounded-[5px] bg-[#F6B30F] pb-5">
            <div className="w-full bg-[#222] p-5">
              <h3 className="font-bold text-xl text-center">ডেসক্রিপশন</h3>
            </div>
            <ul className="p-5 text-[#222]">
              <li className="my-3 2xs:text-[12px]">
                <p className="text-[#333]">
                  <span className="font-semibold">শূন্যপদঃ </span> ০২
                </p>
              </li>
              <li className="my-3 2xs:text-[12px]">
                <p className="text-[#333]">
                  <span className="font-semibold">কর্মসংস্থানের অবস্থাঃ </span>{" "}
                  পূর্ণকাল
                </p>
              </li>
              <li className="my-3 2xs:text-[12px]">
                <p className="text-[#333]">
                  <span className="font-semibold">অভিজ্ঞতাঃ </span> পূর্ণকাল
                </p>
              </li>
              <li className="my-3 2xs:text-[12px]">
                <p className="text-[#333]">
                  <span className="font-semibold">বয়সঃ </span> পূর্ণকাল
                </p>
              </li>
              <li className="my-3 2xs:text-[12px]">
                <p className="text-[#333]">
                  <span className="font-semibold">চাকুরিস্থানঃ </span> পূর্ণকাল
                </p>
              </li>
              <li className="my-3 2xs:text-[12px]">
                <p className="text-[#333]">
                  <span className="font-semibold">বেতনঃ </span> পূর্ণকাল
                </p>
              </li>
              <li className="my-3 2xs:text-[12px]">
                <p className="text-[#333]">
                  <span className="font-semibold">আবেদনের শেষ তারিখঃ </span>
                  পূর্ণকাল
                </p>
              </li>
            </ul>
            <button className="block mx-auto 2xs:text-[12px] bg-[#222] rounded-full 2xs:w-[180px] w-[200px] p-2">
              তাহলে আবেদন করো এখনই
            </button>
          </div>
        </div>
      </div>
      {/* bottom item */}
      <div className="">
        <div className="">
          <h2 className="2xs:text-[14px] xs:text-[20px] sm:text-[28px] md:text-[33px] lg:text-[38px] xl:text-[35px] 2xl:text-[28px] font-bold my-8">
            অন্যান্য জব
          </h2>
          <div className="space-y-5">
            {/* row 1 */}
            <div className="space-y-3 grid 2xs:grid-cols-1 grid-cols-2 lg:grid-cols-7 p-5 bg-black text-white rounded-[5px]">
              {/* item 1 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">পদের নাম </h2>
                <p>কনটেন্ট রাইটার (ইন্টার্ন)</p>
              </div>
              {/* item 2 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">কাজের ধরন</h2>
                <p>ফুল টাইম</p>
              </div>
              {/* item 3 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">কর্মস্থল</h2>
                <p> মিরপুর, ঢাকা</p>
              </div>
              {/* item 4 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">শিক্ষা</h2>
                <p>উচ্ছ মাধ্যমিক</p>
              </div>
              {/* item 5 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">অভিজ্ঞতা </h2>
                <p>২ বছর</p>
              </div>
              {/* item 6 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">আবেদনের শেষ তারিখ </h2>
                <p> ২০ অক্টোবর ২০২২</p>
              </div>
              {/* item 7 */}
              <div className="">
                <button className="mt-3 lg:mt-0 lg:block lg:mx-auto 2xs:py-1 2xs:px-1 py-2 px-2 bg-white w-[160px] sm:w-[140px] 2xl:w-[180px] 3xl:w-[200px] text-center rounded-full text-black font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]">
                  বিস্তারিত দেখুন
                </button>
              </div>
            </div>
            {/* row 2 */}
            <div className="space-y-3 grid 2xs:grid-cols-1 grid-cols-2 lg:grid-cols-7 p-5 bg-white text-black rounded-[5px]">
              {/* item 1 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">পদের নাম </h2>
                <p>কনটেন্ট রাইটার (ইন্টার্ন)</p>
              </div>
              {/* item 2 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">কাজের ধরন</h2>
                <p>ফুল টাইম</p>
              </div>
              {/* item 3 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">কর্মস্থল</h2>
                <p> মিরপুর, ঢাকা</p>
              </div>
              {/* item 4 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">শিক্ষা</h2>
                <p>উচ্ছ মাধ্যমিক</p>
              </div>
              {/* item 5 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">অভিজ্ঞতা </h2>
                <p>২ বছর</p>
              </div>
              {/* item 6 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">আবেদনের শেষ তারিখ </h2>
                <p> ২০ অক্টোবর ২০২২</p>
              </div>
              {/* item 7 */}
              <div className="">
                <button className="mt-3 lg:mt-0 lg:block lg:mx-auto 2xs:py-1 2xs:px-1 py-2 px-2 border-2 bg-black  w-[160px] sm:w-[140px] 2xl:w-[180px] 3xl:w-[200px] text-center rounded-full text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]">
                  বিস্তারিত দেখুন
                </button>
              </div>
            </div>
            {/* row 3 */}
            <div className="space-y-3 grid 2xs:grid-cols-1 grid-cols-2 lg:grid-cols-7 p-5 bg-secondary text-black rounded-[5px]">
              {/* item 1 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">পদের নাম </h2>
                <p>কনটেন্ট রাইটার (ইন্টার্ন)</p>
              </div>
              {/* item 2 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">কাজের ধরন</h2>
                <p>ফুল টাইম</p>
              </div>
              {/* item 3 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">কর্মস্থল</h2>
                <p> মিরপুর, ঢাকা</p>
              </div>
              {/* item 4 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">শিক্ষা</h2>
                <p>উচ্ছ মাধ্যমিক</p>
              </div>
              {/* item 5 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">অভিজ্ঞতা </h2>
                <p>২ বছর</p>
              </div>
              {/* item 6 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">আবেদনের শেষ তারিখ </h2>
                <p> ২০ অক্টোবর ২০২২</p>
              </div>
              {/* item 7 */}
              <div className="">
                <button className="mt-3 lg:mt-0 lg:block lg:mx-auto 2xs:py-1 2xs:px-1 py-2 px-2 bg-black w-[160px] sm:w-[140px] 2xl:w-[180px] 3xl:w-[200px] text-center rounded-full text-secondary font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]">
                  বিস্তারিত দেখুন
                </button>
              </div>
            </div>
            {/* row 4 */}
            <div className="space-y-3 grid 2xs:grid-cols-1 grid-cols-2 lg:grid-cols-7 p-5 bg-secondary text-whtie rounded-[5px]">
              {/* item 1 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">পদের নাম </h2>
                <p>কনটেন্ট রাইটার (ইন্টার্ন)</p>
              </div>
              {/* item 2 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">কাজের ধরন</h2>
                <p>ফুল টাইম</p>
              </div>
              {/* item 3 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">কর্মস্থল</h2>
                <p> মিরপুর, ঢাকা</p>
              </div>
              {/* item 4 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">শিক্ষা</h2>
                <p>উচ্ছ মাধ্যমিক</p>
              </div>
              {/* item 5 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">অভিজ্ঞতা </h2>
                <p>২ বছর</p>
              </div>
              {/* item 6 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">আবেদনের শেষ তারিখ </h2>
                <p> ২০ অক্টোবর ২০২২</p>
              </div>
              {/* item 7 */}
              <div className="">
                <button className="mt-3 lg:mt-0 lg:block lg:mx-auto 2xs:py-1 2xs:px-1 py-2 px-2 bg-white w-[160px] sm:w-[140px] 2xl:w-[180px] 3xl:w-[200px] text-center rounded-full text-secondary font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]">
                  বিস্তারিত দেখুন
                </button>
              </div>
            </div>
            {/* row 5 */}
            <div className="space-y-3 grid 2xs:grid-cols-1 grid-cols-2 lg:grid-cols-7 p-5 bg-primary text-black rounded-[5px]">
              {/* item 1 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">পদের নাম </h2>
                <p>কনটেন্ট রাইটার (ইন্টার্ন)</p>
              </div>
              {/* item 2 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">কাজের ধরন</h2>
                <p>ফুল টাইম</p>
              </div>
              {/* item 3 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">কর্মস্থল</h2>
                <p> মিরপুর, ঢাকা</p>
              </div>
              {/* item 4 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">শিক্ষা</h2>
                <p>উচ্ছ মাধ্যমিক</p>
              </div>
              {/* item 5 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">অভিজ্ঞতা </h2>
                <p>২ বছর</p>
              </div>
              {/* item 6 */}
              <div className="2xs:text-[12px]">
                <h2 className="font-bold">আবেদনের শেষ তারিখ </h2>
                <p> ২০ অক্টোবর ২০২২</p>
              </div>
              {/* item 7 */}
              <div className="">
                <button className="mt-3 lg:mt-0 lg:block lg:mx-auto 2xs:py-1 2xs:px-1 py-2 px-2  bg-black  w-[160px] sm:w-[140px] 2xl:w-[180px] 3xl:w-[200px] text-center rounded-full text-primary font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]">
                  বিস্তারিত দেখুন
                </button>
              </div>
            </div>
          </div>
          <button className="block mx-auto 2xs:text-[12px] bg-secondary font-bold m-5 rounded-full 2xs:w-[180px] w-[200px] p-2">
            আরো দেখতে
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobsDetail;
