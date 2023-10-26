import { CheckBox, CheckBoxOutlineBlank, Delete } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

import { useParams } from "react-router-dom";

import Task from "../UI/Task";
import AddButton from "../UI/AddButton";
import EditButton from "../UI/EditButton";
import SettingsButton from "../UI/SettingsButton";

const roomStyles = {
  container: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    border: "1px solid white",
    height: "354px",
    marginX: "10px",
  },
  buttonsWrapper: {
    borderRight: {
      xs: "none",
      md: "1px solid white",
    },
    borderBottom: {
      xs: "1px solid white",
      md: "none",
    },
    display: "flex",
    flexDirection: {
      xs: "row",
      md: "column",
    },
    justifyContent: "space-evenly",
    paddingX: { xs: "0px", sm: "60px" },
    gap: {
      xs: "20px",
      md: "20px",
    },
  },
  taskWrapper: {
    paddingY: "20px",
    overflowY: "auto",
    width: "100%",
  },
  flexCenter: {
    justifyContent: "start",
  },
};

const Room = () => {
  const { id } = useParams();

  return (
    <>
      <Box id="todos" sx={roomStyles.container}>
        <Box sx={roomStyles.buttonsWrapper}>
          <Button sx={roomStyles.flexCenter} startIcon={<CheckBoxOutlineBlank />}>
            Active
          </Button>

          <Button sx={roomStyles.flexCenter} startIcon={<CheckBox />}>
            Done
          </Button>

          <Button sx={roomStyles.flexCenter} startIcon={<Delete />}>
            Bin
          </Button>
        </Box>

        <Box sx={roomStyles.taskWrapper}>
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
