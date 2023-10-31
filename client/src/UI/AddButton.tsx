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

const AddButton = () => {
  const [open, setOpen] = useState<boolean>(false);

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
        <DialogTitle textAlign={"center"}>Add task</DialogTitle>

        <DialogContent>
          <TextField label="Task description" margin="dense" />
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center" }}>
          <Tooltip title="Add to task list">
            <IconButton
              sx={(theme) => ({
                backgroundColor: theme.palette.grey[50],
                boxShadow: theme.shadows[2],
              })}>
              <PostAdd fontSize="large" />
            </IconButton>
          </Tooltip>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddButton;
