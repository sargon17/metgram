import React from "react";
import { Box } from "@mui/system";
import PostCard from "./PostCard/PostCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

export default function MainSection() {
  const [products, setProducts] = useState([]);

  //   function that generate random number
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    if (products.length < 12) {
      serverRequest();
    }
  }, []);

  function serverRequest() {
    for (let i = 0; i < 2; i++) {
      axios
        .get(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNumber(
            1,
            471581
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
      {getData()}
      <Button variant="primary" onClick={() => serverRequest()}>
        See Others
      </Button>
    </Box>
  );
}
