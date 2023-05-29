import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import bg from "../../assets/images/book-bg.png";
import book from "../../assets/images/book.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import "../../Styles/BookSection.css";
import { EffectCoverflow, Pagination } from "swiper";

function BookSection() {
  return (
    <>
      <div
        // style={{
        //   background: `url(${bg})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
        className="py-20"
      >
        <div>
          <div className="mb-5 text-center">
            <h3 className="text-primary font-bold text-4xl mb-2">
              বই মেলায় আসছে
            </h3>
            <p className="text-basic text-xl font-bold">এপ্রিল ১৪</p>
          </div>
          {/* <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 4,
              loop: true,
              slideShadows: true,
            }}
            // pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="myswiper "
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <img
                className="md:w-72 lg:w-96 mx-auto shadow-2xl"
                src={book}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:w-72 lg:w-96 mx-auto shadow-2xl"
                src={book}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:w-72 lg:w-96 mx-auto shadow-2xl"
                src={book}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:w-72 lg:w-96 mx-auto shadow-2xl"
                src={book}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:w-72 lg:w-96 mx-auto shadow-2xl"
                src={book}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:w-72 lg:w-96 mx-auto shadow-2xl"
                src={book}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:w-72 lg:w-96 mx-auto shadow-2xl"
                src={book}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:w-72 lg:w-96 mx-auto shadow-2xl"
                src={book}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:w-72 lg:w-96 mx-auto shadow-2xl"
                src={book}
                alt=""
              />
            </SwiperSlide>
          </Swiper> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 text-primary bg-[#111118] lg:w-3/4 mx-auto rounded-md">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default BookSection;

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
