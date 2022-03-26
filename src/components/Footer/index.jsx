import React from "react";
import { AppBar, Toolbar, Typography} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[400],
    },
  },
});

const _Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar color="primary" position="static">
        <Toolbar>
			  
          <Typography
			 	align="center"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
				 ©My Footer
			 </Typography>
			 
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default _Footer;
