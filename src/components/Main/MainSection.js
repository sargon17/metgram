import React from "react";
import { Box } from "@mui/system";
import PostCard from "./PostCard/PostCard";
import { useState, useContext } from "react";
import { createOptions } from "../../generalFunctions";
import {
  FormControl,
  InputLabel,
  Select,
  CircularProgress,
  Grid,
  Button,
} from "@mui/material";
import { ImportedDataContext } from "../../context/importedData";

export default function MainSection() {
  const [
    posts,
    setposts,
    departments,
    setDepartments,
    selectedDepartment,
    displayablePosts,
    handleDisplayablePosts,
    setSelectedDepartment,
    loading,
    setDisplayablePosts,
    handleLoading,
  ] = useContext(ImportedDataContext);

  function getData() {
    return posts.slice(0, displayablePosts).map((post) => {
      return (
        <PostCard
          key={post.id}
          img={post.primaryImageSmall}
          artist={post.artistDisplayName}
          classifications={post.classification}
          title={post.title}
        />
      );
    });
  }

  function handleDepartmentChange(event) {
    setSelectedDepartment(event.target.value);
    setposts([]);
    setDisplayablePosts(5);
    handleLoading(true);
  }

  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: "10px",
      }}
    >
      <Box
        sx={{
          width: "1/3",
          position: "fixed",
          top: "100px",
          left: "0",
          zIndex: "1",
        }}
      >
        <FormControl
          variant="standard"
          md="none"
          sx={{ m: 1, minWidth: 120, display: { xs: "none", lg: "block" } }}
        >
          <InputLabel id="demo-simple-select-label">Department</InputLabel>
          <Select
            value={selectedDepartment}
            label="Department"
            onChange={(event) => {
              handleDepartmentChange(event);
            }}
          >
            {departments.length > 0 && createOptions(departments)}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ margin: "2px" }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
            <Grid
              container
              alignItems="strech"
              direction="column"
              alignContent="stretch"
              rowGap={2}
            >
              {posts.length > 2 && getData()}
            </Grid>
            <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              wrap="wrap"
            >
              {loading && (
                <CircularProgress
                  color="tertiary"
                  sx={{
                    margin: "20px",
                  }}
                />
              )}
              {!loading && (
                <Button
                  variant="contained"
                  sx={{
                    background: "tertiary",
                    margin: "20px auto",
                  }}
                  onClick={() => {
                    handleDisplayablePosts();
                  }}
                >
                  See More
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
