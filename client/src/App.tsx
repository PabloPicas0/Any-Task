import { Box, Button, Typography } from "@mui/material";
import { InventoryOutlined, LoginOutlined } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import "./App.css";

const appStyles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    marginBottom: "7rem",
  },
  headerText: {
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
    fontWeight: 700,
  },
  colors: {
    grey100: {
      color: "rgb(243 244 246)",
    },
  },
  main: {
    display: "flex",
    gap: "2.75rem",
    flexDirection: {
      xs: "column",
      sm: "row",
    },
    justifyContent: "center",
    alignItems: "center",
  },
  mainButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    borderColor: "rgb(148 163 184)",
    padding: "1.25rem",
    width: "13rem",
    height: "9rem",
    gap: "1rem",
  },
};

function App() {
  const navigate = useNavigate();

  return (
      <Box sx={appStyles.container}>
        <Box component={"header"} sx={appStyles.header}>
          <Typography component={"h1"} sx={{ ...appStyles.headerText, ...appStyles.colors.grey100 }}>
            Create or join to the room
          </Typography>
        </Box>

        <Box component={"main"} sx={appStyles.main}>
          <Button variant="outlined" sx={appStyles.mainButton} onClick={() => navigate("/create")}>
            <InventoryOutlined fontSize="large" sx={appStyles.colors.grey100} />
            <Typography component={"p"} sx={appStyles.colors.grey100}>
              Create task room
            </Typography>
          </Button>

          <Button variant="outlined" sx={appStyles.mainButton} onClick={() => navigate("/join")}>
            <LoginOutlined fontSize="large" sx={appStyles.colors.grey100} />
            <Typography component={"p"} sx={appStyles.colors.grey100}>
              Join task room
            </Typography>
          </Button>
        </Box>
      </Box>
  );
}

export default App;
