import About from "@components/About";
import Autonomi from "@components/Autonomi";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Levels from "@components/Levels";
import Welcome from "@components/Welcome";

import myCustomDefaultTheme from "@utils/extendTheme.js";

import { CssVarsProvider } from "@providers/CssVarsProvider.js";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme({ cssVariables: true }, myCustomDefaultTheme);

  return (
    <CssVarsProvider theme={theme}>
      <Header />
      <Box component="main">
        <Toolbar component="section" />
        <Welcome />
        <Autonomi />
        <Levels />
        <About />
      </Box>
      <Footer />
    </CssVarsProvider>
  );
}

export default App;
