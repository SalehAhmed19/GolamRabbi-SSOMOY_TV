import React from "react";
// import bg from "../../assets/images/book-bg.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../Styles/BookSection.css";

function BookSection() {
  return (
    <>
      <div
        className="py-20 relative bg-[#111118]"
      >
        <div className="absolute  md:left-[240px] lg:left-[650px]  border-2 border-[#D89F17] border-dashed  opacity-[0.5] md:w-[150px] md:h-[150px]  lg:w-[180px] lg:h-[180px]  rounded-full"></div>
        <div className="absolute md:-top-[80px] md:right-1  border-b-2  border-[#D89F17] border-dashed   md:w-[150px] md:h-[150px]  lg:w-[180px] lg:h-[180px]  rounded-full"></div>
        <div className="absolute md:-bottom-[90px] md:left-1 border-t-2  border-[#D89F17] border-dashed   md:w-[150px] md:h-[150px]  lg:w-[180px] lg:h-[180px]  rounded-full"></div>
        <div className="space-y-5 h-[500px] mt-[200px]">
          <div className="bg-primary h-[10px]"></div>
          <div className="bg-primary h-[40px]"></div>
          <div className="bg-primary h-[40px]"></div>
          <div className="bg-primary h-[10px]"></div>
        </div>
        <div className="absolute top-[70px] w-full mb-5">
          <div className="text-primary font-bold mx-16 lg:mx-20">
            <h3 className="text-4xl mb-2">বই মেলায় আসছে</h3>
            <p className="text-xl mb-3">এপ্রিল ১৪</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="">
              <img
                className="w-64 md:72 lg:w-96 rounded-lg  shadow-2xl"
                src="https://4.bp.blogspot.com/-NalMOjCUYHk/T-4Ff3PLfnI/AAAAAAAADiY/2BI2TNbOgoU/s1600/Book+Shaped+Card+5.jpg"
                alt=""
              />
              <button className="mx-8 mt-8 lg:mx-24  border-2 border-[#D89F17] border-dashed px-14 py-2 rounded-full text-white font-bold text-xl">
                কিনতে চাও?
              </button>
            </div>
          </div>
          <div className="flex justify-end mt-8 lg:-my-10">
            <button className="bg-primary font-bold p-5 text-base md:text-3xl">
              মূল্যঃ ২০৬ টাকা
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookSection;
{
  /* <div className="grid grid-cols-1 lg:grid-cols-2 text-primary bg-[#111118] lg:w-3/4 mx-auto rounded-md">
            <div className="lg:pl-10 pl-5 pr-5 pt-10 flex flex-col justify-center">
              <h2 className="font-bold text-3xl mb-3">কি যে করি</h2>
              <p>
                জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ
                হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা
                মূলধন নিয়ে আসে প্রকৃতির মালখানা থেকে। জীবরঙ্গভূমিতে মানুষ এসে
                দেখা দেয় দুই শূন্য হাতে মুঠো বেঁধে। মানুষ আসবার পূর্বেই
                জীবসৃষ্টিযজ্ঞে প্রকৃতির ভূরিব্যয়ের পালা শেষ হয়ে এসেছে। বিপুল
                মাংস, কঠিন বর্ম, প্রকাণ্ড লেজ নিয়ে জলে স্থলে পৃথুল দেহের যে
                অমিতাচার প্রবল হয়ে উঠেছিল তাতে ধরিত্রীকে দিলে ক্লান্ত করে।
                প্রমাণ হল আতিশয্যের পরাভব অনিবার্য। পরীক্ষায় এটাও স্থির হয়ে
                গেল যে, প্রশ্রয়ের পরিমাণ যত বেশি হয় দুর্বলতার বোঝাও তত দুর্বহ
                হয়ে ওঠে। নূতন পর্বে প্রকৃতি যথাসম্ভব মানুষের বরাদ্দ কম করে
                দিয়ে নিজে রইল নেপথ্যে। মানুষকে দেখতে হল খুব ছোটো, কিন্তু সেটা
                একটা কৌশল মাত্র। এবারকার জীবযাত্রার পালায় বিপুলতাকে করা হল
                বহুলতায় পরিণত। মহাকায় জন্তু ছিল প্রকাণ্ড একলা, মানুষ হল
                দূরপ্রসারিত অনেক।
              </p>
              <button className="block shadow-lg mx-auto my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] lg:w-[290px] w-[190px] text-center rounded-full text-[#fff] font-bold text-xl">
                কিনতে ক্লিক করো
              </button>
            </div>
            <div className="p-10 flex justify-end">
              <img className="w-72 drop-shadow-xl" src={book} alt="" />
            </div>
          </div> */
}
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { EffectCoverflow, Pagination, Navigation } from "swiper";

// import book from "../../assets/images/book.png";

// function BookSection() {
//   return (
//     <div>
//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView="auto"
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         className="swiper-container"
//       >
//         <SwiperSlide>
//           <img className="w-36" src={book} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="w-36" src={book} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="w-36" src={book} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="w-36" src={book} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="w-36" src={book} alt="" />
//         </SwiperSlide>
//         <div className="slider-controler">
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-backward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// }

// export default BookSection;
