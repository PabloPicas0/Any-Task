import { Box, Button, ButtonGroup, TextField } from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const joinRoomFormStyles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
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
      minWidth: "290px",
    },
  },
  textFieldInputProps: {
    sx: {
      color: "white",
    },
  },
};

type FormOptions = {
  username: string;
  id: string;
};

const JoinRoomForm = () => {
  const [formOptions, setFormOptions] = useState<FormOptions>({
    username: "",
    id: "",
  });
  const navigate = useNavigate();

  return (
    <Box sx={joinRoomFormStyles.container}>
      <header style={{ marginBottom: "50px" }}>
        <h1 style={{ color: "white" }}>Join Room</h1>
      </header>

      <form style={{ display: "flex", justifyContent: "center" }}>
        <Box sx={joinRoomFormStyles.formWrapper as React.CSSProperties}>
          <TextField
            label="Your username"
            required
            sx={joinRoomFormStyles.textField}
            value={formOptions.username}
            onChange={(e) =>
              setFormOptions((prevOptions) => {
                return { ...prevOptions, username: e.target.value };
              })
            }
            InputProps={joinRoomFormStyles.textFieldInputProps}
          />

          <TextField
            label="Room ID"
            required
            sx={joinRoomFormStyles.textField}
            value={formOptions.id}
            onChange={(e) =>
              setFormOptions((prevOptions) => {
                return { ...prevOptions, id: e.target.value };
              })
            }
            InputProps={joinRoomFormStyles.textFieldInputProps}
          />

          <ButtonGroup variant="contained" fullWidth>
            <Button type="submit">Join to room</Button>

            <Button type="button" onClick={() => navigate("/")}>
              Go back
            </Button>
          </ButtonGroup>
        </Box>
      </form>
    </Box>
  );
};

export default JoinRoomForm;
