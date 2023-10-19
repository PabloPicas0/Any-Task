import { Box, Button, Typography } from "@mui/material";
import "./App.css";
import { InventoryOutlined, LoginOutlined } from "@mui/icons-material";

const appStyles = {
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
  return (
    <>
      <Box component={"header"} sx={appStyles.header}>
        <Typography component={"h1"} sx={{ ...appStyles.headerText, ...appStyles.colors.grey100 }}>
          Create or join to the room
        </Typography>
      </Box>

      <Box component={"main"} sx={appStyles.main}>
        <Button variant="outlined" sx={appStyles.mainButton}>
          <InventoryOutlined fontSize="large" sx={appStyles.colors.grey100} />
          <Typography component={"p"} sx={appStyles.colors.grey100}>
            Create task room
          </Typography>
        </Button>

        <Button variant="outlined" sx={appStyles.mainButton}>
          <LoginOutlined fontSize="large" sx={appStyles.colors.grey100} />
          <Typography component={"p"} sx={appStyles.colors.grey100}>
            Join task room
          </Typography>
        </Button>
      </Box>
    </>
  );
}

export default App;
