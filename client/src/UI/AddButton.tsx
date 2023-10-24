import { Add } from "@mui/icons-material";
import { Tooltip, Fab, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";

import { useState } from "react";

const AddButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Tooltip title="Add task" placement="left">
        <Fab
          aria-label="Add todo"
          sx={{ position: "fixed", right: 20, bottom: 172 }}
          onClick={() => setOpen(true)}>
          <Add />
        </Fab>
      </Tooltip>

      <Dialog onClose={() => setOpen(false)} open={open}>
        <DialogTitle>Add task</DialogTitle>

        <DialogContent>
          <TextField label="TODO" margin="dense" />
        </DialogContent>

        <DialogActions>
          <Button variant="contained">Add to list</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddButton;
