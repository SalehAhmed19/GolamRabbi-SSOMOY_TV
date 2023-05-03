import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DatePicker from "../Invite/DatePicker";
import img from "../../../assets/images/golamrabby.jpeg";
import { Fade } from "react-reveal";

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
          sx={{ borderRadius: "8px", background: "#111118", margin: "0 5px" }}
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
        <div className="flex flex-col lg:flex-row-reverse items-center text-basic bg-[#111117] rounded-md">
          <div className="p-5">
            <img className="rounded-md w-[500px]" src={img} alt="" />
          </div>
          <div className="w-full rounded-md py-5 lg:pr-5 px-5">
            <h3 className="font-bold text-2xl mb-5 text-primary">
              Anchor / MC
            </h3>
            <div className="overflow-y-auto max-h-[250px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, vitae obcaecati aspernatur accusamus odio numquam
                perspiciatis deleniti eaque illum voluptatibus cumque incidunt
                ratione, impedit corrupti sint ad pariatur animi quibusdam,
                dolores adipisci quas laboriosam accusantium assumenda ab. Iusto
                incidunt inventore perferendis voluptate quos corrupti adipisci
                sed repudiandae distinctio eius vel repellat sequi aliquam
                consectetur, numquam quasi perspiciatis officia. Illum et modi
                repellendus, dolores unde amet iure eaque inventore? Voluptatum
                facilis magni dolore maiores mollitia soluta! Voluptatum ab
                minima ipsa quos recusandae velit veritatis quibusdam vero quam,
                dolorem pariatur obcaecati, soluta nesciunt corporis eveniet
                labore modi delectus numquam saepe eligendi a? Blanditiis
                incidunt excepturi impedit natus iusto suscipit esse! Asperiores
                animi iste blanditiis, rerum nostrum excepturi ipsa facere
                laudantium praesentium facilis quae corrupti quos dicta odio
                accusantium commodi illo. Harum laborum magni ducimus
                voluptates, labore exercitationem ipsum, aperiam est possimus
                minima fugit voluptatem ipsam error consectetur at magnam
                deleniti? Eos provident earum illum magnam eligendi explicabo
                sapiente quae, minus quisquam, veniam totam deserunt perferendis
                iusto. Corrupti nesciunt voluptatem cumque quibusdam modi?
                Voluptate odio maxime eius repudiandae, quae nam quidem ad
                eligendi, quos voluptatem blanditiis vitae optio sapiente qui
                quasi! Illo magnam sequi explicabo, sapiente rerum cupiditate,
                quam at tempora nobis earum soluta architecto iste consequuntur
                alias veniam a quidem, delectus qui harum labore ipsum natus!
                Debitis, quaerat dolor! Voluptatibus iure vero totam architecto
                quia ex atque quod debitis quibusdam blanditiis modi mollitia
                quas exercitationem optio at, earum, aut neque doloribus sit
                tempora ullam facilis, libero nisi. Distinctio officia veritatis
                rem ipsum!
              </p>
            </div>
            <Fade up>
              <button
                // onClick={() => setShow(true)}
                className="block my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl"
              >
                আমাকে ইনভাইট করতে
              </button>
            </Fade>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="flex flex-col lg:flex-row-reverse items-center text-basic bg-[#111117] rounded-md">
          <div className="p-5">
            <img className="rounded-md w-[500px]" src={img} alt="" />
          </div>
          <div className="w-full rounded-md py-5 lg:pr-5 px-5">
            <h3 className="font-bold text-2xl mb-5 text-primary">Consultant</h3>
            <div className="overflow-y-auto max-h-[250px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                magni repellendus? Atque optio neque dignissimos tempora, facere
                debitis perferendis accusamus iusto laudantium hic id a minus
                repellat rerum distinctio aspernatur, rem mollitia ratione quis
                obcaecati, sit ex. Distinctio ad delectus perferendis unde
                dolorem. Accusantium repellendus quod aut dicta nemo iusto
                inventore dolores maxime reprehenderit! Veritatis ut earum illum
                nostrum eos. Voluptatibus eius totam incidunt magnam. Doloribus,
                consectetur facere inventore ratione est aspernatur architecto
                neque nulla quae odio? Laboriosam tempore accusamus
                voluptatibus? Laudantium consequuntur, ad quisquam itaque animi
                aliquam ut nam officiis veniam fugiat. Nostrum tempore harum
                porro nihil, praesentium nisi, tempora dignissimos hic modi
                nulla voluptas, rerum distinctio! Magni dolor accusamus
                architecto dolore libero, autem quae, tempora inventore possimus
                adipisci nemo officiis aliquid neque aut natus suscipit itaque
                odit esse qui excepturi nihil illum! Aut expedita doloremque,
                explicabo dolore eligendi ex quam ullam! Tempora officiis atque
                nesciunt veritatis at veniam praesentium. Fugit pariatur sint
                accusantium voluptates eaque repellat similique incidunt facere
                voluptatibus amet, dicta earum eos aperiam aspernatur adipisci a
                nam distinctio atque officia reiciendis possimus odit! Maiores
                sit repellendus quasi alias aperiam ullam ea hic cumque cum
                consequuntur, porro necessitatibus ut numquam doloremque, earum
                voluptas nisi eum exercitationem quod facere quas velit dolor?
                Facilis, ipsam. Illum fuga deleniti eveniet. Asperiores possimus
                reiciendis laudantium provident tenetur earum sit? Eius,
                perferendis.
              </p>
            </div>
            <Fade up>
              <button
                // onClick={() => setShow(true)}
                className="block my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl"
              >
                আমাকে ইনভাইট করতে
              </button>
            </Fade>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="flex flex-col lg:flex-row-reverse items-center text-basic bg-[#111117] rounded-md">
          <div className="p-5">
            <img className="rounded-md w-[500px]" src={img} alt="" />
          </div>
          <div className="w-full rounded-md py-5 lg:pr-5 px-5">
            <h3 className="font-bold text-2xl mb-5 text-primary">Webinar</h3>
            <div className="overflow-y-auto max-h-[250px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                libero dolor, dolore exercitationem, ex totam mollitia facere
                ratione consequatur quibusdam ea animi corrupti saepe. Voluptas
                ipsa voluptate dolores beatae est pariatur explicabo animi
                placeat, labore impedit doloribus. Vero atque nulla consequatur
                veniam sint accusantium similique, iure quibusdam magnam tempora
                ab reiciendis, dolore laboriosam repellat fuga at nihil
                repudiandae pariatur rerum quos, porro numquam. Totam atque
                expedita qui adipisci praesentium eius nemo, optio maxime
                nesciunt libero alias sunt possimus, itaque necessitatibus.
                Debitis repellendus vero cumque architecto mollitia eius rerum
                dignissimos magnam doloremque perferendis a unde atque,
                voluptate repellat laudantium molestias iusto! Dolores, quasi
                molestiae in possimus odio asperiores voluptates dolorem
                sapiente placeat ullam obcaecati eos quo vel assumenda cum sed!
                Sunt, at nobis cupiditate, iste mollitia ad consequuntur, aut
                cum eligendi aliquid deserunt. Eum praesentium nam quas,
                distinctio optio voluptas tempora ipsa facere excepturi eveniet
                harum enim. Dignissimos provident aspernatur est iure
                voluptatibus aut! Facilis nemo commodi reprehenderit id
                assumenda sit. Nihil labore facere eius, a laudantium dolorem
                quaerat officia quis nam consectetur dicta ipsam! Corrupti,
                numquam nostrum quidem placeat totam reprehenderit illo
                voluptatibus, facilis amet, modi doloribus. Labore impedit
                aperiam sequi, totam molestias reprehenderit officiis eos optio
                magnam nisi iusto.
              </p>
            </div>
            <Fade up>
              <button
                // onClick={() => setShow(true)}
                className="block my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl"
              >
                আমাকে ইনভাইট করতে
              </button>
            </Fade>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
