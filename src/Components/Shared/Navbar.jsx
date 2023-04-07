import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../assets/logo/logo.png";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const upperNavItems = ["লগইন", "সাবস্ক্রাইব"];
const lowerNavItems = [
  { menu: "চাকরি", route: "/jobs" },
  { menu: "ইভেন্ট", route: "/events" },
  { menu: "কোর্স", route: "/courses" },
  { menu: "ব্লগ", route: "/blogs" },
  { menu: "ইনভাইট", route: "/invitation" },
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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box variant="h6" sx={{ my: 2 }}>
        <img className="w-20 p-5 mx-auto block" src={logo} alt="" />
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
              <Link to={item.route}>
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
                >
                  {/* <div className="flex items-center lg:pl-14">
                    <IconButton
                      color="primary"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      // sx={{ mr: 2 }}
                      sx={{ marginRight: "20px" }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <input
                      className="bg-transparent py-1 px-5 rounded-full border-2 text-center text-[#fff]"
                      style={{ fontFamily: "Hind Siliguri" }}
                      type="text"
                      placeholder="সার্চ বার"
                    />
                  </div> */}
                </Box>
                <Box
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
                </Box>
              </div>
              {/* Lower Menu */}
              <div className="w-full flex p-4 bg-[#000] lg:pl-14 border-t border-t-[#222]">
                <Box
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  <div className="flex items-center">
                    <img className="w-10" src={logo} alt="" />{" "}
                    <p className="text-[#fff] font-bold text-xl ml-2">
                      Golam Rabby
                    </p>
                  </div>
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block", paddingRight: "28px" },
                  }}
                >
                  {" "}
                  <input
                    className="bg-transparent py-2 mr-3 px-5 rounded-full border-2 border-[#333] text-center text-[#fff]"
                    style={{ fontFamily: "Hind Siliguri" }}
                    type="text"
                    placeholder="সার্চ বার"
                  />
                  {lowerNavItems.map((item, idx) => (
                    <Link to={item.route}>
                      <Button
                        key={idx}
                        sx={{
                          color: "#fff",
                          padding: "0px",
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
