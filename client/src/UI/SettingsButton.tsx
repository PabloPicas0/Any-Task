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

const settingsButtonStyles = {
  settingsBtn: {
    position: "fixed",
    right: 20,
    bottom: 20,
  },
  dialogPaperProps: {
    sx: {
      width: "100%",
      maxWidth: "300px",
    },
  },
  options: {
    display: "flex",
    justifyContent: "space-between",
  },
  justifyContent: {
    justifyContent: "center",
  },
};

const SettingsButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Tooltip title="Room permissions" placement="left">
        <Fab aria-label="Add todo" sx={settingsButtonStyles.settingsBtn} onClick={() => setOpen(true)}>
          <Settings />
        </Fab>
      </Tooltip>

      <Dialog onClose={() => setOpen(false)} open={open} PaperProps={settingsButtonStyles.dialogPaperProps}>
        <DialogTitle textAlign={"center"}>Permissions</DialogTitle>

        <DialogContent>
          <Box sx={settingsButtonStyles.options}>
            <Switch />
            <Typography>test 1</Typography>
          </Box>

          <Box sx={settingsButtonStyles.options}>
            <Switch />
            <Typography>test 2</Typography>
          </Box>

          <Box sx={settingsButtonStyles.options}>
            <Switch />
            <Typography>test 3</Typography>
          </Box>

          <Box sx={settingsButtonStyles.options}>
            <Switch />
            <Typography>test 4</Typography>
          </Box>

          <Box sx={settingsButtonStyles.options}>
            <Switch />
            <Typography>test 5</Typography>
          </Box>
        </DialogContent>

        <DialogActions sx={settingsButtonStyles.justifyContent}>
          <Button variant="contained">Edit permissions</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SettingsButton;
