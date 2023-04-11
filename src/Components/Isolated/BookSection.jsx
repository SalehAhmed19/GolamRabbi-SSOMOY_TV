import React from "react";
import bg from "../../assets/images/book-bg.png";
import book from "../../assets/images/book1.jpg";

function BookSection() {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="py-20"
    >
      <div>
        <div className="mb-5 text-center">
          <h3 className="text-primary font-bold text-4xl">বই মেলায় আসছে</h3>
          <p className="text-basic text-xl font-bold">এপ্রিল ১৪</p>
        </div>
        <img className="w-72 mx-auto shadow-xl" src={book} alt="" />
        <button className="block mx-auto my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl">
          কিনতে ক্লিক করো
        </button>
      </div>
    </div>
  );
}

export default BookSection;
