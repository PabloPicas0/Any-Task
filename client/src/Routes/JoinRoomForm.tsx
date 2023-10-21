import { Button, TextField } from "@mui/material";

const JoinRoomFormStyles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  textField: {
    "& .MuiFormLabel-root": {
      color: "white !important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "gray",
      },
      minWidth: "290px",
    },
  },
};

const JoinRoomForm = () => {
  return (
    <>
      <header style={{ marginBottom: "50px" }}>
        <h1 style={{ color: "white" }}>Join Room</h1>
      </header>

      <form style={JoinRoomFormStyles.form as React.CSSProperties}>
        <TextField label="Your username" required sx={JoinRoomFormStyles.textField} />
        <TextField label="Room ID" required sx={JoinRoomFormStyles.textField} />

        <Button variant="contained" type="submit">
          Join to room
        </Button>
      </form>
    </>
  );
};

export default JoinRoomForm;
