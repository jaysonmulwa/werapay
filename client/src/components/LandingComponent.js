import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

class LandingComponent extends Component {
  getStarted = (event) => {
    /// event.preventDefault();
    //history.push("/home");
    this.props.history.push("/app");
  };

  render() {
    return (
      <div>
        <section class="text-gray-700 body-font">
          <div class="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Werapay
                <br class="hidden lg:inline-block" />
              </h1>
              <p class="mb-8 leading-relaxed">
                Need to generate a quick payslip for personal use?.
                <br class="hidden lg:inline-block" />
                Need to generate physical payslips for your entire company?.
                <br class="hidden lg:inline-block" />
                Wera Pay will sort you out quick and easy.
              </p>

              <div class="flex justify-center">
                <button
                  class="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
                  type="button"
                  onClick={this.getStarted}
                >
                  Get Started
                </button>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="./16.png"
              />
            </div>
          </div>
        </section>

        <section class="text-gray-700 body-font">
          <div class="container px-5 pb-5 mx-auto flex flex-wrap">
            <div class="flex flex-wrap">
              <div class="p-4 lg:w-1/2 md:w-full">
                <div class="flex border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <img
                      src="shuttle.svg"
                      alt="triangle with all three sides equal"
                      class="w-8 h-8"
                      height="87"
                      width="100"
                    />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                      Fast
                    </h2>
                    <p class="leading-relaxed text-base">
                      Because we value time. Enjoy the blazing fast speed of our
                      service even for batch files.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/2 md:w-full">
                <div class="flex border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <img
                      src="like2.svg"
                      alt="triangle with all three sides equal"
                      class="w-8 h-8"
                      height="87"
                      width="100"
                    />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                      Easy
                    </h2>
                    <p class="leading-relaxed text-base">
                      As it should be. With a simple User interface, we keep you
                      in mind, to make sure you dont get stuck.
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
