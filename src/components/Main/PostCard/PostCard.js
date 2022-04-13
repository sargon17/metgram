import React from "react";
import { Typography, Box, Avatar, Paper, Grid } from "@mui/material";

export default function PostCard({ img, artist, classifications, title }) {
  return (
    <Grid item xs={12} md={8}>
      <Paper
        elevation={1}
        sx={{
          width: "100%",
          borderRadius: "0.5rem",
        }}
        className="met__post-card"
      >
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: " 0.5rem 1rem",
              }}
            >
              <Avatar>GS</Avatar>
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
                    lineHeight: "1rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    fontFamily: "Roboto",
                    fontSize: "1rem",
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
              }}
            ></Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            padding: " 0.2rem 1rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
              textTransform: "uppercase",
              fontFamily: "Roboto",
              fontSize: "1rem",
            }}
          >
            {artist}
          </Typography>
          <Typography variant="body2">{title}</Typography>
        </Box>
      </Paper>
    </Grid>
  );
}
