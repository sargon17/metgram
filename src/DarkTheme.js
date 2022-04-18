import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#2D2D2D",
      transparent: "#2D2D2Dee",
      bgShadow: "0px 4px 7px rgba(0, 0, 0, 0.2);",
    },
    secondary: {
      main: "#222222",
    },
    tertiary: {
      main: "#222222;",
      contrastText: "#FFFFFF",
      transparent: "rgba(0, 0, 0, 0.6)",
    },
    text: {
      primary: "#DDDDDD",
    },
  },
  shadows: {
    0: "none",
    1: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    2: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    3: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    4: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    5: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    6: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    7: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    8: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    9: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    10: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    11: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    12: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    13: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    14: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    15: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    16: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    17: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    18: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    19: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    20: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    21: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    22: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    23: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    24: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    cards: "0px 4px 7px rgba(0, 0, 0, 0.1);",
    header: "0px 3px 4px rgba(0, 0, 0, 0.06)",
  },
});

export default darkTheme;
