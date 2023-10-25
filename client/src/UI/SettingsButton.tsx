import { Settings } from "@mui/icons-material";
import {
  Tooltip,
  Fab,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Switch,
  Typography,
} from "@mui/material";

import { useState } from "react";

const SettingsButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Tooltip title="Room permissions" placement="left">
        <Fab
          aria-label="Add todo"
          sx={{ position: "fixed", right: 20, bottom: 20 }}
          onClick={() => setOpen(true)}>
          <Settings />
        </Fab>
      </Tooltip>

      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        PaperProps={{ sx: { width: "100%", maxWidth: "300px" } }}>
        <DialogTitle textAlign={"center"}>Permissions</DialogTitle>

        <DialogContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Switch />
            <Typography>test 1</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Switch />
            <Typography>test 2</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Switch />
            <Typography>test 3</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Switch />
            <Typography>test 4</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Switch />
            <Typography>test 5</Typography>
          </Box>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center" }}>
          <Button variant="contained">Edit permissions</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SettingsButton;
