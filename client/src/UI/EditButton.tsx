import { Edit } from "@mui/icons-material";
import { Tooltip, Fab } from "@mui/material";

const EditButton = () => {
  return (
    <Tooltip title="Edit task" placement="left">
      <Fab aria-label="Add todo" sx={{ position: "fixed", right: 20, bottom: 96 }}>
        <Edit />
      </Fab>
    </Tooltip>
  );
};

export default EditButton
