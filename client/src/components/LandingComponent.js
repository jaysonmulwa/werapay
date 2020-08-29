import React, { Component, lazy } from "react";
import { withRouter, Redirect } from "react-router-dom";

const NavAltComponentLazy = lazy(() => import("./NavAltComponent.js"));

class LandingComponent extends Component {
  getStarted = (event) => {
    /// event.preventDefault();
    //history.push("/home");
    this.props.history.push("/app");
  };

  render() {
    return (
      <div class="bg-white">
        <NavAltComponentLazy />
        <section class="text-gray-700 body-font">
          <div class="relative container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
              <h1 class="title-font sm:text-5xl text-5xl mb-4 font-bold text-luminous-blue">
                WeraPay
                <br class="hidden lg:inline-block" />
              </h1>
              <p class="leading-loose mb-2 title-font text-lg font-normal">
                Need to generate a quick payslip for personal use or payslips for your entire company?.
                <br/>
                
                Wera Pay will sort you out quick and easy.
              </p>

             
              {/**/}
           
              <div class="flex flex-wrap lg:w-4/5 sm:mb-2">

                <div class="py-2 px-0 sm:w-1/2 w-full">
                  <div class="bg-transparent rounded flex p-2 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-luminous-blue w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">Payslip generation</span>
                  </div>
                </div>

                <div class="py-2 px-0 sm:w-1/2 w-full">
                  <div class="bg-transparent rounded flex p-2 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-luminous-blue w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">Email payslips</span>
                  </div>
                </div>
              </div>
            
              {/**/}

              <div class="flex justify-center">
              <button
                  class="inline-flex text-white bg-luminous-blue border-0 py-2 px-12 focus:outline-none hover:bg-gray-600 rounded text-lg font-medium"
                  type="button"
                  onClick={this.getStarted}
                >
                  Get Started
                </button>
              </div>

             

            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 z-20">
          
              
                <img
                class="object-cover object-center rounded"
                alt="hero"
                src="./16.png"
              />
              
            </div>

            <div class="absolute bottom-0 right-0 pattern-dots-xl text-gray-400 w-64 h-64 z-0">
            </div>
            

          </div>
          
            
        </section>
     

        <section class="text-gray-700 body-font" >
          
               
          <div class="container px-4 pb-4 mx-auto flex flex-wrap">
            <div class="flex flex-wrap">

              <div class="p-2 lg:w-1/3 md:w-full">
                <div class="flex border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-luminous-blue flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-anchor" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0003ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2" />
                    <circle cx="12" cy="6" r="3" />
                  </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-xl title-font font-bold mb-3">
                      Reliable
                    </h2>
                    <p class="leading-relaxed text-lg font-medium">
                      We harness the power of technology to give you a timeless product.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-full">
                <div class="flex border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rocket" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0003ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                    <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                    <circle cx="15" cy="9" r="1"  />
                  </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-xl title-font font-bold mb-3">
                      Fast
                    </h2>
                    <p class="leading-relaxed text-lg font-medium">
                      Because we value time. Enjoy the blazing fast speed of our
                      service.
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-2 lg:w-1/3 md:w-full">
                <div class="flex border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0003ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M7 11v 8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                  </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-xl title-font font-bold mb-3">
                      Easy
                    </h2>
                    <p class="leading-relaxed text-lg font-medium">
                      As it should be. With a simple User interface, we keep you
                      in mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </section>

        <section class="text-gray-700 body-font">
          <div class="bg-gray-200" py-4>
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
        </section>
      </div>
    );
  }
}

export default withRouter(LandingComponent);
