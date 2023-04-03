import React from "react";
import bg from "../../assets/images/mentor-bg.png";

const Mentor = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:px-24 py-14"
    >
      <h2 className="text-[#fff] text-center text-4xl font-bold mb-5">
        পেইড মেন্টরশিপ
      </h2>
    </div>
  );
};

export default Mentor;
