import React from "react";

function JumboComponent(props) {
  return (
    <div>
      <section className='pattern-dots-xl text-gray-300 body-font'>
        <div className='container px-5 py-12 mx-auto flex flex-wrap'>
          <h2 className='sm:text-4xl text-3xl text-gray-900 font-bold title-font mb-2 md:w-1/5'>
            Personal Slip
          </h2>
          <div className='md:w-4/5 md:pl-6 text-gray-700 md:pt-4'>
            <p className='leading-relaxed text-base'>
              Need just a single slip? Get Started below.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JumboComponent;
