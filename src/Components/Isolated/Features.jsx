import React from "react";
import bg from "../../assets/images/pencils.jpeg";

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
      className="py-24 lg:px-24"
    >
      <div className="flex justify-center gap-10">
        {features.map((feature) => (
          <div
            key={feature._id}
            className="text-4xl font-bold text-[#FCAE01] text-center bg-[#03273B] rounded-xl h-56 w-56 flex flex-col justify-center items-center"
          >
            <h3 className="mb-5">{feature.qty}</h3>
            <h3 className="text-[#fff]">{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;