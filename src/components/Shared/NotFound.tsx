import React from "react";
import { Box, Typography } from "@mui/material";

type INotFoundProps = {
  homeUrl?: string;
};

const NotFound = ({ homeUrl = "/" }: INotFoundProps) => {
  return (
    <Box sx={{ marginTop: "10vh" }} textAlign="center">
      <img
        src="/assets/404-opt.png"
        width="250px"
        height="250px"
        alt="error page"
      />
      <Typography variant="h5" fontWeight="bold">
        404 ERROR
      </Typography>
      <Typography variant="body1" m={2}>
        You seem lost. Don't worry, you can always go back {""}
        <a style={{ color: "#ff4f1e" }} href="/dashboard">
          Home...
        </a>
      </Typography>
    </Box>
  );
};

export default NotFound;
