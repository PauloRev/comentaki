import React, { useContext } from "react";

import { AuthContext } from "../auth";

import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const MenuUser = ({ auth }) => {
  const { displayName } = auth.user;
  const [alternativeDisplayName] = auth.user.email.split("@");

  return (
    <>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Olá, {displayName || alternativeDisplayName}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={auth.signout}>Sair</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
};

const Header = () => {
  const auth = useContext(AuthContext);

  return (
    <Navbar color="primary" dark expand="md">
      <div className="container">
        <NavbarBrand href="/">Comentaki</NavbarBrand>
        <Nav className="ml-auto" navbar>
          {auth.user !== null && <MenuUser auth={auth} />}
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;
