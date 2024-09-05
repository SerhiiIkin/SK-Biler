import myCustomDefaultTheme from "@utils/extendTheme.js";

import { unstable_createCssVarsProvider as createCssVarsProvider } from "@mui/system";

export const { CssVarsProvider, useColorScheme } = createCssVarsProvider({
  theme: myCustomDefaultTheme,
  modeStorageKey: "system-demo-mode",
  defaultColorScheme: {
    light: "light",
    dark: "dark",
  },
});
