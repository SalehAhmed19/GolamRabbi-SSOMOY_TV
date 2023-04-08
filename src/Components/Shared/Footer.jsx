// import React from "react";

// function Footer() {
//   return (
//     <div className="bg-primary p-10">
//       <p className="text-[#222] text-center font-bold">
//         &copy; 2023. Developed by Saleh Ahmed Mahin
//       </p>
//     </div>
//   );
// }

// export default Footer;
import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Fade from "react-reveal/Fade";
import "../../Styles/Footer.css";
import logo from "../../assets/logo/footer-logo.png";

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
  return (
    <Fade up>
      <div className="bg-[#D9A017] bg-footer relative w-full">
        <Container
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
        </Container>
        {/* End footer */}
      </div>
    </Fade>
  );
};

export default Footer;
