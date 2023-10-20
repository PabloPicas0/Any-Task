import { Box, Button, Switch, TextField, Typography } from "@mui/material";

import { useState } from "react";

// TODO: Abstract styling
// TODO: style textfield
// TODO: add proper collors

const CreateRoomForm = () => {
  const [formOptions, setFormOptions] = useState({});

  return (
    <>
      <header>
        <h1 style={{ color: "rgb(243 244 246)" }}>Create Room</h1>
      </header>

      <form
        style={{
          border: "1px solid rgb(243 244 246)",
          padding: "2rem 3rem",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}>
        <TextField label="Username" margin="normal" fullWidth required />

        <Box>
          <Typography marginBottom={"20px"}>Room Options</Typography>

          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Switch></Switch>
              <Typography>Free tasks</Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Switch></Switch>
              <Typography>Free tasks</Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Switch></Switch>
              <Typography>Free tasks</Typography>
            </Box>
          </Box>
        </Box>

        <Button variant="contained" type="submit">
          Create room
        </Button>
      </form>
    </>
  );
};

export default CreateRoomForm;
