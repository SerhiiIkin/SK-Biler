import { useState } from "react";

import { Link } from "@customMUI/Link";
import MaterialUISwitch from "@customMUI/MaterialUISwitch";
import { Typography } from "@customMUI/Typography";

import { drawerWidth } from "@variables/drawerWidth";
import { navItems } from "@variables/navItems";

import { useColorScheme } from "@providers/CssVarsProvider.js";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setMode, mode } = useColorScheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        color: (theme) => theme.vars.palette.text.default,
      }}
    >
      <Typography
        variant="h6"
        sx={{ my: 2, color: (theme) => theme.vars.palette.text.default }}
      >
        SK biler
      </Typography>
      <Divider
        sx={{ borderColor: (theme) => theme.vars.palette.divider.default }}
      />
      <List>
        {navItems.map((item) => (
          <ListItem sx={{ display: "flex", gap: 2 }} key={item.id}>
            <Link href={item.link}>{item.name}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box component="header" sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar
          sx={{
            backgroundColor: (theme) => theme.vars.palette.background.default,
          }}
        >
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <Link href="#welcome">SK biler</Link>
          </Typography>
          <MaterialUISwitch
            sx={{ m: 1, mr: 2 }}
            onChange={toggleMode}
            checked={mode === "dark"}
          />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: mode === "dark" ? "white" : "black" }} />
          </IconButton>

          <List sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => (
              <ListItem sx={{ display: "flex", gap: 2 }} key={item.id}>
                <Link href={item.link}>{item.name}</Link>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor="right"
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
              bgcolor: (theme) => theme.vars.palette.background.default,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
