import { Add, CheckBox, CheckBoxOutlineBlank, Edit, Settings } from "@mui/icons-material";
import { Box, Button, Fab, Tooltip, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Task from "../UI/Task";

const roomStyles = {};

const Room = () => {
  const { id } = useParams();

  return (
    <>
      <Box id="todos" sx={{ display: "flex", border: "1px dashed white", height: "354px" }}>
        <Box
          sx={{
            borderRight: "1px dashed white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingX: "20px",
            gap: "20px",
          }}>
          <Button sx={{ justifyContent: "start" }} startIcon={<CheckBoxOutlineBlank />}>
            Active
          </Button>

          <Button sx={{ justifyContent: "start" }} startIcon={<CheckBox />}>
            Completed
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            paddingY: "20px",
            overflowY: "auto",
            width: "100%",
          }}>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </Box>
      </Box>

      <Tooltip title="Add task" placement="left">
        <Fab aria-label="Add todo" sx={{ position: "fixed", right: 20, bottom: 172 }}>
          <Add />
        </Fab>
      </Tooltip>

      <Tooltip title="Edit task" placement="left">
        <Fab aria-label="Add todo" sx={{ position: "fixed", right: 20, bottom: 96 }}>
          <Edit />
        </Fab>
      </Tooltip>

      <Tooltip title="Room permissions" placement="left">
        <Fab aria-label="Add todo" sx={{ position: "fixed", right: 20, bottom: 20 }}>
          <Settings />
        </Fab>
      </Tooltip>
    </>
  );
};

export default Room;
