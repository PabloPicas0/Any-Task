import { Snackbar, Alert } from "@mui/material";

type ErrorProps = {
  isError: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
};

const Error = (props: ErrorProps) => {
  const { isError, setError, message } = props;

  return (
    <Snackbar
      open={isError}
      autoHideDuration={6000}
      onClose={() => setError(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <Alert severity="error" onClose={() => setError(false)} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Error;
