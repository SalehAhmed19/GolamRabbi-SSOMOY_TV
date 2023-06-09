import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const drawerWidth = 240;
const upperNavItems = ["লগইন", "সাবস্ক্রাইব"];
const lowerNavItems = [
  { menu: "চাকরি", route: "/jobs" },
  { menu: "ইভেন্ট", route: "/events" },
  { menu: "কোর্স", route: "/courses" },
  { menu: "ব্লগ", route: "/blogs" },
  { menu: "ইনভাইট", route: "/invitation" },
  { menu: "হোয়াটস নিউ", route: "/invitation" },
  { menu: "গ্যালারি", route: "/gallery" },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#F3B004",
    },
    secondary: {
      main: "#F80264",
    },
    accent: {
      main: "#B8084F",
    },
  },
  spacing: 0, // sets the default spacing to 4px
  components: {
    AppBar: {
      styleOverrides: {
        root: {
          padding: "0px", // sets the padding for AppBar
        },
      },
    },
  },
});

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", }}>
      <Box variant="h6" sx={{ my: 2 }}>
        <Link to="/">
          <img className="w-20 p-5 mx-auto block" src={logo} alt="" />
        </Link>
      </Box>
      <Divider />
      <List>
        {upperNavItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <div className="bg-[#00000029]">
          {lowerNavItems.map((item, idx) => (
            <ListItem key={idx} disablePadding>
              <Link className="w-full" to={item.route}>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.menu} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </div>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: "transparent" }}>
          <Toolbar>
            {/* Upper Menu */}
            <div className="w-full">
              <div className="w-full flex p-2 bg-[#000]">
                <IconButton
                  color="primary"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ display: { sm: "none" }, padding: "0 20px" }}
                >
                  <MenuIcon />
                </IconButton>
                <Box
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                ></Box>
                {/* <Box
                  sx={{
                    display: { xs: "none", sm: "block", paddingRight: "28px" },
                  }}
                >
                  {upperNavItems.map((item) => (
                    <Button
                      key={item}
                      sx={{
                        color: "#FBAF18",
                        fontSize: "18px",
                        fontFamily: "Hind Siliguri",
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box> */}
              </div>
              {/* Lower Menu */}
              <div className="w-full flex p-4 bg-[#000] lg:pl-14 lg:border-t border-t-[#222]">
                <Box
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  <Link to="/">
                    <div className="flex items-center">
                      <img className="w-10" src={logo} alt="" />{" "}
                      <p className="text-[#fff] font-bold text-xl ml-2">
                        Golam Rabby
                      </p>
                    </div>
                  </Link>
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block", paddingRight: "28px" },
                  }}
                >
                  {" "}
                  {/* <input
                    className="bg-transparent py-2 mr-3 px-5 rounded-full border-2 border-[#333] text-center text-[#fff]"
                    style={{ fontFamily: "Hind Siliguri" }}
                    type="text"
                    placeholder="সার্চ বার"
                  /> */}
                  {lowerNavItems.map((item, idx) => (
                    <Link to={item.route}>
                      <Button
                        key={idx}
                        sx={{
                          color: "#fff",
                          padding: "0 5px",
                          fontSize: "18px",
                          fontFamily: "Hind Siliguri",
                        }}
                      >
                        {item.menu}
                      </Button>
                    </Link>
                  ))}
                </Box>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
// import React, { useState } from "react";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   function toggleMobileMenu() {
//     setIsMenuOpen(!isMenuOpen);
//   }
//   return (
//     <div>
//       <nav class="bg-gray-800">
//         <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//           <div class="relative flex items-center justify-between h-16">
//             <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
//               <button
//                 type="button"
//                 class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
//                 aria-label="Main menu"
//                 aria-expanded="false"
//                 onClick={toggleMobileMenu}
//               >
//                 <svg class="block h-6 w-6" viewBox="0 0 24 24">
//                   <path
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   ></path>
//                 </svg>

//                 <svg class="hidden h-6 w-6" viewBox="0 0 24 24">
//                   <path fill="currentColor" d="M18 6L6 18M6 6l12 12"></path>
//                 </svg>
//               </button>
//             </div>
//             <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//               <div class="flex-shrink-0">
//                 <a href="/" class="text-white text-xl font-bold">
//                   Logo
//                 </a>
//               </div>
//               <div class="hidden sm:block sm:ml-6">
//                 <div class="flex">
//                   <a
//                     href="#"
//                     class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
//                   >
//                     Link 1
//                   </a>
//                   <a
//                     href="#"
//                     class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
//                   >
//                     Link 2
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}
//           id="mobile-menu"
//         >
//           <div class="px-2 pt-2 pb-3">
//             <a
//               href="#"
//               class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
//             >
//               Link 1
//             </a>
//             <a
//               href="#"
//               class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
//             >
//               Link 2
//             </a>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
