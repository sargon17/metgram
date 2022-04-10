import React from "react";
import Header from "./components/Header/Header";
import MainSection from "./components/Main/MainSection";
import { Paper, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import whiteTheme from "./WhiteTheme";

export default function App() {
  return (
    <ThemeProvider theme={whiteTheme}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Header />
        <MainSection />
      </Box>
    </ThemeProvider>
  );
}
