import emailjs from "emailjs-com";
import React from "react";
import { toast } from "react-hot-toast";
import { Fade } from "react-reveal";
import news from "../../assets/images/mentorship.png";
import MuiModal from "./Modals/MuiModal";

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
      className="lg:px-24 px-5 pb-5  bg-[#fff] relative"
    >
      <h1 className="pt-[26px] -mb-5 md:-mb-10 lg:-mb-20 custom-text-stroke-2 text-center text-[28px] md:text-[55px] lg:text-[100px]  my-5">
        পেইড মেন্টরশিপ
      </h1>
      <Fade down>
        <h1 className="text-secondary text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold">
          পেইড মেন্টরশিপ
        </h1>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <div className="flex flex-col justify-center">
          <Fade left>
            <p className="md:text-[25px] lg:text-[29px] font-bold text-secondary">
              উপস্থাপনার ঝকঝকে ক্যারিয়ারে আসার টোটাল প্রস্তুতি নিয়ে নিতে চাও।
              থাকতে চাও অভিজ্ঞ কারো ছায়ায়। তাহলে দেরী কেনো?
            </p>
            <ul className="list-disc md:text-xl my-5 ml-5 md:ml-20 lg:ml-24">
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
          className="block mx-auto my-10 py-2 border-2 border-[#f40a5c] hover:bg-[#f40a5c] hover:text-white w-[230px] text-center rounded-full  font-bold text-xl"
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
