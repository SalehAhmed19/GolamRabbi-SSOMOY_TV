import React, { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import bg from "../../assets/images/course-bg.png";
import Modal from "./Modals/Modal";
import { Link, Outlet } from "react-router-dom";
import CourseTabs from "./Tabs/CourseTabs";
import { toast } from "react-toastify";

function Course() {
  const [show, setShow] = useState(false);
  const handleOnClose = () => setShow(false);
  const data = [
    { title: "মিডিয়া", route: "/" },
    { title: "লিডারশীপ", route: "/course/leadership-course" },
    { title: "লাইফ কোর্স", route: "course/life-course" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const mobile = event.target.mobile.value;
    const course = event.target.course.value;
    const form = {
      name: name,
      email: email,
      mobile: mobile,
      course: course,
    };

    fetch("http://localhost:4000/api/course-enrollment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Enrollment successful");
      });
    console.log(form);
    setShow(false);
    // toast("🦄 Wow so easy!", {
    //   position: "top-right",
    //   autoClose: 3000,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    // });
  };
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:px-24 py-10"
    >
      <Fade down>
        <h2 className="text-center text-4xl font-bold text-primary pt-14 my-5">
          কোর্স
        </h2>
      </Fade>
      <CourseTabs />
      <div className=" my-5 mx-5">
        <button
          className="block mx-auto my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl"
          onClick={() => setShow(true)}
        >
          এনরোল করো
        </button>
      </div>
      <Fade up>
        <div className="flex justify-center"></div>
      </Fade>
      <Modal onClose={handleOnClose} visible={show}>
        <h4 className="text-primary font-bold text-xl">
          কোর্সে এনরোল করতে চাও?
        </h4>
        <form
          onSubmit={() => handleSubmit(event)}
          className="lg:w-96"
          action=""
        >
          <select
            name="course"
            class="form-select text-primary w-full bg-[#333] rounded my-2 py-1 px-3 focus:outline-none"
          >
            <option>মিডিয়া কোর্স</option>
            <option>লিডারশীপ কোর্স</option>
            <option>লাইফ কোর্স</option>
          </select>
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
      </Modal>
    </div>
  );
}

export default Course;
