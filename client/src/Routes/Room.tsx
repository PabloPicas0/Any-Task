import { Add, Edit } from "@mui/icons-material";
import { Box, Fab, Tooltip, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const roomStyles = {};

const Room = () => {
  const { id } = useParams();

  return (
    <Box>
      <Typography color={"white"}>{id}</Typography>

      <Tooltip title="Add task" placement="left">
        <Fab aria-label="Add todo" sx={{ position: "fixed", right: 20, bottom: 96 }}>
          <Add />
        </Fab>
      </Tooltip>

      <Tooltip title="Edit task" placement="left">
        <Fab aria-label="Add todo" sx={{ position: "fixed", right: 20, bottom: 20 }}>
          <Edit />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default Room;
