import React, { useState } from "react";
import { Zoom } from "react-reveal";
import depressed from "../../assets/images/depression.jpg";
import { Modal } from "antd";

function Advertisement() {
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
        background: `url(${depressed})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:px-24 px-5 flex flex-col items-center justify-center h-[70vh]"
    >
      <Zoom>
        <h2 className="text-primary text-center text-4xl font-bold mb-5">
          শেয়ার করো; সমাধান পাও
        </h2>
        <h4 className="text-primary font-bold text-xl">
          মনে হচ্ছে - জীবনটা সঠিকভাবে এগুচ্ছে না!
        </h4>
        <p className="text-[#fff] text-center text-2xl">
          পরিশ্রম করছো অনেক; কিন্তু সফলতার পাগলা ঘোড়া সেভাবে ধরা দিচ্ছে না। হতাশ
          হয়ে যাচ্ছো। <br /> সমাধান পেতে; লিখো এখানে চাচ্ছো- অভিজ্ঞ করো পরামর্শ।
          তাহলে দেরী কেনো? এখনই লিখে ফেলো তোমার কথা। আর পেয়ে যাও <br /> সুন্দর
          সমাধান।
        </p>
        <button
          onClick={showModal}
          className="my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[250px] text-center rounded-full text-[#fff] font-bold text-xl"
        >
          সমাধান পেতে; লিখে জানাও
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
      </Zoom>
    </div>
  );
}

export default Advertisement;
