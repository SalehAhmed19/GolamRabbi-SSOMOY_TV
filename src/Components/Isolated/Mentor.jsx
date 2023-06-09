import React, { useState } from "react";
import { Fade } from "react-reveal";
import bg from "../../assets/images/mentor-bg.png";
import presenter from "../../assets/images/presenter.png";
import Modal from "./Modals/Modal";
import { toast } from "react-hot-toast";
import news from "../../assets/images/mentorship.png";
import emailjs from "emailjs-com";
import MuiModal from "./Modals/MuiModal";
import box from "../../assets/SVGs/box.png";

const Mentor = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const emailjsServiceId = import.meta.env.VITE_emailjs_service_id;
  const emailjsTemplateId = import.meta.env
    .VITE_emailjs_fan_with_fun_template_id;
  const emailjsPublicKey = import.meta.env.VITE_emailjs_public_key;

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const mobile = event.target.mobile.value;
    const form = {
      title: "Mentorship",
      name: name,
      email: email,
      mobile: mobile,
      dateAndTime: new Date().toLocaleString(),
    };

    fetch("http://localhost:4000/api/mentorship-booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    emailjs
      .sendForm(
        emailjsServiceId,
        emailjsTemplateId,
        event.target,
        emailjsPublicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result) {
            toast.success("Booking successful");
            setOpen(false);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );

    console.log(form);
    setShow(false);
  };
  return (
    <div
      // style={{
      //   background: `url(${bg})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      // }}
      className="lg:px-24 px-5 py-14 text-[#fff] relative"
    >
      <Fade down>
        <h2 className="text-center text-4xl font-bold mb-5 text-primary">
          পেইড মেন্টরশিপ
        </h2>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <div className="flex flex-col justify-center">
          <Fade left>
            <p className="text-xl font-bold text-primary">
              উপস্থাপনার ঝকঝকে ক্যারিয়ারে আসার টোটাল প্রস্তুতি নিয়ে নিতে চাও।
              থাকতে চাও অভিজ্ঞ কারো ছায়ায়। তাহলে দেরী কেনো?
            </p>
            <ul className="list-disc text-xl my-5 ml-10">
              <li>উপস্থাপনা কত ধরণের।</li>
              <li>দেশি-বিদেশি যেকোনো গণমাধ্যমের প্রস্তুতি।</li>
              <li>কোনটাতে তোমার আগ্রহ আর কিভাবে আসবে এ ক্যারিয়ারে।</li>
              <li>
                মূলত: এটি একটি দীর্ঘদিনের প্রস্তুতি প্ল্যান। ধরতে পারো একটা
                ইন্টার্নশিপ। যা তোমাকে দিবে সার্বিক প্রস্তুতি। এবং এ প্রোগ্রামে
                থাকতে থাকেতেই মিলবে চাকরির সুযোগ…
              </li>
            </ul>
          </Fade>
        </div>
        <div>
          <Fade right>
            <img className="rounded-md" src={news} alt="" />
          </Fade>
        </div>
      </div>
      <Fade up>
        <button
          onClick={() => setOpen(true)}
          className="block mx-auto my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[230px] text-center rounded-full text-[#fff] font-bold text-xl"
        >
          আমাকে বুক করতে
        </button>
      </Fade>
      <MuiModal open={open} handleOpen={handleOpen} handleClose={handleClose}>
        <h4 className="text-primary font-bold text-xl">
          আমাকে মেন্টর হিসেবে চাও?
        </h4>
        <form onSubmit={() => handleSubmit(event)} action="">
          <input
            type="text"
            name="title"
            readOnly
            value="Paid Mentorship"
            className="hidden"
          />
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

          <button className="bg-primary w-full block ml-auto my-3 px-10 py-1 text-[#222] rounded">
            সাবমিট করো
          </button>
        </form>
      </MuiModal>
    </div>
  );
};

export default Mentor;
