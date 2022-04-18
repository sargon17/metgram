import React from "react";
import { Box } from "@mui/system";
import PostCard from "./PostCard/PostCard";
import { useContext } from "react";
import { CircularProgress, Grid, Button } from "@mui/material";
import { ImportedDataContext } from "../../context/importedData";
import FilterPage from "./FilterPage";
import Paper from "@mui/material/Paper";

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
    search,
    setSearch,
    isReseach,
    setIsResearch,
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

  return (
    <Paper
      // color="secondary.main"
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "secondary.main",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <Box
        sx={{
          // width: "100%",
          // minHeight: "100vh",
          paddingTop: "10px",
          overflowX: "hidden",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid
            item
            xs={10}
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
    </Paper>
  );
}
