import React, {useState, useContext} from 'react'

import {AuthContext} from '../auth'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const MenuVisitor = () => {
  return (
    <>
      <NavItem>
        <NavLink href="#">Entrar</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Criar conta</NavLink>
      </NavItem>
    </>
  )
}

const MenuUser = ({ auth }) => {

  const {displayName} = auth.user
  const [alternativeDisplayName] = auth.user.email.split('@')

  return (
    <>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Olá, {displayName || alternativeDisplayName}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            Alterar nome
          </DropdownItem>
          <DropdownItem onClick={auth.signout}>
            Sair
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  )
}

const Header = () => {
  const auth = useContext(AuthContext)

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
  <Navbar color="primary" dark expand="md">
    <div className="container">
        <NavbarBrand href="/">Comentaki</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {
              auth.user !== null ? <MenuUser auth={auth} /> : <MenuVisitor />
            }
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}

export default Header