import React from "react";
import { Fade } from "react-reveal";
import img1 from "../assets/images/gr1.jpg";
import img2 from "../assets/images/gr2.jpg";
import img3 from "../assets/images/gr3.jpg";
import img4 from "../assets/images/gr4.jpg";
import img5 from "../assets/images/gr5.jpg";

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
        {/* container  */}
        <div className="container mx-auto p-4">
          {/* first content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {/* left site  */}
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <img
                  src={img1}
                  alt=""
                  className="w-full h-60 md:h-auto object-cover rounded-md"
                />
                <img
                  src={img1}
                  alt=""
                  className="w-full h-60 md:h-auto object-cover rounded-md"
                />
              </div>
              <div className="mt-3">
                <img
                  src={img3}
                  alt=""
                  className="w-full h-60 md:h-auto object-cover rounded-md"
                />
              </div>
            </div>
            {/* right site */}
            <div className="md:col-span-3">
              <img
                src={img5}
                alt=""
                className="w-full h-60 md:h-[268px] lg:h-[560px]  object-cover rounded-md"
              />
            </div>
          </div>
          {/* second content */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-5 gap-3">
            {/* first items  */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* item 1 left  */}
                <div className="">
                  <img
                    src={img2}
                    alt=""
                    className="w-full h-60 md:h-[305px] lg:h-[440px] object-cover rounded-md"
                  />
                </div>
                {/* right */}
                <div className="space-y-3">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-60 md:h-[180px] lg:h-[280px] object-cover rounded-md"
                  />
                  <img
                    src={img3}
                    alt=""
                    className="w-full h-60 md:h-[113px] lg:h-[149px] object-cover rounded-md"
                  />
                </div>
              </div>
              {/* item 2 */}
              <div className="mt-3">
                <img
                  src={img4}
                  alt=""
                  className="w-full h-60 md:h-[100px] lg:h-[200px] object-cover rounded-md"
                />
              </div>
            </div>
            {/* second items */}
            <div className="md:col-span-2">
              {/* top  */}
              <div className="mb-3">
                <img
                  src={img4}
                  alt=""
                  className="w-full h-60 md:h-[180px] lg:h-[280px] object-cover rounded-md"
                />
              </div>
              {/* center */}
              <div className="mb-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* left */}
                <div className="md:col-span-2">
                  <img
                    src={img4}
                    alt=""
                    className="w-full h-60 md:h-[80px] object-cover rounded-md"
                  />
                </div>
                <div className="">
                  <img
                    src={img3}
                    alt=""
                    className="w-full h-60 md:h-[80px] object-cover rounded-md"
                  />
                </div>
              </div>
              {/* bottom */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="">
                  <img
                    src={img2}
                    alt=""
                    className="w-full h-60 md:h-[133px] lg:h-[268px] object-cover rounded-md"
                  />
                </div>
                <div className="md:col-span-3">
                  <img
                    src={img5}
                    alt=""
                    className="w-full h-60 md:h-[135px] lg:h-[269px] object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
            {/* third items */}
            <div className="">
              <div className="mb-3">
                <img
                  src={img5}
                  alt=""
                  className="w-full h-60 md:h-[130px] object-cover rounded-md"
                />
              </div>
              <div className="mb-3">
                <img
                  src={img4}
                  alt=""
                  className="w-full h-60 md:h-[130px] lg:h-[230px] object-cover rounded-md"
                />
              </div>
              <div className="">
                <img
                  src={img4}
                  alt=""
                  className="w-full h-60 md:h-[135px] lg:h-[270px] object-cover rounded-md"
                />
              </div>
            </div>
          </div>
          {/* third content */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-5 gap-3">
            {/* first items  */}
            <div className="">
              <div className="">
                {/* item 1 left  */}
                <div className="mb-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <img
                    src={img2}
                    alt=""
                    className="w-full h-60 md:h-[305px] lg:h-[440px] object-cover rounded-md"
                  />
                  <img
                    src={img2}
                    alt=""
                    className="w-full h-60 md:h-[305px] lg:h-[440px] object-cover rounded-md"
                  />
                </div>
                {/* center */}
                <div className="mb-3">
                  <img
                    src={img4}
                    alt=""
                    className="w-full h-60 md:h-[100px] lg:h-[150px] object-cover rounded-md"
                  />
                </div>
              </div>
              {/* bottom */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <img
                  src={img2}
                  alt=""
                  className="w-full h-60 md:h-[305px] lg:h-[440px] object-cover rounded-md"
                />
                <img
                  src={img2}
                  alt=""
                  className="w-full h-60 md:h-[305px] lg:h-[440px] object-cover rounded-md"
                />
              </div>
            </div>
            {/* second items */}
            <div className="md:col-span-2">
              {/* top*/}
              <div className="mb-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-60 md:h-[260px] object-cover rounded-md"
                  />
                </div>
                <div className="">
                  <img
                    src={img3}
                    alt=""
                    className="w-full h-60 md:h-[260px] object-cover rounded-md"
                  />
                </div>
              </div>
              {/*center    */}
              <div className="mb-3">
                <img
                  src={img5}
                  alt=""
                  className="w-full h-60 md:h-[350px] lg:h-[480px] object-cover rounded-md"
                />
              </div>
              {/* bottom */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-60 md:h-[101px] lg:h-[289px] object-cover rounded-md"
                  />
                </div>
                <div className="">
                  <img
                    src={img3}
                    alt=""
                    className="w-full h-60 md:h-[101px] lg:h-[289px] object-cover rounded-md"
                  />
                </div>
                <div className="">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-60 md:h-[101px] lg:h-[289px] object-cover rounded-md"
                  />
                </div>
                <div className="">
                  <img
                    src={img3}
                    alt=""
                    className="w-full h-60 md:h-[101px] lg:h-[289px] object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
            {/* third items */}
            <div className="md:col-span-2 relative">
              <div className="">
                <img
                  src={img2}
                  alt=""
                  className="w-full h-60 md:h-[735px] lg:h-[1055px] object-cover rounded-md"
                />
              </div>
              <div className="absolute top-0  transition-all duration-300 delay-75 hover:transition-all hover:duration-300 hover:delay-75 hover:bg-black/50 w-full h-60 md:h-[735px] lg:h-[1055px] rounded-md">
              </div>
              <h1 className="text-primary text-3xl hidden hover:block">faysal</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IimageGalleryPage;
//  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//    {images.map((image) => (
//      // <div
//      //   key={image}
//      //   className="bg-white rounded-lg overflow-hidden shadow-md"
//      // >
//      //   <img
//      //     src={image}
//      //     alt="{image.alt}"
//      //     className="w-full h-48 object-cover"
//      //   />
//      //   <div className="p-4">
//      //     <h3 className="font-medium text-gray-800">{"image.alt"}</h3>
//      //   </div>
//      // </div>
//      <div className="shadow-md rounded-md overflow-hidden">
//        <img className="w-full h-60 object-cover" src={image} alt="Image" />
//        <div className="p-4 bg-[#111115]">
//          {/* <h2 className="text-2xl font-bold text-primary mb-2">
//                   Simple Card
//                 </h2>
//                 <p className="text-basic text-base">
//                   Lorem ipsum dolor sit amet.
//                 </p> */}
//          <p className="text-primary">
//            <small>Date: 12 March 2023</small>
//          </p>
//        </div>
//      </div>
//    ))}
//  </div>;