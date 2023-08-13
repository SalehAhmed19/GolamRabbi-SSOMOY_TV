import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Zoom } from "react-reveal";
import "swiper/css";
import "swiper/css/navigation";
import bio from "../../assets/SVGs/bio-interview.png";
import content from "../../assets/SVGs/content-writting.png";
import cv from "../../assets/SVGs/cv-writting.png";
import feature from "../../assets/SVGs/feature-writting.png";
import pr from "../../assets/SVGs/pr.png";
import goal from "../../assets/SVGs/set-goal.png";
import training from "../../assets/SVGs/training.png";
import volanteer from "../../assets/SVGs/volanteer.png";
import bg from "../../assets/images/deepak-kumar-r4ZEUFKZPJM-unsplash.jpg";
import instructor from "../../assets/images/instructor-3.png";
import Skills from "./Skills";
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
function Services() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const data = [
    {
      _id: 1,
      title: "সিভি রাইটিং",
      list: [],
      icon: cv,
    },
    {
      _id: 2,
      title: "ট্রেনিং",
      list: [],
      icon: training,
    },
    {
      _id: 3,
      title: "বায়ো ইন্টার্ভিউ মেকিং",
      list: [],
      icon: bio,
    },
    {
      _id: 4,
      title: "ফিচার রাইটিং",
      list: [],
      icon: feature,
    },
    {
      _id: 5,
      title: "কন্টেন্ট রাইটিং",
      list: [],
      icon: content,
    },
    {
      _id: 6,
      title: "গোল সেটিং",
      list: [],
      icon: goal,
    },
    {
      _id: 7,
      title: "পিআর, কম্পিউনিকেশন্স এন্ড ব্র্যান্ডিং",
      list: [],
      icon: pr,
    },
    {
      _id: 8,
      title: "ভলেন্টিয়ারিং",
      list: [],
      icon: volanteer,
    },
  ];
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
      className="p-5 md:p-16"
    >
      <Box className="">
        <Box className="bg-white md:w-[549px] md:h-[48px] mx-auto rounded-tl-full rounded-tr-full">
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
            className="xs:space-x-6 md:space-x-32"
          >
            <Tab
              label="সার্ভিস সমূহ"
              {...a11yProps(0)}
              sx={{
                fontFamily: "Hind Siliguri",
                fontWeight: 700,
                fontSize: "16px",
              }}
            />
            <Tab
              label="স্কিল সমূহ"
              {...a11yProps(1)}
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
          className="p-5 md:p-16 bg-[#0E0F15] rounded-b-lg md:rounded-lg"
        >
          <div
            style={{ fontFamily: "Hind Siliguri" }}
            className="flex justify- items-center flex-col lg:flex-row"
          >
            {/* left  */}
            <div>
              <Zoom>
                <img src={instructor} alt="" className="w-[400px]" />
              </Zoom>
            </div>
            {/* right  */}
            <div className="md:w-[600px] lg:w-[500px] xl:w-[80%]">
              {/* row 1 */}
              <div className="md:flex md:flex-row md:justify-center gap-5 mt-10 mb-5 2xs:space-y-5 xs:space-y-5">
                {data.slice(0, 2).map((d) => (
                  <Zoom>
                    <div
                      key={d._id}
                      className="w-[139px] h-[118px] shadow-lg rounded-lg lg:w-48 flex flex-col justify-center items-center bg-white"
                    >
                      <img className="w-9 mb-3" src={d.icon} alt="" />
                      <h3 className="2xs:text-[14px] xs:text-[15px] sm:text-[16] text-secondary font-bold text-center">
                        {d.title}
                      </h3>
                      <p>
                        {d.list.map((list, idx) => (
                          <p key={idx}>{list}</p>
                        ))}
                      </p>
                    </div>
                  </Zoom>
                ))}
              </div>
              {/* row 2 */}
              <div className="md:flex md:flex-row justify-center gap-5 my-5 2xs:space-y-5 xs:space-y-5">
                {data.slice(2, 6).map((d) => (
                  <Zoom>
                    <div
                      key={d._id}
                      className="w-[139px] h-[118px] shadow-lg  rounded-lg lg:w-48 flex flex-col justify-center items-center bg-white"
                    >
                      <img className="w-9 mb-3" src={d.icon} alt="" />
                      <h3 className="2xs:text-[14px] xs:text-[15px] sm:text-[16] text-secondary font-bold text-center">
                        {d.title}
                      </h3>
                      <>
                        {d.list.map((list, idx) => (
                          <p key={idx}>{list}</p>
                        ))}
                      </>
                    </div>
                  </Zoom>
                ))}
              </div>
              {/* row 3 */}
              <div className="md:flex md:flex-row justify-center gap-5 my-5 2xs:space-y-5 xs:space-y-5">
                {data.slice(6, 9).map((d) => (
                  <Zoom>
                    <div
                      key={d._id}
                      className="w-[139px] h-[118px] shadow-lg rounded-lg lg:w-48 flex flex-col justify-center items-center bg-white"
                    >
                      <img
                        className="w-9 mb-3 md:m-1 pt-1.5 lg:mb-3"
                        src={d.icon}
                        alt=""
                      />
                      <h3 className="pb-1 2xs:text-[14px] xs:text-[15px] sm:text-[16] text-secondary font-bold text-center">
                        {d.title}
                      </h3>
                      <>
                        {d.list.map((list, idx) => (
                          <p key={idx}>{list}</p>
                        ))}
                      </>
                    </div>
                  </Zoom>
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          className="bg-[#fff] rounded-b-lg md:rounded-lg"
        >
          <Skills />
        </TabPanel>
      </Box>
    </div>
  );
}

export default Services;
