import React, { useState } from "react";
import { Modal } from "antd";
import FanFunModal from "./Modals/FanFunModal";

const FanFunLeft = () => {
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-secondary text-3xl font-bold mb-5">
        এমন দাবির এবার হবে অবসান:
      </h2>
      <p className="text-[#fff] text-xl">
        <span className="text-2xl font-bold text-primary">ফ্যানরা </span>{" "}
        নানাকিছু লিখে। ইউটিউবে কমেন্ট। করে সেলফি তুলতে চায়। দেখা করতে চায়। শিখতে
        চায়। হতে চায় সংবাদ উপস্থাপক।
      </p>
      <p className="my-5 text-basic text-xl text-primary">
        সবার এমন ভালোবাসার সরাসরি উত্তর দিতে অয়ায়োজন ফান উইথ ফ্যান।
      </p>
      <ul className="list-disc text-basic text-xl">
        <li>অংশ নিতে পারবে যেকেউ।</li>
        <li>অংশ নিতে পারো তুমিও।</li>
        <li>শিখতে পারো। থাকবে মজাও।</li>
        <li>আর সেলফি, আড্ডাতো থাকছেই..!</li>
      </ul>
      <FanFunModal open={open} onCreate={onCreate} />
    </div>
  );
};

export default FanFunLeft;
