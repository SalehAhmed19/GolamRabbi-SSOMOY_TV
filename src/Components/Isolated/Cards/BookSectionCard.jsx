import React, { useState } from "react";
import BookByModal from "../Modals/BookByModal";

const BookSectionCard = ({ book }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <>
      <div className="w-full py-5 md:py-16 group">
        <div className="lg:group-hover:visible lg:invisible  lg:group-hover:transition-all lg:group-hover:duration-1000 lg:group-hover:delay-75 transition-all duration-200  delay-150 text-primary font-bold mx-16 xl:mx-64">
          <h3 className="font-bold 2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] mb-2">
            {book.title}
          </h3>
          <p className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] mb-3">
            {book.date}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="">
            <img
              className="drop-shadow-xl 2xs:w-40 xs:w-48 md:w-[316px] md:h-[472px]  rounded-lg  shadow-2xl"
              src={book.image}
              alt=""
            />
            <button
              style={{ fontFamily: "Hind Siliguri" }}
              onClick={handleOpen}
              className="block mx-auto 2xs:my-4 xs:my-6 sm:my-8 md:my-10 py-2 px-5 border-2 border-[#D89F17] border-dashed hover:bg-[#D89F17] sm:w-[180px] md:w-[290px] text-center rounded-full text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px] hover:text-black"
            >
              কিনতে চাও?
            </button>
          </div>
        </div>
        <div className="lg:group-hover:visible lg:invisible  lg:group-hover:transition-all lg:group-hover:duration-1000 lg:group-hover:delay-75 transition-all duration-200  delay-150 relative w-full h-[83px]">
          <div className="-mt-3 md:mt-8 mr-5 lg:w-[20%] absolute right-0">
            <button className="w-full text-primary p-5  font-bold 2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
              মূল্যঃ {book.price} টাকা
            </button>
          </div>
        </div>
      </div>
      {openModal && <BookByModal openModal={openModal} setOpenModal={setOpenModal} book={book} />}
    </>
  );
};

export default BookSectionCard;
