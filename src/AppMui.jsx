import React, { useState } from "react";
import cn from "classnames";
import { postData } from "./posts";
import { PostsList } from "./components/PostsList";
import Button from "./components/Button";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumbs";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import { Container } from "@mui/material";

export const AppMUI = () => {

  const [posts, setPosts] = useState(postData);
  const [rows, setRows] = useState(3);
  const [page, setPage] = useState(1);

  return (
    <>
      <Header />
      <Container>
        <div className={cn("add__margin")}>
        <Breadcrumb/>
        </div>
        <div className={cn("create")}>
          <h1>Welcome to Our Image Board!</h1>
          <Button />
        </div>
        <PostsList postsData={posts} rows={rows}/>
        <Pagination page={page} onChange={setPage}/>
      </Container>
      <Footer className={cn('footer')}/>
    </>
  );
};
