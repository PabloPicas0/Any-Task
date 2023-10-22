import { Add, CheckBox, CheckBoxOutlineBlank, Delete, Edit, Settings } from "@mui/icons-material";
import { Box, Button, Fab, Tooltip } from "@mui/material";
import { useParams } from "react-router-dom";
import Task from "../UI/Task";

const roomStyles = {};

const Room = () => {
  const { id } = useParams();

  return (
    <>
      <Box
        id="todos"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          border: "1px dashed white",
          height: "354px",
          marginX: "10px",
        }}>
        <Box
          sx={{
            borderRight: { xs: "none", md: "1px dashed white" },
            borderBottom: { xs: "1px dashed white", md: "none" },
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            justifyContent: "center",
            paddingX: "20px",
            gap: { xs: "40px", md: "20px" },
          }}>
          <Button sx={{ justifyContent: "start" }} startIcon={<CheckBoxOutlineBlank />}>
            Active
          </Button>

          <Button sx={{ justifyContent: "start" }} startIcon={<CheckBox />}>
            Completed
          </Button>

          <Button sx={{ justifyContent: "start" }} startIcon={<Delete />}>
            Bin
          </Button>
        </Box>

        <Box
          sx={{
            paddingY: "20px",
            overflowY: "auto",
            width: "100%",
          }}>
          {[...new Array(9)].map((_: undefined, idx: number) => {
            return <Task key={idx}/>;
          })}
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
