import React from "react";
import { Fade } from "react-reveal";
import AnnsEventCard from "../Components/Isolated/Cards/AnnsEventCard";

function AllEvents() {
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
    <div className="lg:px-24 py-20 p-5 pb-36">
      <Fade down>
        <h1 className="mt-5 md:mt-20 mb-5  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[33px] lg:text-[38px] xl:text-[43px] 2xl:text-[48px] text-primary text-center font-bold">
          আসন্ন ইভেন্টস
        </h1>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        {events.map((event, idx) => (
          <AnnsEventCard event={event} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default AllEvents;
