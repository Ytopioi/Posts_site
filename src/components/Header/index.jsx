import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Logo } from './../Logo/index';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { CurrentUserContext } from "../../context/currentUserContext";

import s from "./styles.module.css";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[400],
    }
  },
});

const _Header = ({onUpdateUser}) => {
  const currentUser = useContext(CurrentUserContext);
  const handleClickEditButton = (e) => {
    e.preventDefault();
    onUpdateUser({name: "Савенкова Марина Александровна", about: "Писатель"})
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
          {currentUser.email && <span>{currentUser.email}</span>}
          {currentUser.name && <span>{currentUser.name}: {currentUser.about}</span>}
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
