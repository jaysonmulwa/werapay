import React from "react";
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";


function NavComponent(props) {
  const history = useHistory();

  const home = () => {
    history.push("/home");
  };
  const app = () => {
    history.push("/app");
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
          <a class="flex title-font font-medium items-center text-gray-900 md:mb-0">
            <img
              src="2.png"
              alt="triangle with all three sides equal"
              class="w-10 h-10 text-white p-1 bg-gray-400 rounded-full"
              height="87"
              width="100"
            />
            <span class="font-bold ml-3 text-xl">WeraPay</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
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
              value="App"
              onClick={app}
            >
              App
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
