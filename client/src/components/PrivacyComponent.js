import React, { lazy } from "react";

const NavAlt2ComponentLazy = lazy(() => import("./NavAlt2Component.js"));
const FooterComponentLazy = lazy(() => import("./FooterComponent.js"));

function PrivacyComponent(props) {
  return (
    <div className='bg-gray-200'>
      <NavAlt2ComponentLazy />
      <section className='pattern-dots-xl text-blue-200 body-font'>
        <div className='container px-5 py-12 mx-auto flex flex-wrap'>
          <h2 className='sm:text-4xl text-3xl text-gray-900 font-bold title-font mb-2 md:w-1/5'>
            Privacy Policy
          </h2>
          <div className='md:w-4/5 md:pl-6 text-gray-700'></div>
        </div>
      </section>

      <section className='text-gray-700 body-font'>
        <div className='container px-5 py-12 mx-auto flex flex-wrap'>
          <div className='flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto'>
            <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                  Effective 1st September 2023
                </h2>
                <p className='leading-relaxed'>
                  Thanks for entrusting Salario ("we") with your personal
                  information. Holding on to your private information is a
                  serious responsibility, and we want you to know how we're
                  handling it.
                </p>
              </div>
            </div>
          </div>

          <div className='flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto'>
            <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                  What information Salario collects
                </h2>
                <p className='leading-relaxed'>
                  We only collect the minimum amount of personal information as
                  provided by you to generate payslips. We do not store or
                  re-use this information. Only tracking analytics are collected
                  to track website traffic.
                </p>
              </div>
            </div>
          </div>

          <div className='flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto'>
            <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                  Our use of cookies and tracking
                </h2>
                <p className='leading-relaxed'>
                  We do not use cookies for our Website, and we use a small
                  number of tracking and analytics services on a few parts of
                  our site.
                </p>
              </div>
            </div>
          </div>

          <div className='flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto'>
            <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                  Changes to our Privacy Statement
                </h2>
                <p className='leading-relaxed'>
                  We notify you of material changes to this Privacy Statement 30
                  days before any such changes become effective.
                </p>
              </div>
            </div>
          </div>

          <div className='flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto'>
            <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                  License
                </h2>
                <p className='leading-relaxed'>
                  This Privacy Statement is licensed under the MIT license.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterComponentLazy />
    </div>
  );
}

export default PrivacyComponent;
