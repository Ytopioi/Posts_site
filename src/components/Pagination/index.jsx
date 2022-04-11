import React from "react";
import { Stack, Pagination, PaginationItem } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[400],
    },
  },
});

const _Pagination = ({page, postQty, pageLimit, setPage}) => {

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
        <Pagination
          count={ Math.ceil(postQty/pageLimit) }
          page={page}
          onChange={(event, num) => setPage(num)}
          variant="outlined"
          color="primary"
          renderItem={(item)=> (
            <PaginationItem
              component={Link}
              to={`?page=${item.page}`}
              {...item}
            />
          )}
        />
      </Stack>
    </ThemeProvider>
  );
};

export default _Pagination;
