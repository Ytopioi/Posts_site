import React, { useState } from "react";
import styled from 'styled-components';
import cn from "classnames";
import { Layout, Menu, Breadcrumb} from "antd";
import { Logo } from "./components/Logo";
import { postData } from "./posts";
import { PostsList } from "./components/PostsList";
import Button from "./components/Button";
const { Header, Content, Footer } = Layout;

const Styles = styled.div`
  .header, .footer, .menu {
    background-color: rgb(153 109 241);
    
    &:hover {
      color: white;
    }
  }

  .footer {
    padding-bottom: 40px;
  }
`

export const App = () => {
  const [posts, setPosts] = useState(postData);

  return (
    <Styles>
      <Layout>
        <Header className="header" style={{ position: "fixed", zIndex: 1, width: "100%" }}>
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
          <div className={cn('create')}>
            <h1>Welcome to Our Image Board!</h1>
          <Button/>
          </div>
          
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            
            <PostsList postsData={posts}/>

          </div>
        </Content>
        <Footer className="footer" style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Styles>
  );
};
