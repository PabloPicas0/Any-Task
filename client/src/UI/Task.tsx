import { Box, Typography } from "@mui/material";

const Task = () => {
  return (
    <Box sx={{ padding: "1.2rem 3rem" }}>
      <Typography textAlign={"start"} color={"HighlightText"}>
        TODO this
      </Typography>
    </Box>
  );
};

export default Task;
