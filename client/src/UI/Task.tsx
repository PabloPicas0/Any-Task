import { Comment, Delete, SendSharp } from "@mui/icons-material";
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
  TextField,
} from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";

import { useMemo, useState } from "react";
import { useLoaderData, useLocation, useSubmit } from "react-router-dom";

const taskStyles = {
  checkbox: {
    color: grey[200],
    "&.Mui-checked": {
      color: grey[200],
    },
    "&:hover": {
      backgroundColor: "rgba(245, 245, 245, 0.05)",
    },
  },
  list: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: grey[800],
    marginX: "20px",
    borderRadius: "5px",
    paddingY: "10px",
    paddingX: "80px",
  },
  textField: {
    styles: {
      marginTop: "20px",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: grey[300],
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          border: "1px solid gray",
        },
        "&:hover fieldset": {
          borderColor: "gray",
        },
      },
    },
    InputPropsStyles: {
      sx: {
        color: "#fff",
      },
    },
  },
};

type TaskProps = {
  description?: string;
  key: string;
  todoId: string;
  isActive: boolean;
  isBin: boolean;
  comments:
    | {
        author: string;
        text: string;
      }[]
    | [];
};

const Task = (props: TaskProps) => {
  const { description, comments, todoId, isActive, isBin } = props;

  const [openComments, setOpenComments] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(!isActive);
  const [commnet, setCommnet] = useState<string>("");

  const submit = useSubmit();

  // const {roomDetails} = useLoaderData()
  const { search } = useLocation();
  const currentUser = useMemo(() => {
    return new URLSearchParams(search).get("username");
  }, []);

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
    setChecked((prev) => !prev);
  };

  const handleCommnet = () => {
    submit(
      {
        intent: "comment",
        taskId: todoId,
        commnet: commnet,
      },
      {
        method: "POST",
        encType: "application/x-www-form-urlencoded",
      }
    );
    setCommnet("");
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

            <IconButton sx={{ marginRight: "20px" }} onClick={handleDelete} disabled={isBin}>
              <Delete sx={{ color: isBin ? grey[500] : red[300] }} />
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
            <Checkbox onClick={handleComplete} sx={taskStyles.checkbox} disabled={isBin} checked={checked} />
          </ListItemIcon>

          <ListItemText primary={description} sx={{ color: "whitesmoke" }} />
        </ListItemButton>
      </ListItem>

      <Collapse in={openComments} timeout={"auto"} unmountOnExit>
        <List component={"div"} sx={taskStyles.list}>
          {comments.length > 0 ? (
            comments.map((comment, idx) => {
              const { author, text } = comment;
              const isUserText = author === currentUser;

              return (
                <ListItemText
                  primary={`${author}: ${text}`}
                  key={`${text}${idx}`}
                  sx={{
                    alignSelf: isUserText ? "end" : "start",
                    paddingX: "20px",
                    paddingY: "5px",
                    backgroundColor: grey[200],
                    borderRadius: "20px",
                  }}
                />
              );
            })
          ) : (
            <ListItemText
              primary={"Looks like no one was here. Be first and add comment !"}
              sx={{ color: "white" }}
            />
          )}

          <TextField
            fullWidth
            disabled={isBin || !isActive}
            size="small"
            autoFocus
            placeholder="Comment"
            value={commnet}
            onChange={(e) => setCommnet(e.target.value)}
            InputProps={{
              ...taskStyles.textField.InputPropsStyles,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleCommnet}
                    disabled={commnet === "" ? true : false}
                    TouchRippleProps={{
                      style: {
                        color: blue[300],
                      },
                    }}>
                    <SendSharp sx={{ color: commnet === "" ? grey[400] : "white" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={taskStyles.textField.styles}
          />
        </List>
      </Collapse>
    </>
  );
};

export default Task;
