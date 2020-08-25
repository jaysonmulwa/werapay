import React, { lazy } from "react";


const NavComponentLazy = lazy(() => import("./NavComponent.js"));

const FooterComponentLazy = lazy(() => import("./FooterComponent.js"));


function NavComponent(props) {

 

   return (
        <div className="bg-gray-200">

        <NavComponentLazy />
  

<section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">

  <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Help</h1>
    </div>
  
    <div class="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">{/*1*/}</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">


        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          {/*<h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Shooting Stars</h2>*/}
          <p class="leading-relaxed">Werapay recreates your payslip as accurately as possible, therefore enter the Payslip items as they appear on the Payslip.</p>
        </div>

      </div>
    </div>
    <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm"></div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <p class="leading-relaxed">Exclude only totals (gross pay, net pay) and headings (Earnings, Deductions etc).{/* Werapay will calculate these automatically, alongside other calculations like PAYE, NSSF, NHIF.*/}</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm"></div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <p class="leading-relaxed">Click on the Add button. This gives a field for entering the Payslip Item and Amount. Enter these and repeat for all sections.</p>
        </div>
      </div>
    </div>

    <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>

      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm"></div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
       
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <p class="leading-relaxed">For example, under Earnings, enter Basic Pay in the item field and Enter the amount preferrably with cents - rounded off to two decimal place - as it will appear this way on the slip.</p>
        </div>

      </div>
    </div>

    <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>

      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm"></div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
       
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <p class="leading-relaxed">Enter Company Details and Personal Details too as they are important to make the final slip detailed and accurate. Also include your company logo.</p>
        </div>

      </div>
    </div>

    <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>

      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm"></div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
       
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <p class="leading-relaxed">After filling all fields, click Submit. A download link will appear to download your form.</p>
        </div>

      </div>
    </div>

    
  </div>
</section>

<FooterComponentLazy />
      </div>
    )
  }

export default NavComponent;
