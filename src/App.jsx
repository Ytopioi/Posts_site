import React, { useEffect, useState } from "react";
import cn from "classnames";
// import { postData } from "./posts";
import { PostsList } from "./components/PostsList";
import Button from "./components/Button";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumbs";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import { Container, List } from "@mui/material";
import api from './utils/Api';

export const App = () => {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    Promise.all([api.getPostsList(), api.getUserInfo()])
      .then(([postData, userData]) => {
        setPosts(postData);
        setCurrentUser(userData);
      })
  },[])

  const handleUpdateUser = (userUpdate) => {
    api.setUserInfo(userUpdate)
      .then((newUserData) => {setCurrentUser(newUserData)})
  }

  const handlePostLike = ({_id, likes}) => {
    const isLiked = likes.some((id) => id === currentUser._id)
    api.changeLikeStatus(_id, isLiked)
      .then((newPost) => {
        const newPostsState = posts.map((p) => {
          return p._id === newPost._id ? newPost : p
        })
        setPosts(newPostsState)
      })
  }

  return (
    <>
      <Header user={currentUser} onUpdateUser={handleUpdateUser}/>
      <Container>
        <div className={cn("add__margin")}>
        <Breadcrumb/>
        </div>
        <div className={cn("create")}>
          <h1>Welcome to Our Image Board!</h1>
          <Button />
        </div>
        <PostsList postsData={posts} onPostLike={handlePostLike} currentUser={currentUser}/>
        <Pagination page={page} onChange={setPage}/>
      </Container>
      <Footer className={cn('footer')}/>
    </>
  );
};
