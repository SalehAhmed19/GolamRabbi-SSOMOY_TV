import React from "react";
import FanFunLeft from "./FanFunLeft";
import people from "../../assets/images/people.png";
import { Fade, Zoom } from "react-reveal";

function FanFun() {
  const images = [
    { _id: 1, img: people },
    { _id: 2, img: people },
    { _id: 3, img: people },
    { _id: 4, img: people },
  ];
  return (
    <div className="py-14 lg:px-24">
      <Fade down>
        <h1 className="text-primary text-center text-4xl font-bold">
          ফ্যানদের সাথে ফান
        </h1>
      </Fade>
      <div className="flex my-20">
        <Fade left>
          <FanFunLeft />
        </Fade>
        <div className="flex justify-end w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {images.map((image) => (
              <Zoom>
                <img
                  key={image._id}
                  src={image.img}
                  alt="img"
                  className="border border-[#229796] w-36"
                />
              </Zoom>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FanFun;
