import { Add } from "@mui/icons-material";
import { Tooltip, Fab } from "@mui/material";

const AddButton = () => {
  return (
    <Tooltip title="Add task" placement="left">
      <Fab aria-label="Add todo" sx={{ position: "fixed", right: 20, bottom: 172 }}>
        <Add />
      </Fab>
    </Tooltip>
  );
};

export default AddButton;
