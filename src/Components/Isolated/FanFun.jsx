import React from "react";
import FanFunLeft from "./FanFunLeft";
import people from "../../assets/images/people.png";

function FanFun() {
  const images = [
    { _id: 1, img: people },
    { _id: 2, img: people },
    { _id: 3, img: people },
    { _id: 4, img: people },
  ];
  return (
    <div className="py-14 lg:px-24">
      <h1 className="text-primary text-center text-4xl font-bold">
        ফ্যানদের সাথে ফান
      </h1>
      <div className="flex my-20">
        <FanFunLeft />
        <div className="flex justify-end w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {images.map((image) => (
              <img
                src={image.img}
                alt="img"
                className="border border-[#229796] w-36"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FanFun;
