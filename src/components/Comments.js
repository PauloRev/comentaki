import React from "react";

import {Spinner} from 'reactstrap';

import Comment from "./Comment";
import { useDatabase } from "../database";

const Comments = () => {
  const data = useDatabase("comments");
  if (!data) {
    return <p>Nenhum comentário enviado até o momento.</p>;
  }
  const ids = Object.keys(data);
  if (ids.length === 0) {
    return (
      <div className="mt-4 d-flex justify-content-center">
        <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
      </div>
    )
  }
  return ids.map(id => {
    return (
      <div className="mt-4 container">
        <Comment key={id} comment={data[id]} />
      </div>
    )
  });
};

export default Comments;
