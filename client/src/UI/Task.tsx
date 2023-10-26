import { Box, Typography } from "@mui/material";

type TaskProps = {
  description?: string;
  key: number;
};

const Task = (props: TaskProps) => {
  const { description } = props;

  return (
    <Box sx={{ padding: "1.2rem 3rem" }}>
      <Typography textAlign={"start"} color={"HighlightText"}>
        {description}
      </Typography>
    </Box>
  );
};

export default Task;
