import React from "react";
import { Button } from '@mui/material';
import { Add, Edit } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[400],
    }
  },
});

const _Button = ({text, icon}) => {
  
  return (
    <ThemeProvider theme={theme}>
      <Button color='primary' variant="outlined" startIcon={icon && icon === 'Edit' ? <Edit /> : <Add />}>
        {text}
      </Button>
    </ThemeProvider>
  );
};

export default _Button;