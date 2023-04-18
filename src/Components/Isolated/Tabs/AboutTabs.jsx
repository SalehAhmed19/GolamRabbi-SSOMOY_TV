import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import img from "../../../assets/images/gr1.jpg";
import ShortBio from "../ShortBio";

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

export default function AboutTabs() {
  const longText =
    "I Golam Rabby would like to learn from everywhere even it may be from my junior, uneducated & general people like Rickshaw-Puller. In addition, I have much affection for teaching & facilitating a class, discussion, and seminar as well. Also, I am very fond of knowing about Bangladesh & World Affairs; especially on Youth activities as well as Dream, Ethical, Positive, Inspiring & Energizing words & works. \nI am a Founder of Dream Deviser, it’s a Good Education related Online Tutorial Platform As well as I am doing as Senior News Anchor & Radio Jockey in various Radio & TV Channel. Also, I am working as a Lead Feature Writer to weekly job related supplement named Chakrir Khoj in the Daily Jugantor. And, I am working as a Senior News Presenter & Current Affairs related talk show Anchor in Somoy Television. Before that, I had been working here as a Senior Newsroom Editor in International Desk from 1st December, 2010 to 20th November, 2014. Also, I am working as a Media, Communications & Current Affairs Consultant. \nAs well, I have completed BSS and MSS degree in the Department of International Relations with very good result from University of Dhaka. Also, I have vast experience about Education, Teaching, Training, Media, Public Relations, Media Managing, and Consulting of News & Program. Plus, very important thing is that I am an experienced teaching assistant of Journalism, Public Relations and Communications. \nNow-a-days, I am attending as a Senior Trainer of Inspiration & Motivation, News, Program Presentation, Report Writing, Debating & Creative Workshop, Media & Communications Schooling, Youth Leadership and Skill Development course in various renowned Institutions. Personally, I love to learn, discover and write. Furthermore I have very passion to teach through entertaining by using my knowledge and behavior. On the other hand, I am more interested to attach myself as a development worker of Public engagement related Advocacy, Civil Society, Democracy, Good Governance, Youth, Woman Engagement & Empowerment and related work. Finally, I would like to say that, always, I could keep busy my soul with PEOPLE specially youth-minds and their development. Truly speaking, all time, I am eagerly waiting for joining Training, Seminar, Discussion’s Session, Workshop or Event either an Instructor or a Participant. Because of, I want to learn the lot from all over the place.";
  const text = longText.split("\n");
  console.log(text);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {/* className="bg-[#222] text-primary lg:bg-[#B8084F] lg:my-7 w-40 py-2 cursor-pointer lg:text-[#fff] text-xl text-center" */}
          <Tab sx={{ color: "#E0E0E0" }} label="শর্ট বায়ো" {...a11yProps(0)} />
          <Tab
            sx={{ color: "#E0E0E0" }}
            label="প্রেজেন্টেশন ক্যারিয়ার"
            {...a11yProps(1)}
          />
          <Tab sx={{ color: "#E0E0E0" }} label="RJ" {...a11yProps(2)} />
          <Tab sx={{ color: "#E0E0E0" }} label="রাইটার" {...a11yProps(3)} />
          <Tab
            sx={{ color: "#E0E0E0" }}
            label="ইনফ্লুয়েন্সার"
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="flex flex-col lg:flex-row items-center text-basic bg-[#111117] rounded-md">
          <div className="p-5">
            <img className="rounded-md mt-10 lg:mt-0" src={img} alt="" />
          </div>
          <div className="w-full rounded-md py-5 pr-5">
            <h3 className="font-bold text-2xl mb-5 text-primary">
              Short Bio of Golam Rabby, Founder, Dream Deviser
            </h3>
            <div className="overflow-y-auto max-h-[200px]">
              {text.map((txt, idx) => (
                <p key={idx}>
                  {txt} <br /> <br />
                </p>
              ))}
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className="text-basic">প্রেজেন্টেশন ক্যারিয়ার</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p className="text-basic">RJ</p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <p className="text-basic">রাইটার</p>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <p className="text-basic">ইনফ্লুয়েন্সার</p>
      </TabPanel>
    </Box>
  );
}
