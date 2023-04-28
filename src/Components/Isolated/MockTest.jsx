import React, { useState } from "react";
import { Fade } from "react-reveal";
import presenter from "../../assets/images/presenter.png";
import Modal from "./Modals/Modal";
import { toast } from "react-toastify";

function MockTest() {
  const [show, setShow] = useState(false);
  const handleOnClose = () => setShow(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const mobile = event.target.mobile.value;
    const time = event.target.birthdaytime.value;
    const form = {
      name: name,
      email: email,
      mobile: mobile,
      time: time,
    };

    fetch("http://localhost:4000/api/mock-test-schedule", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Schedule setup successful");
      });

    console.log(form);
    setShow(false);
  };

  return (
    <div className="lg:px-24 py-14 text-[#fff]">
      <Fade down>
        <h2 className="text-center text-4xl font-bold mb-5 text-primary">
          মক টেস্ট
        </h2>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <div>
          <Fade left>
            <img src={presenter} alt="" />
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
            <ul className="text-xl list-disc mx-5">
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
          onClick={() => setShow(true)}
          className="block mx-auto my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl"
        >
          টেস্ট দিতে সেট করে নাও টাইম
        </button>
      </Fade>
      <Modal visible={show} onClose={handleOnClose}>
        <form
          onSubmit={() => handleSubmit(event)}
          className="lg:w-96"
          action=""
        >
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
      </Modal>
    </div>
  );
}

export default MockTest;
