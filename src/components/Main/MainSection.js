import React from "react";
import { Box } from "@mui/system";
import PostCard from "./PostCard/PostCard";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { getRandomPiece } from "../../generalFunctions";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";

export default function MainSection() {
  const [products, setProducts] = useState([]);
  let [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(1);
  let validIDs = useRef([]);

  // get full product id's from the database
  useEffect(() => {
    departments.length === 0 && getDepartments();
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${selectedDepartment}`
      )
      .then((res) => {
        validIDs.current = res.data.objectIDs;
        if (products.length < 4 && validIDs.current.length > 0) {
          serverRequest(1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function serverRequest(requestsN) {
    let retryNumber = 0;
    if (retryNumber > 10) {
      return;
    }
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
            if (response.data.isHightlight === true) {
              setProducts((products) => [response.data, ...products]);
            } else {
              setProducts((products) => [...products, response.data]);
            }
          } else {
            serverRequest(1);
          }
        })
        .catch((error) => {
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
        setDepartments(res.data.departments);
        // console.log("res.data", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(departments);
  }

  function createOptions() {
    // console.log(departments);
    return departments.map(({ departmentId, displayName }) => {
      return (
        <MenuItem key={departmentId} value={departmentId}>
          {displayName}
        </MenuItem>
      );
    });
  }

  function handleDepartmentChange(event) {
    setSelectedDepartment(event.target.value);
    setProducts([]);
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
      <Box
        sx={{
          width: "1/3",
          position: "fixed",
          top: "100px",
          left: "0",
          zIndex: "1",
        }}
      >
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Department</InputLabel>
          <Select
            value={selectedDepartment}
            label="Department"
            onChange={(event) => {
              handleDepartmentChange(event);
            }}
          >
            {departments.length > 0 && createOptions()}
          </Select>
        </FormControl>
      </Box>
      {getData()}
      {products.length < 4 && (
        <CircularProgress
          color="tertiary"
          sx={{
            margin: "20px",
          }}
        />
      )}
      {products.length > 0 && (
        <Button
          variant="contained"
          sx={{
            background: "tertiary",
            margin: "20px",
          }}
          onClick={() => serverRequest(4)}
        >
          See More
        </Button>
      )}
    </Box>
  );
}
