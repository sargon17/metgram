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
  Paper,
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
              sx={{
                height: "100vh",
                width: "100vw",
                position: "fixed",
                top: "0",
                right: "0",
                backgroundColor: "tertiary.transparent",
                transform: menuOpen ? "translateX(0)" : "translateX(100%)",
                opacity: menuOpen ? "1" : "0",
                transition: "all 0.5s ease-in-out",
                boxShadow: "-800px 0px 0px 500px rgba(0, 0, 0, 0.6)",
              }}
            ></Box>
            <Box
              role="presentation"
              sx={{
                position: "absolute",
                top: "0",
                right: "0",
                width: "90%",
                height: "100vh",
                backgroundColor: "secondary.main",
                transform: menuOpen ? "translateX(0)" : "translateX(+100%)",
                transition: "transform 0.5s ease-in-out",
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  paddingTop: "10px",
                  width: "100%",
                  height: "100vh",
                }}
              >
                <Grid
                  container
                  spacing={0}
                  justifyContent="flex-end"
                  margin={"10px 0"}
                >
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                    <Button
                      variant="text"
                      color="tertiary"
                      onClick={handleMenu}
                    >
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
                        Chose the MET Department
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
                      <Button
                        variant="contained"
                        color="tertiary"
                        startIcon={<SearchRoundedIcon />}
                        onClick={handleMenu}
                        sx={{
                          marginTop: "10px",
                          color: "tertiary.contrastText",
                        }}
                      >
                        Search
                      </Button>
                    </FormControl>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
