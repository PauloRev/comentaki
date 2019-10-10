import React, { useContext, useState } from "react";

import { Form, Input, Button, Col, Row, FormText } from "reactstrap";

import { AuthContext } from "../auth";

const FormDisplayName = ({ displayName, user }) => {
  const [newDisplayName, setNewDisplayName] = useState(displayName);

  const handleDisplayName = e => {
    setNewDisplayName(e.target.value);
  };

  const save = e => {
    e.preventDefault();
    if (newDisplayName !== "") {
      user.updateProfile({ displayName: newDisplayName });
    }
  };

  return (
    <Form className="container">
      <Row>
        <Col sm="8">
          <Input
            type="text"
            value={newDisplayName}
            onChange={handleDisplayName}
          />
          <FormText>
            <small className="text-muted">Altere seu nome</small>
          </FormText>
        </Col>
        <Col sm="4">
          <Button onClick={save}>Salvar nome</Button>
        </Col>
      </Row>
    </Form>
  );
};

const UserInfo = () => {
  const auth = useContext(AuthContext);

  if (auth.user === null) {
    return null;
  }

  const { displayName } = auth.user;
  const [alternativeDisplayName] = auth.user.email.split("@");
  const dn = displayName || alternativeDisplayName;

  return (
    <>
      <FormDisplayName displayName={dn} user={auth.user} />
    </>
  );
};

export default UserInfo;
