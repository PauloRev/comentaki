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

const CreateUser = () => {
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
    auth.createUser.createUser(form.email, form.password);
  };

  if (auth.user !== null) {
    return null;
  }

  return (
    <>
      <Button color="success mt-4 mr-4" onClick={toggleModal}>
        Cadastrar-se
      </Button>
      <Modal isOpen={openModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Criar conta</ModalHeader>
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
            Cadastrar-se
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CreateUser;
