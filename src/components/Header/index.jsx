import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Logo } from './../Logo/index';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[400],
    }
  },
});

const _Header = () => {
  return (
	  <ThemeProvider theme={theme}>
    <AppBar color='primary' position="static">
      <Toolbar >
        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            <Logo />				
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Remix</Button>
        <Button color="inherit">GitHub</Button>
      </Toolbar>
    </AppBar>
	 </ThemeProvider>
  );
};

export default _Header;
