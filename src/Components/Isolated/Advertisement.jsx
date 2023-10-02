import emailjs from "emailjs-com";
import React from "react";
import { toast } from "react-hot-toast";
import { Zoom } from "react-reveal";
import depressed from "../../assets/images/sky.jpg";
import ShareModal from "./Modals/ShareModal";

function Advertisement() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const emailjsServiceId = import.meta.env.VITE_emailjs_service_id;
  const emailjsTemplateId = import.meta.env
    .VITE_emailjs_share_feelings_template_id;
  const emailjsPublicKey = import.meta.env.VITE_emailjs_public_key;

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const mobile = event.target.mobile.value;
    const description = event.target.description.value;
    const form = {
      title: "Share your feelings and problems",
      name: name,
      email: email,
      mobile: mobile,
      description: description,
      dateAndTime: new Date().toLocaleString(),
    };

    fetch("http://localhost:4000/api/share-your-feeling", {
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
            setOpen(false);
            toast.success("Send successful");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(form);
    // setShow(false);
  };
  return (
    <div
      style={{
        background: `url(${depressed})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        fontFamily: "Hind Siliguri",
      }}
      className="rounded-lg lg:px-24 px-5 flex flex-col items-center justify-center md:h-[70vh]"
    >
      <Zoom>
        <h2 className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-primary text-center font-bold mb-5">
          শেয়ার করো; সমাধান পাও
        </h2>
        <h4 className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-primary font-bold mb-1">
          মনে হচ্ছে - জীবনটা সঠিকভাবে এগুচ্ছে না!
        </h4>
        <p className="text-[#fff] text-center 2xs:text-[10px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
          পরিশ্রম করছো অনেক; কিন্তু সফলতার পাগলা ঘোড়া সেভাবে ধরা দিচ্ছে না। হতাশ
          হয়ে যাচ্ছো। <br /> সমাধান পেতে; লিখো এখানে চাচ্ছো- অভিজ্ঞ করো পরামর্শ।
          তাহলে দেরী কেনো? এখনই লিখে ফেলো তোমার কথা। আর পেয়ে যাও <br /> সুন্দর
          সমাধান।
        </p>
        <Zoom>
          <button
            onClick={() => setOpen(true)}
            className="block 2xs:my-4 xs:my-6 sm:my-8 md:my-10 py-2 px-5 border-2 border-[#AF1453] hover:bg-[#AF1453] sm:w-[180px] md:w-[290px] text-center rounded-full text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]"
          >
            সমাধান পেতে; লিখে জানাও
          </button>
        </Zoom>
      </Zoom>
      <ShareModal
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
}

export default Advertisement;
