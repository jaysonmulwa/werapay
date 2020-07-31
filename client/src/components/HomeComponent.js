import React, { Component, lazy, Suspense} from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, Fade, Card, CardTitle } from 'reactstrap';



const NavComponentLazy = lazy(() =>
  import("./NavComponent.js")
);

const JumboComponentLazy = lazy(() =>
  import("./JumboComponent.js")
);


let endpoint = "http://localhost:8000";

class HomeComponent extends Component {

	state = {

		fname: '',

		idno: '',

		kra: '',

		position: '',

		dpt: '',

		payroll: '',

		cname: '',

		caddr: '',


		values: [],



		paycode_e: [],

		amount_e: [],

		values_e: [],


		paycode_d: [],

		amount_d: [],

		values_d: [],


		paycode_t: [],

		amount_t: [],

		values_t: [],

	};

onChange = e =>{
	this.setState({ [e.target.name]: e.target.value });

};

handleEarningsPaycodeChange(i, event) {
    
	 let paycode_e = [...this.state.paycode_e];
     paycode_e[i] = event.target.value;
     this.setState({ paycode_e });
}

handleEarningsAmountChange(i, event) {
	
	let amount_e = [...this.state.amount_e];
	amount_e[i] = event.target.value;
	this.setState({ amount_e });
}
handleDeductionsPaycodeChange(i, event) {
    
	let paycode_d = [...this.state.paycode_d];
	paycode_d[i] = event.target.value;
	this.setState({ paycode_d });
}

handleDeductionsAmountChange(i, event) {
   
   let amount_d = [...this.state.amount_d];
   amount_d[i] = event.target.value;
   this.setState({ amount_d });
}
handleTaxPaycodeChange(i, event) {
    
	let paycode_t = [...this.state.paycode_t];
	paycode_t[i] = event.target.value;
	this.setState({ paycode_t });
}

handleTaxAmountChange(i, event) {
   
   let amount_t = [...this.state.amount_t];
   amount_t[i] = event.target.value;
   this.setState({ amount_t });
}

	addClick(){
		this.setState(prevState => ({ values: [...prevState.values, '']}))
	}
	addClick_e(){
		this.setState(prevState => ({ values_e: [...prevState.values_e, '']}))
	}
	addClick_d(){
		this.setState(prevState => ({ values_d: [...prevState.values_d, '']}))
	}
	addClick_t(){
		this.setState(prevState => ({ values_t: [...prevState.values_t, '']}))
	}
	
