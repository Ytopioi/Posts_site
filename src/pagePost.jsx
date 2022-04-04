// import React, { useEffect, useState } from "react";
// import cn from "classnames";
// import Button from "./components/Button";
// import Header from "./components/Header";
// // import Breadcrumb from "./components/Breadcrumbs";
// import Pagination from "./components/Pagination";
// import Footer from "./components/Footer";
// import { Container, Breadcrumbs, Link, Typography } from "@mui/material";
// import api from './utils/Api';
// import { SeePost } from "./components/SeePost/index";

// // const ID_POST = "622bd9e806c7d323b8ae4615";
// const ID_POST = "6249a5f5392d360b78ab233e";

// export const PostPage = () => {

//   const [post, setPost] = useState([]);
//   const [currentUser, setCurrentUser] = useState({});

//   useEffect(() => {
//     Promise.all([api.getPostById(ID_POST), api.getUserInfo()])
//       .then(([postData, userData]) => {
//         setPost(postData);
//         setCurrentUser(userData);
//       })
//   },[])

//   const handleUpdateUser = (userUpdate) => {
//     api.setUserInfo(userUpdate)
//       .then((newUserData) => {setCurrentUser(newUserData)})
//   }

//   const handlePostLike = ({_id, likes}) => {
//     const isLiked = likes.some((id) => id === currentUser._id)
//     api.changeLikeStatus(_id, isLiked)
//       .then((newPost) => {
//         setPost(newPost)
//       })
//   }

//   function handleClickBread(event) {
// 	event.preventDefault();
// 	console.info('You clicked a breadcrumb.');
//  }

//   return (
//     <>
//       <Header user={currentUser} onUpdateUser={handleUpdateUser}/>
//       <Container className={cn("content")}>
// 			<div className={cn("add__margin")} role="presentation" onClick={handleClickBread}>
// 				<Breadcrumbs aria-label="breadcrumb">
// 					<Link underline="hover" color="inherit" href="/">
// 						Home
// 					</Link>
// 					<Link underline="hover" color="inherit" href="/">
// 						All Posts
// 					</Link>
// 					<Typography color="text.primary">Read Post</Typography>
// 				</Breadcrumbs>
// 			</div>
//          <div className={cn('btn_edit')}>
// 				<Button  text='Edit' icon='Edit' />
// 			</div>

// 			<SeePost {...post} currentUser={currentUser} onPostLike={handlePostLike} />

      
//       </Container>
// 		<Pagination />
//       <Footer className={cn('footer')}/>
//     </>
//   );
// };
