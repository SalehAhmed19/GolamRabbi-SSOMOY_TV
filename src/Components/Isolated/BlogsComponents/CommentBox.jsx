import React from "react";

function CommentBox() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const mobile = event.target.mobile.value;
    const comment = event.target.comment.value;
    const form = {
      name: name,
      email: email,
      mobile: mobile,
      comment: comment,
      dateAndTime: new Date().toLocaleString(),
    };

    console.log(form);
  };
  return (
    <div className="my-5 text-basic">
      <div className="flex items-center justify-between border-b-2 border-[#333] py-3">
        <h3 className="text-xl font-bold">মন্তব্য করুন</h3>
        {/* <button className="bg-[#222] border-2 border-[#333] px-5 py-2 rounded-full">
          সাইন ইন করুন
        </button> */}
      </div>
      <div className="my-10 flex flex-col items-end">
        {/* <div className="h-10 w-10 bg-[#333] rounded-full mx-auto mb-5"></div> */}
        <form
          onSubmit={() => handleSubmit(event)}
          className="flex flex-col lg:w-1/2 w-full lg:mx-5"
          action=""
        >
          <textarea
            name="comment"
            placeholder="তোমার কমেন্ট লিখ"
            className="bg-[#333] my-1 rounded-md p-3 h-24"
            type="text"
          />
          <input
            name="name"
            placeholder="তোমার নাম লিখ"
            className="bg-[#333] my-1 rounded-md py-2 px-3"
            type="text"
          />
          <input
            name="email"
            placeholder="তোমার ইমেইল লিখ"
            className="bg-[#333] my-1 rounded-md py-2 px-3"
            type="text"
          />
          <input
            name="mobile"
            placeholder="তোমার মোবাইল লিখ"
            className="bg-[#333] my-1 rounded-md py-2 px-3"
            type="text"
          />
          <button
            className="px-4 py-2 bg-[#F6B30E] my-2 w-full ml-auto text-[#222] rounded-md"
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
