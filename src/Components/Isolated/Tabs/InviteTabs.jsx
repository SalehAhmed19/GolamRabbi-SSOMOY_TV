import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

export default function InviteTabs() {
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
          <Tab
            sx={{ color: "#E0E0E0" }}
            label="অ্যাংকর / MC"
            {...a11yProps(0)}
          />
          <Tab sx={{ color: "#E0E0E0" }} label="কনসালটেন্ট" {...a11yProps(1)} />
          <Tab sx={{ color: "#E0E0E0" }} label="ওয়েবিনার" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p className="text-basic">অ্যাংকর / MC</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className="text-basic">কনসালটেন্ট</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p className="text-basic">ওয়েবিনার</p>
      </TabPanel>
    </Box>
  );
}
