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
        {/*<Navbar color="primary" light expand="md">
          <NavbarBrand href="/">Wera Pay</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              
      
              <NavItem>
                <NavLink href="#">Pricing</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/jaysonmulwa/werapay">About</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="tel:+254 743 10 5448">Contact Us</NavLink>
              </NavItem>
              
            </Nav>
            <NavbarText>WeraPay v1.0.0</NavbarText>
          </Collapse>
        </Navbar>*/}

        <header class="text-gray-700 body-font">
          <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">WeraPay</span>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a href="/home" class="mr-5 hover:text-gray-900">Home</a> 
              <a href="/batch" class="mr-5 hover:text-gray-900">Batch Slips</a>
              <a href="/more" class="mr-5 hover:text-gray-900">Help</a>
              <a href="/pricing" class="mr-5 hover:text-gray-900">Pricing</a>
              <a href="/about" class="mr-5 hover:text-gray-900">About</a>
              <a href="/contact" class="mr-5 hover:text-gray-900">Contact Us</a>
            </nav>
          </div>
        </header>
      </div>
    )
  }

export default NavComponent;
