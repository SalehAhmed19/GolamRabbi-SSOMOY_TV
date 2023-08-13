import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import emailjs from "emailjs-com";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Zoom } from "react-reveal";
import news from "../../assets/images/mentorship.png";
import bg from "../../assets/images/pexels-klaus-nielsen-6287295.jpg";
import Course from "./Course";
import MockTest from "./MockTest";
import MuiModal from "./Modals/MuiModal";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Mentor = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = useState(false);
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
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "10% 40%",
        boxShadow: "inset 0 0 0 2000px rgba(255, 0, 150, 0.3)",
      }}
    >
      <Box className="p-5 md:p-16">
        <Box className="bg-white  md:w-[549px] h-[48px] mx-auto rounded-tl-full rounded-tr-full">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="basic tabs example"
            indicatorColor="#f40a5c"
            textColor="#f40a5c"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#f40a5c",
                height: "5px",
                border: "1px solid #f40a5c",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              },
            }}
            className="sm:space-x-[90px] md:space-x-[60px] lg:space-x-[55px]"
          >
            <Tab
              label="পেইড মেন্টরশীপ"
              {...a11yProps(0)}
              sx={{
                fontFamily: "Hind Siliguri",
                fontWeight: 700,
                fontSize: "16px",
              }}
            />
            <Tab
              label="মক টেস্ট"
              {...a11yProps(1)}
              sx={{
                fontFamily: "Hind Siliguri",
                fontWeight: 700,
                fontSize: "16px",
              }}
            />
            <Tab
              label="কোর্স"
              {...a11yProps(2)}
              sx={{
                fontFamily: "Hind Siliguri",
                fontWeight: 700,
                fontSize: "16px",
              }}
            />
          </Tabs>
        </Box>
        <TabPanel
          value={value}
          index={0}
          className="w-full bg-white rounded-b-lg md:rounded-lg"
        >
          <div
            className="md:px-14 md:pb-14"
            style={{ fontFamily: "Hind Siliguri" }}
          >
            <h1 className="-mb-5 md:-mb-10 lg:-mb-20  custom-text-stroke-1 text-center  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[55px] lg:text-[100px] my-5">
              পেইড মেন্টরশিপ
            </h1>
            <Zoom>
              <h1 className="text-secondary text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold">
                পেইড মেন্টরশিপ
              </h1>
            </Zoom>
            <div
              style={{ fontFamily: "Hind Siliguri" }}
              className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-10"
            >
              <div className="order-2 xl:order-none flex flex-col justify-center font-semibold">
                <Zoom>
                  <p className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold text-secondary">
                    উপস্থাপনার ঝকঝকে ক্যারিয়ারে আসার টোটাল প্রস্তুতি নিয়ে নিতে
                    চাও। থাকতে চাও অভিজ্ঞ কারো ছায়ায়। তাহলে দেরী কেনো?
                  </p>
                  <ul className="list-disc  2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px] my-5 ml-5 md:ml-20 lg:ml-24">
                    <li>উপস্থাপনা কত ধরণের।</li>
                    <li>দেশি-বিদেশি যেকোনো গণমাধ্যমের প্রস্তুতি।</li>
                    <li>কোনটাতে তোমার আগ্রহ আর কিভাবে আসবে এ ক্যারিয়ারে।</li>
                    <li>
                      মূলত: এটি একটি দীর্ঘদিনের প্রস্তুতি প্ল্যান। ধরতে পারো
                      একটা ইন্টার্নশিপ। যা তোমাকে দিবে সার্বিক প্রস্তুতি। এবং এ
                      প্রোগ্রামে থাকতে থাকেতেই মিলবে চাকরির সুযোগ…
                    </li>
                  </ul>
                </Zoom>
              </div>
              <div className="mx-auto sm:w-[270px] md:w-[80%] lg:w-full xl:w-[95%] 2xl:w-full">
                <Zoom>
                  <img className="rounded-md" src={news} alt="" />
                </Zoom>
              </div>
            </div>
            <Zoom>
              <button
                onClick={() => setOpen(true)}
                style={{ fontFamily: "Hind Siliguri" }}
                className="block mx-auto 2xs:my-4 xs:my-6 sm:my-8 md:my-10 py-2 px-5 border-2 border-[#f40a5c] hover:bg-[#f40a5c] sm:w-[180px] md:w-[290px] text-center rounded-full hover:text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]"
              >
                আমাকে বুক করতে
              </button>
            </Zoom>
            <MuiModal
              open={open}
              handleOpen={handleOpen}
              handleClose={handleClose}
            >
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
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          className="bg-[#14161C] rounded-b-lg md:rounded-lg"
        >
          <MockTest />
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          className="bg-[#14161C] rounded-b-lg md:rounded-lg"
        >
          <Course />
        </TabPanel>
      </Box>
    </div>
  );
};

export default Mentor;
