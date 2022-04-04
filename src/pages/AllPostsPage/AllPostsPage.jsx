import React, { useEffect, useState } from "react";
import cn from "classnames";
import { PostsList } from "../../components/PostsList";
import Button from "../../components/Button";
import Pagination from "../../components/Pagination";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export const PageAllPosts = ({currentUser, posts, handlePostLike}) => {
	const navigate = useNavigate();
	
	function handleClickBread(event) {
		event.preventDefault();
		console.info('You clicked a breadcrumb.');
		navigate(-1);
	 }

  return (
    <>
		<div className={cn("add__margin")} role="presentation" onClick={handleClickBread}>
				<Breadcrumbs aria-label="breadcrumb">
					<Link underline="hover" color="inherit" href="/home">
						Home
					</Link>
					<Typography color="text.primary">All Posts</Typography>
				</Breadcrumbs>
			</div>
      <div className={cn("create")}>
      <h1>Welcome to Our Image Board!</h1>
      	<Button text='Creat Post' icon='Add' />
      </div>
      <PostsList postsData={posts} onPostLike={handlePostLike} currentUser={currentUser}/>
		<Pagination />
    </>
  );
};
