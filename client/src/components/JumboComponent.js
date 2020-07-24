import React from "react";
import {
    Jumbotron,
    Button
  } from 'reactstrap';


function JumboComponent(props) {


    return (
        <div>
        <Jumbotron>
        <h1 className="display-3">Wera Pay</h1>
        <p className="lead">
            Need to generate a quick payslip for personal use? Need  to generate physical payslips quick and easy for your entire company?. 
        </p>
        <hr className="my-2" />
        <p> Wera Pay will sort you out.</p>
        <p className="lead">
          <Button color="primary">Get Started</Button>
        </p>
      </Jumbotron>
      </div>
    )
  }

export default JumboComponent;
