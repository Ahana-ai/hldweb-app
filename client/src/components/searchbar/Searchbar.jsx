import { Box, TextField } from "@mui/material";
import { useState } from "react";

const Searchbar = ({ setText }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <Box component="form">
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        variant="standard"
        mt={3}
        sx={{
          input: {
            color: "white",
          },
          label: {
            color: "white",
          },
          "&:hover": {
            label: { color: "white" },
          },
        }}
        onChange={(event) => setText(event.target.value)}
      />
    </Box>
  );
};

export default Searchbar;
