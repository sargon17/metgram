import React from "react";
import { Box } from "@mui/system";
import PostCard from "./PostCard/PostCard";

export default function MainSection() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <PostCard />
    </Box>
  );
}
