import { Delete } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

type TaskProps = {
  description?: string;
  key: number;
  isEditable: boolean;
};

const Task = (props: TaskProps) => {
  const { description, isEditable } = props;

  return (
    <Box sx={{ padding: "1.2rem 3rem" }}>
      <Typography textAlign={"start"} color={"HighlightText"}>
        {description}
      </Typography>

      <IconButton sx={{ display: isEditable ? "inline-flex" : "none" }} disabled={!isEditable}>
        <Delete />
      </IconButton>
    </Box>
  );
};

export default Task;
