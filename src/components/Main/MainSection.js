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
        paddingTop: "10px",
      }}
    >
      <Box
        elevation={1}
        sx={{
          minWidth: "320px",
          height: "60vh",
          position: "fixed",
          top: "100px",
          left: "0",
          zIndex: "1",
          transition: "transform 0.5s ease-in-out",
          display: { xs: "none", lg: "block" },
          transform: filterMenuStatus,
        }}
        onMouseEnter={() => setIsFilterOpen(true)}
        onMouseLeave={() => setIsFilterOpen(false)}
      >
        <Paper
          elevation={1}
          sx={{
            padding: "10px",
            height: "100%",
            borderRight: "40px solid",
            // borderColor: "primary.main",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Roboto",
                color: "tertiary.main",
              }}
            >
              Filter
            </Typography>
          </Box>
          <FormControl
            variant="outlined"
            color="tertiary"
            sx={{
              margin: "20px 10px",
              minWidth: "200px",
              // opacity: isFilterOpen ? "1" : "0",
              // transition: "opacity 0.5s ease-in-out",
            }}
          >
            <InputLabel id="department">Chose the MET Department</InputLabel>
            <Select
              value={selectedDepartment}
              label="Chose the MET Department"
              onChange={(event) => {
                handleDepartmentChange(event);
              }}
            >
              {departments.length > 0 && createOptions(departments)}
            </Select>
          </FormControl>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translate(30%, -50%)",
              opacity: isFilterOpen ? "0" : "1",
              transition: "opacity 0.5s ease-in",
            }}
          >
            <Typography
              variant="body1"
              color="secondary.main"
              sx={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                transform: "rotate(-90deg)",
              }}
            >
              Filters Menu
            </Typography>
          </Box>
        </Paper>
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
