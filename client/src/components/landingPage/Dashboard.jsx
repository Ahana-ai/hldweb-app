import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Searchbar from "../searchbar/Searchbar";
import ListView from "./ListView";
import { useState } from "react";
import CountryDetails from "./CountryDetails";

const Dashboard = () => {
  const [text, setText] = useState({});

  return (
    <>
      <Navbar />
      <Grid container spacing={3}>
        <Grid item md={8} xs={6}>
          <Box
            sx={{
              color: "white",
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            <Typography variant="h4" mt={3}>
              Dashboard
            </Typography>
            <Searchbar setText={setText} />
            <ListView text={text} />
          </Box>
        </Grid>
        <Grid item md={4} xs={4}>
          <CountryDetails />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
