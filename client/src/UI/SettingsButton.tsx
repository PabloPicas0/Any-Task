import { Settings } from "@mui/icons-material";
import { Tooltip, Fab } from "@mui/material";

const SettingsButton = () => {
  return (
    <Tooltip title="Room permissions" placement="left">
      <Fab aria-label="Add todo" sx={{ position: "fixed", right: 20, bottom: 20 }}>
        <Settings />
      </Fab>
    </Tooltip>
  );
};

export default SettingsButton;
