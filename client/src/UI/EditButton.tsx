import { Edit } from "@mui/icons-material";
import { Tooltip, Fab } from "@mui/material";

type Props = {
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditButton = (props: Props) => {
  const { setIsEditable } = props;

  return (
    <Tooltip title="Edit task" placement="left">
      <Fab
        aria-label="Add todo"
        sx={{ position: "fixed", right: 20, bottom: 96 }}
        onClick={() => setIsEditable((prev) => !prev)}>
        <Edit />
      </Fab>
    </Tooltip>
  );
};

export default EditButton;
