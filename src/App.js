import React from "react";
import Header from "./components/Header/Header";
import MainSection from "./components/Main/MainSection";
import { Paper, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import whiteTheme from "./WhiteTheme";
import { ImportedDataProvider } from "./context/importedData";

export default function App() {
  return (
    <ThemeProvider theme={whiteTheme}>
      <Paper
        elevation={0}
        sx={{
          paddingTop: "4rem",
          width: "100%",
          backgroundColor: "secondary.main",
        }}
      >
        <ImportedDataProvider>
          <Box>
            <Header />
          </Box>
          <Box>
            <MainSection />
          </Box>
        </ImportedDataProvider>
      </Paper>
    </ThemeProvider>
  );
}
