import React, {useState, useContext} from 'react'

import { Button, Form, FormGroup, Input } from 'reactstrap';

import firebase from '../firebase'
import { AuthContext } from '../auth'

import {useDatabasePush} from '../database'

const NewComment = () => {
  const [, save] = useDatabasePush("comments");
  const [comment, setComment] = useState("");
  const auth = useContext(AuthContext)
  
  if(auth.user === null) {
    return null
  }

  const {displayName} = auth.user
  const [alternativeDisplayName] = auth.user.email.split('@')

  const createComment = () => {
    if(!comment || comment.length < 2) {
      return null
    }
    if (comment !== "") {
      save({
        content: comment,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: {
          id: auth.user.uid,
          name: displayName || alternativeDisplayName
        }
      });
      setComment("");
    }
  };

  return (
    <div className="container">
      <Form>
        <FormGroup row className="mt-4 mb-2">
          <Input type="textarea" value={comment} onChange={e => setComment(e.target.value)} placeholder="Faça um comentário..."/>
        </FormGroup>
        <FormGroup row>
          <Button color="primary" onClick={createComment}>Comentar</Button>
        </FormGroup>
        {/* <textarea value={comment} onChange={e => setComment(e.target.value)} />
        <button onClick={createComment}>Comentar</button> */}
      </Form>
    </div>
  );
};

export default NewComment;