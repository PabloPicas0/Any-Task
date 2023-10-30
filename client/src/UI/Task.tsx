import { Comment, Delete } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

type TaskProps = {
  description?: string;
  key: number;
  isEditable: boolean;
};

const Task = (props: TaskProps) => {
  const { description, isEditable } = props;

  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton edge="end" aria-label="comments">
            <Comment />
          </IconButton>

          <IconButton sx={{ display: isEditable ? "inline-flex" : "none" }} disabled={!isEditable}>
            <Delete />
          </IconButton>
        </>
      }>
      <ListItemButton sx={{ padding: "1.2rem 3rem" }}>
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>

        <ListItemText primary={description} />
      </ListItemButton>
    </ListItem>
  );
};

export default Task;
