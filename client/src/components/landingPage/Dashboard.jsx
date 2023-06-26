import { Box, Typography } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Searchbar from "../searchbar/Searchbar";
import ListView from "./ListView";
import { useState } from "react";

const Dashboard = () => {
    const [text, setText] = useState({});

  return (
    <>
      <Navbar />
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
    </>
  );
};

export default Dashboard;
