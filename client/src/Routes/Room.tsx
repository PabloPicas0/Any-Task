import { CheckBox, CheckBoxOutlineBlank, Delete } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

import { useParams } from "react-router-dom";

import Task from "../UI/Task";
import AddButton from "../UI/AddButton";
import EditButton from "../UI/EditButton";
import SettingsButton from "../UI/SettingsButton";

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
          border: "1px solid white",
          height: "354px",
          marginX: "10px",
        }}>
        <Box
          sx={{
            borderRight: { xs: "none", md: "1px solid white" },
            borderBottom: { xs: "1px solid white", md: "none" },
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
            return <Task key={idx} />;
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
