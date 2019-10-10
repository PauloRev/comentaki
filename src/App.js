import React from "react";

import "./App.css";

import { AuthProvider } from "./auth";

import Header from "./components/Header";
import NewComment from "./components/NewComment";
import Comments from "./components/Comments";
import CreateUser from "./components/CreateUser";
import SigninUser from "./components/SigninUser";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <AuthProvider>
      <div>
        <Header />
        <div className="container d-flex justify-content-center mt-4">
          <CreateUser />
          <SigninUser />
        </div>
        <div className="container d-flex-justify-content-center mt-4">
          <UserInfo />
        </div>
        <NewComment />
        <Comments />
      </div>
    </AuthProvider>
  );
}

export default App;
