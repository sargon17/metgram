import React, { useState } from "react";
import Header from "./components/Header/Header";
import MainSection from "./components/Main/MainSection";
import { Paper, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import whiteTheme from "./WhiteTheme";
import darkTheme from "./DarkTheme";
import { ImportedDataProvider } from "./context/importedData";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : whiteTheme}>
      <Paper
        sx={{
          paddingTop: "4rem",
          width: "100%",
          backgroundColor: "secondary.main",
          transition: "all 0.5s ease-in-out",
        }}
      >
        <ImportedDataProvider>
          {/* <Box> */}
          <Header
            themeModeSelector={toggleDarkMode}
            themeModeValue={isDarkMode}
          />
          {/* </Box> */}
          {/* <Box> */}
          <MainSection />
          {/* </Box> */}
        </ImportedDataProvider>
      </Paper>
    </ThemeProvider>
  );
}
