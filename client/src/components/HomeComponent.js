import React, { Component, lazy, Suspense} from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, Fade, Card, CardTitle } from 'reactstrap';



const NavComponentLazy = lazy(() =>
  import("./NavComponent.js")
);

const JumboComponentLazy = lazy(() =>
  import("./JumboComponent.js")
);



class HomeComponent extends Component {

	state = {
		paycode: [],

		amount: [],

		values: [],
	};

onChange = e =>{
	this.setState({ [e.target.name]: e.target.value });

};

createUI(){
     return this.state.values.map((el, i) => 
         <div key={i}>

         	 <FormGroup>
    	    
			<Fade in={true} out={true} tag="h5" className="mt-3">
					<Row>


						<Col md="5"><Input type="paycode" name="paycode" id="paycode" placeholder="Item" onChange={this.handleChange.bind(this, i)} /> </Col>

						<Col md="5"><Input type="amount" name="amount" id="amount" placeholder="Amount" onChange={this.onChange}/> </Col>

						<Col md="2"><Button type='button' value='remove' onClick={this.removeClick.bind(this, i)}>Remove</Button> </Col>

												


					</Row>
			</Fade>

			 </FormGroup>

         </div>          
     )
  }

handleChange(i, event) {
     let values = [...this.state.values];
     values[i] = event.target.value;
     this.setState({ values });
  }
  
  addClick(){
    this.setState(prevState => ({ values: [...prevState.values, '']}))
  }
  
  removeClick(i){
     let values = [...this.state.values];
     values.splice(i,1);
     this.setState({ values });
  }

handleSubmit = (event) => {


    alert('A name was submitted: ' + this.state.values.join(', '));
    event.preventDefault();
    

  };

	render() {
			return (
						
						<div>
						<NavComponentLazy />
						<JumboComponentLazy />
						<Container className="my-4" >
							
							<Row>
						        <Col md={{ size: 8, offset: 2 }}>

								<Card body>
								<CardTitle>Company Details</CardTitle>



									<Form onSubmit={this.handleSubmit}>

										




								      <FormGroup>
								       


									        <Row>


									        <Col md="12" className="my-2"><Input type="paycode" name="paycode" id="paycode" placeholder="Company Name" onChange={this.onChange}/> </Col>

									        <Col md="12" className="my-2"><Input type="amount" name="amount" id="amount" placeholder="Company Address" onChange={this.onChange}/> </Col>

									        </Row>

								      </FormGroup>
								      		
								      		<Button value="add more" onClick={this.addClick.bind(this)}>Add</Button> 

								      		<Button className="mx-4" type="submit">Submit</Button>

								      
								    </Form>

									</Card>

								

						        </Col>
						        
						    </Row>
					    </Container>
						<Container className="my-4" >
							
							<Row>
						        <Col md={{ size: 8, offset: 2 }}>

								<Card body>
								<CardTitle>Personal Details</CardTitle>



									<Form onSubmit={this.handleSubmit}>

										




								      <FormGroup>
								       


									        <Row>


									        <Col md="12" className="my-2"><Input type="paycode" name="paycode" id="paycode" placeholder="Full Name" onChange={this.onChange}/> </Col>

									        <Col md="12" className="my-2"><Input type="amount" name="amount" id="amount" placeholder="ID Number" onChange={this.onChange}/> </Col>

											<Col md="12" className="my-2"><Input type="paycode" name="paycode" id="paycode" placeholder="KRA PIN" onChange={this.onChange}/> </Col>

									        <Col md="12" className="my-2"><Input type="amount" name="amount" id="amount" placeholder="Position" onChange={this.onChange}/> </Col>

											<Col md="12" className="my-2"><Input type="amount" name="amount" id="amount" placeholder="Department" onChange={this.onChange}/> </Col>

									      

									        


									        </Row>

									        




								      </FormGroup>
								      		
								      		<Button value="add more" onClick={this.addClick.bind(this)}>Add</Button> 

								      		<Button className="mx-4" type="submit">Submit</Button>

								      
								    </Form>

									</Card>

								

						        </Col>
						        
						    </Row>
					    </Container>
						<Container className="my-4" >
							
							<Row>
						        <Col md={{ size: 8, offset: 2 }}>

								<Card body>
								<CardTitle>Earnings</CardTitle>



									<Form onSubmit={this.handleSubmit}>

										




								      <FormGroup>
								       


									        <Row>


									        <Col md="5"><Input type="paycode" name="paycode" id="paycode" placeholder="Item" onChange={this.onChange}/> </Col>

									        <Col md="5"><Input type="amount" name="amount" id="amount" placeholder="Amount" onChange={this.onChange}/> </Col>

									        <Col md="2"><Button>Remove</Button> </Col>

									        


									        </Row>

									        




								      </FormGroup>

								      {this.createUI()} 

								      		
								      		<Button value="add more" onClick={this.addClick.bind(this)}>Add</Button> 

								      		<Button className="mx-4" type="submit">Submit</Button>

								      
								    </Form>

									</Card>

								

						        </Col>
						        
						    </Row>
					    </Container>
						<Container className="my-4" >
							
							<Row>
						        <Col md={{ size: 8, offset: 2 }}>

								<Card body>
								<CardTitle>Deductions</CardTitle>



									<Form onSubmit={this.handleSubmit}>

										




								      <FormGroup>
								       


									        <Row>


									        <Col md="5"><Input type="paycode" name="paycode" id="paycode" placeholder="Item" onChange={this.onChange}/> </Col>

									        <Col md="5"><Input type="amount" name="amount" id="amount" placeholder="Amount" onChange={this.onChange}/> </Col>

									        <Col md="2"><Button>Remove</Button> </Col>

									        


									        </Row>

									        




								      </FormGroup>

								      {this.createUI()} 

								      		
								      		<Button value="add more" onClick={this.addClick.bind(this)}>Add</Button> 

								      		<Button className="mx-4" type="submit">Submit</Button>

								      
								    </Form>

									</Card>

								

						        </Col>
						        
						    </Row>
					    </Container>
						<Container className="my-4">
							
							<Row>
						        <Col md={{ size: 8, offset: 2 }}>

								<Card body>
								<CardTitle>Tax Details</CardTitle>



									<Form onSubmit={this.handleSubmit}>

										




								      <FormGroup>
								       


									        <Row>


									        <Col md="5"><Input type="paycode" name="paycode" id="paycode" placeholder="Item" onChange={this.onChange}/> </Col>

									        <Col md="5"><Input type="amount" name="amount" id="amount" placeholder="Amount" onChange={this.onChange}/> </Col>

									        <Col md="2"><Button>Remove</Button> </Col>

									        


									        </Row>

									        




								      </FormGroup>

								      {this.createUI()} 

								      		
								      		<Button value="add more" onClick={this.addClick.bind(this)}>Add</Button> 

								      		<Button className="mx-4" type="submit">Submit</Button>

								      
								    </Form>

									</Card>

								

						        </Col>
						        
						    </Row>
					    </Container>

						</div>
				




				);
	}

}

export default HomeComponent;