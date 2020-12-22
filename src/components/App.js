import "./App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/PostPage";
import NewPostPage from "../pages/NewPostPage";
import RegisterPage from "../pages/RegisterPage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "../contexts";
import { getMe } from "../WebAPI";
import { getAuthToken } from "../Utils";

const Root = styled.div``;

export default function App() {
  const [user, setUser] = useState(null);
  const token = getAuthToken();
  useEffect(() => {
    if (token) {
      getMe().then((response) => {
        if (response.ok) {
          setUser(response.data);
        }
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Root>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/posts/:id">
              <PostPage />
            </Route>
            <Route path="/Login">
              <LoginPage />
            </Route>
            <Route path="/New-post">
              <NewPostPage />
            </Route>
            <Route path="/Register">
              <RegisterPage />
            </Route>
          </Switch>
        </Router>
      </Root>
    </AuthContext.Provider>
  );
}
