import { Assignment, Delete, Done, Logout } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

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
    gap: {
      xs: 0,
      md: "10px",
    },
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

export type LoaderData = {
  roomDetails: ServerResponse;
};

const Room = () => {
  const [tasks, setTasks] = useState<string>("active");

  const { roomDetails } = useLoaderData() as LoaderData;

  const active = roomDetails.tasks.active;
  const completed = roomDetails.tasks.completed;
  const bin = roomDetails.tasks.bin;

  const { isAdmin } = roomDetails.roomUsers[0];

  // console.log(isAdmin);

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
            onClick={() => setTasks("active")}>
            Active
          </Button>

          <Button
            size="large"
            sx={roomStyles.buttons}
            startIcon={<Done sx={roomStyles.colors.grey50} />}
            onClick={() => setTasks("completed")}>
            Completed
          </Button>

          <Divider sx={{ borderColor: "white" }} />

          <Button
            size="large"
            sx={roomStyles.buttons}
            startIcon={<Delete sx={roomStyles.colors.grey50} />}
            onClick={() => setTasks("bin")}>
            Bin
          </Button>
        </Box>

        <List sx={{ ...roomStyles.taskWrapper, display: tasks === "active" ? "block" : "none" }}>
          {active.map((task) => {
            const { description, _id, isActive, isBin, comments } = task;

            return (
              <Task
                description={description}
                key={_id}
                isActive={isActive}
                isBin={isBin}
                comments={comments}
                todoId={_id}
              />
            );
          })}
        </List>

        <List sx={{ ...roomStyles.taskWrapper, display: tasks === "completed" ? "block" : "none" }}>
          {completed.map((task) => {
            const { description, _id, isActive, isBin, comments } = task;

            return (
              <Task
                description={description}
                key={_id}
                isActive={isActive}
                isBin={isBin}
                comments={comments}
                todoId={_id}
              />
            );
          })}
        </List>

        <List sx={{ ...roomStyles.taskWrapper, display: tasks === "bin" ? "block" : "none" }}>
          <ListItemText
            primary="Bin will be automatically cleared after 30 days"
            sx={roomStyles.colors.grey50}
          />

          {bin.map((task) => {
            const { description, _id, isActive, isBin, comments } = task;

            return (
              <Task
                description={description}
                key={_id}
                isActive={isActive}
                isBin={isBin}
                comments={comments}
                todoId={_id}
              />
            );
          })}
        </List>
      </Box>

      <AddButton height={isAdmin ? 96 : 20} />
      {isAdmin ? <SettingsButton /> : null}
    </>
  );
};

export default Room;