	removeClick(i){
		let values = [...this.state.values];
		values.splice(i,1);
		this.setState({ values });
	}
	removeClick_e(i){
		let values_e = [...this.state.values_e];
		values_e.splice(i,1);
		this.setState({ values_e });
	}
	removeClick_d(i){
		let values_d = [...this.state.values_d];
		values_d.splice(i,1);
		this.setState({ values_d });
	}
	removeClick_t(i){
		let values_t = [...this.state.values_t];
		values_t.splice(i,1);
		this.setState({ values_t });
	}

handleSubmit = (event) => {

	/*alert(this.state.fname + this.state.cname + this.state.caddr);
	alert('A name was submitted: ' + this.state.paycode_e.join(', ') + ' ... ' + this.state.amount_e.join(', ') );
	alert('A name was submitted: ' + this.state.paycode_d.join(', ') + ' ... ' + this.state.amount_d.join(', ') );
	alert('A name was submitted: ' + this.state.paycode_t.join(', ') + ' ... ' + this.state.amount_t.join(', ') );*/
	event.preventDefault();
	
	const { cname, caddr, fname, idno, kra, position, dpt, payroll, paycode_e, amount_e, paycode_d, amount_d, paycode_t, amount_t,} = this.state;

	//Create user object
	const newSlip = {
		cname,
		caddr,
		fname,
		idno,
		kra,
		position,
		dpt,
		payroll,
		paycode_e,
		amount_e,
		paycode_d,
		amount_d,
		paycode_t,
		amount_t,
	};

		console.log(newSlip);

		if(newSlip){

			axios.post(
					endpoint + "/api/v1/personalslip",
					{
					  newSlip
					},
					{
					  headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					  }
					}
				  )
				  .then(res => {
					console.log(res);
				  });
			  
		}
    

  };



  createEarningsUI(){
	return this.state.values_e.map((el, i) => 
		<div key={i}>

			 <FormGroup>
		   
				<Fade in={true} out={true} tag="h5" className="mt-3">
						<Row>

							<Col md="5"><Input type="text" name="paycode" id="paycode" placeholder="Item" onChange={this.handleEarningsPaycodeChange.bind(this, i)} /> </Col>

							<Col md="5"><Input type="number" name="amount" id="amount" placeholder="Amount" onChange={this.handleEarningsAmountChange.bind(this, i)}/> </Col>

							<Col md="2"><Button type='button' outline color="danger" value='remove' onClick={this.removeClick_e.bind(this, i)}>Remove</Button> </Col>

						</Row>
				</Fade>

			</FormGroup>

		</div>          
	)
 }

 createDeductionsUI(){
	return this.state.values_d.map((el, i) => 
		<div key={i}>

			 <FormGroup>
		   
		   <Fade in={true} out={true} tag="h5" className="mt-3">
				   <Row>


					   <Col md="5"><Input type="text" name="paycode" id="paycode" placeholder="Item" onChange={this.handleDeductionsPaycodeChange.bind(this, i)} /> </Col>

					   <Col md="5"><Input type="number" name="amount" id="amount" placeholder="Amount" onChange={this.handleDeductionsAmountChange.bind(this, i)}/> </Col>

					   <Col md="2"><Button type='button' outline color="danger" value='remove' onClick={this.removeClick_d.bind(this, i)}>Remove</Button> </Col>

				   </Row>
		   </Fade>

			</FormGroup>

		</div>          
	)
 }

 createTaxUI(){
	return this.state.values_t.map((el, i) => 
		<div key={i}>

			 <FormGroup>
		   
		   <Fade in={true} out={true} tag="h5" className="mt-3">
				   <Row>


					   <Col md="5"><Input type="text" name="paycode" id="paycode" placeholder="Item" onChange={this.handleTaxPaycodeChange.bind(this, i)} /> </Col>

					   <Col md="5"><Input type="number" name="amount" id="amount" placeholder="Amount" onChange={this.handleTaxAmountChange.bind(this, i)}/> </Col>

					   <Col md="2"><Button type='button' outline color="danger" value='remove' onClick={this.removeClick_t.bind(this, i)}>Remove</Button> </Col>

				   </Row>
		   </Fade>

			</FormGroup>

		</div>          
	)
 }

	render() {
			return (
						
						<div>
						<NavComponentLazy />
						<JumboComponentLazy />
						<Container className="my-4" >
							
							<Row>
						        <Col md={{ size: 8, offset: 2 }}>

								<Card body>
								<CardTitle id="Company">Company Details</CardTitle>



									<Form onSubmit={this.handleSubmit}>

								      <FormGroup>
								       

									        <Row>


									        <Col md="12" className="my-2"><Input type="text" name="cname" id="cname" placeholder="Company Name" onChange={this.onChange}/> </Col>

									        <Col md="12" className="my-2"><Input type="text" name="caddr" id="caddr" placeholder="Company Address" onChange={this.onChange}/> </Col>

									        </Row>

								      </FormGroup>
								      		

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


									        <Col md="12" className="my-2"><Input type="text" name="fname" id="fname" placeholder="Full Name" onChange={this.onChange}/> </Col>

									        <Col md="12" className="my-2"><Input type="number" name="idno" id="ino" placeholder="ID Number" onChange={this.onChange}/> </Col>

											<Col md="12" className="my-2"><Input type="text" name="kra" id="kra" placeholder="KRA PIN" onChange={this.onChange}/> </Col>

									        <Col md="12" className="my-2"><Input type="text" name="position" id="position" placeholder="Position" onChange={this.onChange}/> </Col>

											<Col md="12" className="my-2"><Input type="text" name="dpt" id="dpt" placeholder="Department" onChange={this.onChange}/> </Col>

											<Col md="12" className="my-2"><Input type="text" name="payroll" id="payroll" placeholder="Payroll Number" onChange={this.onChange}/> </Col>


									        </Row>

								      </FormGroup>

								      
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


								      {this.createEarningsUI()} 

								      		
								      		<Button value="add more" onClick={this.addClick_e.bind(this)}>Add</Button> 
								      
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

								      {this.createDeductionsUI()} 

											<Button value="add more" onClick={this.addClick_d.bind(this)}>Add</Button>																				  
													  
								      		

								      
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

									
								      {this.createTaxUI()} 

								      		
								      		<Button value="add more" onClick={this.addClick_t.bind(this)}>Add</Button> 

								    </Form>

									</Card>

								

						        </Col>
						        
						    </Row>
					    </Container>
						<Container className="my-4">
							
							<Row>
						        <Col md={{ size: 8, offset: 2 }}>

								<Card body>



									<Form onSubmit={this.handleSubmit}>


								      
								      		<center><Button color="primary" className="mx-4" type="submit">Submit</Button></center>

								      
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