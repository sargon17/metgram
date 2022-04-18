import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Box, TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { ImportedDataContext } from "../../context/importedData";
import { getRandomPiece } from "../../generalFunctions";

function Search() {
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

  // useEffect(() => {
  //   handleSearch();
  // });

  const handleSearch = () => {
    if (search.length > 0) {
      setposts([]);
      setIsResearch(true);
      setDisplayablePosts(10);
      handleLoading(true);
    } else {
      setIsResearch(false);
    }
  };

  function handleInput(e) {
    setSearch(e.target.value);
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <Box>
      <TextField variant="outlined" onKeyUp={(e) => handleInput(e)}></TextField>
      <IconButton
        variant="text"
        color="tertiary"
        sx={{
          color: "text.primary",
        }}
        onClick={handleSearch}
      >
        <SearchRoundedIcon />
      </IconButton>
    </Box>
  );
}

export default Search;
