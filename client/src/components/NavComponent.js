import React from "react";
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";


function NavComponent(props) {
  const history = useHistory();

  const home = () => {
    history.push("/home");
  };
  const pricing = () => {
    history.push("/pricing");
  };
  const help = () => {
    history.push("/help");
  };

  return (
    <div>
      <header class="text-gray-700 body-font">
        <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 md:mb-0 pt-2 md:py-0">
            <img
              src="2.png"
              alt="triangle with all three sides equal"
              class="w-10 h-10 text-white p-1 bg-gray-400 rounded-full"
              height="87"
              width="100"
            />
            <span class="ml-3 text-xl">WeraPay</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center pt-2 md:py-0">
            <button
              class="rounded-lg py-2 px-4 text-black bg-transparent hover:text-grey-700 focus:outline-none font-medium hover:text-luminous-blue"
              type="button"
              value="Home"
              onClick={home}
            >
              Home
            </button>
            <button
              class="rounded-lg py-2 px-4 text-black bg-transparent hover:text-grey-700 focus:outline-none font-medium hover:text-luminous-blue"
              type="button"
              value="Pricing"
              onClick={pricing}
            >
              Pricing
            </button>

            <button
              class="rounded-lg py-2 px-4 mr-4 text-black bg-transparent hover:text-grey-700 focus:outline-none font-medium hover:text-luminous-blue"
              type="button"
              value="Help"
              onClick={help}
            >
              Help
            </button>

            {/*<a href="#about" class="mr-5 hover:text-gray-900">
              About
            </a>
            <a href="#contact" class="mr-5 hover:text-gray-900">
              Contact Us
            </a>
           <a href="#contact" class="mr-5 hover:text-gray-900">
              <div class="mb-2 mr-2">
                <button class="rounded-full py-1 px-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-100 focus:outline-none">
                  Beta
                </button>
              </div>
            </a>*/}
            
            <a class="mr-5 font-medium hover:text-luminous-blue">
              Batch Slips
              <span class="text-xs ml-2 font-normal text-gray-500">
                Coming Soon!
              </span>
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default withRouter(NavComponent);
