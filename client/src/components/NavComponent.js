import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

function NavComponent(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <header class="text-gray-700 body-font">
        <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 md:mb-0">
            <img
              src="2.png"
              alt="triangle with all three sides equal"
              class="w-10 h-10 text-white p-1 bg-gray-400 rounded-full"
              height="87"
              width="100"
            />
            <span class="ml-3 text-xl">WeraPay</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/home" class="mr-5 hover:text-gray-900">
              Home
            </a>
            {/*<a href="/more" class="mr-5 hover:text-gray-900">Help</a>*/}
            <a href="/pricing" class="mr-5 hover:text-gray-900">
              Pricing
            </a>
            <a href="#about" class="mr-5 hover:text-gray-900">
              About
            </a>
            <a href="#contact" class="mr-5 hover:text-gray-900">
              Contact Us
            </a>
            <a href="#" class="mr-5 hover:text-gray-900">
              Batch Slips
              <span class="text-xs ml-2 font-normal text-gray-500">
                Coming Soon!
              </span>
            </a>
            <a href="#contact" class="mr-5 hover:text-gray-900">
              <div class="mb-2 mr-2">
                <button class="rounded-full py-1 px-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-100 focus:outline-none">
                  Beta
                </button>
              </div>
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavComponent;
