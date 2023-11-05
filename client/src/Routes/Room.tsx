import { Assignment, Delete, Done, Logout } from "@mui/icons-material";
import { AppBar, Box, Button, Divider, IconButton, List, Toolbar, Tooltip, Typography } from "@mui/material";

import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import Task from "../UI/Task";
import AddButton from "../UI/AddButton";
import SettingsButton from "../UI/SettingsButton";

import { ServerResponse } from "../Utils/getRoomDetails";

const roomStyles = {
  container: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    height: {
      xs: "calc(100vh - 56px)",
      md: "calc(100vh - 64px)",
    },
  },
  toolbar: {
    justifyContent: "space-between",
    backgroundColor: "#616161",
  },
  buttonsWrapper: {
    backgroundColor: "#424242",
    width: {
      xs: "100%",
      md: "240px",
    },
    display: "flex",
    flexDirection: {
      xs: "row",
      md: "column",
    },
    justifyContent: {
      xs: "space-evenly",
      md: "start",
    },
    gap: "10px",
    paddingTop: 3,
  },
  taskWrapper: {
    backgroundColor: "#212121",
    paddingY: "20px",
    overflowY: "auto",
    width: "100%",
    height: "100%",
  },
  buttons: {
    color: "#fafafa",
    paddingX: "16px",
    justifyContent: "start",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.1)",
    },
  },
  colors: {
    grey50: {
      color: "#fafafa",
    },
  },
};

type TaskProps = {
  description: string;
  isActive: boolean;
  isBin: boolean;
};

type LoaderData = {
  roomDetails: ServerResponse;
};

/*
 * TODO:
 *  - Make app more responsive on moblie
 *
 */

const Room = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const { roomDetails } = useLoaderData() as LoaderData;

  console.log(roomDetails);

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={roomStyles.toolbar}>
          <Typography variant="h6" fontWeight={"bold"}>
            Any Task
          </Typography>

          <Tooltip title="Leave room">
            <IconButton
              href="/"
              size="large"
              sx={{
                ...roomStyles.colors.grey50,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}>
              <Logout />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Box id="todos" sx={roomStyles.container}>
        <Box sx={roomStyles.buttonsWrapper}>
          <Button
            size="large"
            sx={roomStyles.buttons}
            startIcon={<Assignment sx={roomStyles.colors.grey50} />}
            onClick={() => setTasks(roomDetails.tasks.active)}>
            Active
          </Button>

          <Button
            size="large"
            sx={roomStyles.buttons}
            startIcon={<Done sx={roomStyles.colors.grey50} />}
            onClick={() => setTasks(roomDetails.tasks.completed)}>
            Completed
          </Button>

          <Divider sx={{ borderColor: "white" }} />

          <Button
            size="large"
            sx={roomStyles.buttons}
            startIcon={<Delete sx={roomStyles.colors.grey50} />}
            onClick={() => setTasks(roomDetails.tasks.bin)}>
            Bin
          </Button>
        </Box>

        <List sx={roomStyles.taskWrapper}>
          {tasks.map((task, idx) => {
            const { description } = task;
            const author = idx % 2 === 0 ? "Me" : "You";

            return <Task description={description} key={idx} comments={[{ author: author, text: "test" }]} />;
          })}
        </List>
      </Box>

      <AddButton />
      <SettingsButton />
    </>
  );
};

export default Room;
