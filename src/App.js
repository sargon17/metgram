import React from "react";
import Header from "./components/Header/Header";
import MainSection from "./components/Main/MainSection";
import { Paper, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import whiteTheme from "./WhiteTheme";

export default function App() {
  return (
    <ThemeProvider theme={whiteTheme}>
      <Paper
        elevation={0}
        sx={{
          paddingTop: "4rem",
          width: "100%",
          height: "100vh",
          backgroundColor: "secondary.main",
        }}
      >
        <Box>
          <Header />
        </Box>
        <Box
          sx={
            {
              // marginTop: "4rem",
            }
          }
        >
          <MainSection />
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
