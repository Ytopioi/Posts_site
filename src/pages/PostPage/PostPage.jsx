import React, { useEffect, useState } from "react";
import cn from "classnames";
import Button from "../../components/Button";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import api from '../../utils/Api';
import { SeePost } from "../../components/SeePost/index";
import { useNavigate, useParams } from "react-router-dom";

export const PagePost = ({currentUser, handlePostLike}) => {
  const [post, setPost] = useState([]);
  const { postID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.getPostById(postID)
      .then((postData) => {
        setPost(postData);
      })
  },[])

  function handleClickBread(event) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
	navigate(-1);
 }

  return (
    <>
			<div className={cn("add__margin")} role="presentation" onClick={handleClickBread}>
				<Breadcrumbs aria-label="breadcrumb">
					<Link underline="hover" color="inherit" href="/">
						Home
					</Link>
					<Link underline="hover" color="inherit" href="#">
						All Posts
					</Link>
					<Typography color="text.primary">Read Post</Typography>
				</Breadcrumbs>
			</div>
         <div className={cn('btn_edit')}>
				<Button  text='Edit' icon='Edit' />
			</div>

			<SeePost {...post} currentUser={currentUser} onPostLike={handlePostLike} />
    </>
  );
};