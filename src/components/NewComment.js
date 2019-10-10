import React, {useState} from 'react'

import firebase from '../firebase'

import {useDatabasePush} from '../database'

const NewComment = props => {
  const [, save] = useDatabasePush("comments");
  const [comment, setComment] = useState("");

  const createComment = () => {
    if (comment !== "") {
      save({
        content: comment,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: {
          id: "1",
          name: "Paulo"
        }
      });
      setComment("");
    }
  };

  return (
    <div>
      <textarea value={comment} onChange={e => setComment(e.target.value)} />
      <button onClick={createComment}>Comentar</button>
    </div>
  );
};

export default NewComment;