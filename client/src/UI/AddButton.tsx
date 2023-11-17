import { Add, PostAdd } from "@mui/icons-material";
import {
  Tooltip,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  IconButton,
} from "@mui/material";

import { useState } from "react";
import { Form } from "react-router-dom";

import Error from "./Error";


const AddButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [taskDescription, setTaskDescription] = useState<string>("");

  return (
    <>
      <Tooltip title="Add task" placement="left">
        <Fab
          aria-label="Add todo"
          sx={{ position: "fixed", right: 30, bottom: 96 }}
          onClick={() => setOpen(true)}>
          <Add />
        </Fab>
      </Tooltip>

      <Dialog onClose={() => setOpen(false)} open={open}>
        <Error isError={error} setError={setError} message="Failed to add task. Please try agian." />

        <Form method="POST">
          <DialogTitle textAlign={"center"}>Add task</DialogTitle>

          <DialogContent>
            <TextField
              label="Task description"
              margin="dense"
              required
              autoFocus
              name="todo"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </DialogContent>

          <DialogActions sx={{ justifyContent: "center" }}>
            <Tooltip title="Add to task list">
              <IconButton
                sx={(theme) => ({
                  backgroundColor: theme.palette.grey[50],
                  boxShadow: theme.shadows[2],
                })}
                type="submit"
                name="intent"
                value="add">
                <PostAdd fontSize="large" />
              </IconButton>
            </Tooltip>
          </DialogActions>
        </Form>
      </Dialog>
    </>
  );
};

export default AddButton;
