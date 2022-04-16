import React from "react";
import { Typography, Box, Avatar, Paper, Grid } from "@mui/material";
import { stringAvatar } from "../../../generalFunctions";
import { ThemeProvider } from "@mui/material/styles";
import whiteTheme from "../../../WhiteTheme";

export default function PostCard({ img, artist, classifications, title }) {
  if (img === "") {
    img = "https://via.placeholder.com/300x300";
  }
  if (artist === "" || artist === undefined) {
    artist = "Unknown Artist";
  }

  return (
    <ThemeProvider theme={whiteTheme}>
      <Grid item xs={12}>
        <Paper
          elevation={"cards"}
          sx={{
            width: "100%",
            borderRadius: "10px",
            boxShadow: "primary",
          }}
          className="met__post-card"
        >
          <Grid container spacing={0}>
            <Grid item>
              <Box
                sx={{
                  // width: "100vw",
                  maxWidth: "90%",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: " 0.5rem 1rem",
                }}
              >
                <Avatar {...stringAvatar(artist)} />
                <Box
                  sx={{
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      maxWidth: "100%",
                      whiteSpace: "nowrap",
                      lineHeight: "1rem",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      fontFamily: "Roboto",
                      fontSize: "1rem",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {artist}
                  </Typography>
                  <Typography
                    variant="overline"
                    sx={{
                      lineHeight: "1rem",
                    }}
                  >
                    {classifications}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                component="img"
                src={img}
                sx={{
                  width: "100%",
                  maxHeight: "40rem",
                  objectFit: "contain",
                }}
              ></Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              padding: "6px 1rem",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "600",
                textTransform: "uppercase",
                fontFamily: "Roboto",
                fontSize: "14px",
              }}
            >
              {artist}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "400",
                fontFamily: "Roboto",
                fontSize: "12px",
              }}
            >
              {title}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </ThemeProvider>
  );
}
