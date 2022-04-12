import React, { useContext, useState } from "react";
import { Box, Button, InputLabel, FormControl, OutlinedInput} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

import s from "./styles.module.css";
import cn from "classnames";
import { Check, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../context/currentUserContext";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[400],
    },
  },
});

export const FormCreate = ({posts, handleCreatePost}) => {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [createPost, setCreatePost] = useState({
	  title: '',
	  image: "",
	  tags: [],
    text: ''
  });

  const handleChange = (prop) => (event) => {
    console.log(event);
    setCreatePost(() => prop === "tags"
              ? {
                  ...createPost,
                  [prop]: event.target.value.split(",")
              }
              : {
                  ...createPost,
                  [prop]: event.target.value
              }
          )
 };

  const handlePublish = (event) => {
    event.preventDefault();
    handleCreatePost(createPost)
          setCreatePost({
          title: '',
          image: "",
          tags: [],
          text: ''
        })
  }

  const handleCancelClick = () => {
    navigate(-1);
  };


  return (
    <>
     <ThemeProvider theme={theme}>
       <Box
         component="form"
         sx={{
           "& .MuiTextField-root": { m: 1, width: "50ch" },
         }}
         style={{ margin: "0 auto" }}
         noValidate
         autoComplete="off"
			  onSubmit={handlePublish}
       >
         <div className={s.inputs}>       
			 <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
			 <InputLabel htmlFor="outlined-multiline-flexible">Title</InputLabel>
          <OutlinedInput
            id="outlined-multiline-flexible"
				label="Title"
            value={createPost.title}
            onChange={handleChange('title')}
          />
        </FormControl>

			<FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
			 <InputLabel htmlFor="outlined-multiline-flexible">Image</InputLabel>
          <OutlinedInput
            id="outlined-multiline-flexible"
				label="Image"
            value={createPost.image}
            onChange={handleChange('image')}
          />
        </FormControl>

		<FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
			 <InputLabel htmlFor="outlined-multiline-flexible">Tags</InputLabel>
          <OutlinedInput
            id="outlined-multiline-flexible"
				label="Tags"
            value={createPost.tags}
            onChange={handleChange('tags')}
          />
        </FormControl>

		<FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
			 <InputLabel htmlFor="outlined-multiline-flexible">Text</InputLabel>
          <OutlinedInput
             id="outlined-multiline-static"
             label="Text"
             multiline
             rows={8}
             value={createPost.text}
				 onChange={handleChange('text')}
          />
        </FormControl>

         </div>
         <div className={s.btn}>
    		  <a href="#" onClick={handleCancelClick} style={{textDecoration: "none"}}>
    			<Button startIcon={<Close />} variant="outlined" style={{margin: "10px"}} >
    				Cancel
    			</Button>
    		 </a>
            {/* <button style={{display: "none"}} ></button> */}
           <Button type="submit" startIcon={<Check />} variant="outlined" style={{margin: "10px"}} >
             Publish
           </Button>
         </div>
       </Box>
     </ThemeProvider>
	  </>
  );
};