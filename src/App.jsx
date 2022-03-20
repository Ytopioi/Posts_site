import React, { useState } from "react";
import { Layout, Menu, Breadcrumb} from "antd";
import { Logo } from "./components/Logo";
import { postData } from "./posts";
import { PostsList } from "./components/PostsList";


const { Header, Content, Footer } = Layout;

export const App = () => {
  const [posts, setPosts] = useState(postData);

  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo">
            <Logo />
          </div>

          <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Remix Docs</Menu.Item>
            <Menu.Item key="3">GitHub</Menu.Item>
          </Menu>
        </Header>

        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>All Posts</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <PostsList postsData={posts}/>

          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};
