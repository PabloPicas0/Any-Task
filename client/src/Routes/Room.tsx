import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const Room = () => {
  const { id } = useParams();

  return (
    <Box>
      <Typography color={"white"}>{id}</Typography>
    </Box>
  );
};

export default Room;
