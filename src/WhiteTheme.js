import { createTheme } from "@mui/material";

const whiteTheme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      transparent: "rgba(255, 255, 255, 0.9)",
    },
    secondary: {
      main: "#F9F9F9;",
    },
    tertiary: {
      main: "#222;",
    },
  },
});

export default whiteTheme;
