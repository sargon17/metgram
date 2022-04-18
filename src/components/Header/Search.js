import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Box, TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { ImportedDataContext } from "../../context/importedData";
import { InputAdornment } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Search({ searchMode, setSearchMode }) {
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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {searchMode ? (
        <TextField
          variant="outlined"
          value={search}
          size="small"
          placeholder="Search"
          onChange={(e) => handleInput(e)}
          border
          color="tertiary"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton onClick={handleSearch}>
                  <SearchRoundedIcon
                    sx={{
                      color: "text.primary",
                    }}
                  />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{
                    color: "text.primary",
                  }}
                  onClick={() => setSearchMode(false)}
                >
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            transition: "all 0.5s ease",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "tertiary.main",
              },
            },
          }}
        ></TextField>
      ) : (
        <IconButton
          variant="text"
          color="tertiary"
          sx={{
            color: "text.primary",
          }}
          // onClick={handleSearch}
          onClick={() => setSearchMode(!searchMode)}
        >
          <SearchRoundedIcon />
        </IconButton>
      )}
    </Box>
  );
}

export default Search;
