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
  Paper,
  Typography,
} from "@mui/material";
import { ImportedDataContext } from "../../context/importedData";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterPage from "./FilterPage";

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
    handleDepartmentChange,
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

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterMenuStatus = isFilterOpen
    ? "translateX(0)"
    : "translateX( calc(-100% + 40px))";

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        paddingTop: "10px",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} display="flex" justifyContent="center">
          {/* <Button
            variant="filled"
            color="primary"
            sx={{
              borderRadius: "7px",
              padding: "2px 20px",
              margin: "0 0 10px 0",
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              boxShadow: "cards",
            }}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            startIcon={<FilterListIcon />}
          >
            Filter
          </Button> */}
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          lg={6}
          xl={4}
          display="flex"
          justifyContent="center"
          sx={{
            position: "relative",
          }}
        >
          <FilterPage />
        </Grid>
      </Grid>

      <Box sx={{ padding: "5px" }}>
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
                    boxShadow: "cards",
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
