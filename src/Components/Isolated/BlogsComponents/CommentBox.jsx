import React from "react";

function CommentBox() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
  };
  return (
    <div className="my-5 text-basic">
      <div className="flex items-center justify-between border-b-2 border-[#333] py-3">
        <h3 className="text-xl font-bold">মন্তব্য করুন</h3>
        <button className="bg-[#222] border-2 border-[#333] px-5 py-2 rounded-full">
          সাইন ইন করুন
        </button>
      </div>
      <div className="my-10 flex">
        <div className="h-10 w-10 bg-[#333] rounded-full"></div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:w-1/2 mx-5"
          action=""
        >
          <textarea
            placeholder="তোমার কমেন্ট লিখ"
            className="bg-[#333] my-1 rounded-md p-3 h-24"
            type="text"
          />
          <input
            placeholder="তোমার নাম লিখ"
            className="bg-[#333] my-1 rounded-md py-2 px-3"
            type="text"
          />
          <input
            placeholder="তোমার ইমেইল লিখ"
            className="bg-[#333] my-1 rounded-md py-2 px-3"
            type="text"
          />
          <input
            placeholder="তোমার মোবাইল লিখ"
            className="bg-[#333] my-1 rounded-md py-2 px-3"
            type="text"
          />
          <button
            className="px-4 py-2 bg-[#F6B30E] my-2 w-1/2 ml-auto text-[#222] rounded-md"
            type="submit"
          >
            কমেন্ট পোস্ট করো
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentBox;
