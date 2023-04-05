import React, { useState } from "react";
import { Modal } from "antd";

const FanFunLeft = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
      <button
        onClick={showModal}
        className="my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[230px] text-center rounded-full text-[#fff] text-xl"
      >
        অংশ নিতে ক্লিক করো
      </button>
      <Modal
        centered
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default FanFunLeft;
