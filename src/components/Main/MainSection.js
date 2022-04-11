import React from "react";
import { Box } from "@mui/system";
import PostCard from "./PostCard/PostCard";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { getRandomPiece } from "../../generalFunctions";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function MainSection() {
  const [products, setProducts] = useState([]);
  let [departments, setDepartments] = useState([]);
  let validIDs = useRef([]);

  // get full product id's from the database
  useEffect(() => {
    departments.length === 0 && getDepartments();
    axios
      .get(
        "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=13"
      )
      .then((res) => {
        validIDs.current = res.data.objectIDs;
        if (products.length < 8 && validIDs.current.length > 0) {
          serverRequest(2);
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
        .then(function (response) {
          if (response.data.primaryImage === "") {
            serverRequest();
          }
          response.data.primaryImageSmall &&
            setProducts((products) => [...products, response.data]);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }

  function getData() {
    return products.map((post) => {
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
        console.log(res.data);
        setDepartments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function createOptions() {
    return departments.map(({ departmentId, displayName }) => {
      return (
        <MenuItem key={departmentId} value={departmentId}>
          {displayName}
        </MenuItem>
      );
    });
  }

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
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Age"
          // onChange={handleChange}
        >
          {createOptions()}
        </Select>
      </FormControl>
      {getData()}
      <Button variant="primary" onClick={() => serverRequest(4)}>
        See Others
      </Button>
    </Box>
  );
}
