import { Box, Button, ButtonGroup, Switch, TextField, Typography } from "@mui/material";

import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { url } from "../Utils/api";

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
  textFieldInputProps: {
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

type FormOptions = {
  username: string;
  addNewTasks: boolean;
  editTasks: boolean;
  editPermissions: boolean;
};

type ServerResponse = {
  roomId: string;
};

const CreateRoomForm = () => {
  const [formOptions, setFormOptions] = useState<FormOptions>({
    username: "",
    addNewTasks: false,
    editTasks: false,
    editPermissions: false,
  });
  const [serverError, setServerErrror] = useState(false);

  const navigate = useNavigate();

  const handleNewRoom = async () => {
    try {
      const { username, addNewTasks, editPermissions, editTasks } = formOptions;

      const req = await fetch(`${url}/api/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `username=${username}&allowNewTasks=${addNewTasks}&editTasks=${editTasks}&editPermissions=${editPermissions}`,
      });

      if (!req.ok) {
        setServerErrror(true);
        return;
      }

      const res: ServerResponse = await req.json();

      const { roomId } = res;

      navigate(`/room/${roomId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <header>
        <h1 style={createRoomFormStyles.colors.gray}>Create room</h1>
      </header>

      <Form style={createRoomFormStyles.form as React.CSSProperties} onSubmit={handleNewRoom}>
        <Box sx={createRoomFormStyles.formWrapper}>
          <TextField
            label="Username"
            margin="normal"
            fullWidth
            required
            value={formOptions.username}
            onChange={(e) =>
              setFormOptions((prevForm) => {
                return { ...prevForm, username: e.target.value };
              })
            }
            sx={createRoomFormStyles.textField}
            InputLabelProps={createRoomFormStyles.textFieldInputLabelProps}
            InputProps={createRoomFormStyles.textFieldInputProps}
          />

          <Box>
            <Typography component={"h2"} marginBottom={"20px"} color={"white"}>
              Room options
            </Typography>

            <Box>
              <Box sx={createRoomFormStyles.options}>
                <Switch
                  checked={formOptions.addNewTasks}
                  onChange={(e) => {
                    setFormOptions((prevForm) => {
                      return { ...prevForm, addNewTasks: e.target.checked };
                    });
                  }}
                />
                <Typography color={"white"} width={162} textAlign={"start"}>
                  Allow add new tasks
                </Typography>
              </Box>

              <Box sx={createRoomFormStyles.options}>
                <Switch
                  checked={formOptions.editTasks}
                  onChange={(e) => {
                    setFormOptions((prevForm) => {
                      return { ...prevForm, editTasks: e.target.checked };
                    });
                  }}
                />
                <Typography color={"white"} width={162} textAlign={"start"}>
                  Allow edit tasks
                </Typography>
              </Box>

              <Box sx={createRoomFormStyles.options}>
                <Switch
                  checked={formOptions.editPermissions}
                  onChange={(e) => {
                    setFormOptions((prevForm) => {
                      return { ...prevForm, editPermissions: e.target.checked };
                    });
                  }}
                />
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
      </Form>
    </>
  );
};

export default CreateRoomForm;
