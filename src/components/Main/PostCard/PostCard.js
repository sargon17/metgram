import React from "react";
import { Typography, Box, Avatar, Paper, Grid } from "@mui/material";
import { stringAvatar } from "../../../generalFunctions";

export default function PostCard({ img, artist, classifications, title }) {
  if (img === "") {
    img = "https://via.placeholder.com/300x300";
  }
  if (artist === "" || artist === undefined) {
    artist = "Unknown Artist";
  }

  return (
    <Grid item xs={12} sx={{ maxWidth: "100vh" }}>
      <Paper
        elevation={"cards"}
        sx={{
          width: "100%",
          borderRadius: "10px",
          boxShadow: "primary",
          backgroundColor: "primary.main",
        }}
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
                  maxWidth: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    maxWidth: "100%",
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
                maxWidth: "100vw",
                maxHeight: "40rem",
                objectFit: "contain",
              }}
            ></Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            padding: "6px 1rem",
            maxWidth: "100vw",
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
  );
}
