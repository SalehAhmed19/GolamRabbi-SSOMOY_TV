// import React from "react";
// import bg from "../../assets/images/add2-bg.jpg";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { SiMinutemailer } from "react-icons/si";
// import { Fade } from "react-reveal";

// function Advertisement2() {
//   return (
//     <div
//       style={{
//         background: `url(${bg})`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//       }}
//       className="lg:px-24 py-20 text-[#fff]"
//     >
//       <Fade down>
//         <h2 className="text-center lg:text-4xl text-xl font-bold mb-5 text-primary mx-5">
//           মিডিয়া জব। বিশেষ করে সংবাদ উপস্থাপনা। তাও আবার টিভিতে। এ চাকরি নিয়ে
//           জানতে চাও? তাহলে দেরী না করে এখনই ওয়াটস্ অ্যাপ করো অথবা মেইল করো।
//         </h2>
//       </Fade>
//       <Fade right>
//         <div className="flex flex-col lg:items-end items-center justify-center pt-10 text-xl">
//           <span>
//             <p className="flex items-center mb-7">
//               <IoLogoWhatsapp className="text-primary mr-5" /> (+880)
//               1721-576389
//             </p>
//             <p className="flex items-center">
//               <SiMinutemailer className="text-primary mr-5" />{" "}
//               info@golamrabby.me
//             </p>
//           </span>
//         </div>
//       </Fade>
//     </div>
//   );
// }

// export default Advertisement2;
import React, { useState } from "react";
import { Zoom } from "react-reveal";
import mailing from "../../assets/SVGs/mailing.png";

function Advertisement2() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, message });
    e.target.reset();
  };

  return (
    <div className="relative bg-white">
      {/* <img className="w-20 absolute top-5 blur-lg" src={box} alt="" /> */}
      <div className="lg:px-20 px-5 py-14">
        <h1 className="lg:text-right font-bold 2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
          মিডিয়া জব। বিশেষ করে সংবাদ উপস্থাপনা। তাও আবার টিভিতে। এ চাকরি নিয়ে
          জানতে চাও? <br /> তাহলে দেরী না করে এখনই ওয়াটস্ অ্যাপ করো অথবা মেইল
          করো।
        </h1>
        <div className="mt-5 flex justify-between items-center flex-col lg:flex-row">
          <Zoom>
            <img
              className="w-80 hidden lg:block md:block"
              src={mailing}
              alt=""
            />
          </Zoom>
          <div className="lg:w-1/3">
            <form onSubmit={handleSubmit}>
              <div className="">
                <input
                  className="placeholder:text-black rounded-full my-2 py-4 px-5 border-2 outline-none border-[#f40a5c] w-full 2xs:h-[20px]"
                  placeholder="তোমার ইমেইল লিখো"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative">
                {/* my-2 pl-5 pr-2 border-2 border-[#f40a5c] rounded-full w-full flex justify-between */}
                <input
                  className="placeholder:text-black rounded-full my-2 py-4 px-5 border-2 outline-none border-[#f40a5c] w-full 2xs:h-[20px]"
                  placeholder="তোমার কথা লিখো"
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-0 xs:top-2 xs:right-2 xs:rounded-full md:top-2 md:right-2 lg:top-2 lg:right-2 bg-[#f40a5c] rounded-r-full md:rounded-full py-2 w-[70px] md:w-[80px] lg:w-36 text-[#fff] my-2 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]"
                >
                  মেইল করো
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <img
        className="w-24 absolute right-0 bottom-0 blur-lg"
        src={box}
        alt=""
      /> */}
    </div>
  );
}

export default Advertisement2;
