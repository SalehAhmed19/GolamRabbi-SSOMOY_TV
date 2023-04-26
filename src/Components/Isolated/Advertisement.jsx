import React, { useState } from "react";
import { Zoom } from "react-reveal";
import depressed from "../../assets/images/depression.jpg";
import Modal from "./Modals/Modal";

function Advertisement() {
  const [show, setShow] = useState(false);
  const handleOnClose = () => setShow(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const mobile = event.target.mobile.value;
    const description = event.target.description.value;
    const form = {
      name: name,
      email: email,
      mobile: mobile,
      description: description,
    };
    console.log(form);
    setShow(false);
  };
  return (
    <div
      style={{
        background: `url(${depressed})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:px-24 px-5 flex flex-col items-center justify-center h-[70vh]"
    >
      <Zoom>
        <h2 className="text-primary text-center text-4xl font-bold mb-5">
          শেয়ার করো; সমাধান পাও
        </h2>
        <h4 className="text-primary font-bold text-xl">
          মনে হচ্ছে - জীবনটা সঠিকভাবে এগুচ্ছে না!
        </h4>
        <p className="text-[#fff] text-center text-2xl">
          পরিশ্রম করছো অনেক; কিন্তু সফলতার পাগলা ঘোড়া সেভাবে ধরা দিচ্ছে না। হতাশ
          হয়ে যাচ্ছো। <br /> সমাধান পেতে; লিখো এখানে চাচ্ছো- অভিজ্ঞ করো পরামর্শ।
          তাহলে দেরী কেনো? এখনই লিখে ফেলো তোমার কথা। আর পেয়ে যাও <br /> সুন্দর
          সমাধান।
        </p>
        <button
          onClick={() => setShow(true)}
          className="my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[250px] text-center rounded-full text-[#fff] font-bold text-xl"
        >
          সমাধান পেতে; লিখে জানাও
        </button>
      </Zoom>
      <Modal visible={show} onClose={handleOnClose}>
        <h4 className="text-primary font-bold text-xl">
          সমাধান পেতে; লিখো এখানে
        </h4>
        <form
          onSubmit={() => handleSubmit(event)}
          className="lg:w-96"
          action=""
        >
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
          <textarea
            className="w-full mt-3 bg-[#333] rounded py-1 px-3 focus:outline-none text-primary"
            placeholder="তোমার কথা লিখো"
            name="description"
            id=""
          ></textarea>

          <button className="bg-primary w-full block ml-auto my-3 px-10 py-1 text-[#222] rounded">
            সাবমিট করো
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default Advertisement;
