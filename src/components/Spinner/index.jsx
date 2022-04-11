import { Box, CircularProgress } from "@mui/material";
import React from "react";
import s from "./styles.module.css";

export const Spinner = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CircularProgress color="inherit"/>
      </Box>
    </>
  );
};
