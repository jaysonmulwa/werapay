import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Spinner } from "reactstrap";
import "./App.css";
import "./styles.generated.css";
import ReactGA from "react-ga";

const trackingId = "UA-175798173-1";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname);

const LandingComponentLazy = lazy(() =>
  import("./components/LandingComponent.js")
);

const HomeComponentLazy = lazy(() => import("./components/HomeComponent.js"));

const PricingComponentLazy = lazy(() =>
  import("./components/PricingComponent.js")
);

const HelpComponentLazy = lazy(() => import("./components/HelpComponent.js"));

const PrivacyComponentLazy = lazy(() =>
  import("./components/PrivacyComponent.js")
);

const TermsComponentLazy = lazy(() => import("./components/TermsComponent.js"));

const PAYEComponentLazy = lazy(() =>
  import("./components/calculators/PAYECalculator.js")
);

const NHIFComponentLazy = lazy(() =>
  import("./components/calculators/NHIFCalculator.js")
);

const NSSFComponentLazy = lazy(() =>
  import("./components/calculators/NSSFCalculator.js")
);

const HomePageTemplate = (props) => (
  <div>
    <Suspense
      fallback={
        <div className='centered'>
          <Spinner style={{ width: "3rem", height: "3rem" }} color='primary' />
        </div>
      }
    >
      <HomeComponentLazy />
    </Suspense>
  </div>
);

const LandingPageTemplate = (props) => (
  <div>
    <Suspense
      fallback={
        <div className='centered'>
          <Spinner style={{ width: "3rem", height: "3rem" }} color='primary' />
        </div>
      }
    >
      <LandingComponentLazy />
    </Suspense>
  </div>
);

const PricingPageTemplate = (props) => (
  <div>
    <Suspense
      fallback={
        <div className='centered'>
          <Spinner style={{ width: "3rem", height: "3rem" }} color='primary' />
        </div>
      }
    >
      <PricingComponentLazy />
    </Suspense>
  </div>
);

const HelpPageTemplate = (props) => (
  <div>
    <Suspense
      fallback={
        <div className='centered'>
          <Spinner style={{ width: "3rem", height: "3rem" }} color='primary' />
        </div>
      }
    >
      <HelpComponentLazy />
    </Suspense>
  </div>
);
const PrivacyPageTemplate = (props) => (
  <div>
    <Suspense
      fallback={
        <div className='centered'>
          <Spinner style={{ width: "3rem", height: "3rem" }} color='primary' />
        </div>
      }
    >
      <PrivacyComponentLazy />
    </Suspense>
  </div>
);

const TermsPageTemplate = (props) => (
  <div>
    <Suspense
      fallback={
        <div className='centered'>
          <Spinner style={{ width: "3rem", height: "3rem" }} color='primary' />
        </div>
      }
    >
      <TermsComponentLazy />
    </Suspense>
  </div>
);

const PAYEPageTemplate = (props) => (
  <div>
    <Suspense
      fallback={
        <div className='centered'>
          <Spinner style={{ width: "3rem", height: "3rem" }} color='primary' />
        </div>
      }
    >
      <PAYEComponentLazy />
    </Suspense>
  </div>
);
const NSSFPageTemplate = (props) => (
  <div>
    <Suspense
      fallback={
        <div className='centered'>
          <Spinner style={{ width: "3rem", height: "3rem" }} color='primary' />
        </div>
      }
    >
      <NSSFComponentLazy />
    </Suspense>
  </div>
);

const NHIFPageTemplate = (props) => (
  <div>
    <Suspense
      fallback={
        <div className='centered'>
          <Spinner style={{ width: "3rem", height: "3rem" }} color='primary' />
        </div>
      }
    >
      <NHIFComponentLazy />
    </Suspense>
  </div>
);

const Landing = () => (
  <LandingPageTemplate title='LandingPage' status='LandingP' />
);
const Home = () => <HomePageTemplate title='HomePage' status='HomeP' />;

const Pricing = () => (
  <PricingPageTemplate title='PricingPage' status='PricingP' />
);
const Help = () => <HelpPageTemplate title='HelpPage' status='HelpP' />;

const Privacy = () => (
  <PrivacyPageTemplate title='PrivacyPage' status='PrivacyP' />
);
const Terms = () => <TermsPageTemplate title='TermsPage' status='TermsP' />;
const PAYE = () => <PAYEPageTemplate title='PAYEPage' status='PAYEP' />;

const NHIF = () => <NHIFPageTemplate title='NHIFPage' status='NHIFP' />;
const NSSF = () => <NSSFPageTemplate title='NSSFPage' status='NSSFP' />;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Landing} />
          <Route path='/home' component={Landing} />
          <Route path='/app' component={Home} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/help' component={Help} />
          <Route path='/privacy' component={Privacy} />
          <Route path='/terms' component={Terms} />
          <Route path='/paye' component={PAYE} />
          <Route path='/nhif' component={NHIF} />
          <Route path='/nssf' component={NSSF} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
