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

import { useState, useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import { LoaderData } from "../Routes/Room";

const settingsButtonStyles = {
  settingsBtn: {
    position: "fixed",
    right: 30,
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
    gap: "30px",
    alignItems: "center",
  },
  justifyContent: {
    justifyContent: "center",
  },
};

const SettingsButton = () => {
  const { roomDetails } = useLoaderData() as LoaderData;

  const { editPermissions, editTask, newTasks } = roomDetails.roomOptions;

  const [open, setOpen] = useState<boolean>(false);
  const [permissions, setPermissions] = useState({
    editPermissions: editPermissions,
    editTask: editTask,
    newTasks: newTasks,
  });

  const defaultPermissions = useMemo(() => ({ ...permissions }), [editPermissions, editTask, newTasks]);
  
  return (
    <>
      <Tooltip title="Room permissions" placement="left">
        <Fab aria-label="Add todo" sx={settingsButtonStyles.settingsBtn} onClick={() => setOpen(true)}>
          <Settings />
        </Fab>
      </Tooltip>

      <Dialog
        onClose={() => {
          setOpen(false);
          setPermissions(defaultPermissions);
        }}
        open={open}
        PaperProps={settingsButtonStyles.dialogPaperProps}>
        <DialogTitle textAlign={"center"}>Permissions</DialogTitle>

        <DialogContent>
          <Box sx={settingsButtonStyles.options}>
            <Switch
              checked={permissions.newTasks}
              onChange={() =>
                setPermissions((prevPermissions) => {
                  return { ...prevPermissions, newTasks: !prevPermissions.newTasks };
                })
              }
            />
            <Typography>Allow add new tasks</Typography>
          </Box>

          <Box sx={settingsButtonStyles.options}>
            <Switch
              checked={permissions.editTask}
              onChange={() =>
                setPermissions((prevPermissions) => {
                  return { ...prevPermissions, editTask: !prevPermissions.editTask };
                })
              }
            />
            <Typography>Allow edit tasks</Typography>
          </Box>

          <Box sx={settingsButtonStyles.options}>
            <Switch
              checked={permissions.editPermissions}
              onChange={() =>
                setPermissions((prevPermissions) => {
                  return { ...prevPermissions, editPermissions: !prevPermissions.editPermissions };
                })
              }
            />
            <Typography>Allow edit permissions</Typography>
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
