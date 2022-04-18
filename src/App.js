import React from "react";
import Header from "./components/Header/Header";
import MainSection from "./components/Main/MainSection";
import { Paper, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import whiteTheme from "./WhiteTheme";
import darkTheme from "./DarkTheme";
import { ImportedDataProvider } from "./context/importedData";
import { ThemeModeProvider } from "./context/themeContext";

export default function App() {
  return (
    <ThemeModeProvider>
      <ThemeProvider theme={darkTheme}>
        <Paper
          sx={{
            paddingTop: "4rem",
            width: "100%",
            backgroundColor: "secondary.main",
          }}
        >
          <ImportedDataProvider>
            {/* <Box> */}
            <Header />
            {/* </Box> */}
            {/* <Box> */}
            <MainSection />
            {/* </Box> */}
          </ImportedDataProvider>
        </Paper>
      </ThemeProvider>
    </ThemeModeProvider>
  );
}
