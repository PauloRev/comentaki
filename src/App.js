import React from "react";

import "./App.css";

import { AuthProvider } from "./auth";

import NewComment from "./components/NewComment";
import Comments from "./components/Comments";
import CreateUser from './components/CreateUser';
import SigninUser from './components/SigninUser';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <AuthProvider>
      <div>
        <h1>Comentaki</h1>
        <NewComment />
        <Comments />
        <CreateUser />
        <SigninUser />
        <UserInfo />
      </div>
    </AuthProvider>
  );
}

export default App;
