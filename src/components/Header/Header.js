import React, { useState, useContext } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Grid,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import whiteTheme from "../../WhiteTheme";
import { ImportedDataContext } from "../../context/importedData";
import { createOptions } from "../../generalFunctions";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
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
  let [menuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  // let menu = () => {
  //   <Box
  //     elevation={2}
  //     role="presentation"
  //     sx={{
  //       width: "100%",
  //       height: "100%",
  //       backgroundColor: "secondary.main",
  //     }}
  //   ></Box>;
  // };

  return (
    <ThemeProvider theme={whiteTheme}>
      <AppBar
        elevation={1}
        sx={{
          backgroundColor: "primary.transparent",
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
            <Typography
              variant="h6"
              sx={{
                fontWeight: "700",
                textTransform: "uppercase",
                fontFamily: "Roboto",
              }}
            >
              metgram
            </Typography>
            <Button
              variant="text"
              color="tertiary"
              sx={{ display: { lg: "none" } }}
              onClick={handleMenu}
            >
              <SearchRoundedIcon />
            </Button>
            <Box
              elevation={2}
              role="presentation"
              sx={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100vh",
                backgroundColor: "secondary.main",
                display: menuOpen ? "block" : "none",
                paddingTop: "20px",
              }}
            >
              <Grid
                container
                spacing={0}
                justifyContent="flex-end"
                margin={"10px 0"}
              >
                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                  <Button variant="text" color="tertiary" onClick={handleMenu}>
                    <CloseIcon />
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                alignContent="stretch"
                wrap="wrap"
              >
                <Grid item xs={10} sm={10} md={8} lg={6} xl={4}>
                  <FormControl
                    variant="filled"
                    md="none"
                    sx={{
                      minWidth: 120,
                      width: "100%",
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Department
                    </InputLabel>
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
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
