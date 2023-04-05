import React, { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import bg from "../../assets/images/course-bg.png";
import img from "../../assets/images/gr.png";
import { Modal } from "antd";

function Course() {
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
  const data = ["মিডিয়া", "লিডারশীপ", "লাইফ কোর্স"];
  const image = [img, img, img];
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:px-24 py-14"
    >
      <Fade down>
        <h2 className="text-center text-4xl font-bold text-primary pt-14">
          কোর্স
        </h2>
      </Fade>
      <div className="flex lg:flex-row justify-center mx-5 gap-2 ">
        {data.map((d) => (
          <Zoom>
            <div
              key={d}
              className="bg-secondary my-7 lg:mx-5 w-40 py-2 rounded-full cursor-pointer text-[#fff] text-xl text-center"
            >
              <h3>{d}</h3>
            </div>
          </Zoom>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-5 mx-5">
        {image.map((im, idx) => (
          <Fade up>
            <img key={idx} src={im} className="lg:mx-5 rounded-xl" alt="" />
          </Fade>
        ))}
      </div>
      <Fade up>
        <button
          onClick={showModal}
          className="block mx-auto my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[230px] text-center rounded-full text-[#fff] font-bold text-xl"
        >
          এনরোল
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

export default Course;
