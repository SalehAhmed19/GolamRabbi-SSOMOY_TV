import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import { toast } from "react-toastify";

function Subscribe() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const form = {
      email: email,
    };

    fetch("http://localhost:4000/api/newsletter-subscription", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Subscription successful");
      });

    console.log(form);
  };
  return (
    <div className="bg-[#0e0f14] p-7 lg:mx-20 mx-5 rounded-md text-primary mt-20 mb-10">
      <h3 className="font-bold text-3xl">
        জীবনকে এগিয়ে নিতে। সময়কে উপভোগ্য করতে। এখনই সাবস্ক্রাইব করো।
      </h3>
      <form
        onSubmit={() => handleSubmit(event)}
        className="my-5 p-2 bg-[#333] rounded-full lg:w-1/3 flex items-center"
      >
        <input
          name="email"
          placeholder="তোমার ইমেইল লিখো"
          className="w-full py-2 px-5 rounded-full bg-[#333] focus:outline-none"
          type="text"
        />
        <button className="p-3 rounded-full bg-[#222]">
          <RiSendPlane2Fill className="text-xl text-primary" />
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
