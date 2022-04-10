import React from "react";
import { AppBar, Typography, Toolbar, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import whiteTheme from "../../WhiteTheme";

export default function Header() {
  return (
    <ThemeProvider theme={whiteTheme}>
      <AppBar
        elevation={1}
        sx={{
          backgroundColor: "primary.transparent",
        }}
      >
        <Toolbar>
          <Box
            flexGrow={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "700",
                textTransform: "uppercase",
                fontFamily: "Roboto",
              }}
            >
              metgram
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
