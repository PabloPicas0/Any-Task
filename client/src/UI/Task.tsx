import { Comment, Delete, Send } from "@mui/icons-material";
import {
  Checkbox,
  Collapse,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";

import { useState } from "react";
import { useSubmit } from "react-router-dom";

type TaskProps = {
  description?: string;
  key: string;
  todoId: string;
  isActive: boolean;
  comments?:
    | {
        author: string;
        text: string;
      }[]
    | [];
};

const Task = (props: TaskProps) => {
  const { description, comments, todoId, isActive } = props;

  const [openComments, setOpenComments] = useState<boolean>(false);

  const submit = useSubmit();

  const handleDelete = () => {
    submit(
      {
        intent: "delete",
        taskId: todoId,
      },
      {
        method: "DELETE",
        encType: "application/x-www-form-urlencoded",
      }
    );
  };

  const handleComplete = () => {
    submit(
      {
        intent: "complete",
        taskId: todoId,
        isActive: isActive,
      },
      {
        method: "DELETE",
        encType: "application/x-www-form-urlencoded",
      }
    );
  };

  return (
    <>
      <ListItem
        secondaryAction={
          <>
            <IconButton
              edge="end"
              aria-label="comments"
              sx={{ marginRight: "10px" }}
              onClick={() => setOpenComments((prev) => !prev)}>
              <Comment sx={{ color: blue[700] }} />
            </IconButton>

            <IconButton sx={{ marginRight: "20px" }} onClick={handleDelete}>
              <Delete sx={{ color: red[300] }} />
            </IconButton>
          </>
        }
        sx={(theme) => ({
          "& .MuiTouchRipple-child": {
            backgroundColor: `${theme.palette.primary.main}`,
          },
        })}>
        <ListItemButton sx={{ padding: "1.2rem 0rem" }}>
          <ListItemIcon>
            <Checkbox
              onClick={handleComplete}
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

      <Collapse in={openComments} timeout={"auto"} unmountOnExit>
        <List
          component={"div"}
          disablePadding
          sx={{
            backgroundColor: grey[800],
            marginX: "20px",
            borderRadius: "5px",
            paddingX: "10px",
            paddingBottom: "10px",
          }}>
          {comments?.map((comment, idx) => {
            const { author, text } = comment;

            return <ListItemText primary={`${author}: ${text}`} key={`${text}${idx}`} />;
          })}

          <OutlinedInput
            fullWidth
            size="small"
            placeholder="Comment"
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <Send />
                </IconButton>
              </InputAdornment>
            }
            sx={{ marginTop: "20px" }}
          />
        </List>
      </Collapse>
    </>
  );
};

export default Task;
