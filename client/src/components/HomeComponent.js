import React, { Component, lazy, Suspense} from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, Fade, Card, CardTitle, CustomInput, CardImg, CardText, CardImgOverlay } from 'reactstrap';



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

		month: '',

		year: '',

		bank: '',

		acc: '',

		file: [],
		filename: null,
		tempfile: null,



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

	FileOnChange = (e) => {
		if (typeof e.target.files[0] != "undefined") {
			const initState = this.state.filename;
			const initFileState = this.state.isNew;

			//if first time- if is false
			if (initState == null) {
				this.setState({
					isNew: false,
				});
			}

			this.setState({ file: e.target.files[0] });
			this.setState({ filename: e.target.files[0].name });
			this.setState({ tempfile: URL.createObjectURL(e.target.files[0]) });

			//Toggle only for first time
			/*if (initFileState == true) {
				const imagepreview = document.querySelector(".imagepreview");
				imagepreview.classList.toggle("hidden");
			}*/
		}

		console.log(this.state);
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
	
	const { cname, caddr, fname, idno, kra, position, dpt, payroll, bank, acc, month, year, file, filename, paycode_e, amount_e, paycode_d, amount_d, paycode_t, amount_t,} = this.state;

	//Create user object
	/*const newSlip = {
		cname,
		caddr,
		fname,
		idno,
		kra,
		position,
		dpt,
		payroll,
		bank,
		acc,
		month,
		year,
		file,
		filename,
		paycode_e,
		amount_e,
		paycode_d,
		amount_d,
		paycode_t,
		amount_t,
	};*/

		const newSlip = new FormData();

		newSlip.append("cname", cname);
		newSlip.append("caddr", caddr);
		newSlip.append("fname", fname);
		newSlip.append("idno", idno);
		newSlip.append("kra", kra);
		newSlip.append("position", position);
		newSlip.append("dpt", dpt);
		newSlip.append("payroll", payroll);
		newSlip.append("bank", bank);
		newSlip.append("acc", acc);
		newSlip.append("month", month);
		newSlip.append("year", year);
		newSlip.append("position", position);
		newSlip.append("file", file);
		newSlip.append("filename", filename);
		newSlip.append("paycode_e", paycode_e);
		newSlip.append("amount_e", amount_e);
		newSlip.append("paycode_d", paycode_d);
		newSlip.append("amount_d", amount_d);
		newSlip.append("paycode_t", paycode_t);
		newSlip.append("amount_t", amount_t);

		console.log(newSlip);


		const link = endpoint + "/api/v1/personalslip";

		const config = {

			headers: { "Content-Type": "multipart/form-data; boundary=--------------------------811161660471543283806813" },

		};

		if(newSlip){

			axios.post(link, newSlip, config)
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

								<CardTitle id="Company">Company Details</CardTitle>

								<Card body>
								



									<Form onSubmit={this.handleSubmit}>

								      <FormGroup>
								       

									        <Row>


									        <Col md="12" className="my-2"><Label for="companyName">Company Name</Label><Input type="text" name="cname" id="cname" placeholder="Company Name" onChange={this.onChange}/> </Col>

									        <Col md="12" className="my-2"><Label for="CompanyAddress">Company Address</Label><Input type="text" name="caddr" id="caddr" placeholder="Company Address" onChange={this.onChange}/> </Col>
											<Col md="6" className="my-2">

											<Label for="Logo">Company Logo</Label>

											<CustomInput
												type="file"
												name="customFile"
												id="customFile"
												label={'choose an image file'}
												onChange={this.FileOnChange}/>
												
										
												{/*<input
													className="bg-gray-600 hidden"
													type="file"
													name="customFile"
													id="customFile"
													onChange={this.FileOnChange}
												/>*/}
												
												
											 </Col>

											 <Col md="6" className="my-2">

											 <div>
												<img
													style={{ maxHeight: "8rem" }}
													className="imagepreview hidden mx-auto mb-3 rounded-md shadow-md focus:outline-none focus:shadow-outline w-1/2"
													src={this.state.tempfile}
												/>
											</div>

											{/*<div>
											<Card inverse>
												<CardImg width="100%" src={this.state.tempfile} alt="Card image cap" />
												<CardImgOverlay>
												<CardTitle>Card Title</CardTitle>
												<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
												<CardText>
													<small className="text-muted">Last updated 3 mins ago</small>
												</CardText>
												</CardImgOverlay>
											</Card>
											</div>*/}
												</Col>

											 

										

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

								<CardTitle>Personal Details</CardTitle>
								<Card body>
								



									<Form onSubmit={this.handleSubmit}>

								      <FormGroup>

									        <Row>


									        <Col md="12" className="my-2"><Label for="Full Name">Full Name</Label><Input type="text" name="fname" id="fname" placeholder="Full Name" onChange={this.onChange}/> </Col>

									        <Col md="12" className="my-2"><Label for="ID Number">ID Number</Label><Input type="number" name="idno" id="ino" placeholder="ID Number" onChange={this.onChange}/> </Col>

											<Col md="12" className="my-2"><Label for="KRA PIN">KRA PIN</Label><Input type="text" name="kra" id="kra" placeholder="KRA PIN" onChange={this.onChange}/> </Col>

									        <Col md="12" className="my-2"><Label for="Position">Position</Label><Input type="text" name="position" id="position" placeholder="Position" onChange={this.onChange}/> </Col>

											<Col md="12" className="my-2"><Label for="Department">Department</Label><Input type="text" name="dpt" id="dpt" placeholder="Department" onChange={this.onChange}/> </Col>

											<Col md="12" className="my-2"><Label for="Payroll Number">Payroll Number</Label><Input type="text" name="payroll" id="payroll" placeholder="Payroll Number" onChange={this.onChange}/> </Col>

											<Col md="6" className="my-2"><Label for="Bank">Bank</Label><Input type="text" name="bank" id="bank" placeholder="Bank" onChange={this.onChange}/> </Col>

											<Col md="6" className="my-2"><Label for="Account Number">Account Number</Label><Input type="text" name="acc" id="acc" placeholder="Account Number" onChange={this.onChange}/> </Col>

											<Col md="6" className="my-2"><Label for="Month">Month</Label>
											
											<Input type="select" name="month" id="month" placeholder="Month" onChange={this.onChange}>
												<option value="JANUARY">January</option>
												<option value="FEBRUARY">February</option>
												<option value="MARCH">March</option>
												<option value="APRIL">April</option>
												<option value="MAY">May</option>
												<option value="JUNE">June</option>
												<option value="JULY">July</option>
												<option value="AUGUST">August</option>
												<option value="SEPTEMBER">September</option>
												<option value="OCTOBER">October</option>
												<option value="NOVEMBER">November</option>
												<option value="DECEMBER">December</option>

											</Input>
											</Col>

											<Col md="6" className="my-2"><Label for="Year">Year</Label><Input type="number" name="year" id="year" placeholder="Year" onChange={this.onChange}/> </Col>
											
											


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

								<CardTitle>Earnings</CardTitle>
								<Card body>
								

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

								<CardTitle>Deductions</CardTitle>
								<Card body>
								



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

								<CardTitle>Tax Details</CardTitle>
								<Card body>
								



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