import React, { Component, lazy } from "react";
import { withRouter } from "react-router-dom";
import { Fade } from "reactstrap";

import taxable from "taxable";

const NavAlt2ComponentLazy = lazy(() => import("./../NavAlt2Component.js"));

const FooterComponentLazy = lazy(() => import("./../FooterComponent.js"));

class PayeComponent extends Component {
  state = {
    basic: 0.0,
    benefits: 0.0,
    relief: 0.0,
    paye: "",
    calculated: false,
  };

  componentDidMount() {}

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      calculated: false,
    });

    const { basic, benefits, relief } = this.state;

    let paye = taxable.KE.PAYE({
      basic_pay: parseFloat(basic),
      benefits: parseFloat(benefits),
      insurance_relief: parseFloat(relief),
    });

    paye = new Intl.NumberFormat().format(paye);

    this.setState({
      paye: paye,
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
              PAYE
            </h2>
            <div class='md:w-4/5 md:pl-6 text-gray-700'></div>
          </div>
        </section>

        <section class='text-gray-900 body-font'>
          <div class='container py-6 mx-auto flex'>
            <div class='lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10  shadow-md'>
              <h2 class='text-gray-900 text-lg mb-1 font-medium title-font mb-5'>
                PAYE Calculator
              </h2>

              <label
                class='block text-gray-700 text-sm font-medium mb-2'
                for='basic'
              >
                Basic Pay
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
                for='benefits'
              >
                Benefits/ Allowances
              </label>

              <input
                class='bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline'
                type='number'
                name='benefits'
                id='benefits'
                placeholder=''
                onChange={this.onChange}
              />

              <label
                class='block text-gray-700 text-sm font-medium mb-2'
                for='relief'
              >
                Insurance Relief
              </label>

              <input
                class='bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline'
                type='number'
                name='relief'
                id='relief'
                placeholder=''
                onChange={this.onChange}
              />

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
                    PAYE ={" "}
                    <span className='font-medium'>{this.state.paye}</span>
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
export default withRouter(PayeComponent);
