import React, { useContext, useState } from "react";
import { AppBar, Typography, Toolbar, Box } from "@mui/material";

import { ImportedDataContext } from "../../context/importedData";
import { IconButton } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { TextField } from "@mui/material";
import Search from "./Search";
import axios from "axios";

export default function Header({ themeModeSelector, themeModeValue }) {
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

  let selectedDepartmentName =
    departments.length > 0
      ? departments.find((department) => {
          return department.departmentId === selectedDepartment;
        }).displayName
      : null;

  const [searchMode, setSearchMode] = useState(false);

  return (
    <AppBar
      elevation={"header"}
      sx={{
        backgroundColor: "primary.transparent",
        transition: "all 0.5s ease",
      }}
    >
      <Toolbar>
        <Box
          flexGrow={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "700",
                textTransform: "uppercase",
                fontFamily: "Roboto",
                lineHeight: "1",
              }}
            >
              metgram
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontFamily: "Roboto",
                lineHeight: "1.2",
                fontSize: "0.85rem",
              }}
            >
              {selectedDepartmentName}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Search searchMode={searchMode} setSearchMode={setSearchMode} />
            <IconButton
              variant="text"
              onClick={themeModeSelector}
              sx={{
                color: "text.primary",
              }}
            >
              {themeModeValue ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
    // </ThemeProvider>
  );
}
