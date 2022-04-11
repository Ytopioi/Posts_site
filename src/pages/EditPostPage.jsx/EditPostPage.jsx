import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Breadcrumbs, Typography, IconButton } from "@mui/material";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { FormEdit } from "../../components/FormEdit";

export const PageEditPost = ({posts}) => {
  const navigate = useNavigate();
  const { postID } = useParams();

  function handleClickBread(event) {
		event.preventDefault();
		console.info('You clicked a breadcrumb.');
	 }

   const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <>

      <div className={cn("add__margin")} role="presentation" onClick={handleClickBread}>
				<Breadcrumbs aria-label="breadcrumb" >
					<Link to={"/home"} style={{textDecoration: 'none', color: "grey"}}>
						Home
					</Link>
					<Link to={`/`} style={{textDecoration: 'none', color: "grey"}}>
						All Posts
					</Link>
					<Typography color="text.primary">Edit Post</Typography>
				</Breadcrumbs>
			</div>

      <a href="#" onClick={handleBackClick}>
        <IconButton aria-label="back" >
            <ArrowBack/>
        </IconButton>
	  	</a>

		<h1 style={{color: "purple"}} >Edit Your Post</h1>

		<FormEdit posts={posts} postID={postID}/>
    </>
  );
};