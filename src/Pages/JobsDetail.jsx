import React from "react";
import { useParams } from "react-router-dom";
import jobAdd from "../assets/images/jobAdd.gif";
const JobsDetail = () => {
  const { id } = useParams();
  return (
    <div className="mt-[80px] xl:mt-5 p-5 xl:p-24 text-white">
      {/* top item */}
      <div className="grid grid-cols-1 xl:grid-cols-5">
        {/* left side */}
        <div className="col-span-3 md:pr-10">
          <h1 className="2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[33px] lg:text-[38px] xl:text-[43px] 2xl:text-[48px] font-bold">
            শিল্পকলা একাডেমিতে ৯ম-২০তম গ্রেডে চাকরির সুযোগ, আবেদন ফি ২০০-৬০০
          </h1>
          <ul>
            <li>
              {/* item 1  */}
              <div className="">
                <h2 className="mt-10 font-semibold md:mb-5 2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[18px] 2xl:text-[22px]">
                  শূন্যপদ:
                </h2>
                <span className="2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[18px] 2xl:text-[22px]">
                  &bull; ২
                </span>
              </div>
            </li>
            <li>
              {/* item 2 */}
              <div className="">
                <h2 className="mt-5 md:mt-10 font-semibold md:mb-5 2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[18px] 2xl:text-[22px]">
                  কাজের প্রসঙ্গ:
                </h2>
                <span className="2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[18px] 2xl:text-[22px]">
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
                <h2 className="mt-5 md:mt-10 font-semibold mb-5 2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[18px] 2xl:text-[22px]">
                  কাজের দায়িত্ব:
                </h2>
                <span className="2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[18px] 2xl:text-[22px]">
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
                <h2 className="mt-5 md:mt-10 font-semibold mb-5 2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[18px] 2xl:text-[22px]">
                  কর্মসংস্থানের অবস্থা:
                </h2>
                <span className="2xs:text-[10px] xs:text-[12px] sm:text-[16px] xl:text-[18px] 2xl:text-[22px] mb-16">
                  &bull; পূর্ণকাল
                </span>
              </div>
            </li>
          </ul>
        </div>
        {/* right side  */}
        <div className="lg:flex flex-row xl:flex-col">
          {/* item 1 */}
          <div className="w-full lg:w-[411px] h-[450px] border-2 border-[#fff] rounded-lg mt-5">
            <div className="relative text-center w-[411px] h-[56px]">
              <h2 className=" text-white absolute top-5 md:left-[200px] lg:left-[160px] font-bold">
                ডেসক্রিপশন:
              </h2>
            </div>
            <div>
              <ul className="space-y-5 p-5">
                <li>
                  <span className="font-semibold">শূন্যপদ:</span> &nbsp;২
                </li>
                <li>
                  <span className="font-semibold"> কর্মসংস্থানের অবস্থা: </span>
                  &nbsp;পূর্ণকাল
                </li>
                <li>
                  <span className="font-semibold">অভিজ্ঞতা: </span>{" "}
                  &nbsp;পূর্ণকাল
                </li>
                <li>
                  <span className="font-semibold"> চাকুরি স্থান: </span>
                  &nbsp;পূর্ণকাল
                </li>
                <li>
                  <span className="font-semibold">বেতন: </span> &nbsp;পূর্ণকাল
                </li>
                <li>
                  <span className="font-semibold">
                    আবেদন পাঠাবার শেষ তারিখ:
                  </span>
                  &nbsp;পূর্ণকাল
                </li>
              </ul>
              <button className="block 2xs:my-4 xs:my-6 sm:my-8 md:my-10 md:mx-10 py-2 px-5 border-2 border-[#fff] hover:bg-[#fff] 2xs: sm:w-[180px] md:w-[290px] text-center rounded-full hover:text-black font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]">
                অংশ নিতে ক্লিক করো
              </button>
            </div>
          </div>
          {/* item 2 */}
          <div>
            <img
              src={jobAdd}
              alt=""
              className="hidden lg:block lg:w-[411px] lg:h-[450px] xl:h-[300px] mt-5 mx-[70px] md:mx-[90px] xl:mx-[30px] rounded-lg"
            />
          </div>
        </div>
      </div>
      {/* bottom item */}
      <div className="">
        <div className="">
          <h2 className="2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[33px] lg:text-[38px] xl:text-[43px] 2xl:text-[48px] font-bold mt-10">
            অন্যান্য জব
          </h2>
          <div className="space-y-5">
            {/* row 1 */}
            <div className="grid grid-cols-7 p-5 bg-white text-black rounded-[5px]">
              {/* item 1 */}
              <div className="">
                <h2 className="font-bold">পদের নাম </h2>
                <p>কনটেন্ট রাইটার (ইন্টার্ন)</p>
              </div>
              {/* item 2 */}
              <div className="">
                <h2 className="font-bold">কাজের ধরন</h2>
                <p>ফুল টাইম</p>
              </div>
              {/* item 3 */}
              <div className="">
                <h2 className="font-bold">কর্মস্থল</h2>
                <p> মিরপুর, ঢাকা</p>
              </div>
              {/* item 4 */}
              <div className="">
                <h2 className="font-bold">শিক্ষা</h2>
                <p>উচ্ছ মাধ্যমিক</p>
              </div>
              {/* item 5 */}
              <div className="">
                <h2 className="font-bold">অভিজ্ঞতা </h2>
                <p>২ বছর</p>
              </div>
              {/* item 6 */}
              <div className="">
                <h2 className="font-bold">আবেদনের শেষ তারিখ </h2>
                <p> ২০ অক্টোবর ২০২২</p>
              </div>
              {/* item 7 */}
              <div className="">
                <button className="bg-black px-14 py-2 rounded-full text-white font-bold">
                  বিস্তারিত দেখুন
                </button>
              </div>
            </div>
            {/* row 2 */}
            <div className="grid grid-cols-7 p-5 bg-black  rounded-[5px]">
              {/* item 1 */}
              <div className="">
                <h2 className="font-bold text-white">পদের নাম </h2>
                <p className="text-white">কনটেন্ট রাইটার (ইন্টার্ন)</p>
              </div>
              {/* item 2 */}
              <div className="">
                <h2 className="font-bold text-white">কাজের ধরন</h2>
                <p className="text-white">ফুল টাইম</p>
              </div>
              {/* item 3 */}
              <div className="">
                <h2 className="font-bold text-white">কর্মস্থল</h2>
                <p className="text-white"> মিরপুর, ঢাকা</p>
              </div>
              {/* item 4 */}
              <div className="">
                <h2 className="font-bold text-white">শিক্ষা</h2>
                <p className="text-white">উচ্ছ মাধ্যমিক</p>
              </div>
              {/* item 5 */}
              <div className="">
                <h2 className="font-bold text-white">অভিজ্ঞতা </h2>
                <p className="text-white">২ বছর</p>
              </div>
              {/* item 6 */}
              <div className="">
                <h2 className="font-bold text-white">আবেদনের শেষ তারিখ </h2>
                <p className="text-white"> ২০ অক্টোবর ২০২২</p>
              </div>
              {/* item 7 */}
              <div className="">
                <button className="bg-white text-black px-14 py-2 rounded-full font-bold">
                  বিস্তারিত দেখুন
                </button>
              </div>
            </div>
            {/* row 3 */}
            <div className="grid grid-cols-7 p-5 bg-secondary text-black rounded-[5px]">
              {/* item 1 */}
              <div className="">
                <h2 className="font-bold text-white">পদের নাম </h2>
                <p className="text-white">কনটেন্ট রাইটার (ইন্টার্ন)</p>
              </div>
              {/* item 2 */}
              <div className="">
                <h2 className="font-bold text-white">কাজের ধরন</h2>
                <p className="text-white">ফুল টাইম</p>
              </div>
              {/* item 3 */}
              <div className="">
                <h2 className="font-bold text-white">কর্মস্থল</h2>
                <p className="text-white"> মিরপুর, ঢাকা</p>
              </div>
              {/* item 4 */}
              <div className="">
                <h2 className="font-bold text-white">শিক্ষা</h2>
                <p className="text-white">উচ্ছ মাধ্যমিক</p>
              </div>
              {/* item 5 */}
              <div className="">
                <h2 className="font-bold text-white">অভিজ্ঞতা </h2>
                <p className="text-white">২ বছর</p>
              </div>
              {/* item 6 */}
              <div className="">
                <h2 className="font-bold text-white">আবেদনের শেষ তারিখ </h2>
                <p className="text-white"> ২০ অক্টোবর ২০২২</p>
              </div>
              {/* item 7 */}
              <div className="">
                <button className="bg-white text-secondary px-14 py-2 rounded-full font-bold">
                  বিস্তারিত দেখুন
                </button>
              </div>
            </div>
            {/* row 4 */}
            <div className="grid grid-cols-7 p-5 bg-primary text-black rounded-[5px]">
              {/* item 1 */}
              <div className="">
                <h2 className="font-bold text-black">পদের নাম </h2>
                <p className="text-black">কনটেন্ট রাইটার (ইন্টার্ন)</p>
              </div>
              {/* item 2 */}
              <div className="">
                <h2 className="font-bold text-black">কাজের ধরন</h2>
                <p className="text-black">ফুল টাইম</p>
              </div>
              {/* item 3 */}
              <div className="">
                <h2 className="font-bold text-black">কর্মস্থল</h2>
                <p className="text-black"> মিরপুর, ঢাকা</p>
              </div>
              {/* item 4 */}
              <div className="">
                <h2 className="font-bold text-black">শিক্ষা</h2>
                <p className="text-black">উচ্ছ মাধ্যমিক</p>
              </div>
              {/* item 5 */}
              <div className="">
                <h2 className="font-bold text-black">অভিজ্ঞতা </h2>
                <p className="text-black">২ বছর</p>
              </div>
              {/* item 6 */}
              <div className="">
                <h2 className="font-bold text-black">আবেদনের শেষ তারিখ </h2>
                <p className="text-black"> ২০ অক্টোবর ২০২২</p>
              </div>
              {/* item 7 */}
              <div className="">
                <button className="bg-black text-primary px-14 py-2 rounded-full font-bold">
                  বিস্তারিত দেখুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsDetail;
