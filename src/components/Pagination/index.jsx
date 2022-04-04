import React from "react";
import { Stack, Pagination } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[400],
    },
  },
});

const _Pagination = () => {
	const lastPage = 5;

  return (
    <ThemeProvider theme={theme}>
      <Stack
        spacing={2}
        sx={{
          mb: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pagination count={lastPage} variant="outlined" color="primary" />
      </Stack>
    </ThemeProvider>
  );
};

export default _Pagination;
