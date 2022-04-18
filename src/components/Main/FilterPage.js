import React from "react";
import { useState, useContext } from "react";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";

import { Grid, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { createOptions } from "../../generalFunctions";

import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import { ImportedDataContext } from "../../context/importedData";

export default function FilterPage() {
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
  const [filterOpen, setFilterOpen] = useState(false);

  function handleFilterClick() {
    setFilterOpen(!filterOpen);
  }

  return (
    <Box>
      <Button
        variant="filled"
        color="primary"
        sx={{
          borderRadius: "7px",
          padding: "2px 20px",
          margin: "0 0 10px 0",
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          boxShadow: "cards",
        }}
        onClick={handleFilterClick}
        startIcon={<FilterListIcon />}
      >
        Filter
      </Button>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          position: "fixed",
          top: "0",
          right: "0",
          backgroundColor: "tertiary.transparent",
          transform: filterOpen ? "translateY(0)" : "translateY(100%)",
          opacity: filterOpen ? "1" : "0",
          transition: "all 0.5s ease-in-out",
          boxShadow: "-1000px 0px 0px 1000px rgba(0, 0, 0, 0.6)",
          zIndex: "2",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleFilterClick}
      >
        {/* </Box> */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={10} sm={10} md={8} lg={6} xl={4}>
            <Box
              sx={{
                // position: "absolute",
                zIndex: "2",
                // transform: filterOpen ? "translateY(0)" : "translateY(200%)",
                // opacity: filterOpen ? "1" : "0",
                transition: "all 0.5s ease-in-out",
              }}
            >
              <Paper
                sx={{
                  padding: "1rem",
                  borderRadius: "10px",
                  backgroundColor: "primary.main",
                }}
              >
                <Grid
                  container
                  sx={{
                    margin: "0 0 1rem 0",
                  }}
                >
                  <Grid item xs={8} display="flex" alignItems="center">
                    <Typography variant="h5" lineHeight={1}>
                      Filters
                    </Typography>
                  </Grid>
                  <Grid item xs={4} display="flex" justifyContent="flex-end">
                    <IconButton
                      aria-label="close button"
                      color="tertiary"
                      onClick={handleFilterClick}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    <FormControl
                      variant="filled"
                      md="none"
                      sx={{
                        minWidth: 120,
                        width: "100%",
                        backgroundColor: "primary.main",
                      }}
                    >
                      <InputLabel id="demo-simple-select-label">
                        Chose the MET Department
                      </InputLabel>
                      <Select
                        sx={{
                          backgroundColor: "secondary.main",
                        }}
                        color="secondary"
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
                        startIcon={<FilterListIcon />}
                        onClick={handleFilterClick}
                        sx={{
                          marginTop: "10px",
                          color: "tertiary.contrastText",
                        }}
                      >
                        Filter
                      </Button>
                    </FormControl>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
