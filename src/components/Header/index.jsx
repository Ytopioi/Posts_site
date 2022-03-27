import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Logo } from './../Logo/index';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import s from "./styles.module.css";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[400],
    }
  },
});

const _Header = ({user, onUpdateUser}) => {
  const handleClickEditButton = (e) => {
    e.preventDefault();
    onUpdateUser({name: "Савенкова Марина", about: "Студент"})
  }
  
  return (
	  <ThemeProvider theme={theme}>
    <AppBar color='primary' position="static">
      <Toolbar >
        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            <Logo />				
        </Typography>
        <div className={s.user}>
          <p className={s.p}>Now online:</p>
          {user.email && <span>{user.email}</span>}
          {user.name && <span>{user.name}: {user.about}</span>}
          <Button 
            color="inherit" 
            sx={{border: '1px solid purple'}}
            onClick={handleClickEditButton}
          >
            Edit User
          </Button>
        </div>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Remix</Button>
        <Button color="inherit">GitHub</Button>
      </Toolbar>
    </AppBar>
	 </ThemeProvider>
  );
};

export default _Header;
