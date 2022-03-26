import React from "react";
import { Grid  } from '@mui/material';
import { Post } from "../Post";

export const PostsList = ({postsData, rows}) => {
  const countPost = 0;

  return (
    <>
        <Grid container spacing={2} sx={{mb: 5}}>
            {postsData.map((post) => {

            return <Post key={post._id} {...post}/>

            })}
        </Grid>
        
    </>
  );

  
};
