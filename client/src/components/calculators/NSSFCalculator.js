import React, { Component, lazy } from "react";
import { withRouter } from "react-router-dom";
import { Fade } from "reactstrap";

import taxable from "taxable";

const NavAlt2ComponentLazy = lazy(() => import("./../NavAlt2Component.js"));

const FooterComponentLazy = lazy(() => import("./../FooterComponent.js"));

class NssfComponent extends Component {
  state = {
    basic: 0.0,
    rates: "",
    tier: "",
    nssf: "",
    calculated: false,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOptionChange = (e) => {
    this.setState({ tier: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      calculated: false,
    });

    const { basic, rates, tier } = this.state;

    let rate = rates === "new" ? true : false;

    let nssf = taxable.KE.NSSF({
      amount: parseFloat(basic),
      new_rates: rate,
      tier: parseInt(tier),
    });

    nssf = new Intl.NumberFormat().format(nssf);

    this.setState({
      nssf: nssf,
    });

    this.setState({
      calculated: true,
    });
  };

  render() {
    return (
      <div className='bg-gray-200'>
        <NavAlt2ComponentLazy />
        <section class='pattern-dots-xl text-gray-300 body-font'>
          <div class='container px-5 py-12 mx-auto flex flex-wrap'>
            <h2 class='sm:text-4xl text-3xl text-gray-900 font-bold title-font mb-2 md:w-1/5'>
              NSSF
            </h2>
            <div class='md:w-4/5 md:pl-6 text-gray-700'></div>
          </div>
        </section>

        <section class='text-gray-900 body-font'>
          <div class='container py-6 mx-auto flex'>
            <div class='lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10  shadow-md'>
              <h2 class='text-gray-900 text-lg mb-1 font-medium title-font mb-5'>
                NSSF Calculator
              </h2>

              <label
                class='block text-gray-700 text-sm font-medium mb-2'
                for='basic'
              >
                Gross Pay
              </label>

              <input
                class='bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline'
                type='number'
                name='basic'
                id='basic'
                placeholder=''
                onChange={this.onChange}
              />

              <label
                class='block text-gray-700 text-sm font-medium mb-2'
                for='rates'
              >
                Rates
              </label>

              <select
                class='bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline w-full'
                type='select'
                name='rates'
                id='rates'
                placeholder=''
                onChange={this.onChange}
              >
                <option value='--'>-- Select Rates--</option>

                <option value='new'>New Rates</option>
                <option value='old'>Old Rates</option>
              </select>
              {this.state.rates === "new" && (
                <div>
                  <label
                    class='block text-gray-700 text-sm font-medium mb-2'
                    for='tier'
                  >
                    Tier
                  </label>

                  <div class='mt-2 bg-white rounded border border-gray-400 text-base px-4 py-4 mb-4 focus:outline-none focus:shadow-outline'>
                    <label class='inline-flex items-center w-full md:w-1/2'>
                      <input
                        type='radio'
                        class='form-radio'
                        name='tier'
                        id='1'
                        value='1'
                        onChange={this.handleOptionChange}
                      />
                      <span class='ml-2'>Tier I</span>
                    </label>
                    <label class='inline-flex items-center w-full md:w-1/2'>
                      <input
                        type='radio'
                        class='form-radio'
                        name='tier'
                        id='2'
                        value='2'
                        onChange={this.handleOptionChange}
                      />
                      <span class='ml-2'>Tier I & II</span>
                    </label>
                  </div>
                </div>
              )}

              <div class='flex flex-col w-full relative py-2'>
                <form onSubmit={this.handleSubmit}>
                  <center>
                    <div class='mb-2 mr-2'>
                      <button
                        class='rounded-lg py-2 px-4 text-white bg-luminous-blue hover:bg-blue-600 focus:outline-none'
                        value='add more'
                        type='submit'
                      >
                        Calculate
                      </button>
                    </div>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </section>
        {this.state.calculated && (
          <Fade in={true} out={true}>
            <section class='text-gray-700 body-font'>
              <div class='container py-3 mx-auto flex'>
                <div class='lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10  shadow-md'>
                  <center>
                    NSSF ={" "}
                    <span className='font-medium'>{this.state.nssf}</span>
                  </center>
                </div>
              </div>
            </section>
          </Fade>
        )}
        <FooterComponentLazy />
      </div>
    );
  }
}
export default withRouter(NssfComponent);
