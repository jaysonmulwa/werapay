import React, { lazy } from "react";

const NavAlt2ComponentLazy = lazy(() => import("./NavAlt2Component.js"));

const FooterComponentLazy = lazy(() => import("./FooterComponent.js"));

function NavComponent(props) {
	return (
		<div className="bg-gray-200">
			<NavAlt2ComponentLazy />
			<section class="pattern-dots-xl text-gray-300 body-font">
				<div class="container px-5 py-12 mx-auto flex flex-wrap">
					<h2 class="sm:text-4xl text-3xl text-gray-900 font-bold title-font mb-2 md:w-1/5">
						Pricing
					</h2>
					<div class="md:w-4/5 md:pl-6 text-gray-700"></div>
				</div>
			</section>

			<section class="text-gray-700 body-font overflow-hidden">
				<div class="container px-5 py-12 mx-auto">
					<div class="flex flex-wrap mx-auto">
						<div class="p-4 xl:w-1/2 md:w-1/2 w-full items-center ">
							<div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden bg-white">
								<h2 class="text-sm tracking-widest title-font mb-1 font-medium">
									START
								</h2>
								<h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
									Free
								</h1>
								<p class="flex items-center text-gray-600 mb-2">
									<span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2.5"
											class="w-3 h-3"
											viewBox="0 0 24 24"
										>
											<path d="M20 6L9 17l-5-5"></path>
										</svg>
									</span>
									Free for Personal Slip Generation
								</p>
								<p class="flex items-center text-gray-600 mb-2">
									<span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2.5"
											class="w-3 h-3"
											viewBox="0 0 24 24"
										>
											<path d="M20 6L9 17l-5-5"></path>
										</svg>
									</span>
									No Limit
								</p>
							</div>
						</div>

						<div class="p-4 xl:w-1/2 md:w-1/2 w-full">
							<div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden bg-white">
								<h2 class="text-sm tracking-widest title-font mb-1 font-medium">
									BUSINESS
								</h2>
								<h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
									<span>
										<span class="text-lg ml-1 font-normal text-gray-500">
											from
										</span>{" "}
										KES 995
									</span>
									<span class="text-lg ml-1 font-normal text-gray-500">
										/mo
									</span>
								</h1>
								<p class="flex items-center text-gray-600 mb-2">
									<span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2.5"
											class="w-3 h-3"
											viewBox="0 0 24 24"
										>
											<path d="M20 6L9 17l-5-5"></path>
										</svg>
									</span>
									Includes Batch Processing
								</p>

								<p class="flex items-center text-gray-600 mb-2">
									<span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2.5"
											class="w-3 h-3"
											viewBox="0 0 24 24"
										>
											<path d="M20 6L9 17l-5-5"></path>
										</svg>
									</span>
									Customer Support
								</p>

								<p class="flex items-center text-gray-600 mb-2">
									<span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2.5"
											class="w-3 h-3"
											viewBox="0 0 24 24"
										>
											<path d="M20 6L9 17l-5-5"></path>
										</svg>
									</span>
									No Limit
								</p>

								<p class="flex items-center text-gray-600 mb-2">
									<span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2.5"
											class="w-3 h-3"
											viewBox="0 0 24 24"
										>
											<path d="M20 6L9 17l-5-5"></path>
										</svg>
									</span>
									You can outsource payslip processing to Werapay
								</p>

								{/*<button class="flex items-center mt-auto text-white bg-gray-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-600 rounded">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>*/}

								<p class="text-xs text-gray-500 mt-3">
									Contact me for a quotation.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<FooterComponentLazy />
		</div>
	);
}

export default NavComponent;
