import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Box, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import whiteTheme from "../../WhiteTheme";

export default function Header() {
  let [menuOpen, setMenuOpen] = useState(true);

  let menu = () => {
    <Box
      role="presentation"
      sx={{
        width: "100%",
        height: "100%",
      }}
    ></Box>;
  };

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
              justifyContent: "space-between",
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
            <Button
              variant="outlined"
              color="tertiary"
              sx={{ display: { xs: "block", lg: "none" } }}
            >
              Menu
            </Button>
            {menu}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
