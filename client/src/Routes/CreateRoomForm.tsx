import { Box, Button, ButtonGroup, Switch, TextField, Typography } from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const createRoomFormStyles = {
  form: {
    padding: "2rem 0rem",
    display: "flex",
    justifyContent: "center",
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  textField: {
    "& .MuiFormLabel-root": {
      color: "white !important",
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
  },
  textFieldInputLabelProps: {
    sx: {
      color: "white",
    },
  },
  options: {
    display: "flex",
    justifyContent: "space-between",
    gap: "70px",
  },
  colors: {
    gray: {
      color: "rgb(243 244 246)",
    },
  },
};

const CreateRoomForm = () => {
  const [formOptions, setFormOptions] = useState({});

  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1 style={createRoomFormStyles.colors.gray}>Create room</h1>
      </header>

      <form style={createRoomFormStyles.form as React.CSSProperties}>
        <Box sx={createRoomFormStyles.formWrapper}>
          <TextField
            label="Username"
            margin="normal"
            fullWidth
            required
            sx={createRoomFormStyles.textField}
            InputLabelProps={createRoomFormStyles.textFieldInputLabelProps}
          />

          <Box>
            <Typography component={"h2"} marginBottom={"20px"} color={"white"}>
              Room options
            </Typography>

            <Box>
              <Box sx={createRoomFormStyles.options}>
                <Switch />
                <Typography color={"white"} width={162} textAlign={"start"}>
                  Allow add new tasks
                </Typography>
              </Box>

              <Box sx={createRoomFormStyles.options}>
                <Switch />
                <Typography color={"white"} width={162} textAlign={"start"}>
                  Allow edit tasks
                </Typography>
              </Box>

              <Box sx={createRoomFormStyles.options}>
                <Switch />
                <Typography color={"white"} width={162} textAlign={"start"}>
                  Allow edit permissions
                </Typography>
              </Box>
            </Box>
          </Box>

          <ButtonGroup variant="contained" fullWidth>
            <Button type="submit">Create room</Button>

            <Button type="button" onClick={() => navigate("/")}>
              Go back
            </Button>
          </ButtonGroup>
        </Box>
      </form>
    </>
  );
};

export default CreateRoomForm;
