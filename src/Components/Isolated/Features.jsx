import React from "react";
import { Fade } from "react-reveal";
import "../../Styles/Features.css";
import bg from "../../assets/images/feature-bg.jpg";

function Features() {
  const features = [
    { _id: 1, qty: "২৩০+", title: "ফিচার লেখা" },
    { _id: 2, qty: "১০০০+", title: "সিভি রাইটিং" },
    { _id: 3, qty: "২৩০+", title: "ফিচার লেখা" },
  ];
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="py-24 lg:px-24 rounded-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature) => (
          <Fade up>
            <div
              key={feature._id}
              className="text-4xl font-bold text-[#FCAE01] text-center bg-[#03273B] custom-round h-56 px-5 flex justify-center items-center mx-5"
            >
              <h3 className="mr-3">{feature.qty}</h3>
              <h3 className="text-[#fff]">{feature.title}</h3>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

export default Features;
