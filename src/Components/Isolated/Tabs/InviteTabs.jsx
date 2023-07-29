import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import demoImage from "../../../assets/images/instructor-3.png";
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
      <Box
        // sx={{#f6b30f borderBottom: 1, borderColor: "divider" }}
        className="relative flex justify-start -mb-6 -mx-3"
      >
        <Tabs
          sx={{
            borderRadius: "8px",
            background: "#f6b30f",
            margin: "0px 5px",
            color: "black",
          }}
          // indicatorColor="fblack"
          textColor="black"
          TabIndicatorProps={{
            style: {
              backgroundColor: "black",
              height: "5px",
            },
          }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          style={{ fontFamily: "Hind Siliguri", fontWeight: 500 }}
        >
          {/* className="bg-[#222] text-primary lg:bg-[#B8084F] lg:my-7 w-40 py-2 cursor-pointer lg:text-[#fff] text-xl text-center" */}
          <Tab
            sx={{ fontSize: "16px" }}
            label="অ্যাংকর / MC"
            {...a11yProps(0)}
            style={{ fontFamily: "Hind Siliguri", fontWeight: 500 }}
          />
          <Tab
            sx={{ fontSize: "16px" }}
            label="কনসালটেন্ট"
            {...a11yProps(1)}
            style={{ fontFamily: "Hind Siliguri", fontWeight: 500 }}
          />
          <Tab
            sx={{ fontSize: "16px" }}
            label="ওয়েবিনার"
            {...a11yProps(2)}
            style={{ fontFamily: "Hind Siliguri", fontWeight: 500 }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="lg:-space-x-32 grid grid-cols-1 lg:grid-cols-2 place-items-center bg-black rounded-lg">
          <div className="mx-20 order-2 lg:order-none">
            <h1 className="text-4xl font-bold my-5 text-white">অ্যাংকর/MC 1</h1>
            <p className=" text-white text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, vitae obcaecati aspernatur accusamus odio numquam
              perspiciatis deleniti eaque illum voluptatibus cumque incidunt
              ratione, impedit corrupti sint ad pariatur animi quibusdam,
              dolores adipisci quas laboriosam accusantium assumenda ab. Iusto
              incidunt inventore perferendis voluptate quos corrupti adipisci
              sed repudiandae distinctio eius vel repellat sequi aliquam
              consectetur, numquam Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatum, vitae obcaecati aspernatur accusamus
              odio numquam perspiciatis deleniti eaque illum voluptatibus cumque
              incidunt ratione, impedit corrupti sint ad pariatur animi
              quibusdam, dolores adipisci quas laboriosam accusantium assumenda
              ab. Iusto incidunt inventore perferendis voluptate quos corrupti
              adipisci sed repudiandae distinctio eius vel repellat sequi
              aliquam consectetur, numquam
            </p>
            <button
              style={{ fontFamily: "Hind Siliguri", fontWeight: 500 }}
              className="text-white m-5 border-2 border-[#f6b30f] w-[258px] h-[49px] rounded-full font-bold"
            >
              আরও পড়ুন
            </button>
          </div>
          <div className="order-1 lg:order-none">
            <img
              src={demoImage}
              alt=""
              className="lg:-mt-32 w-[450px] h-[750px]"
            />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="lg:-space-x-32 grid grid-cols-1 lg:grid-cols-2 place-items-center bg-black rounded-lg">
          <div className="mx-20 order-2 lg:order-none">
            <h1 className="text-4xl font-bold my-5 text-white">অ্যাংকর/MC 1</h1>
            <p className=" text-white text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, vitae obcaecati aspernatur accusamus odio numquam
              perspiciatis deleniti eaque illum voluptatibus cumque incidunt
              ratione, impedit corrupti sint ad pariatur animi quibusdam,
              dolores adipisci quas laboriosam accusantium assumenda ab. Iusto
              incidunt inventore perferendis voluptate quos corrupti adipisci
              sed repudiandae distinctio eius vel repellat sequi aliquam
              consectetur, numquam Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatum, vitae obcaecati aspernatur accusamus
              odio numquam perspiciatis deleniti eaque illum voluptatibus cumque
              incidunt ratione, impedit corrupti sint ad pariatur animi
              quibusdam, dolores adipisci quas laboriosam accusantium assumenda
              ab. Iusto incidunt inventore perferendis voluptate quos corrupti
              adipisci sed repudiandae distinctio eius vel repellat sequi
              aliquam consectetur, numquam
            </p>
            <button
              style={{ fontFamily: "Hind Siliguri", fontWeight: 500 }}
              className="text-white m-5 border-2 border-[#f6b30f] w-[258px] h-[49px] rounded-full font-bold"
            >
              আরও পড়ুন
            </button>
          </div>
          <div className="order-1 lg:order-none">
            <img
              src={demoImage}
              alt=""
              className="lg:-mt-44 w-[413px] h-[656px]"
            />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="lg:-space-x-32 grid grid-cols-1 lg:grid-cols-2 place-items-center bg-black rounded-lg">
          <div className="mx-20 order-2 lg:order-none">
            <h1 className="text-4xl font-bold my-5 text-white">অ্যাংকর/MC 1</h1>
            <p className=" text-white text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, vitae obcaecati aspernatur accusamus odio numquam
              perspiciatis deleniti eaque illum voluptatibus cumque incidunt
              ratione, impedit corrupti sint ad pariatur animi quibusdam,
              dolores adipisci quas laboriosam accusantium assumenda ab. Iusto
              incidunt inventore perferendis voluptate quos corrupti adipisci
              sed repudiandae distinctio eius vel repellat sequi aliquam
              consectetur, numquam Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatum, vitae obcaecati aspernatur accusamus
              odio numquam perspiciatis deleniti eaque illum voluptatibus cumque
              incidunt ratione, impedit corrupti sint ad pariatur animi
              quibusdam, dolores adipisci quas laboriosam accusantium assumenda
              ab. Iusto incidunt inventore perferendis voluptate quos corrupti
              adipisci sed repudiandae distinctio eius vel repellat sequi
              aliquam consectetur, numquam
            </p>
            <button
              style={{ fontFamily: "Hind Siliguri", fontWeight: 500 }}
              className="text-white m-5 border-2 border-[#f6b30f] w-[258px] h-[49px] rounded-full font-bold"
            >
              আরও পড়ুন
            </button>
          </div>
          <div className="order-1 lg:order-none">
            <img
              src={demoImage}
              alt=""
              className="lg:-mt-44 w-[413px] h-[656px]"
            />
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
  // <div className="-mx-5 flex flex-col lg:flex-row-reverse items-center text-basic bg-[] rounded-md">
  //         <div className="p-5">
  //           <img className="rounded-md w-[500px]" src={img} alt="" />
  //         </div>
  //         <div className="w-full rounded-md py-5 lg:pr-5 px-5">
  //           <h3 className="font-bold text-2xl mb-5 text-primary">
  //             Anchor / MC
  //           </h3>
  //           <div className="overflow-y-auto max-h-[100px]">
  //             <p>
  //               Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //               Voluptatum, vitae obcaecati aspernatur accusamus odio numquam
  //               perspiciatis deleniti eaque illum voluptatibus cumque incidunt
  //               ratione, impedit corrupti sint ad pariatur animi quibusdam,
  //               dolores adipisci quas laboriosam accusantium assumenda ab. Iusto
  //               incidunt inventore perferendis voluptate quos corrupti adipisci
  //               sed repudiandae distinctio eius vel repellat sequi aliquam
  //               consectetur, numquam quasi perspiciatis officia. Illum et modi
  //               repellendus, dolores unde amet iure eaque inventore? Voluptatum
  //               facilis magni dolore maiores mollitia soluta! Voluptatum ab
  //               minima ipsa quos recusandae velit veritatis quibusdam vero quam,
  //               dolorem pariatur obcaecati, soluta nesciunt corporis eveniet
  //               labore modi delectus numquam saepe eligendi a? Blanditiis
  //               incidunt excepturi impedit natus iusto suscipit esse! Asperiores
  //               animi iste blanditiis, rerum nostrum excepturi ipsa facere
  //               laudantium praesentium facilis quae corrupti quos dicta odio
  //               accusantium commodi illo. Harum laborum magni ducimus
  //               voluptates, labore exercitationem ipsum, aperiam est possimus
  //               minima fugit voluptatem ipsam error consectetur at magnam
  //               deleniti? Eos provident earum illum magnam eligendi explicabo
  //               sapiente quae, minus quisquam, veniam totam deserunt perferendis
  //               iusto. Corrupti nesciunt voluptatem cumque quibusdam modi?
  //               Voluptate odio maxime eius repudiandae, quae nam quidem ad
  //               eligendi, quos voluptatem blanditiis vitae optio sapiente qui
  //               quasi! Illo magnam sequi explicabo, sapiente rerum cupiditate,
  //               quam at tempora nobis earum soluta architecto iste consequuntur
  //               alias veniam a quidem, delectus qui harum labore ipsum natus!
  //               Debitis, quaerat dolor! Voluptatibus iure vero totam architecto
  //               quia ex atque quod debitis quibusdam blanditiis modi mollitia
  //               quas exercitationem optio at, earum, aut neque doloribus sit
  //               tempora ullam facilis, libero nisi. Distinctio officia veritatis
  //               rem ipsum!
  //             </p>
  //           </div>
  //           <Fade up>
  //             <button
  //               // onClick={() => setShow(true)}
  //               className="block my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] lg:w-[290px] w-[220px] mx-auto text-center rounded-full text-[#fff] font-bold text-xl"
  //             >
  //               আমাকে ইনভাইট করতে
  //             </button>
  //           </Fade>
  //         </div>
  //       </div>