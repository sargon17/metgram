import React from "react";
import { Box } from "@mui/system";
import PostCard from "./PostCard/PostCard";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { getRandomPiece, createOptions } from "../../generalFunctions";
import {
  FormControl,
  InputLabel,
  Select,
  CircularProgress,
  Grid,
  Button,
} from "@mui/material";

export default function MainSection() {
  const [posts, setposts] = useState([]);
  let [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(11);
  let validIDs = useRef([]);

  let [loading, setLoading] = useState(true);

  function handleLoading(state) {
    setLoading(state);
  }

  let [displayablePosts, setDisplayablePosts] = useState(5);

  function handleDisplayablePosts() {
    setDisplayablePosts(displayablePosts + 5);

    if (posts.length < displayablePosts + 10) {
      serverRequest(5);
    }
    console.log("displayablePosts", displayablePosts);
    console.log("posts.length", posts.length);
  }

  // get full product id's from the database
  useEffect(() => {
    departments.length === 0 && getDepartments();
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${selectedDepartment}`
      )
      .then((res) => {
        validIDs.current = res.data.objectIDs;
        if (
          posts.length < displayablePosts + 10 &&
          validIDs.current.length > 0
        ) {
          serverRequest(3);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function serverRequest(requestsN) {
    for (let i = 0; i < requestsN; i++) {
      axios
        .get(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${getRandomPiece(
            validIDs.current
          )}`
        )
        .then((response) => {
          if (
            response.data.primaryImageSmall &&
            response.data.isPublicDomain === true
          ) {
            setposts((posts) => [...posts, response.data]);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    handleLoading(false);
  }

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

  function getDepartments() {
    axios
      .get(
        "https://collectionapi.metmuseum.org/public/collection/v1/departments"
      )
      .then((res) => {
        setDepartments(res.data.departments);
        // console.log("res.data", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(departments);
  }

  function handleDepartmentChange(event) {
    setSelectedDepartment(event.target.value);
    setposts([]);
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
