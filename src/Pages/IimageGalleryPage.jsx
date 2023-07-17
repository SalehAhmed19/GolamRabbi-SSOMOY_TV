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
    <div className="lg:px-24 py-14 text-[#fff] cursor-pointer select-none pb-36">
      <Fade down>
        <h2 className="text-center text-4xl font-bold text-primary pt-14 my-5">
          ইমেজ গ্যালারি
        </h2>
      </Fade>
      <div className="container mx-auto p-4"></div>
      {/* first section */}
      <div className="hidden md:block lg:w-full relative">
        {/* top  */}
        <div className="md:flex">
          <div className="relative md:m-2  md:w-[300px] md:h-[300px] md:border-8 lg:w-[600px] lg:h-[500px] overflow-hidden">
            <img
              src={img1}
              alt="image"
              className="object-cover w-full h-full"
            />
            {/* hover info */}
            <div className="group hover:bg-black/25 hover:backdrop-blur-sm absolute bottom-0 w-full h-full rounded-md overflow-hidden transition-all duration-500 delay-200">
              <div className="before:opacity-0 group-hover:before:opacity-50 before:absolute before:w-[95%] before:top-2 before:left-2 before:rounded-t-full lg:before:top-2 lg:before:left-2 hover:before:top-[14px] hover:after:bottom-[14px]  lg:before:w-[96%] before:h-[45%] before:bg-[#f40a5c] lg:before:rounded-t-md lg:hover:before:top-[28px] hover:before:transition-all hover:before:duration-1000 hover:before:delay-200  after:absolute after:bottom-0 after:w-[95%] after:left-2 after:rounded-b-full lg:after:bottom-1 lg:after:left-2 lg:after:w-[96%] after:h-[45%] after:bg-[#f6b30f] after:opacity-0 group-hover:after:opacity-50 lg:after:rounded-b-md lg:hover:after:bottom-[20px] hover:after:transition-all hover:after:duration-1000 hover:after:delay-200"></div>
              <h1 className="absolute top-[130px] left-[76px] lg:top-[233px] lg:left-[160px] rotate-90 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400">
                Golam Rabbi
              </h1>
            </div>
          </div>
          <div className="relative md:m-2  md:w-[300px] md:h-[250px] md:border-8 lg:w-[1000px] lg:h-[300px] overflow-hidden">
            <img
              src={img5}
              alt="image"
              className="object-cover w-full h-full"
            />
            {/* hover info */}
            <div className="group hover:bg-black/25 hover:backdrop-blur-sm absolute bottom-0 w-full h-full rounded-md overflow-hidden transition-all duration-500 delay-200">
              <div className="before:opacity-0 group-hover:before:opacity-50 before:absolute before:w-[95%] before:top-2 before:left-2 before:rounded-t-full lg:before:top-2 lg:before:left-2 hover:before:top-[12px] lg:before:w-[96%] before:h-[45%] before:bg-[#f40a5c] lg:before:rounded-t-md lg:hover:before:top-[15px] hover:before:transition-all hover:before:duration-1000 hover:before:delay-200  after:absolute after:bottom-0 after:w-[95%] after:left-2 hover:after:bottom-[12px] after:rounded-b-full lg:after:bottom-1 lg:after:left-2 lg:after:w-[96%] after:h-[45%] after:bg-[#f6b30f] after:opacity-0 group-hover:after:opacity-50 lg:after:rounded-b-md lg:hover:after:bottom-[13px] hover:after:transition-all hover:after:duration-1000 hover:after:delay-200 "></div>
              <h1 className="absolute top-[105px] left-[75px] lg:top-[132px] lg:left-[310px] rotate-90 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400">
                Golam Rabbi
              </h1>
            </div>
          </div>
          <div className="relative md:m-2  md:w-[300px] md:h-[300px] md:border-8 lg:w-[600px] lg:h-[500px] overflow-hidden">
            <img
              src={img2}
              alt="image"
              className="object-cover w-full h-full"
            />
            {/* hover info */}
            <div className="group hover:bg-black/25 hover:backdrop-blur-sm absolute bottom-0 w-full h-full rounded-md overflow-hidden transition-all duration-500 delay-200">
              <div className="before:opacity-0 group-hover:before:opacity-50 before:absolute before:w-[95%] before:top-2 before:left-2 before:rounded-t-full lg:before:top-2 lg:before:left-2 hover:before:top-[14px] hover:after:bottom-[14px]  lg:before:w-[96%] before:h-[45%] before:bg-[#f40a5c] lg:before:rounded-t-md lg:hover:before:top-[28px] hover:before:transition-all hover:before:duration-1000 hover:before:delay-200  after:absolute after:bottom-0 after:w-[95%] after:left-2 after:rounded-b-full lg:after:bottom-1 lg:after:left-2 lg:after:w-[96%] after:h-[45%] after:bg-[#f6b30f] after:opacity-0 group-hover:after:opacity-50 lg:after:rounded-b-md lg:hover:after:bottom-[20px] hover:after:transition-all hover:after:duration-1000 hover:after:delay-200"></div>
              <h1 className="absolute top-[130px] left-[75px] lg:top-[233px] lg:left-[180px] rotate-90 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400">
                Golam Rabbi
              </h1>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="md:flex md:justify-center md:items-end">
          <div className="relative md:m-2  md:w-[300px] md:h-[300px] md:border-8 lg:w-[600px] lg:h-[500px] overflow-hidden">
            <img
              src={img2}
              alt="image"
              className="object-cover w-full h-full"
            />
            {/* hover info */}
            <div className="group hover:bg-black/25 hover:backdrop-blur-sm absolute bottom-0 w-full h-full rounded-md overflow-hidden transition-all duration-500 delay-200">
              <div className="before:opacity-0 group-hover:before:opacity-50 before:absolute before:w-[95%] before:top-2 before:left-2 before:rounded-t-full lg:before:top-2 lg:before:left-2 hover:before:top-[14px] hover:after:bottom-[14px]  lg:before:w-[96%] before:h-[45%] before:bg-[#f40a5c] lg:before:rounded-t-md lg:hover:before:top-[28px] hover:before:transition-all hover:before:duration-1000 hover:before:delay-200  after:absolute after:bottom-0 after:w-[95%] after:left-2 after:rounded-b-full lg:after:bottom-1 lg:after:left-2 lg:after:w-[96%] after:h-[45%] after:bg-[#f6b30f] after:opacity-0 group-hover:after:opacity-50 lg:after:rounded-b-md lg:hover:after:bottom-[20px] hover:after:transition-all hover:after:duration-1000 hover:after:delay-200"></div>
              <h1 className="absolute top-[130px] left-[74px] lg:top-[233px] lg:left-[170px] rotate-90 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400">
                Golam Rabbi
              </h1>
            </div>
          </div>
          <div className="relative md:m-2  md:w-[300px] md:h-[250px] md:border-8 lg:w-[1000px] lg:h-[300px] overflow-hidden">
            <img
              src={img5}
              alt="image"
              className="object-cover w-full h-full"
            />
            {/* hover info */}
            <div className="group hover:bg-black/25 hover:backdrop-blur-sm absolute bottom-0 w-full h-full rounded-md overflow-hidden transition-all duration-500 delay-200">
              <div className="before:opacity-0 group-hover:before:opacity-50 before:absolute before:w-[95%] before:top-2 before:left-2 before:rounded-t-full lg:before:top-2 lg:before:left-2 hover:before:top-[12px] lg:before:w-[96%] before:h-[45%] before:bg-[#f40a5c] lg:before:rounded-t-md lg:hover:before:top-[15px] hover:before:transition-all hover:before:duration-1000 hover:before:delay-200  after:absolute after:bottom-0 after:w-[95%] after:left-2 hover:after:bottom-[12px] after:rounded-b-full lg:after:bottom-1 lg:after:left-2 lg:after:w-[96%] after:h-[45%] after:bg-[#f6b30f] after:opacity-0 group-hover:after:opacity-50 lg:after:rounded-b-md lg:hover:after:bottom-[13px] hover:after:transition-all hover:after:duration-1000 hover:after:delay-200 "></div>
              <h1 className="absolute top-[105px] left-[72px] lg:top-[130px] lg:left-[310px] rotate-90 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400">
                Golam Rabbi
              </h1>
            </div>
          </div>
          <div className="relative md:m-2  md:w-[300px] md:h-[300px] md:border-8 lg:w-[600px] lg:h-[500px] overflow-hidden">
            <img
              src={img3}
              alt="image"
              className="object-cover w-full h-full"
            />
            {/* hover info */}
            <div className="group hover:bg-black/25 hover:backdrop-blur-sm absolute bottom-0 w-full h-full rounded-md overflow-hidden transition-all duration-500 delay-200">
              <div className="before:opacity-0 group-hover:before:opacity-50 before:absolute before:w-[95%] before:top-2 before:left-2 before:rounded-t-full lg:before:top-2 lg:before:left-2 hover:before:top-[14px] hover:after:bottom-[14px]  lg:before:w-[96%] before:h-[45%] before:bg-[#f40a5c] lg:before:rounded-t-md lg:hover:before:top-[28px] hover:before:transition-all hover:before:duration-1000 hover:before:delay-200  after:absolute after:bottom-0 after:w-[95%] after:left-2 after:rounded-b-full lg:after:bottom-1 lg:after:left-2 lg:after:w-[96%] after:h-[45%] after:bg-[#f6b30f] after:opacity-0 group-hover:after:opacity-50 lg:after:rounded-b-md lg:hover:after:bottom-[20px] hover:after:transition-all hover:after:duration-1000 hover:after:delay-200"></div>
              <h1 className="absolute top-[130px] left-[72px] lg:top-[233px] lg:left-[180px] rotate-90 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400">
                Golam Rabbi
              </h1>
            </div>
          </div>
        </div>
        {/* center border-[#f40a5c] border-[#f6b30f] */}
        <div className="overflow-hidden md:w-[500px] md:h-[200px] md:absolute md:top-[190px] md:left-[130px] lg:top-[300px] lg:left-[400px] lg:w-[900px] lg:h-[440px] md:border-8  md:rounded-full lg:rounded-none">
          <img src={img4} alt="" className="object-cover w-full h-full" />
          {/* hover info */}
          <div className="group hover:bg-black/25 hover:backdrop-blur-sm absolute bottom-0 w-full h-full rounded-md overflow-hidden transition-all duration-500 delay-200">
            <div className="before:opacity-0 group-hover:before:opacity-50 before:absolute before:w-[95%] before:top-2 before:left-3 before:rounded-t-full lg:before:top-2 hover:before:top-[10px] hover:after:bottom-[8px] lg:before:left-4 lg:before:w-[96%] before:h-[45%] before:bg-[#f40a5c] lg:before:rounded-t-md lg:hover:before:top-[21px] hover:before:transition-all hover:before:duration-1000 hover:before:delay-200  after:absolute after:bottom-0 after:w-[95%] after:left-3 after:rounded-b-full lg:after:bottom-1 lg:after:left-4 lg:after:w-[96%] after:h-[45%] after:bg-[#f6b30f] after:opacity-0 group-hover:after:opacity-50 lg:after:rounded-b-md lg:hover:after:bottom-[21px] hover:after:transition-all hover:after:duration-1000 hover:after:delay-200"></div>
            <h1 className="absolute top-[80px] left-[200px] lg:top-[200px] lg:left-[400px] rotate-90 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400">
              Golam Rabbi
            </h1>
          </div>
        </div>
      </div>
      {/* section section */}
      <div className="hidden md:block lg:w-full relative">
        {/* top  */}
        <div className="md:flex">
          <div className="relative md:m-2  md:w-[370px] md:h-[300px] md:border-8 lg:w-[900px] lg:h-[500px] overflow-hidden">
            <img
              src={img1}
              alt="image"
              className="object-cover w-full h-full"
            />
            {/* hover info */}
            <div className="group hover:bg-black/25 hover:backdrop-blur-sm absolute bottom-0 w-full h-full rounded-md overflow-hidden transition-all duration-500 delay-200">
              <div className="before:opacity-0 group-hover:before:opacity-50 before:absolute before:w-[95%] before:top-2 before:left-2 before:rounded-t-full lg:before:top-2 lg:before:left-2 hover:before:top-[14px] hover:after:bottom-[14px]  lg:before:w-[96%] before:h-[45%] before:bg-[#f40a5c] lg:before:rounded-t-md lg:hover:before:top-[28px] hover:before:transition-all hover:before:duration-1000 hover:before:delay-200  after:absolute after:bottom-0 after:w-[95%] after:left-2 after:rounded-b-full lg:after:bottom-1 lg:after:left-2 lg:after:w-[96%] after:h-[45%] after:bg-[#f6b30f] after:opacity-0 group-hover:after:opacity-50 lg:after:rounded-b-md lg:hover:after:bottom-[20px] hover:after:transition-all hover:after:duration-1000 hover:after:delay-200"></div>
              <h1 className="absolute top-[130px] left-[130px] lg:top-[233px] lg:left-[360px] rotate-90 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400">
                Golam Rabbi
              </h1>
            </div>
          </div>
          <div className="relative md:m-2  md:w-[370px] md:h-[300px] md:border-8 lg:w-[900px] lg:h-[500px] overflow-hidden">
            <img
              src={img2}
              alt="image"
              className="object-cover w-full h-full"
            />
            {/* hover info */}
            <div className="group hover:bg-black/25 hover:backdrop-blur-sm absolute bottom-0 w-full h-full rounded-md overflow-hidden transition-all duration-500 delay-200">
              <div className="before:opacity-0 group-hover:before:opacity-50 before:absolute before:w-[95%] before:top-2 before:left-2 before:rounded-t-full lg:before:top-2 lg:before:left-2 hover:before:top-[14px] hover:after:bottom-[14px]  lg:before:w-[96%] before:h-[45%] before:bg-[#f40a5c] lg:before:rounded-t-md lg:hover:before:top-[28px] hover:before:transition-all hover:before:duration-1000 hover:before:delay-200  after:absolute after:bottom-0 after:w-[95%] after:left-2 after:rounded-b-full lg:after:bottom-1 lg:after:left-2 lg:after:w-[96%] after:h-[45%] after:bg-[#f6b30f] after:opacity-0 group-hover:after:opacity-50 lg:after:rounded-b-md lg:hover:after:bottom-[20px] hover:after:transition-all hover:after:duration-1000 hover:after:delay-200"></div>
              <h1 className="absolute top-[130px] left-[130px] lg:top-[233px] lg:left-[360px] rotate-90 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400">
                Golam Rabbi
              </h1>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="md:flex">
          <div className="relative md:m-2  md:w-[370px] md:h-[300px] md:border-8 lg:w-[900px] lg:h-[500px] overflow-hidden">
            <img
              src={img2}
              alt="image"
              className="object-cover w-full h-full"
            />
            {/* hover info */}
            <div className="group hover:bg-black/25 hover:backdrop-blur-sm absolute bottom-0 w-full h-full rounded-md overflow-hidden transition-all duration-500 delay-200">
              <div className="before:opacity-0 group-hover:before:opacity-50 before:absolute before:w-[95%] before:top-2 before:left-2 before:rounded-t-full lg:before:top-2 lg:before:left-2 hover:before:top-[14px] hover:after:bottom-[14px]  lg:before:w-[96%] before:h-[45%] before:bg-[#f40a5c] lg:before:rounded-t-md lg:hover:before:top-[28px] hover:before:transition-all hover:before:duration-1000 hover:before:delay-200  after:absolute after:bottom-0 after:w-[95%] after:left-2 after:rounded-b-full lg:after:bottom-1 lg:after:left-2 lg:after:w-[96%] after:h-[45%] after:bg-[#f6b30f] after:opacity-0 group-hover:after:opacity-50 lg:after:rounded-b-md lg:hover:after:bottom-[20px] hover:after:transition-all hover:after:duration-1000 hover:after:delay-200"></div>
              <h1 className="absolute top-[130px] left-[130px] lg:top-[233px] lg:left-[350px] rotate-90 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400">
                Golam Rabbi
              </h1>
            </div>
          </div>
          <div className="relative md:m-2  md:w-[370px] md:h-[300px] md:border-8 lg:w-[900px] lg:h-[500px] overflow-hidden">
            <img
              src={img3}
              alt="image"
              className="object-cover w-full h-full"
            />
            {/* hover info */}
            <div className="group hover:bg-black/25 hover:backdrop-blur-sm absolute bottom-0 w-full h-full rounded-md overflow-hidden transition-all duration-500 delay-200">
              <div className="before:opacity-0 group-hover:before:opacity-50 before:absolute before:w-[95%] before:top-2 before:left-2 before:rounded-t-full lg:before:top-2 lg:before:left-2 hover:before:top-[14px] hover:after:bottom-[14px]  lg:before:w-[96%] before:h-[45%] before:bg-[#f40a5c] lg:before:rounded-t-md lg:hover:before:top-[28px] hover:before:transition-all hover:before:duration-1000 hover:before:delay-200  after:absolute after:bottom-0 after:w-[95%] after:left-2 after:rounded-b-full lg:after:bottom-1 lg:after:left-2 lg:after:w-[96%] after:h-[45%] after:bg-[#f6b30f] after:opacity-0 group-hover:after:opacity-50 lg:after:rounded-b-md lg:hover:after:bottom-[20px] hover:after:transition-all hover:after:duration-1000 hover:after:delay-200"></div>
              <h1 className="absolute top-[130px] left-[130px] lg:top-[233px] lg:left-[380px] rotate-90 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400">
                Golam Rabbi
              </h1>
            </div>
          </div>
        </div>
        {/* center border-[#f40a5c] border-[#f6b30f] */}
        <div className="rounded-full overflow-hidden md:w-[300px] md:h-[300px] md:absolute md:top-[150px] md:left-[240px] lg:top-[150px] lg:left-[520px] lg:w-[700px] lg:h-[700px] md:border-8">
          <img src={img4} alt="" className="object-cover w-full h-full" />
          {/* hover info */}
          <div className="group hover:bg-black/25 hover:backdrop-blur-sm absolute bottom-0 w-full h-full rounded-md overflow-hidden transition-all duration-500 delay-200">
            <div className="before:opacity-0 group-hover:before:opacity-50 before:absolute before:top-2 before:left-1.5 before:w-[96%] before:h-[45%] lg:before:top-3 lg:before:left-4 before:rounded-t-full before:bg-[#f40a5c] hover:before:top-3.5 lg:hover:before:top-9 hover:before:transition-all hover:before:duration-1000 hover:before:delay-200  after:absolute after:bottom-2  after:left-1.5 after:w-[96%] after:h-[45%] hover:after:bottom-3.5  after:rounded-b-full lg:after:bottom-1 lg:after:left-4 lg:after:w-[96%] after:bg-[#f6b30f] after:opacity-0 group-hover:after:opacity-50 lg:hover:after:bottom-8 hover:after:transition-all hover:after:duration-1000 hover:after:delay-200"></div>
            <h1 className="absolute top-[130px] left-[100px] lg:top-[332px] lg:left-[300px] rotate-90 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400">
              Golam Rabbi
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IimageGalleryPage;
{
  /* container  */
}
// <div className="container mx-auto p-4">
//   {/* first content */}
//   <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
//     {/* left site  */}
//     <div className="">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//         <img
//           src={img1}
//           alt=""
//           className="w-full h-60 md:h-auto object-cover rounded-md"
//         />
//         <img
//           src={img1}
//           alt=""
//           className="w-full h-60 md:h-auto object-cover rounded-md"
//         />
//       </div>
//       <div className="mt-3">
//         <img
//           src={img3}
//           alt=""
//           className="w-full h-60 md:h-auto object-cover rounded-md"
//         />
//       </div>
//     </div>
//     {/* right site */}
//     <div className="md:col-span-3">
//       <img
//         src={img5}
//         alt=""
//         className="w-full h-60 md:h-[258px] lg:h-[545px]  object-cover rounded-md"
//       />
//     </div>
//   </div>
//   {/* second content */}
//   <div className="mt-5 grid grid-cols-1 md:grid-cols-5 gap-3">
//     {/* first items  */}
//     <div className="md:col-span-2">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//         {/* item 1 left  */}
//         <div className="">
//           <img
//             src={img2}
//             alt=""
//             className="w-full h-60 md:h-[305px] lg:h-[440px] object-cover rounded-md"
//           />
//         </div>
//         {/* right */}
//         <div className="space-y-3">
//           <img
//             src={img1}
//             alt=""
//             className="w-full h-60 md:h-[180px] lg:h-[280px] object-cover rounded-md"
//           />
//           <img
//             src={img3}
//             alt=""
//             className="w-full h-60 md:h-[113px] lg:h-[149px] object-cover rounded-md"
//           />
//         </div>
//       </div>
//       {/* item 2 */}
//       <div className="mt-3">
//         <img
//           src={img4}
//           alt=""
//           className="w-full h-60 md:h-[100px] lg:h-[200px] object-cover rounded-md"
//         />
//       </div>
//     </div>
//     {/* second items */}
//     <div className="md:col-span-2">
//       {/* top  */}
//       <div className="mb-3">
//         <img
//           src={img4}
//           alt=""
//           className="w-full h-60 md:h-[180px] lg:h-[280px] object-cover rounded-md"
//         />
//       </div>
//       {/* bottom */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
//         <div className="">
//           <img
//             src={img2}
//             alt=""
//             className="w-full h-60 md:h-[226px] lg:h-[360px] object-cover rounded-md"
//           />
//         </div>
//         <div className="md:col-span-3">
//           <img
//             src={img5}
//             alt=""
//             className="w-full h-60 md:h-[226px] lg:h-[362px] object-cover rounded-md"
//           />
//         </div>
//       </div>
//     </div>
//     {/* third items */}
//     <div className="">
//       <div className="mb-3">
//         <img
//           src={img5}
//           alt=""
//           className="w-full h-60 md:h-[130px] object-cover rounded-md"
//         />
//       </div>
//       <div className="mb-3">
//         <img
//           src={img4}
//           alt=""
//           className="w-full h-60 md:h-[130px] lg:h-[230px] object-cover rounded-md"
//         />
//       </div>
//       <div className="">
//         <img
//           src={img4}
//           alt=""
//           className="w-full h-60 md:h-[135px] lg:h-[270px] object-cover rounded-md"
//         />
//       </div>
//     </div>
//   </div>
//   {/* third content */}
//   <div className="mt-5 grid grid-cols-1 md:grid-cols-5 gap-3">
//     {/* first items  */}
//     <div className="">
//       <div className="">
//         {/* item 1 left  */}
//         <div className="mb-3 grid grid-cols-1 md:grid-cols-2 gap-3">
//           <img
//             src={img2}
//             alt=""
//             className="w-full h-60 md:h-[305px] lg:h-[440px] object-cover rounded-md"
//           />
//           <img
//             src={img2}
//             alt=""
//             className="w-full h-60 md:h-[305px] lg:h-[440px] object-cover rounded-md"
//           />
//         </div>
//         {/* center */}
//         <div className="mb-3">
//           <img
//             src={img4}
//             alt=""
//             className="w-full h-60 md:h-[100px] lg:h-[150px] object-cover rounded-md"
//           />
//         </div>
//       </div>
//       {/* bottom */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//         <img
//           src={img2}
//           alt=""
//           className="w-full h-60 md:h-[305px] lg:h-[440px] object-cover rounded-md"
//         />
//         <img
//           src={img2}
//           alt=""
//           className="w-full h-60 md:h-[305px] lg:h-[440px] object-cover rounded-md"
//         />
//       </div>
//     </div>
//     {/* second items */}
//     <div className="md:col-span-2">
//       {/* top*/}
//       <div className="mb-3 grid grid-cols-1 md:grid-cols-2 gap-3">
//         <div className="">
//           <img
//             src={img1}
//             alt=""
//             className="w-full h-60 md:h-[260px] object-cover rounded-md"
//           />
//         </div>
//         <div className="">
//           <img
//             src={img3}
//             alt=""
//             className="w-full h-60 md:h-[260px] object-cover rounded-md"
//           />
//         </div>
//       </div>
//       {/*center    */}
//       <div className="mb-3">
//         <img
//           src={img5}
//           alt=""
//           className="w-full h-60 md:h-[350px] lg:h-[480px] object-cover rounded-md"
//         />
//       </div>
//       {/* bottom */}
//       <div className="relative grid grid-cols-1 md:grid-cols-4 gap-3">
//         <div className="">
//           <img
//             src={img1}
//             alt=""
//             className="w-full h-60 md:h-[101px] lg:h-[289px] object-cover rounded-md"
//           />
//         </div>
//         <div className="">
//           <img
//             src={img3}
//             alt=""
//             className="w-full h-60 md:h-[101px] lg:h-[289px] object-cover rounded-md"
//           />
//         </div>
//         <div className="">
//           <img
//             src={img1}
//             alt=""
//             className="w-full h-60 md:h-[101px] lg:h-[289px] object-cover rounded-md"
//           />
//         </div>
//         <div className="">
//           <div className="">
//             <img
//               src={img3}
//               alt=""
//               className="w-full h-60 md:h-[101px] lg:h-[289px] object-cover rounded-md"
//             />
//           </div>
//           {/* hover */}
//           <div className="group bg-black/25 hover:backdrop-blur-sm absolute bottom-0 w-[24%] h-full rounded-md overflow-hidden transition-all duration-500 delay-200">
//             <div className="before:opacity-0 group-hover:before:opacity-50  before:absolute before:top-0 before:left-0 md:before:top-.2 md:before:left-[6px] before:w-[90%]  before:h-[50%] md:before:h-[28%] md:hover:before:top-[14.6px] before:bg-[#f40a5c] before:rounded-t-md hover:before:top-[12px]  hover:before:transition-all hover:before:duration-500 hover:before:delay-200 after:absolute after:bottom-2 after:left-2.5 md:after:left-1.5 after:w-[95%] after:h-[45%] md:after:h-[48%] after:bg-[#f6b30f] after:opacity-0 group-hover:after:opacity-50 after:rounded-b-md hover:after:transition-all hover:after:duration-500 hover:after:delay-200 hover:after:bottom-[12px] md:hover:after:bottom-[14.8px]"></div>
//             <h1 className="absolute top-[45%] left-[55%] rotate-90 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400">
//               Golam Rabbi
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* third items */}
//     <div className="md:col-span-2 relative">
//       <div className="">
//         <img
//           src={img2}
//           alt=""
//           className="w-full h-60 md:h-[735px] lg:h-[1055px] object-cover rounded-md"
//         />
//       </div>
//       {/* hover info */}
//       <div className="group bg-black/25 hover:backdrop-blur-sm absolute bottom-0 w-full h-full rounded-md overflow-hidden transition-all duration-500 delay-200">
//         <div className="before:opacity-0 group-hover:before:opacity-50  before:absolute before:top-2 before:left-2.5 md:before:top-2 md:before:left-1.5 lg:before:top-2 lg:before:left-4 before:w-[95%] before:h-[45%] md:before:h-[48%] md:hover:before:top-[14.6px] lg:hover:before:top-[22px] lg:hover:after:bottom-[21px] before:bg-[#f40a5c] before:rounded-t-md hover:before:top-[12px]  hover:before:transition-all hover:before:duration-1000 hover:before:delay-200 after:absolute after:bottom-2 after:left-2.5 md:after:left-1.5 after:w-[95%] after:h-[45%] md:after:h-[48%] after:bg-[#f6b30f] after:opacity-0 group-hover:after:opacity-50 after:rounded-b-md hover:after:transition-all hover:after:duration-1000 hover:after:delay-200 hover:after:bottom-[12px] md:hover:after:bottom-[14.8px] lg:after:bottom-2 lg:after:left-4"></div>
//         <h1 className="absolute top-[45%] left-[40%] md:top-[48%] md:left-[35%] lg:top-[48.8%] lg:left-[43%] rotate-90 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400">
//           Golam Rabbi
//         </h1>
//       </div>
//     </div>
//   </div>
// </div>;
