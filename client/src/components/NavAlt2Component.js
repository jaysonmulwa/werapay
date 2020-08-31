import React, { useState } from "react";
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";


function NavComponent(props) {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
  const paye = () => {
    history.push("/paye");
  };
  const nhif = () => {
    history.push("/nhif");
  };
  const nssf = () => {
    history.push("/nssf");
  };

  return (
    <div>
      <header class="text-gray-700 body-font">
        <div class="container mx-auto flex flex-wrap p-2 flex-row md:flex-row items-center justify-between">
          <a class="flex title-font font-medium items-center text-gray-900 md:mb-0 pt-2 md:py-0">
            <img
              src="2.png"
              alt="triangle with all three sides equal"
              class="w-10 h-10 text-white p-1 bg-gray-400 rounded-full"
              height="87"
              width="100"
            />
            <span class="font-bold ml-3 text-xl">WeraPay</span>
          </a>

          <nav class="md:ml-auto flex items-end text-base justify-end pt-2 md:py-0 inline-flex md:hidden">
          <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
          </button>
          </nav>


        
          <nav class={"flex md:inline-flex md:flex-row flex-col md:w-auto w-full md:items-center items-start text-base justify-center pt-2 md:ml-auto md:py-0" +
              (navbarOpen ? " flex" : " hidden")}>
            <button
              class="flex rounded-lg py-4 md:py-2 px-4 text-black bg-transparent hover:text-grey-700 focus:outline-none font-medium hover:text-luminous-blue"
              type="button"
              value="Home"
              onClick={home}
            >
              Home
            </button>

            <button
              class="flex rounded-lg py-4 md:py-2 px-4 text-black bg-transparent hover:text-grey-700 focus:outline-none font-medium hover:text-luminous-blue"
              type="button"
              value="App"
              onClick={app}
            >
              App
            </button>

            <div className="relative">
              <button
                class="flex rounded-lg py-4 md:py-4 px-4 text-black bg-transparent hover:text-grey-700 focus:outline-none font-medium hover:text-luminous-blue"
                type="button"
                value="Pricing"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Tax Calculators

              </button>

              <div className={"tax-menu origin-top-right absolute right-0 w-40 rounded-lg shadow-lg" + (menuOpen ? " block" : " hidden")}>
									<div className="rounded-md bg-white shadow-xs">
										<div className="py-1">
											
												<button
													type="button"
													className="block w-full text-left px-4 py-2 text-base leading-snug text-gray-700 hover:bg-gray-100 hover:text-luminous-blue focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                          onClick={paye}
                        >
													PAYE
												</button>
                        <button
													type="button"
													className="block w-full text-left px-4 py-2 text-base leading-snug text-gray-700 hover:bg-gray-100 hover:text-luminous-blue focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                          onClick={nhif}
                        >
                          NHIF
												</button>
                        <button
													type="button"
													className="block w-full text-left px-4 py-2 text-base leading-snug text-gray-700 hover:bg-gray-100 hover:text-luminous-blue focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                          onClick={nssf}
                        >
                          NSSF
												</button>
										
										</div>
									</div>
						  </div>
            </div>

            

            <button
              class="flex rounded-lg py-4 md:py-2 px-4 text-black bg-transparent hover:text-grey-700 focus:outline-none font-medium hover:text-luminous-blue"
              type="button"
              value="Pricing"
              onClick={pricing}
            >
              Pricing
            </button>


            <button
              class="flex rounded-lg py-4 md:py-2 px-4 mr-4 text-black bg-transparent hover:text-grey-700 focus:outline-none font-medium hover:text-luminous-blue"
              type="button"
              value="Help"
              onClick={help}
            >
              Help
            </button>

            {/*<a class="flex mr-5 md:ml-0 ml-4 font-medium hover:text-luminous-blue cursor-pointer">
              Batch Slips
              <span class="text-xs ml-2 font-normal text-gray-500">
                Coming Soon!
              </span>
            </a>*/}

          </nav>
        

          

          



        </div>
      </header>
    </div>
  );
}

export default withRouter(NavComponent);
