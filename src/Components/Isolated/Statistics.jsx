import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React from "react";
import { Zoom } from "react-reveal";
import bg from "../../assets/images/pexels-jahangeer-bm-1619299.jpg";
import Features from "./Features";
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

const Statistics = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const statistics = [
    { _id: 1, qty: "১৩", activity: "সংবাদ উপস্থাপনের অভিজ্ঞতা" },
    { _id: 2, qty: "১০০", activity: "গণমাধ্যমকর্মী প্রস্তুত করা" },
    { _id: 3, qty: "২১০", activity: "প্রজেক্ট কমপ্লিট" },
    { _id: 4, qty: "২৭", activity: "অ্যাওয়ার্ড উইনার" },
    { _id: 5, qty: "১১০", activity: "সার্টিফিকেট কোর্স সম্পন্ন" },
    { _id: 6, qty: "২", activity: "তরুণকে ইন্সপায়ার করা" },
    { _id: 7, qty: "৫", activity: "ফ্যান ফলোয়ার্স" },
    { _id: 8, qty: "১১০", activity: "বায়ো ইন্টার্ভিউ রাইটিং" },
  ];
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "10% 40%",
      }}
      className="relative"
    >
      <Box
        sx={{ width: "100%" }}
        className="py-[100px] z-20 max-w-[90%] mx-auto"
      >
        <Box className="mt-20 bg-white w-[365px] mx-auto rounded-tl-full rounded-tr-full p-2">
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
          >
            <Tab
              label="অর্জন"
              {...a11yProps(0)}
              sx={{
                fontFamily: "Hind Siliguri",
                fontWeight: 700,
                fontSize: "18px",
              }}
            />
            <Tab
              label="অ্যাকমপ্লিশমেন্ট"
              {...a11yProps(1)}
              sx={{
                fontFamily: "Hind Siliguri",
                fontWeight: 700,
                fontSize: "18px",
              }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} className="bg-white  rounded-lg">
          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8  gap-5 mx-5">
              {statistics.map((statistic) => (
                <Zoom>
                  <div
                    key={statistic._id}
                    className="px-5 py-10 rounded-lg bg-secondary text-white font-bold flex flex-col items-center"
                  >
                    <h3 className="text-2xl">{statistic.qty}</h3>
                    <h3 className="text-center text-xl">
                      {statistic.activity}
                    </h3>
                  </div>
                </Zoom>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} className="">
          <Features />
        </TabPanel>
      </Box>
    </div>
  );
};

export default Statistics;
