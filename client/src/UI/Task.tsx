import { Comment, Delete } from "@mui/icons-material";
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";

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
            <Comment sx={{ color: blue[700] }} />
          </IconButton>

          <IconButton sx={{ display: isEditable ? "inline-flex" : "none" }} disabled={!isEditable}>
            <Delete sx={{ color: red[300] }} />
          </IconButton>
        </>
      }
      sx={(theme) => ({
        "& .MuiTouchRipple-child": {
          backgroundColor: `${theme.palette.primary.main}`,
        },
      })}>
      <ListItemButton sx={{ padding: "1.2rem 3rem" }}>
        <ListItemIcon>
          <Checkbox
            sx={{
              color: grey[200],
              "&.Mui-checked": {
                color: grey[200],
              },
              "&:hover": {
                backgroundColor: "rgba(245, 245, 245, 0.05)",
              },
            }}
          />
        </ListItemIcon>

        <ListItemText primary={description} sx={{ color: "whitesmoke" }} />
      </ListItemButton>
    </ListItem>
  );
};

export default Task;
