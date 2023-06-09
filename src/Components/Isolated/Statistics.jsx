import React from "react";
import { Zoom } from "react-reveal";

function Statistics() {
  const statistics = [
    { _id: 1, qty: "১৩", activity: "সংবাদ উপস্থাপনের অভিজ্ঞতা" },
    { _id: 2, qty: "১০০", activity: "গণমাধ্যমকর্মী প্রস্তুত করা" },
    { _id: 3, qty: "২১০", activity: "প্রজেক্ট কমপ্লিট" },
    { _id: 4, qty: "২৭", activity: "অ্যাওয়ার্ড উইনার" },
    { _id: 5, qty: "১১০", activity: "সার্টিফিকেট কোর্স সম্পন্ন" },
    { _id: 6, qty: "২", activity: "তরুণকে ইন্সপায়ার করা" },
    { _id: 7, qty: "৫", activity: "ফ্যান ফলোয়ার্স" },
    { _id: 8, qty: "১১০", activity: "বায়ো ইন্টার্ভিউ রাইটিং" },
  ];
  return (
    <div className="my-14 lg:mx-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8  gap-5 mx-5">
        {statistics.map((statistic) => (
          <Zoom>
            <div
              key={statistic._id}
              className="px-5 py-10 rounded-lg bg-[#D9A017] flex flex-col items-center text-[#222]"
            >
              <h3 className="text-2xl font-bold text-[#04273B]">
                {statistic.qty}
              </h3>
              <h3 className="text-center text-xl">{statistic.activity}</h3>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
}

export default Statistics;
