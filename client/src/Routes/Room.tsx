import { Assignment, Delete, Done, Settings } from "@mui/icons-material";
import { AppBar, Box, Button, Divider, IconButton, Toolbar, Typography } from "@mui/material";

import { useParams } from "react-router-dom";

import Task from "../UI/Task";
import AddButton from "../UI/AddButton";
import EditButton from "../UI/EditButton";
import SettingsButton from "../UI/SettingsButton";
import { useEffect } from "react";

const roomStyles = {
  container: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    height: "calc(100vh - 64px)",
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
  },
  buttons: {
    paddingX: "16px",
    justifyContent: "start",
  },
};

const Room = () => {
  const { id } = useParams();

  useEffect(() => {
    const body = document.querySelector("body");
    const root = document.getElementById("root");

    const bodyStyles = body?.style;
    const rootStyles = root?.style;

    if (bodyStyles && rootStyles) {
      bodyStyles.display = "block";
      rootStyles.maxWidth = "none";
    }
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between", backgroundColor: "#424242" }}>
          <Typography variant="h6" fontWeight={"bold"}>
            Any Task
          </Typography>

          <IconButton size="large">
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box id="todos" sx={roomStyles.container}>
        <Box sx={roomStyles.buttonsWrapper}>
          <Button size="large" sx={roomStyles.buttons} startIcon={<Assignment />}>
            Active
          </Button>

          <Button size="large" sx={roomStyles.buttons} startIcon={<Done />}>
            Completed
          </Button>

          <Divider sx={{ borderColor: "white" }} />

          <Button size="large" sx={roomStyles.buttons} startIcon={<Delete />}>
            Bin
          </Button>
        </Box>

        <Box sx={roomStyles.taskWrapper}>
          {[...new Array(9)].map((_: undefined, idx: number) => {
            return <Task key={idx} description={`${idx}`} />;
          })}
        </Box>
      </Box>

      <AddButton />
      <EditButton />
      <SettingsButton />
    </>
  );
};

export default Room;
