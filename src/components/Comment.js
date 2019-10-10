import React, { useContext, useState } from "react";

import { AuthContext } from "../auth";

import Time from "./Time";

const Comment = ({ comment }) => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <li>
        {comment.content} <span>por: {comment.user.name}</span> em:{" "}
        <Time timestamp={comment.createdAt} />
        {JSON.stringify(auth)}
      </li>
    </div>
  );
};

export default Comment;
