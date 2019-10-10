import React, { useContext, useState } from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input
} from "reactstrap";

import { AuthContext } from "../auth";

const SigninUser = () => {
  const auth = useContext(AuthContext);

  const [openModal, setOpenModal] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const handleForm = input => e => {
    setForm({
      ...form,
      [input]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    auth.signinUser.signinUser(form.email, form.password);
    setOpenModal(!openModal);
  };

  if (auth.user !== null) {
    return null;
  }

  return (
    <>
      <Button color="primary mt-4 ml-4" onClick={toggleModal}>
        Entrar
      </Button>
      <Modal isOpen={openModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Fazer Login</ModalHeader>
        <ModalBody>
          <Form className="p-2">
            <FormGroup row>
              <Input
                type="email"
                value={form.email}
                onChange={handleForm("email")}
                placeholder="Seu e-mail"
              />
            </FormGroup>
            <FormGroup row>
              <Input
                type="password"
                value={form.password}
                onChange={handleForm("password")}
                placeholder="Sua senha"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Entrar
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default SigninUser;
