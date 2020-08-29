import React from "react";
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";


function FooterComponent(props) {
  const history = useHistory();

  const privacy = () => {
    history.push("/privacy");
  };
  const terms = () => {
    history.push("/terms");
  };
  

  return (
    <div>
      <footer class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-left md:text-left md:mt-0 mt-10">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                src="2.png"
                alt="triangle with all three sides equal"
                class="w-10 h-10 text-white p-1 bg-gray-400 rounded-full"
                height="87"
                width="100"
              />
              <span class="font-bold ml-3 text-xl">WeraPay</span>
            </a>
            <p class="mt-2 text-sm text-gray-500 font-medium">
              Payslip generation in a breeze.
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-left order-first">
            <div class="lg:w-1/2 md:w-1/2 w-full px-4" id="about">
              <h2 class="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                ABOUT
              </h2>
              <nav class="list-none mb-10">
                <li>WeraPay is a payslip generation tool.</li>
                <li>
                  You can be use it to generate a quick payslip for personal
                  use.
                </li>
                <li>
                  Companies can also use it to generate payslips for their
                  entire company.
                </li>
                <li>For feedback and queries feel free to contact me.</li>
              </nav>
            </div>

            <div class="lg:w-1/2 md:w-1/2 w-full px-4" id="contact">
              <h2 class="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                TALK TO ME
              </h2>
              <nav class="list-none mb-4">
                <li>
                  <a
                    href="mailto:jayson.mulwa@gmail.com"
                    class="text-gray-600 hover:text-luminous-blue"
                  >
                    Email: jayson.mulwa@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/jaysonmulwa"
                    class="text-gray-600 hover:text-luminous-blue"
                  >
                    Twitter: @jaysonmulwa
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/jaysonmulwa"
                    class="text-gray-600 hover:text-luminous-blue"
                  >
                    LinkedIn: /jaysonmulwa
                  </a>
                </li>
              </nav>
              <h2 class="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                  <button
                  class="rounded-lg py-2 text-gray-900 bg-transparent hover:text-grey-700 focus:outline-none title-font font-bold hover:text-luminous-blue"
                  type="button"
                  value="Home"
                  onClick={privacy}
                 
                >
                  PRIVACY POLICY
                </button>
              </h2>
              <h2 class="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
              <button
                  class="rounded-lg py-2 text-gray-900 bg-transparent hover:text-grey-700 focus:outline-none title-font font-bold hover:text-luminous-blue"
                  type="button"
                  value="Home"
                  onClick={terms}
                 
                >
                  TERMS OF USE
                </button> 
              </h2>
            </div>


          </div>
        </div>
        <div class="bg-gray-200">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">
              © 2020 WeraPay —
              <a
                href="https://twitter.com/jaysonmulwa"
                rel="noopener noreferrer"
                class="text-gray-600 ml-1"
                target="_blank"
              >
                @jaysonmulwa
              </a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a
                href="https://twitter.com/jaysonmulwa"
                class="ml-3 text-gray-500"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/jaysonmulwa"
                class="ml-3 text-gray-500"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default withRouter(FooterComponent);
