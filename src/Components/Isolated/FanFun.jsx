import emailjs from "emailjs-com";
import React from "react";
import { toast } from "react-hot-toast";
import { Fade } from "react-reveal";
import gr2 from "../../assets/images/golamrabby.png";
import gr3 from "../../assets/images/gr2.jpg";
import gr4 from "../../assets/images/gr3.jpg";
import gr5 from "../../assets/images/gr4.jpg";
import gr6 from "../../assets/images/gr5.jpg";
import FanFunLeft from "./FanFunLeft";
import MuiModal from "./Modals/MuiModal";

// https://v1.nocodeapi.com/golamrabbytest/google_sheets/ErpScSALkInmlYSY

function FanFun() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const itemData = [
    {
      img: gr3,
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: gr2,
      title: "Burger",
    },
    {
      img: gr3,
      title: "Camera",
    },
    {
      img: gr4,
      title: "Coffee",
      cols: 2,
    },
    {
      img: gr5,
      title: "Hats",
      cols: 2,
    },
    {
      img: gr6,
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
    },
    {
      img: gr2,
      title: "Basketball",
    },
    {
      img: gr4,
      title: "Fern",
    },
  ];
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

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
      title: "Fun with Fan",
      name: name,
      email: email,
      mobile: mobile,
      dateAndTime: new Date().toLocaleString(),
    };

    fetch("http://localhost:4000/api/fun-with-fan-reg", {
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
        },
        (error) => {
          console.log(error.text);
        }
      );

    fetch(
      "https://v1.nocodeapi.com/golamrabbytest/google_sheets/TGtLFwjhaqmefuqy?tabId=Sheet1",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify([
          [name, email, mobile, new Date().toLocaleString()],
        ]),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Registration successful");
        if (data) {
          setOpen(false);
        }
      });

    console.log(form);
  };
  return (
    <div className="py-14 lg:px-24 p-5">
      <Fade down>
        <h1 className="mb-5 text-primary text-center text-4xl font-bold">
          ফান উইথ ফ্যান
        </h1>
      </Fade>
      <div className="grid gird-cols-1 lg:grid-cols-2 gap-5">
        <Fade left>
          <FanFunLeft setOpen={setOpen} />
        </Fade>
        {/* tablet and desktop */}
        <div className="hidden md:block mx-auto">
          {/* row 1 */}
          <div className="md:mx-[124px] md:p-8 md:flex md:space-x-[80px]">
            <div className="md:w-40 h-40 border  border-[#F80264] md:-rotate-45 rounded-md">
              <img src={gr2} alt="" className="rotate-45" />
            </div>
            <div className="md:w-40 h-40 border  border-[#F80264] md:-rotate-45 rounded-md">
              <img src={gr2} alt="" className="rotate-45" />
            </div>
          </div>
          {/* row 2 */}
          <div className="md:mx-[35px] md:-mt-[66px] md:flex md:space-x-[80px]">
            <div className="md:w-40 h-40 border  border-[#F80264] md:-rotate-45 rounded-md">
              <img src={gr2} alt="" className="rotate-45" />
            </div>
            <div className="md:w-40 h-40 border  border-[#F80264] md:-rotate-45 rounded-md">
              <img src={gr2} alt="" className="rotate-45" />
            </div>
          </div>
          {/* row 3   */}
          <div className="md:mx-[155px] md:-mt-[36px] md:flex md:space-x-[80px] ">
            <div className="md:w-40 h-40 border  border-[#F80264] md:-rotate-45 rounded-md">
              <img src={gr2} alt="" className="rotate-45" />
            </div>
            <div className="md:w-40 h-40 border  border-[#F80264] md:-rotate-45 rounded-md">
              <img src={gr2} alt="" className="rotate-45" />
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="md:hidden mx-auto">
          {/* row 1 */}
          <div className="flex space-x-[45px]">
            <div className="border border-[#F80264] rounded-md -rotate-45">
              <img src={gr2} alt="" className="w-[90px] rotate-45" />
            </div>
            <div className="border border-[#F80264] rounded-md -rotate-45">
              <img src={gr2} alt="" className="w-[90px] rotate-45" />
            </div>
          </div>
          {/* row 2 */}
          <div className="mx-[70px] -mt-[10px]">
            <div className="border border-[#F80264] rounded-md w-[90px] -rotate-45">
              <img src={gr2} alt="" className="w-[90px] rotate-45" />
            </div>
          </div>
          {/* row 3 */}
          <div className="mx-[2px] -mt-[10px] flex space-x-[45px]">
            <div className="border border-[#F80264] rounded-md -rotate-45">
              <img src={gr2} alt="" className="w-[90px] rotate-45" />
            </div>
            <div className="border border-[#F80264] rounded-md -rotate-45">
              <img src={gr2} alt="" className="w-[90px] rotate-45" />
            </div>
          </div>
        </div>
      </div>
      <MuiModal open={open} handleOpen={handleOpen} handleClose={handleClose}>
        <h4 className="text-primary font-bold text-xl">ফান উইথ ফ্যান</h4>
        <form onSubmit={() => handleSubmit(event)} action="">
          <input
            type="text"
            name="title"
            readOnly
            value="Fun with Fan"
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
            type="email"
          />
          <input
            name="mobile"
            placeholder="তোমার মোবাইল নাম্বার লিখো"
            className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
            type="number"
          />

          <button className="bg-primary w-full block ml-auto my-3 px-10 py-1 text-[#222] rounded">
            সাবমিট করো
          </button>
        </form>
      </MuiModal>
    </div>
  );
}

export default FanFun;
