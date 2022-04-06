import React, { useEffect, useState } from "react";
import cn from "classnames";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "@mui/material";
import api from './utils/Api';
import { PageAllPosts } from "./pages/AllPostsPage/AllPostsPage";
import { PagePost } from "./pages/PostPage/PostPage";
import { Route, Routes } from "react-router-dom";
import { CurrentUserContext } from './context/currentUserContext';

export const App = () => {
  const [posts, setPosts] = useState([]);
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
        console.log(newPost);
        const newPostsState = posts.map((p) => {
          return p._id === newPost._id ? newPost : p
        })
        setPosts(newPostsState)
      })
  }

  const handlePostDelete = (_id) => {
    if (confirm('Вы хотите удалить пост?')) {
      api.deletePost(_id)
        .then((data) => {
          const newPostsAfterDelete = posts.filter((post) => post._id !== data._id)
          setPosts(newPostsAfterDelete)
          console.log(data);
        })
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header onUpdateUser={handleUpdateUser}/>
      <Container >
        <Routes>
          <Route path='/' element={
            <PageAllPosts
              currentUser={currentUser}
              posts={posts}
              handlePostLike={handlePostLike}
              handlePostDelete={handlePostDelete}
            />
          } />

          <Route path='/post/:postID' element={
            <PagePost 
              posts={posts}
              currentUser={currentUser}
              handlePostLike={handlePostLike}
            />
          } />

          <Route path='*' element={
            // <PageNotFound />
            <h1 className={cn('text_not_found')}>Ошибка 404<br/>Страница не найдена</h1>
          } />
        </Routes>
      </Container>
      <Footer className={cn('footer')}/>
    </CurrentUserContext.Provider>
  );
};
