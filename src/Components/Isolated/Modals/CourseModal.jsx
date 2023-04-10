import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function CourseModal({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-[#000] bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-[#222] text-basic rounded-md p-5 mx-5">
        <button className="block ml-auto mb-3" onClick={onClose}>
          <AiOutlineClose className="text-xl text-primary" />
        </button>
        <form action="">
          <select class="form-select text-primary w-full bg-[#333] rounded my-2 py-1 px-3 focus:outline-none">
            <option>মিডিয়া কোর্স</option>
            <option>লিডারশীপ কোর্স</option>
            <option>লাইফ কোর্স</option>
          </select>
          <input
            placeholder="তোমার নাম লিখো"
            className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
            type="text"
          />
          <input
            placeholder="তোমার ইমেইল লিখো"
            className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
            type="text"
          />
          <input
            placeholder="তোমার মোবাইল নাম্বার লিখো"
            className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
            type="text"
          />
        </form>
      </div>
    </div>
  );
}

export default CourseModal;
