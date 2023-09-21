import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Zoom } from "react-reveal";
import bg from "../../assets/images/deepak-kumar-r4ZEUFKZPJM-unsplash.jpg";
import gr2 from "../../assets/images/golamrabby.jpeg";
import gr3 from "../../assets/images/gr2.jpg";
import gr4 from "../../assets/images/gr3.jpg";
import gr5 from "../../assets/images/gr4.jpg";
import gr6 from "../../assets/images/gr5.jpg";
import Advertisement from "./Advertisement";
import FanFunLeft from "./FanFunLeft";
import Invite from "./Invite/Invite";
import FanFunModal from "./Modals/FanFunModal";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const mobile = e.target.mobile.value;

    const FWFRegInfo = {
      // title: "Fun with Fan",
      name: name,
      email: email,
      mobile: mobile,
      // dateAndTime: new Date().toLocaleString(),
    };

    fetch("http://localhost:4000/api/fun-with-fan-reg", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(FWFRegInfo),
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

    console.log(FWFRegInfo);
  };
  // const handleSubmit =(e)=>{
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const email = e.target.email.value;
  //   const mobile = e.target.mobile.value;

  //   const FWFRegInfo = {
  //     name: name,
  //     email: email,
  //     mobile: mobile,
  //   };

  //   fetch("http://localhost:4000/api/fun-with-fan-reg", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(FWFRegInfo),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  //   console.log(FWFRegInfo)
  // }
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "10% 40%",
        // boxShadow: "inset 0 0 0 2000px rgba(255, 0, 150, 0.3)",
      }}
    >
      <Box className="p-5 md:p-16">
        <Box className="bg-white  md:w-[549px] h-[48px] mx-auto rounded-tl-md rounded-tr-md md:rounded-tl-full md:rounded-tr-full">
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
              label="ফান উইথ ফ্যান"
              {...a11yProps(0)}
              sx={{
                fontFamily: "Hind Siliguri",
                fontWeight: 700,
                fontSize: "16px",
              }}
            />
            <Tab
              label="ইনভাইট"
              {...a11yProps(1)}
              sx={{
                fontFamily: "Hind Siliguri",
                fontWeight: 700,
                fontSize: "16px",
              }}
            />
            <Tab
              label="শেয়ার করো"
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
          className="bg-white rounded-b-lg md:rounded-lg"
        >
          <div
            className="md:px-14 md:pb-14"
            style={{ fontFamily: "Hind Siliguri" }}
          >
            <h1 className="-mb-5 md:-mb-10 lg:-mb-20  custom-text-stroke-1 text-center  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[55px] lg:text-[100px] my-5">
              ফান উইথ ফ্যান
            </h1>
            <Zoom>
              <h1 className="text-secondary text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold">
                ফান উইথ ফ্যান
              </h1>
            </Zoom>
            <div
              style={{ fontFamily: "Hind Siliguri" }}
              className="grid 2xs:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5"
            >
              {/* left */}
              <div className="order-2 xl:order-none 2xl:col-span-2">
                <Zoom>
                  <FanFunLeft handleOpen={handleOpen} />
                </Zoom>
              </div>
              {/* rigth  */}
              <Zoom>
                {/* tablet and desktop */}
                <div className="mx-auto  sm:w-[270px] md:w-[80%] lg:w-full xl:w-[95%] 2xl:w-full">
                  {/* column 1 */}
                  <div className="flex md:justify-center">
                    <div className="ml-2 mb-2 hidden xl:block lg:ml-[200px] xl:ml-[280px] 2xl:ml-[305px]">
                      <img
                        src={gr2}
                        alt=""
                        className="2xs:w-[80px] md:w-[120px] xl:w-[130px] 2xl:w-36 3xl:w-[130px]"
                      />
                    </div>
                  </div>
                  {/* column 2 */}
                  <div className="flex md:justify-center">
                    <div className="m-2  xl:mx-[80px] 2xl:mx-[85px] 3xl:mx-[86px]">
                      <img
                        src={gr2}
                        alt=""
                        className="2xs:w-[80px] md:w-[120px] xl:w-[130px] 2xl:w-36 3xl:w-[130px]"
                      />
                    </div>
                    <div className="m-2 xl:-mx-[65px] 2xl:-mx-[70px] 3xl:-mx-[66px]">
                      <img
                        src={gr2}
                        alt=""
                        className="2xs:w-[80px] md:w-[120px]  xl:w-[130px] 2xl:w-36 3xl:w-[130px]"
                      />
                    </div>
                  </div>
                  {/* column 3 */}
                  <div className="flex md:justify-center">
                    <div className="m-2 hidden md:block">
                      <img
                        src={gr2}
                        alt=""
                        className="2xs:w-[80px] md:w-[120px] xl:w-[130px] 2xl:w-36"
                      />
                    </div>
                    <div className="m-2">
                      <img
                        src={gr2}
                        alt=""
                        className="2xs:w-[80px] md:w-[120px] xl:w-[130px] 2xl:w-36"
                      />
                    </div>
                    <div className="m-2">
                      <img
                        src={gr2}
                        alt=""
                        className="2xs:w-[80px] md:w-[120px]  xl:w-[130px] 2xl:w-36 rounded-br-xl"
                      />
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
            <FanFunModal  open={open} handleClose={handleClose}/>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} className="bg-primary md:rounded-lg">
          <Invite />
        </TabPanel>
        <TabPanel value={value} index={2} className="bg-black md:rounded-lg">
          <Advertisement />
        </TabPanel>
      </Box>
    </div>
  );
};

export default FanFun;
