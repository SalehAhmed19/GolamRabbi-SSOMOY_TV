// import React from "react";
// import bg from "../../assets/footer/mesh-757.png";
// import Fade from "react-reveal/Fade";
// import "../../Styles/Footer.css";

// import "./Footer.css";

// const Footer = () => {
//   function Copyright(props) {
//     return (
//       <div className="flex justify-center items-center mt-10">
//         <img className="w-6 mx-5" src={logo} alt="" />

//         <p className="text-[#222]">
//           Copyright &copy;{" "}
//           <a className="underline" href="#home">
//             Developed by Saleh Ahmed{" "}
//           </a>
//           {new Date().getFullYear()}
//         </p>
//       </div>
//     );
//   }
//   const footers = [
//     {
//       title: "Company",
//       description: ["Team", "History", "Contact us", "Locations"],
//     },
//     {
//       title: "Features",
//       description: [
//         "Cool stuff",
//         "Random feature",
//         "Team feature",
//         "Developer stuff",
//         "Another one",
//       ],
//     },
//     {
//       title: "Resources",
//       description: [
//         "Resource",
//         "Resource name",
//         "Another resource",
//         "Final resource",
//       ],
//     },
//     {
//       title: "Legal",
//       description: ["Privacy policy", "Terms of use"],
//     },
//   ];
//   // #D9A017
//   return (
//     <Fade up>
//       <div className="bg-footer text-[#222222] bg-[#D9A017] relative w-full lg:px-14 px-5 py-20 grid grid-cols-1 lg:grid-cols-4 gap-5">
//         <div>
//           <div className="flex items-center mt-8 ">
//             <img className="w-14 mr-3" src={logo} alt="" />

//             <h2 className="font-bold text-4xl">Golam Rabby</h2>
//           </div>
//           <p className="my-5">
//             I Golam Rabby would like to learn from everywhere even it may be
//             from my junior, uneducated & general people like Rickshaw-Puller. In
//             addition, I have much affection for teaching & facilitating a class,
//             discussion, and seminar as well.
//           </p>
//           <div className=" text-[#222] text-2xl">
//             <a
//               target="_blank"
//               href="https://www.facebook.com/golam.rabby.739326"
//               className="mt-8 mr-4"
//             >
//               <i className="fa-brands fa-facebook-f"></i>
//             </a>
//             <a
//               target="_blank"
//               href="https://www.facebook.com/golam.rabby.739326"
//               className=""
//             >
//               <i class="fa-brands fa-twitter"></i>
//             </a>

//             <a
//               href="https://www.linkedin.com/in/golam-rabby/"
//               target="_blank"
//               className="mx-4"
//             >
//               <i class="fa-brands fa-linkedin-in"></i>
//             </a>
//             <a className="mx-4" href="#" target="_blank">
//               <i class="fa-brands fa-youtube"></i>
//             </a>
//             <a
//               href="https://www.instagram.com/golam.rabby.739326"
//               target="_blank"
//               className="mx-4"
//             >
//               <i class="fa-brands fa-instagram"></i>
//             </a>
//           </div>
//         </div>
//         <div className="flex flex-col lg:items-center  mt-8 ">
//           <h1 className="text-3xl font-bold">
//             Useful Links
//             <div className="underlines "></div>
//           </h1>

//           <a className="texts   mt-3" href="/jobs">
//             <i class="fa-solid fa-suitcase mx-5 "></i> Jobs News
//           </a>
//           <a className="texts  " href="/events">
//             <i class="fa-sharp fa-solid fa-arrow-up-right-dots ml-5 mx-2 "></i>{" "}
//             Popular Event
//           </a>
//           <a className="texts" href="/courses">
//             <i class="fa-brands fa-discourse ml-7 mx-3"></i> Latest Course
//           </a>

//           <a className="texts" href="/invitation">
//             <i class="fa-sharp fa-solid fa-radio ml-5 mx-3"></i> My Invitation
//           </a>

