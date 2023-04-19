import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import img1 from "../../../assets/images/MediaSB.jpg";
import img2 from "../../../assets/images/LeadershipSB.jpg";
import img3 from "../../../assets/images/LifecourseSB.jpg";

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

export default function CourseTabs() {
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
          <Tab sx={{ color: "#E0E0E0" }} label="মিডিয়া" {...a11yProps(0)} />
          <Tab sx={{ color: "#E0E0E0" }} label="লিডারশীপ" {...a11yProps(1)} />
          <Tab sx={{ color: "#E0E0E0" }} label="লাইফ কোর্স" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <img className="rounded-md" src={img1} alt="" />
          <img className="rounded-md" src={img1} alt="" />
          <img className="rounded-md" src={img1} alt="" />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <img className="rounded-md" src={img2} alt="" />
          <img className="rounded-md" src={img2} alt="" />
          <img className="rounded-md" src={img2} alt="" />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <img className="rounded-md" src={img3} alt="" />
          <img className="rounded-md" src={img3} alt="" />
          <img className="rounded-md" src={img3} alt="" />
        </div>
      </TabPanel>
    </Box>
  );
}
