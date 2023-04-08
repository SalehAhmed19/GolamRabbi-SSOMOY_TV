import React, { useState } from "react";
import { Fade } from "react-reveal";
import bg from "../../assets/images/mentor-bg.png";
import presenter from "../../assets/images/presenter.png";
import { Modal } from "antd";

const Mentor = () => {
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
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:px-24 px-5 py-14 text-[#fff]"
    >
      <Fade down>
        <h2 className="text-center text-4xl font-bold mb-5">পেইড মেন্টরশিপ</h2>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <div className="flex flex-col justify-center">
          <Fade left>
            <p className="text-xl">
              উপস্থাপনার ঝকঝকে ক্যারিয়ারে আসার টোটাল প্রস্তুতি নিয়ে নিতে চাও।
              থাকতে চাও অভিজ্ঞ কারো ছায়ায়। তাহলে দেরী কেনো?
            </p>
            <ul className="list-disc text-xl my-5">
              <li>উপস্থাপনা কত ধরণের।</li>
              <li>দেশি-বিদেশি যেকোনো গণমাধ্যমের প্রস্তুতি।</li>
              <li>কোনটাতে তোমার আগ্রহ আর কিভাবে আসবে এ ক্যারিয়ারে।</li>
              <li>
                মূলত: এটি একটি দীর্ঘদিনের প্রস্তুতি প্ল্যান। ধরতে পারো একটা
                ইন্টার্নশিপ। যা তোমাকে দিবে সার্বিক প্রস্তুতি। এবং এ প্রোগ্রামে
                থাকতে থাকেতেই মিলবে চাকরির সুযোগ….
              </li>
            </ul>
          </Fade>
        </div>
        <div>
          <Fade right>
            <img src={presenter} alt="" />
          </Fade>
        </div>
      </div>
      <Fade up>
        <button
          onClick={showModal}
          className="block mx-auto my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[230px] text-center rounded-full text-[#fff] font-bold text-xl"
        >
          আমাকে বুক করতে
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
      </Fade>
    </div>
  );
};

export default Mentor;
