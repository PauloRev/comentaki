import React from "react";

import Time from "./Time";

const Comment = ({ comment }) => {
  return (
    <div>
      <li>
        {comment.content} <span>por: {comment.user.name}</span> em:{" "}
        <Time timestamp={comment.createdAt} />
      </li>
    </div>
  );
};

export default Comment;
