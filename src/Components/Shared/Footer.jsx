import React from "react";
import bg from "../../assets/footer/mesh-757.png";
import { Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Fade from "react-reveal/Fade";
import "../../Styles/Footer.css";
import logo from "../../assets/logo/footer-logo.png";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  function Copyright(props) {
    return (
      <div className="flex justify-center items-center mt-10">
        <img className="w-6 mx-5" src={logo} alt="" />
        <p className="text-[#222]">
          Copyright &copy;{" "}
          <a className="underline" href="#home">
            Developed by Saleh Ahmed{" "}
          </a>
          {new Date().getFullYear()}
        </p>
      </div>
    );
  }
  const footers = [
    {
      title: "Company",
      description: ["Team", "History", "Contact us", "Locations"],
    },
    {
      title: "Features",
      description: [
        "Cool stuff",
        "Random feature",
        "Team feature",
        "Developer stuff",
        "Another one",
      ],
    },
    {
      title: "Resources",
      description: [
        "Resource",
        "Resource name",
        "Another resource",
        "Final resource",
      ],
    },
    {
      title: "Legal",
      description: ["Privacy policy", "Terms of use"],
    },
  ];
  // #D9A017
  return (
    <Fade up>
      <div
        // style={{
        //   background: `url(${bg})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
        className=" text-[#222222] bg-[#D9A017] relative w-full lg:px-14 px-5 py-14 grid grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {/* <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            py: [3, 6],
          }}
        >
          <Grid container spacing={4} justifyContent="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="#222" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        variant="subtitle1"
                        color="#222"
                        className="cursor-pointer"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Copyright sx={{ mt: 5, color: "#fff" }} />
        </Container> */}
        {/* End footer */}
        <div>
          <div className="flex items-center">
            <img className="w-14 mr-3" src={logo} alt="" />
            <h2 className="font-bold text-3xl">Golam Rabby</h2>
          </div>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            quas eius, laudantium possimus nesciunt quidem totam cupiditate
            exercitationem maxime repudiandae, placeat incidunt hic porro sequi.
            Deleniti iste quo ipsum veritatis.
          </p>
          <div className="flex items-center text-[#222] text-2xl">
            <a
              target="_blank"
              href="https://www.facebook.com/golam.rabby.739326"
              className="px-2 cursor-pointer duration-500 text-3xl"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.instagram.com/golam.rabby.739326"
              target="_blank"
              className="px-2 cursor-pointer duration-500"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/golam-rabby/"
              target="_blank"
              className="px-2 cursor-pointer duration-500"
            >
              <BsLinkedin />
            </a>
            <div className="px-2 cursor-pointer duration-500">
              <BsYoutube />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:items-end gap-2">
          <a className="underline" href="#">
            মিডিয়া জব সার্কুলার
          </a>
          <a className="underline" href="#">
            অডিশন টিপস
          </a>
          <a className="underline" href="#">
            লাইফ হ্যাকস
          </a>
          <a className="underline" href="#">
            মেন্টরশীপ
          </a>
          <a className="underline" href="#">
            মক টেস্ট
          </a>
          <a className="underline" href="#">
            মিট আপ
          </a>
          <div className="flex flex-col lg:items-end gap-3 mt-10">
            <a className="underline" href="#">
              কিযে করি
            </a>
            <a className="underline" href="#">
              মিডিয়া জব সার্কুলার
            </a>
            <a className="underline" href="#">
              মিডিয়া জব সার্কুলার
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:items-center gap-2">
          <a className="underline" href="#">
            মিডিয়া জব সার্কুলার
          </a>
          <a className="underline" href="#">
            মিডিয়া জব সার্কুলার
          </a>
          <a className="underline" href="#">
            মিডিয়া জব সার্কুলার
          </a>
          <a className="underline" href="#">
            মিডিয়া জব সার্কুলার
          </a>
          <a className="underline" href="#">
            মিডিয়া জব সার্কুলার
          </a>
        </div>
        <div className="flex flex-col lg:items-start gap-2">
          <a className="underline" href="#">
            মিডিয়া জব সার্কুলার
          </a>
          <a className="underline" href="#">
            মিডিয়া জব সার্কুলার
          </a>
          <a className="underline" href="#">
            মিডিয়া জব সার্কুলার
          </a>
          <a className="underline" href="#">
            মিডিয়া জব সার্কুলার
          </a>
          <a className="underline" href="#">
            মিডিয়া জব সার্কুলার
          </a>
          <a className="underline" href="#">
            মিডিয়া জব সার্কুলার
          </a>
        </div>
      </div>
      <div className="py-14 bg-[#dba015]">
        <p className="text-center font-bold">
          &copy; Developed by Saleh Ahmed Mahin
        </p>
      </div>
    </Fade>
  );
};

export default Footer;
