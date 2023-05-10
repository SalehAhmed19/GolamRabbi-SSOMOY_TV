import React from "react";
import { Fade } from "react-reveal";
import img1 from "../../assets/images/gr1.jpg";
import img2 from "../../assets/images/gr2.jpg";
import img3 from "../../assets/images/gr3.jpg";
import img4 from "../../assets/images/gr4.jpg";
import img5 from "../../assets/images/gr5.jpg";
import { Link } from "react-router-dom";

function ImageGallery() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
  ];
  return (
    <div>
      <Fade down>
        <h2 className="text-center text-4xl font-bold text-primary pt-14 my-5">
          ইমেজ গ্যালারি
        </h2>
      </Fade>
      {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mx-10">
        {images.map((image) => (
          <div>
            <img className="w-full" src={image} alt="" />
          </div>
        ))}
      </div> */}

      {/* <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center"> */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.slice(0, 8).map((image) => (
            <div className="shadow-md rounded-md overflow-hidden">
              <img
                className="w-full h-60 object-cover"
                src={image}
                alt="Image"
              />
              <div className="p-4 bg-[#111115]">
                {/* <h2 className="text-2xl font-bold text-primary mb-2">
                  Simple Card
                </h2>
                <p className="text-basic text-base">
                  Lorem ipsum dolor sit amet.
                </p> */}
                <p className="text-primary">
                  <small>Date: 12 March 2023</small>
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/gallery">
          <p className="text-primary font-bold my-5 text-right">আরও দেখুন</p>
        </Link>
      </div>
    </div>
    // </div>
  );
}

export default ImageGallery;
