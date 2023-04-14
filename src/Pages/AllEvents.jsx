import React, { useState } from "react";
import bg from "../assets/images/event-bg.jpg";
import { Fade } from "react-reveal";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Modal from "../Components/Isolated/Modals/Modal";

function AllEvents() {
  const [show, setShow] = useState(false);
  const handleOnClose = () => setShow(false);
  const events = [
    {
      title: "জীবনের রূপকথা",
      date: "১২",
      month: "এপ্রিল",
      startingTime: "সকাল ০৮:০০",
      endingTime: "দুপুর ০২:০০",
      location: "মিরপুর, ঢাকা",
    },
    {
      title: "বেকারত্বের কালো মেঘ",
      date: "২৩",
      month: "এপ্রিল",
      startingTime: "সকাল ১০:০০",
      endingTime: "দুপুর ০১:০০",
      location: "ধানমন্ডি, ঢাকা",
    },
    {
      title: "জীবন নিয়ে কিছু কথা",
      date: "১০",
      month: "মে",
      startingTime: "সকাল ০৮:০০",
      endingTime: "দুপুর ০২:০০",
      location: "মিরপুর, ঢাকা",
    },
    {
      title: "জীবনের রূপকথা",
      date: "১২",
      month: "এপ্রিল",
      startingTime: "সকাল ০৮:০০",
      endingTime: "দুপুর ০২:০০",
      location: "মিরপুর, ঢাকা",
    },
    {
      title: "বেকারত্বের কালো মেঘ",
      date: "২৩",
      month: "এপ্রিল",
      startingTime: "সকাল ১০:০০",
      endingTime: "দুপুর ০১:০০",
      location: "ধানমন্ডি, ঢাকা",
    },
    {
      title: "জীবন নিয়ে কিছু কথা",
      date: "১০",
      month: "মে",
      startingTime: "সকাল ০৮:০০",
      endingTime: "দুপুর ০২:০০",
      location: "মিরপুর, ঢাকা",
    },
    {
      title: "জীবনের রূপকথা",
      date: "১২",
      month: "এপ্রিল",
      startingTime: "সকাল ০৮:০০",
      endingTime: "দুপুর ০২:০০",
      location: "মিরপুর, ঢাকা",
    },
    {
      title: "বেকারত্বের কালো মেঘ",
      date: "২৩",
      month: "এপ্রিল",
      startingTime: "সকাল ১০:০০",
      endingTime: "দুপুর ০১:০০",
      location: "ধানমন্ডি, ঢাকা",
    },
    {
      title: "জীবন নিয়ে কিছু কথা",
      date: "১০",
      month: "মে",
      startingTime: "সকাল ০৮:০০",
      endingTime: "দুপুর ০২:০০",
      location: "মিরপুর, ঢাকা",
    },
  ];
  return (
    <div className="lg:pt-40 py-10 lg:mx-20 mx-5">
      <Fade down>
        <h1 className="text-primary text-center text-4xl font-bold">
          আসন্ন ইভেন্টস
        </h1>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-10">
        {events.map((event, idx) => (
          <div
            key={idx}
            style={{
              background: `url(${bg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="text-basic p-5 rounded-md"
          >
            <div>
              <h3 className="text-primary font-bold text-2xl">{event.title}</h3>
              <h4 className="text-primary text-2xl">{event.date}</h4>
              <p className="my-3 flex items-center">
                <AiOutlineClockCircle className="mr-3" />
                {event.startingTime} - {event.endingTime}
              </p>
              <p className="my-3 flex items-center">
                <MdLocationOn className="mr-3" />
                {event.location}
              </p>
            </div>
            <button
              onClick={() => setShow(true)}
              className="block mx-auto mt-2 py-1 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[190px] text-center rounded-full text-[#fff] font-bold"
            >
              বুক করো এখনি
            </button>
          </div>
        ))}
      </div>
      <Modal onClose={handleOnClose} visible={show}>
        <h4 className="text-primary font-bold text-xl">ইভেন্ট এ আসতে চাও?</h4>
        <form className="lg:w-96" action="">
          <select class="form-select text-primary w-full bg-[#333] rounded my-2 py-1 px-3 focus:outline-none">
            {events.map((e, idx) => (
              <option key={idx}>{e.title}</option>
            ))}
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
        <button className="bg-primary w-full block ml-auto my-3 px-10 py-1 text-[#222] rounded">
          সাবমিট করো
        </button>
      </Modal>
    </div>
  );
}

export default AllEvents;
