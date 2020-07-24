import React, { Component, useState, lazy, Suspense } from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

import { createBrowserHistory } from "history";

import './App.css';


const history = createBrowserHistory();



const HomeComponentLazy = lazy(() =>
  import("./components/HomeComponent.js")
);



const HomePageTemplate = (props) => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <HomeComponentLazy />
    </Suspense>
  </div>
);

const Home = () => <HomePageTemplate title="HomePage" status="HomeP" />;

class App extends Component {
  render(){


    return (
            <Router history={history}>

              <div>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
              
              </div>


           </Router>
           )

  }


}


export default App;
