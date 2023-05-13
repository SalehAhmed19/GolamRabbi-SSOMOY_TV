import React from "react";
import img1 from "../assets/images/gr1.jpg";
import img2 from "../assets/images/gr2.jpg";
import img3 from "../assets/images/gr3.jpg";
import img4 from "../assets/images/gr4.jpg";
import img5 from "../assets/images/gr5.jpg";
import { Fade } from "react-reveal";

function IimageGalleryPage() {
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
    <div className="lg:px-24 py-14 text-[#fff]">
      <Fade down>
        <h2 className="text-center text-4xl font-bold text-primary pt-14 my-5">
          ইমেজ গ্যালারি
        </h2>
      </Fade>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            // <div
            //   key={image}
            //   className="bg-white rounded-lg overflow-hidden shadow-md"
            // >
            //   <img
            //     src={image}
            //     alt="{image.alt}"
            //     className="w-full h-48 object-cover"
            //   />
            //   <div className="p-4">
            //     <h3 className="font-medium text-gray-800">{"image.alt"}</h3>
            //   </div>
            // </div>
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
      </div>
    </div>
  );
}

export default IimageGalleryPage;
