import React, { useState, createContext, useRef, useEffect } from "react";
import axios from "axios";
import { getRandomPiece } from "../generalFunctions";

export const ImportedDataContext = createContext();

export const ImportedDataProvider = (props) => {
  const [posts, setposts] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(11);
  let validIDs = useRef([]);
  const [displayablePosts, setDisplayablePosts] = useState(5);
  const [isReseach, setIsResearch] = useState(false);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  function handleLoading(state) {
    setLoading(state);
  }

  function handleDisplayablePosts() {
    setDisplayablePosts(displayablePosts + 5);

    if (posts.length < displayablePosts + 10) {
      serverRequest(5);
    }
    console.log("displayablePosts", displayablePosts);
    console.log("posts.length", posts.length);
  }

  useEffect(() => {
    departments.length === 0 && getDepartments();
    axios
      .get(
        isReseach
          ? `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&departmentId=${selectedDepartment}&q=${search}`
          : `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${selectedDepartment}`
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
  }
  function handleDepartmentChange(event) {
    setSelectedDepartment(event.target.value);
    setposts([]);
    setDisplayablePosts(5);
    handleLoading(true);
  }

  return (
    <ImportedDataContext.Provider
      value={[
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
      ]}
    >
      {props.children}
    </ImportedDataContext.Provider>
  );
};
