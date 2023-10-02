import React from "react";
import { toast } from "react-hot-toast";
import { Zoom } from "react-reveal";
import box from "../../assets/SVGs/box.png";
import news from "../../assets/images/interview.png";
import MockTestModal from "./Modals/MockTestModal";

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
    <div
      className="md:px-14 md:pb-14  text-white relative "
      style={{ fontFamily: "Hind Siliguri" }}
    >
      <img
        src={box}
        className="absolute top-5 left-0 blur-lg rounded w-24 hidden md:block"
        alt=""
      />
      <h1 className="-mb-5 md:-mb-10 lg:-mb-20  custom-text-stroke-2 text-center  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[55px] lg:text-[100px] my-5">
        মক টেস্ট
      </h1>
      <Zoom>
        <h1 className="text-primary text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold">
          মক টেস্ট
        </h1>
      </Zoom>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-10">
        <div className="mx-auto sm:w-[270px] md:w-[80%] lg:w-full xl:w-[95%] 2xl:w-full">
          <Zoom>
            <img src={news} className="rounded-md" alt="" />
          </Zoom>
        </div>
        <div
          style={{ fontFamily: "Hind Siliguri" }}
          className="flex flex-col justify-center lg:ml-10 "
        >
          <Zoom>
            <p className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
              অল্প সময়ে টিভি স্ক্রিনে আসার প্রস্তুতি ঝালাই করে নিতে চাও। আবার
              এটাও ভাবছো শিখছো অনেক জায়গায়। কিন্তু এখনো কনফিডেন্ট পাচ্ছো না।{" "}
              <br />
            </p>
            <p className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-primary mt-2">
              এবার তাহলে চেক করে নাও-
            </p>
            <ul className="2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px] mt-2 list-disc mx-5 md:ml-[70px]">
              <li>তোমার ভয়েস ও উচ্চারণ</li>
              <li>তোমার স্কিল ও নলেজ</li>
              <li>তোমার প্রফেশনাল লুক</li>
              <li>সর্বোপরি তোমার সিভি/ আবেদন প্রক্রিয়া ও অডিশন প্রস্তুতি</li>
            </ul>
            <p className="text-secondary font-bold 2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] my-5">
              নিজেকে ডেভেলপ করতে আর টিপস পেতে
            </p>
          </Zoom>
        </div>
      </div>
      <Zoom>
        <button
          onClick={() => setOpen(true)}
          style={{ fontFamily: "Hind Siliguri" }}
          className="block mx-auto 2xs:my-4 xs:my-6 sm:my-8 md:my-10 py-2 px-5 border-2 border-[#f40a5c] hover:bg-[#f40a5c] sm:w-[180px] md:w-[290px] text-center rounded-full text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]"
        >
          টেস্ট দিতে সেট করে নাও টাইম
        </button>
      </Zoom>
      <MockTestModal open={open} handleClose={handleClose}/>
      <img
        src={box}
        className="absolute bottom-5 right-0 blur-lg w-36 hidden md:block"
        alt=""
      />
    </div>
  );
}

export default MockTest;
