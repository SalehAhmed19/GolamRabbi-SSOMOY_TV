import React from "react";
import { Zoom } from "react-reveal";
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
      className="md:p-14 rounded-lg"
    >
      <div className="grid gird-cols-1 lg:grid-cols-3 gap-5">
        {features.map((feature, index) => (
          <Zoom>
            <div
              key={feature._id}
              className="font-bold  text-center bg-[#03273B] custom-round 2xs:h-36 h-56 px-5 flex justify-center items-center md:mx-5"
            >
              <div className="">
                <h3 className="text-[#FCAE01] 2xs:text-[10px] xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
                  {feature.qty}
                </h3>
                <h3 className="text-[#fff] 2xs:text-[10px] xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
                  {feature.title}
                </h3>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
}

export default Features;
