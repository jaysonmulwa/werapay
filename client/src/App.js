import React, { Component, useState, lazy, Suspense } from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import { Spinner } from "reactstrap";
import "./App.css";
import "./styles.generated.css";

import ReactGA from "react-ga";

const trackingId = "UA-175798173-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname);

const LandingComponentLazy = lazy(() =>
  import("./components/LandingComponent.js")
);

const HomeComponentLazy = lazy(() => import("./components/HomeComponent.js"));

const PricingComponentLazy = lazy(() =>
  import("./components/PricingComponent.js")
);

const HomePageTemplate = (props) => (
  <div>
    <Suspense
      fallback={
        <div className="centered">
          <Spinner style={{ width: "3rem", height: "3rem" }} color="primary" />
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
        <div className="centered">
          <Spinner style={{ width: "3rem", height: "3rem" }} color="primary" />
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
        <div className="centered">
          <Spinner style={{ width: "3rem", height: "3rem" }} color="primary" />
        </div>
      }
    >
      <PricingComponentLazy />
    </Suspense>
  </div>
);

const Landing = () => (
  <LandingPageTemplate title="LandingPage" status="LandingP" />
);
const Home = () => <HomePageTemplate title="HomePage" status="HomeP" />;

const Pricing = () => (
  <PricingPageTemplate title="PricingPage" status="PricingP" />
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Landing} />
          <Route path="/app" component={Home} />
          <Route path="/pricing" component={Pricing} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
