import React, { useState } from "react";
import Modal from "../../Components/Isolated/Modals/Modal";
import { toast } from "react-hot-toast";

function CourseCard({ course }) {
  const [show, setShow] = useState(false);
  const handleOnClose = () => setShow(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const mobile = event.target.mobile.value;
    const course = event.target.course.value;
    const form = {
      title: "Courses",
      name: name,
      email: email,
      mobile: mobile,
      course: course,
      dateAndTime: new Date().toLocaleString(),
    };

    fetch("http://localhost:4000/api/course-enrollment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Enrollment successful");
      });
    console.log(form);
    setShow(false);
    // toast.success("🦄 Wow so easy!", {
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
    <div className="shadow-lg rounded-lg bg-[#ffffff0f] overflow-hidden">
      <img className="w-full" src={course} alt="random image" />
      <div className="p-4">
        <p className="text-primary font-bold text-base mb-2">{"course.name"}</p>
        <p className="text-gray-500 text-sm mb-4">{"course.des"}</p>
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShow(true)}
            // className="bg-primary hover:bg-yellow-600 text-[#222] font-bold py-2 px-4 rounded-full"
            className="font-bold py-2 px-4 rounded-full border-2 border-[#AF1453] hover:bg-[#AF1453] text-center text-[#fff]"
          >
            এনরোল করো
          </button>
          <button className="text-primary hover:text-yellow-600 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-3-1.5-3 1.5V5a2 2 0 012-2h2a2 2 0 012 2v14z"
              />
            </svg>
            উইশ লিস্ট
          </button>
        </div>
      </div>
      <Modal onClose={handleOnClose} visible={show}>
        <h4 className="text-primary font-bold text-xl">
          কোর্সে এনরোল করতে চাও?
        </h4>
        <form
          onSubmit={() => handleSubmit(event)}
          className="lg:w-96"
          action=""
        >
          {/* <select
            name="course"
            class="form-select text-primary w-full bg-[#333] rounded my-2 py-1 px-3 focus:outline-none"
          >
            <option>মিডিয়া কোর্স</option>
            <option>লিডারশীপ কোর্স</option>
            <option>লাইফ কোর্স</option>
          </select> */}
          <input
            name="course"
            type="text"
            value={"course.name"}
            className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
            readOnly
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
      </Modal>
    </div>
  );
}

export default CourseCard;
