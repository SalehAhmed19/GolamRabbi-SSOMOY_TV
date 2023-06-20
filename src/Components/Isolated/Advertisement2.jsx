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
import box from "../../assets/SVGs/box.png";
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
    <div className="relative bg-[#14161C]">
      <img className="w-20 absolute top-5 blur-lg" src={box} alt="" />
      <div className="lg:px-20 px-5 py-14">
        <h1 className="lg:text-right text-primary font-bold lg:text-3xl">
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
              <input
                className="bg-[#ffffff0d] rounded-full my-2 py-4 px-5 border-2 text-primary outline-none border-[#B8084F] w-full"
                placeholder="তোমার ইমেইল লিখো"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="my-2 pl-5 pr-2 border-2 border-[#B8084F] rounded-full bg-[#ffffff0d] w-full flex justify-between">
                <input
                  className="rounded-full py-3 outline-none bg-transparent text-primary w-full"
                  placeholder="তোমার কথা লিখো"
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-[#B8084F] rounded-full py-2 w-36 text-[#fff] my-2"
                >
                  মেইল করো
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <img
        className="w-24 absolute right-0 bottom-0 blur-lg"
        src={box}
        alt=""
      />
    </div>
  );
}

export default Advertisement2;
