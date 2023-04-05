import React, { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import blog from "../../assets/images/blogs.jpg";
import { Modal } from "antd";

function Blogs() {
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
    <div className="lg:px-24 py-14 text-[#fff]">
      <div className="flex items-center justify-center">
        <div className="h-[2px] w-20 bg-[#fff] rounded-2xl"></div>
        <Fade down>
          <h2 className="text-center text-4xl font-bold mb-5 text-primary mx-10">
            ব্লগ
          </h2>
        </Fade>
        <div className="h-[2px] w-20 bg-[#fff] rounded-2xl"></div>
      </div>
      <Link to="/">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-5 mx-5">
          <Zoom>
            <div>
              <h3 className="text-primary my-6 font-bold text-2xl">
                প্রফেশনাল ব্লগ
              </h3>
              <img src={blog} alt="" />
            </div>
            <div>
              <h3 className="text-primary my-6 font-bold text-2xl">
                পার্সোনাল ব্লগ
              </h3>
              <img src={blog} alt="" />
            </div>
          </Zoom>
        </div>
      </Link>
      <Fade up>
        <button
          onClick={showModal}
          className="block mx-auto my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl"
        >
          সব ব্লগ দেখতে
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
}

export default Blogs;
