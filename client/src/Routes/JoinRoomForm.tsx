import { Box, Button, ButtonGroup, TextField } from "@mui/material";

import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

import { url } from "../Utils/api";
import Error from "../UI/Error";

const joinRoomFormStyles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  form: {
    display: "flex",
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
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const { id, username } = formOptions;

    try {
      const req = await fetch(`${url}/api/join`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `id=${id}&clientUsername=${username}`,
      });

      if (req.ok) {
        navigate({ pathname: `/room/${id}`, search: `?username=${username}` });
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);

      setError(true);
    }
  };

  return (
    <Box sx={joinRoomFormStyles.container}>
      <Error
        isError={error}
        setError={setError}
        message="Invalid ID or connection error. Please try again."
      />

      <header style={{ marginBottom: "50px" }}>
        <h1 style={{ color: "white" }}>Join Room</h1>
      </header>

      <Form style={joinRoomFormStyles.form} onSubmit={handleSubmit}>
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
      </Form>
    </Box>
  );
};

export default JoinRoomForm;
