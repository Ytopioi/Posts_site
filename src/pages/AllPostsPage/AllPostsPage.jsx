import React from "react";
import cn from "classnames";
import { PostsList } from "../../components/PostsList";
import Button from "../../components/Button";

import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

export const PageAllPosts = ({currentUser, posts, handlePostLike, handlePostDelete}) => {
	
	function handleClickBread(event) {
		event.preventDefault();
		console.info('You clicked a breadcrumb.');
	 }

  return (
    <>
		<div className={cn("add__margin")} role="presentation" onClick={handleClickBread}>
				<Breadcrumbs aria-label="breadcrumb">
					<Link to={"/home"} style={{textDecoration: 'none', color: "grey"}}>
						Home
					</Link>
					<Typography color="text.primary">All Posts</Typography>
				</Breadcrumbs>
			</div>
      <div className={cn("create")}>
      	<h1>Most Interesting Things in One Place! Enjoy!</h1>
      	<Link to={"/postCreate"} style={{textDecoration: 'none'}} >
				<Button text='Creat Post' icon='Add' />
			</Link>
      </div>
      <PostsList postsData={posts} onPostLike={handlePostLike} currentUser={currentUser} handlePostDelete={handlePostDelete}/>
    </>
  );
};
