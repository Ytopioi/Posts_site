import React, { useState, useEffect } from "react";
import { Box, Button, InputLabel, FormControl, OutlinedInput, FormHelperText} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

import s from "./styles.module.css";
import cn from "classnames";
import { Check, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import api from "../../utils/Api";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[400],
    },
  },
});

export const FormEdit = ({posts, postID}) => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const [editPost, setEditPost] = useState({
    title: '',
    image: '',
    tags: [],
    text: ''
  });
  console.log(post);
  console.log(editPost);

  useEffect(() => {
    api.getPostById(postID)
      .then((postData) => {
        setPost(postData);
      })
  },[posts, postID])

  const handleChange = (prop) => (event) => {
    console.log(event);
    setEditPost(() => prop === "tags"
              ? {
                  ...editPost,
                  [prop]: event.target.value.split(",")
              }
              : {
                  ...editPost,
                  [prop]: event.target.value
              }
          )
 };

//   const handlePublish = (event) => {
//     event.preventDefault();
//     handleEditPost(editPost)
//           seteditPost({
//           title: '',
//           image: "",
//           tags: [],
//           text: ''
//         })
//   }

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
			  // onSubmit={handlePublish}
       >
         <div className={s.inputs}>       
			 <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
       <FormHelperText id="outlined-title-helper-text">Title</FormHelperText>
          <OutlinedInput
            id="outlined-multiline-flexible"
            value={post?.title}
            // onChange={handleChange('title')}
          />
        </FormControl>

			<FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
      <FormHelperText id="outlined-image-helper-text">Image</FormHelperText>
          <OutlinedInput
            id="outlined-multiline-flexible"
            value={post?.image}
            // onChange={handleChange('image')}
          />
        </FormControl>

		<FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
    <FormHelperText id="outlined-tags-helper-text">Tags</FormHelperText>
          <OutlinedInput
            id="outlined-multiline-flexible"

            value={post?.tags}
            // onChange={handleChange('tags')}
          />
        </FormControl>

		<FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
    <FormHelperText id="outlined-text-helper-text">Text</FormHelperText>
          <OutlinedInput
             id="outlined-multiline-static"
             multiline
             rows={8}
             value={post?.text}
				//  onChange={handleChange('text')}
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