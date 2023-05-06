import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import img from "../../../assets/images/golamrabby.jpeg";
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
          sx={{ borderRadius: "8px", background: "#111118", margin: "0 5px" }}
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
            <img className="rounded-md w-96" src={img} alt="" />
          </div>
          <div className="w-full rounded-md py-5 lg:pr-5 px-5">
            <h3 className="font-bold text-2xl mb-5 text-primary">
              Short Bio of Golam Rabby, Founder, Dream Deviser
            </h3>
            <div className="overflow-y-auto max-h-[250px]">
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
        <div className="flex flex-col lg:flex-row items-center text-basic bg-[#111117] rounded-md">
          <div className="p-5">
            <img className="rounded-md w-96" src={img} alt="" />
          </div>
          <div className="w-full rounded-md py-5 lg:pr-5 px-5">
            <h3 className="font-bold text-2xl mb-5 text-primary">
              Presentation Career
            </h3>
            <div className="overflow-y-auto max-h-[250px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                nemo recusandae sit odio provident repellendus aliquam quibusdam
                neque ipsam. Provident ratione eos ipsam officia eius vel, minus
                deserunt veritatis totam ea odio labore magnam possimus libero,
                tempora atque porro. Sed, laudantium maiores. Impedit itaque in
                temporibus, minus voluptate delectus tenetur fugiat. Iste ipsam
                autem laborum eaque eveniet aliquam laboriosam illum at
                blanditiis ratione? Minima rerum, eveniet consectetur reiciendis
                laudantium pariatur repellendus? Illum, suscipit incidunt
                doloremque iure animi reiciendis modi fugit libero natus
                dolores, quas eaque provident laborum aspernatur quam, odit
                accusantium. Nostrum tenetur deserunt esse, non quibusdam soluta
                culpa eligendi dolore numquam fugiat omnis fuga dolorum at, sunt
                hic unde delectus? Corporis laborum vitae vel esse neque illum
                alias, dignissimos eum earum explicabo. In et quia a id
                perspiciatis fugiat nisi necessitatibus ratione optio, est
                voluptatem nulla rerum eveniet commodi, debitis itaque officia
                sed soluta aspernatur repellendus nemo perferendis saepe
                impedit! Nemo minus porro recusandae laboriosam commodi
                voluptatibus nobis quam possimus impedit aspernatur, officia
                optio. Architecto eum fuga dolore debitis. Corporis harum
                assumenda, fugiat dolor sapiente optio ipsum nobis perferendis
                saepe architecto dicta eaque maiores laborum repudiandae,
                praesentium, quisquam minima consectetur ex! Optio doloremque in
                voluptatem labore totam quo sapiente!
              </p>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="flex flex-col lg:flex-row items-center text-basic bg-[#111117] rounded-md">
          <div className="p-5">
            <img className="rounded-md w-96" src={img} alt="" />
          </div>
          <div className="w-full rounded-md py-5 lg:pr-5 px-5">
            <h3 className="font-bold text-2xl mb-5 text-primary">
              Radio Jockey
            </h3>
            <div className="overflow-y-auto max-h-[250px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                voluptate reprehenderit asperiores, provident aperiam ipsum id
                sed earum odit quia magni quis iusto ut quasi, cumque sint amet.
                Repellat quas doloribus, totam, molestias nesciunt earum soluta
                perspiciatis ducimus, aut exercitationem laborum nobis.
                Quisquam, ut. Placeat modi voluptatum, voluptas sint inventore
                nam odit. Nemo voluptate vel reiciendis magni quisquam,
                consequatur sint sapiente? Ullam enim exercitationem, fugiat
                obcaecati pariatur ea fuga totam sit sapiente quae dolores id
                quia impedit perferendis illo sed repellendus saepe consectetur
                voluptate maiores quis culpa quaerat officiis autem.
                Necessitatibus repellat voluptatem, deleniti impedit asperiores
                amet! Error veniam quos qui molestias molestiae repellendus
                autem dolores, dicta minima mollitia voluptate perferendis quis
                magnam, nulla architecto minus omnis quibusdam perspiciatis.
                Amet minima maxime mollitia necessitatibus esse excepturi
                perferendis nihil quo provident exercitationem nam id molestias
                autem dicta quis nulla distinctio ut molestiae quos sed enim,
                commodi quasi in at. Impedit rerum tempore necessitatibus quasi.
                Laudantium, aut quod! Quibusdam inventore qui ipsa neque
                nesciunt. Maiores atque, asperiores nostrum accusamus excepturi
                neque sed nisi deserunt totam provident ea? Qui tempore
                distinctio magni ipsam eligendi fuga consectetur corrupti,
                consequatur eius provident nisi atque accusantium, voluptate
                nesciunt. Vero libero impedit ullam quisquam. Fugit obcaecati,
                distinctio hic enim illo mollitia praesentium reprehenderit
                adipisci, delectus iste itaque labore sunt dolores quia
                temporibus fugiat amet commodi modi voluptatibus.
              </p>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="flex flex-col lg:flex-row items-center text-basic bg-[#111117] rounded-md">
          <div className="p-5">
            <img className="rounded-md w-96" src={img} alt="" />
          </div>
          <div className="w-full rounded-md py-5 lg:pr-5 px-5">
            <h3 className="font-bold text-2xl mb-5 text-primary">Writer</h3>
            <div className="overflow-y-auto max-h-[250px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos quis doloribus molestias accusamus adipisci? Odio
                quibusdam iure maiores quis debitis ipsum nemo inventore sequi
                eveniet et voluptatibus enim quod possimus, reiciendis
                architecto explicabo nostrum molestias nobis nisi animi amet
                blanditiis exercitationem voluptas. Dolorem delectus iure
                corrupti debitis praesentium voluptatem cumque quo omnis, hic
                non eius quas, et provident commodi enim culpa, repellat magnam
                odit optio suscipit libero aspernatur ipsa sed nesciunt? Ipsa,
                dolores quasi? Similique quo eum earum inventore officia
                mollitia accusamus sunt expedita maiores reiciendis officiis ut
                animi, omnis temporibus blanditiis! Quidem quas, eligendi nobis
                odit ab suscipit debitis assumenda nesciunt pariatur impedit hic
                mollitia enim? Id asperiores officiis esse ducimus,
                necessitatibus quisquam libero soluta quidem recusandae ratione
                eligendi maxime cumque modi impedit atque iste dignissimos
                dolorem consequatur dolore optio sapiente! Tempora asperiores
                voluptates illum cumque nam omnis vitae impedit eum provident
                error ab esse alias illo, aliquam commodi earum minus assumenda
                nemo sit? Consequuntur, adipisci. Non aperiam recusandae ullam
                voluptatum nam dolore! Deserunt, ducimus! Ea nam magni nemo
                voluptates nostrum nulla cum, excepturi numquam incidunt
                corrupti, sequi, exercitationem libero eligendi ab tenetur culpa
                laboriosam perspiciatis? Eum sed neque, earum hic quaerat
                deleniti, ipsa rem excepturi dolorem saepe dicta vero quas,
                porro ipsam accusamus aliquid laboriosam ab laudantium eveniet.
                Explicabo quia id blanditiis itaque ducimus optio minima labore
                nam architecto laboriosam, quam unde quibusdam.
              </p>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="flex flex-col lg:flex-row items-center text-basic bg-[#111117] rounded-md">
          <div className="p-5">
            <img className="rounded-md w-96" src={img} alt="" />
          </div>
          <div className="w-full rounded-md py-5 lg:pr-5 px-5">
            <h3 className="font-bold text-2xl mb-5 text-primary">Influencer</h3>
            <div className="overflow-y-auto max-h-[250px]">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
                at fuga, nisi necessitatibus quam iste illum modi maxime iusto
                sint expedita non ea! Maiores nostrum exercitationem commodi.
                Aliquam repellendus odio eveniet pariatur vero itaque
                perspiciatis, animi, modi dignissimos odit praesentium repellat
                quibusdam quisquam molestias eligendi reiciendis suscipit sint
                quam consequuntur quod? Dignissimos accusantium quidem tempora,
                ex voluptatum voluptas ipsam nihil aut repudiandae a veniam
                corrupti tenetur non animi sint pariatur necessitatibus
                voluptatem dolorem. Molestias quidem distinctio magnam dolor
                atque. Nisi mollitia ipsum dolore in perspiciatis distinctio ea
                eveniet quidem, inventore tenetur aliquam illum facilis quia
                ipsam impedit laudantium voluptas atque nulla quaerat possimus
                nihil molestias totam quis deserunt. Reprehenderit,
                perspiciatis! Exercitationem minima odio cumque reprehenderit
                velit dolores. Totam laborum aperiam quidem beatae, ab assumenda
                temporibus et quis expedita. Nulla cum incidunt, dolore illo
                molestias libero quidem pariatur quas ratione aperiam officiis!
                Fugit officia explicabo delectus quia similique eum asperiores,
                reiciendis accusamus ex esse minima, eligendi, itaque incidunt
                nihil provident quis aut architecto dolore! Rem consequatur
                beatae ea dolor quia nulla fugit asperiores repellat nostrum
                libero sapiente rerum expedita deleniti distinctio provident,
                consequuntur, dignissimos explicabo vel consectetur aliquid
                adipisci nesciunt. Quam minima consectetur quo sed, fuga ut
                aliquid labore debitis. Corporis iste incidunt, numquam aut
                accusamus molestiae maxime ad delectus dolorum animi dolor
                architecto necessitatibus obcaecati fuga quae aliquam explicabo
                sint expedita?
              </p>
            </div>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