//           <a className="texts" href="/invitation">
//             <i class="fa-sharp fa-regular fa-folder-open ml-3 mx-7"></i>{" "}
//             What'New
//           </a>
//         </div>
//         <div className="flex flex-col lg:items-center gap-2 mt-8">
//           <h1 className="text-3xl font-bold">
//             Keep In Touch
//             <div className="underlines "></div>
//           </h1>
//           <a className="texts mt-3" href="#">
//             <i class="fa-solid fa-location-dot ml-3 mx-2"></i> Address :Dhaka
//             Bangladesh
//           </a>
//           <a className="texts" href="#">
//             {/* Melbourne 005 */}
//           </a>
//           <a className="texts" href="#">
//             <i class="fa-solid fa-mobile-screen-button ml-2 mx-2"></i> Phone :
//             (+880) 800 433 633
//           </a>
//           <a className="texts" href="#">
//             <i class="fa-solid fa-envelope ml-4 mx-2"></i> Email :
//             Golmraby@gmail.com
//           </a>
//         </div>
//         <div className=" text-[#222] text-2xl">
//           <h1 className="text-3xl font-bold mb-8 mt-8">
//             Sign up for our newsletter
//             <div className="underlinese "></div>
//           </h1>

//           <input
//             className=" mb-3 p-2 w-64 shadow"
//             placeholder="Text"
//             type="text"
//           />
//           <br />
//           <button class="rounded-full bg-black text-white p-1 textwidth w-32 bg-color">
//             Submit
//           </button>
//         </div>
//       </div>

//       <div className="py-6 bg-black">
//         <p className="text-center text-white font-bold">
//           &copy; Developed by Saleh Ahmed Mahin
//         </p>
//       </div>
//     </Fade>
//   );
// };

// export default Footer;
import React from "react";
import logo from "../../assets/logo/footer-logo.png";
// import svg from "../../assets/SVGs/split (1).svg";
// import svg from "../../assets/SVGs/liquid-cheese.png";
// import svg from "../../assets/SVGs/radiant-gradient.png";
import svg from "../../assets/SVGs/radiant-gradient-2.png";

const Footer = () => {
  return (
    <>
      <footer
        style={{ background: `url(${svg})`, backgroundSize: "cover" }}
        className="bg-primary text-[#222] py-8 "
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <div className="flex">
                <img src={logo} className="w-10 mr-3" alt="" />
                <h3 className="text-2xl font-bold">Golam Rabby</h3>
              </div>
              <p className="mt-5 mr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                impedit minima ut consequatur, officia fugiat praesentium
                temporibus beatae, illum in commodi natus voluptatem nostrum
                corporis rem pariatur accusantium ipsum dolore.
              </p>
            </div>
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              {/* <h3 className="text-lg font-bold mb-4"></h3> */}
              <p className="mb-2 cursor-pointer">মিডিয়া জব সার্কুলার</p>
              <p className="mb-2 cursor-pointer">অডিশন টিপস</p>
              <p className="mb-2 cursor-pointer">লাইফ হ্যাকস</p>
              <p className="mb-2 cursor-pointer">পেইড মেন্টরশীপ</p>
              <p className="mb-2 cursor-pointer">মক টেস্ট</p>
              <p className="mb-2 cursor-pointer">মিট আপ</p>
            </div>
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <h3 className="text-lg font-bold mb-4">সার্ভিস</h3>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#">সিভি রাইটিং</a>
                </li>
                <li className="mb-2">
                  <a href="#">বিজনেস আইডিয়া ডেভেলপমেন্ট</a>
                </li>
              </ul>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#">ব্লগ</a>
                </li>
                <li className="mb-2">
                  <a href="#">ভিডিও</a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/4">
              <h3 className="text-lg font-bold mb-4">
                Subscribe to Our Newsletter
              </h3>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#F69E16] text-[#222] placeholder-[#333] py-2 px-4 w-full mb-2 rounded-lg focus:outline-none focus:shadow-outline"
                />
                <button
                  type="submit"
                  className="bg-[#F69E16] text-[#222] py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="h-[1px] mx-5 lg:mx-20 bg-[#F69E16] my-8"></div>
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Developed by Saleh Ahmed Mahin
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
