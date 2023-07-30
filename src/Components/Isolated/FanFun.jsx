import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import emailjs from "emailjs-com";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Fade } from "react-reveal";
import bg from "../../assets/images/deepak-kumar-r4ZEUFKZPJM-unsplash.jpg";
import gr2 from "../../assets/images/golamrabby.jpeg";
import gr3 from "../../assets/images/gr2.jpg";
import gr4 from "../../assets/images/gr3.jpg";
import gr5 from "../../assets/images/gr4.jpg";
import gr6 from "../../assets/images/gr5.jpg";
import Advertisement from "./Advertisement";
import FanFunLeft from "./FanFunLeft";
import Invite from "./Invite/Invite";
import MuiModal from "./Modals/MuiModal";
// https://v1.nocodeapi.com/golamrabbytest/google_sheets/ErpScSALkInmlYSY
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
const FanFun = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = useState(false);
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
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        backgroundPosition: "10% 40%",
        // boxShadow: "inset 0 0 0 2000px rgba(255, 0, 150, 0.3)",
      }}
      className="p-14"
    >
      <Box
        sx={{ width: "100%" }}
        className="px-2 -py-[100px] z-20 max-w-full md:max-w-[90%] mx-auto"
      >
        <Box className="bg-white  md:w-[549px] md:h-[48px] mx-auto rounded-tl-full rounded-tr-full mb-2 lg:mb-0">
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
            className="lg:space-x-[55px]"
          >
            <Tab
              label="ফান উইথ ফ্যান"
              {...a11yProps(0)}
              sx={{
                fontFamily: "Hind Siliguri",
                fontWeight: 700,
                fontSize: "18px",
              }}
            />
            <Tab
              label="ইনভাইট"
              {...a11yProps(1)}
              sx={{
                fontFamily: "Hind Siliguri",
                fontWeight: 700,
                fontSize: "18px",
              }}
            />
            <Tab
              label="শেয়ার করো"
              {...a11yProps(2)}
              sx={{
                fontFamily: "Hind Siliguri",
                fontWeight: 700,
                fontSize: "18px",
              }}
            />
          </Tabs>
        </Box>
        <TabPanel
          value={value}
          index={0}
          className="w-full bg-white rounded-lg"
        >
          <div className="pb-[80px] lg:px-24 px-5 ">
            {/* <h1 className="pt-[26px] -mb-5 md:-mb-10 lg:-mb-20 custom-text-stroke-1 text-center text-[28px] md:text-[55px] lg:text-[100px]  my-5">
              ফান উইথ ফ্যান
            </h1>
            <Fade down>
              <h1
                style={{ fontFamily: "Hind Siliguri" }}
                className="text-secondary text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold"
              >
                ফান উইথ ফ্যান
              </h1>
            </Fade> */}
            <div
              style={{ fontFamily: "Hind Siliguri" }}
              className="grid gird-cols-1 lg:grid-cols-2 gap-5"
            >
              <Fade left>
                <FanFunLeft setOpen={setOpen} />
              </Fade>
              {/* tablet and desktop */}
              <div className="lg:mx-[200px] mt-[15px] flex items-end w-[270px] md:w-[80%] lg:w-full">
                {/* column 1 */}
                <div>
                  <div className="ml-2 mb-2">
                    <img src={gr2} alt="" className="w-[120px] lg:w-36" />
                  </div>
                </div>
                {/* column 2 */}
                <div>
                  <div className="m-2">
                    <img src={gr2} alt="" className="w-[120px] lg:w-36" />
                  </div>
                  <div className="m-2">
                    <img src={gr2} alt="" className="w-[120px] lg:w-36" />
                  </div>
                </div>
                {/* column 3 */}
                <div>
                  <div className="my-2">
                    <img src={gr2} alt="" className="w-[120px] lg:w-36" />
                  </div>
                  <div className="my-2">
                    <img src={gr2} alt="" className="w-[120px] lg:w-36" />
                  </div>
                  <div className="my-2">
                    <img src={gr2} alt="" className="w-[120px] lg:w-36" />
                  </div>
                </div>
              </div>
            </div>
            <MuiModal
              open={open}
              handleOpen={handleOpen}
              handleClose={handleClose}
            >
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
        </TabPanel>
        <TabPanel value={value} index={1} className="bg-primary rounded-lg">
          <Invite />
        </TabPanel>
        <TabPanel value={value} index={2} className="-mt-[23px] rounded-lg">
          <Advertisement />
        </TabPanel>
      </Box>
    </div>
  );
};

export default FanFun;
