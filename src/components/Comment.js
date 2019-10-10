import React from "react";

import Time from "./Time";

import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const Comment = ({ comment }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{comment.content}</CardTitle>
        <CardText>
          <small className="text-muted">Por: {comment.user.name} / em: <Time timestamp={comment.createdAt} /></small>
        </CardText>
      </CardBody>
      {/* <li>
        {comment.content} <span>por: {comment.user.name}</span> em:{" "}
        <Time timestamp={comment.createdAt} />
      </li> */}
    </Card>
  );
};

export default Comment;
