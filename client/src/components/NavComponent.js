import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';


function NavComponent(props) {

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Wera Pay</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/jaysonmulwa/werapay">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/jaysonmulwa/werapay">GitHub</NavLink>
              </NavItem>
              
            </Nav>
            <NavbarText>WeraPay v1.0.0</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    )
  }

export default NavComponent;
