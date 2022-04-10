import React from "react";
import { AppBar, Typography, Toolbar, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const whiteTheme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      darker: "#E5E5E5",
    },
  },
});

export default function Header() {
  return (
    <ThemeProvider theme={whiteTheme}>
      <AppBar elevation={1} color="primary">
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
