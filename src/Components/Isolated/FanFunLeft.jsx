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
        নানাকিছু লিখে, ইউটিউবে কমেন্ট করে সেলফি তুলতে চায়, দেখা করতে চায়, শিখতে
        চায়, হতে চায় সংবাদ উপস্থাপক, আমার মতো এখানে সব মাধ্যমের কথা নিয়ে ছবি
        ডিজাইন করতে হবে{" "}
      </p>
      <p className="my-5 text-[#fff] text-xl">
        <span className="text-primary">
          সবার এমন ভালোবাসার সরাসরি উত্তর দিতে অয়ায়োজন ফান উইথ ফ্যান।
        </span>{" "}
        অংশ নিতে পারবে যেকেউ। অংশ নিতে পারো তুমিও। শিখতে পারো। থাকবে মজাও। আর
        সেলফি, আড্ডাতো থাকছেই..!
      </p>
      <FanFunModal open={open} onCreate={onCreate} />
    </div>
  );
};

export default FanFunLeft;
