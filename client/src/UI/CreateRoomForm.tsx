import { Box, Button, Switch, TextField, Typography } from "@mui/material";

import { useState } from "react";

// TODO: Abstract styling

const CreateRoomForm = () => {
  const [formOptions, setFormOptions] = useState({});

  return (
    <>
      <header>
        <h1 style={{ color: "rgb(243 244 246)" }}>Create room</h1>
      </header>

      <form
        style={{
          padding: "2rem 0rem",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}>
        <TextField
          label="Username"
          margin="normal"
          fullWidth
          required
          sx={{
            "& .MuiFormLabel-root": {
              color: "white",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "gray",
              },
            },
          }}
          InputLabelProps={{ sx: { color: "white" } }}
        />

        <Box>
          <Typography component={"h2"} marginBottom={"20px"} color={"white"}>
            Room options
          </Typography>

          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", gap: "70px" }}>
              <Switch />
              <Typography color={"white"} width={162} textAlign={"start"}>
                Allow add new tasks
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", gap: "70px" }}>
              <Switch />
              <Typography color={"white"} width={162} textAlign={"start"}>
                Allow edit tasks
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", gap: "70px" }}>
              <Switch />
              <Typography color={"white"} width={162} textAlign={"start"}>
                Allow edit permissions
              </Typography>
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
