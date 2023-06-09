import React, { useState } from "react";
import { Fade } from "react-reveal";
import presenter from "../../assets/images/presenter.png";
import Modal from "./Modals/Modal";
import { toast } from "react-hot-toast";
import news from "../../assets/images/interview.png";
import MuiModal from "./Modals/MuiModal";
import box from "../../assets/SVGs/box.png";
import { Zoom } from "react-reveal";

function MockTest() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const mobile = event.target.mobile.value;
    const time = event.target.birthdaytime.value;
    const form = {
      title: "Mock Test",
      name: name,
      email: email,
      mobile: mobile,
      time: time,
      dateAndTime: new Date().toLocaleString(),
    };

    fetch("http://localhost:4000/api/mock-test-schedule", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Schedule setup successful");
        if (data) {
          setOpen(false);
        }
      });

    console.log(form);
  };

  return (
    <div className="p-5 lg:px-24 py-14 text-[#fff] bg-[#14161C] relative">
      <img
        src={box}
        className="absolute top-5 left-0 blur-lg rounded w-24"
        alt=""
      />
      <Fade down>
        <h2 className="text-center text-4xl font-bold mb-5 text-primary">
          মক টেস্ট
        </h2>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <div>
          <Fade left>
            <img src={news} className="rounded-md" alt="" />
          </Fade>
        </div>
        <div className="flex flex-col justify-center lg:ml-10 mx-5">
          <Fade right>
            <p className="text-xl">
              অল্প সময়ে টিভি স্ক্রিনে আসার প্রস্তুতি ঝালাই করে নিতে চাও। আবার
              এটাও ভাবছো শিখছো অনেক জায়গায়। কিন্তু এখনো কনফিডেন্ট পাচ্ছো না।{" "}
              <br />
            </p>
            <p className="text-xl text-primary">এবার তাহলে চেক করে নাও-</p>
            <ul className="text-xl list-disc mx-5 ml-10">
              <li>তোমার ভয়েস ও উচ্চারণ</li>
              <li>তোমার স্কিল ও নলেজ</li>
              <li>তোমার প্রফেশনাল লুক</li>
              <li>সর্বোপরি তোমার সিভি/ আবেদন প্রক্রিয়া ও অডিশন প্রস্তুতি</li>
            </ul>
            <p className="text-secondary font-bold text-xl my-5">
              নিজেকে ডেভেলপ করতে আর টিপস পেতে
            </p>
          </Fade>
        </div>
      </div>
      <Fade up>
        <button
          onClick={() => setOpen(true)}
          className="block mx-auto my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl"
        >
          টেস্ট দিতে সেট করে নাও টাইম
        </button>
      </Fade>
      <MuiModal open={open} handleOpen={handleOpen} handleClose={handleClose}>
        <form onSubmit={() => handleSubmit(event)} action="">
          <h4 className="text-primary font-bold text-xl">মক টেস্ট দিতে চাও?</h4>
          <input
            className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
            type="datetime-local"
            id="birthdaytime"
            name="birthdaytime"
          ></input>
          <input
            name="name"
            placeholder="তোমার নাম লিখো"
            className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
            type="text"
          />
          <input
            name="email"
            placeholder="তোমার ইমেইল লিখো"
            className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
            type="text"
          />
          <input
            name="mobile"
            placeholder="তোমার মোবাইল নাম্বার লিখো"
            className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
            type="text"
          />

          <button className="bg-primary block ml-auto my-3 px-10 py-1 text-[#222] rounded">
            সাবমিট করো
          </button>
        </form>
      </MuiModal>
      <img
        src={box}
        className="absolute bottom-5 right-0 blur-lg w-36"
        alt=""
      />
    </div>
  );
}

export default MockTest;
