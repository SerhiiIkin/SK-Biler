// extendTheme.js
import { unstable_prepareCssVars as prepareCssVars } from "@mui/system";

const lightColorScheme = {
  palette: {
    mode: "light",

    text: {
      default: "#000000",
    },
    divider: {
      default: "rgba(0, 0, 0, 0.12)",
    },
    background: {
      default: "#b5d1f5",
      text: "rgba(247, 246, 246, 0.5)",
    },
  },
};

const darkColorScheme = {
  palette: {
    mode: "dark",

    text: {
      default: "#ffffff",
    },
    divider: {
      default: "rgb(237, 231, 230)",
    },
    background: {
      default: "#030954",
      text: "rgba(5, 5, 5, 0.5)",
    },
  },
};

function extendTheme({ cssVarPrefix = "system-demo" } = {}) {
  const colorSchemeSelector = "data-system-demo-color-scheme";
  const { vars: themeVars, ...params } = prepareCssVars(
    {
      colorSchemes: {
        light: lightColorScheme,
        dark: darkColorScheme,
      },
    },
    {
      prefix: cssVarPrefix,
      colorSchemeSelector,
    },
  );
  const theme = {
    colorSchemeSelector,
    colorSchemes: {
      light: lightColorScheme,
      dark: darkColorScheme,
    },
    // ... any other objects independent of color-scheme,
    // like fontSizes, spacing etc
    vars: themeVars,
    palette: {
      ...lightColorScheme.palette,
      colorScheme: "light",
    },
    ...params,
  };

  return theme;
}

const myCustomDefaultTheme = extendTheme();

export default myCustomDefaultTheme;
