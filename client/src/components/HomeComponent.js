import React, { Component, lazy } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {
	FormGroup,
	Fade,
	CustomInput,
	
} from "reactstrap";

const NavComponentLazy = lazy(() => import("./NavComponent.js"));

const JumboComponentLazy = lazy(() => import("./JumboComponent.js"));

const FooterComponentLazy = lazy(() => import("./FooterComponent.js"));


let endpoint = "http://localhost:5000";

class HomeComponent extends Component {
	state = {
		fname: "",

		idno: "",

		kra: "",

		position: "",

		dpt: "",

		payroll: "",

		cname: "",

		caddr: "",

		month: "",

		year: "",

		bank: "",

		acc: "",

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

		downloaded: false,

		mail_sent:false,

		allowEmail: false,

		send_to_name:"",

		send_to_email: "",

		slip_name: ""
	};

	componentDidMount() {
		this.setState({
			downloaded: false,
		});
	}

	FileOnChange = (e) => {
		if (typeof e.target.files[0] != "undefined") {
			const initState = this.state.filename;
			//const initFileState = this.state.isNew;

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

	

	onChange = (e) => {
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

	addClick() {
		this.setState((prevState) => ({ values: [...prevState.values, ""] }));
	}
	addClick_e() {
		this.setState((prevState) => ({
			values_e: [...prevState.values_e, ""],
		}));
	}
	addClick_d() {
		this.setState((prevState) => ({
			values_d: [...prevState.values_d, ""],
		}));
	}
	addClick_t() {
		this.setState((prevState) => ({
			values_t: [...prevState.values_t, ""],
		}));
	}

	removeClick(i) {
		let values = [...this.state.values];
		values.splice(i, 1);
		this.setState({ values });
	}
	removeClick_e(i) {
		let values_e = [...this.state.values_e];
		values_e.splice(i, 1);
		this.setState({ values_e });
	}
	removeClick_d(i) {
		let values_d = [...this.state.values_d];
		values_d.splice(i, 1);
		this.setState({ values_d });
	}
	removeClick_t(i) {
		let values_t = [...this.state.values_t];
		values_t.splice(i, 1);
		this.setState({ values_t });
	}
	handleDownload = (event) => {
		event.preventDefault();

		const link = endpoint + "/slips/payslip.pdf";

		//const link = "/slips/payslip.pdf";

		axios.get(link, "", "").then((res) => {
			console.log(res);
		});
	};

	handleAllowEmail = (e) =>{

		e.preventDefault();

		this.setState({
			mail_sent: false,
			allowEmail: true,
		});


	}

	handleSendAsMail = (e) =>{

		e.preventDefault();

		const {
			slip_name,
			send_to_name,
			send_to_email,
		} = this.state;

		const newMail = new FormData();

		newMail.append("mail_slip_name", slip_name);
		newMail.append("mail_send_name", send_to_name);
		newMail.append("mail_send_email", send_to_email);

		this.setState({
			mail_sent: false,
		});

		const link = endpoint + "/api/v1/sendmail";
		//const link = "/api/v1/sendmail";

		const config = {
			headers: {
				"Content-Type":
					"multipart/form-data; boundary=--------------------------811161660471543283806813",
			},
		};

		if (newMail) {
			axios.post(link, newMail, config).then((res) => {
				if (res.data !== "Failed") {

					console.log(res.data);	

					this.setState({
						allowEmail:false,
						mail_sent: true,
					});
				}
			});
		}


	}

	handleSubmit = (event) => {
		event.preventDefault();

		const {
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
		} = this.state;

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


		this.setState({
			downloaded: false,
			mail_sent: false,
			allowEmail: false,
		});

		const link = endpoint + "/api/v1/personalslip";
		//const link = "/api/v1/personalslip";

		const config = {
			headers: {
				"Content-Type":
					"multipart/form-data; boundary=--------------------------811161660471543283806813",
			},
		};

		if (newSlip) {
			axios.post(link, newSlip, config).then((res) => {
				if (res.data !== "Failed") {

					console.log(res.data);

					this.setState({
						slip_name: res.data,
					});

					this.setState({
						downloaded: true,
					});
				}
			});
		}
	};

	createEarningsUI() {
		return this.state.values_e.map((el, i) => (
			<div key={i}>
				<FormGroup>
					<Fade in={true} out={true} tag="h5" className="mt-3">
						<div class="flex flex-col md:flex-row -mx-3">
							<div class="w-12/12 lg:w-5/12 px-3">
								<input
									class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline w-full"
									type="text"
									name="paycode"
									id="paycode"
									placeholder="Item"
									onChange={this.handleEarningsPaycodeChange.bind(
										this,
										i
									)}
								/>
							</div>

							<div class="w-12/12 md:w-5/12 px-3">
								<input
									class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline w-full"
									type="number"
									name="amount"
									id="amount"
									placeholder="Amount (0.00)"
									onChange={this.handleEarningsAmountChange.bind(
										this,
										i
									)}
								/>
							</div>

							<div class="w-1/12 md:w-2/12 px-3">
								<button
									class="rounded-lg py-2 px-4 text-red-600 bg-gray-100 hover:bg-red-600 hover:text-white focus:outline-none"
									type="button"
									color="danger"
									value="remove"
									onClick={this.removeClick_e.bind(this, i)}
								>
									Remove
								</button>
							</div>
						</div>
					</Fade>
				</FormGroup>
			</div>
		));
	}

	createDeductionsUI() {
		return this.state.values_d.map((el, i) => (
			<div key={i}>
				<FormGroup>
					<Fade in={true} out={true} tag="h5" className="mt-3">
						<div class="flex flex-col md:flex-row -mx-3">
							<div class="w-12/12 lg:w-5/12 px-3">
								<input
									class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline w-full"
									type="text"
									name="paycode"
									id="paycode"
									placeholder="Item"
									onChange={this.handleDeductionsPaycodeChange.bind(
										this,
										i
									)}
								/>
							</div>

							<div class="w-12/12 md:w-5/12 px-3">
								<input
									class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline w-full"
									type="number"
									name="amount"
									id="amount"
									placeholder="Amount (0.00)"
									onChange={this.handleDeductionsAmountChange.bind(
										this,
										i
									)}
								/>
							</div>

							<div class="w-1/12 md:w-2/12 px-3">
								<button
									class="rounded-lg py-2 px-4 text-red-600 bg-gray-100 hover:bg-red-600 hover:text-white focus:outline-none"
									type="button"
									value="remove"
									onClick={this.removeClick_d.bind(this, i)}
								>
									Remove
								</button>
							</div>
						</div>
					</Fade>
				</FormGroup>
			</div>
		));
	}

	createTaxUI() {
		return this.state.values_t.map((el, i) => (
			<div key={i}>
				<FormGroup>
					<Fade in={true} out={true} tag="h5" className="mt-3">
						<div class="flex flex-col md:flex-row -mx-3">
							<div class="w-12/12 lg:w-5/12 px-3">
								<input
									class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline w-full"
									type="text"
									name="paycode"
									id="paycode"
									placeholder="Item"
									onChange={this.handleTaxPaycodeChange.bind(
										this,
										i
									)}
								/>
							</div>

							<div class="w-12/12 md:w-5/12 px-3">
								<input
									class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline w-full"
									type="number"
									name="amount"
									id="amount"
									placeholder="Amount (0.00)"
									onChange={this.handleTaxAmountChange.bind(
										this,
										i
									)}
								/>
							</div>

							<div class="w-1/12 md:w-2/12 px-3">
								<button
									class="rounded-lg py-2 px-4 text-red-600 bg-gray-100 hover:bg-red-600 hover:text-white focus:outline-none"
									type="button"
									value="remove"
									onClick={this.removeClick_t.bind(this, i)}
								>
									Remove
								</button>
							</div>
						</div>
					</Fade>
				</FormGroup>
			</div>
		));
	}

	render() {
		return (
			<div className="bg-gray-200">
				<NavComponentLazy />
				<JumboComponentLazy />

				{/*Earnings*/}
				<section class="text-gray-700 body-font">
					<div class="container py-6 mx-auto flex">
						<div class="lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10  shadow-md">
							<h2 class="text-gray-900 text-lg mb-1 font-medium title-font mb-5">
								Earnings
							</h2>

							{this.createEarningsUI()}

							<div class="mb-2 mr-2">
								<button
									class="rounded-lg py-2 px-4 text-white bg-gray-600 hover:bg-green-600 focus:outline-none"
									value="add more"
									onClick={this.addClick_e.bind(this)}
								>
									Add
								</button>
							</div>
						</div>
					</div>
				</section>

				{/*Deductions*/}
				<section class="text-gray-700 body-font">
					<div class="container py-6 mx-auto flex">
						<div class="lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10  shadow-md">
							<h2 class="text-gray-900 text-lg mb-1 font-medium title-font mb-5">
								Deductions
							</h2>

							{/*<form>*/}
							{this.createDeductionsUI()}

							<div class="mb-2 mr-2">
								<button
									class="rounded-lg py-2 px-4 text-white bg-gray-600 hover:bg-green-600 focus:outline-none"
									value="add more"
									onClick={this.addClick_d.bind(this)}
								>
									Add
								</button>
							</div>
							{/*</form>*/}
						</div>
					</div>
				</section>

				{/*Tax*/}
				<section class="text-gray-700 body-font">
					<div class="container py-6 mx-auto flex">
						<div class="lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10  shadow-md">
							<h2 class="text-gray-900 text-lg mb-1 font-medium title-font mb-5">
								Tax Details
							</h2>

							{this.createTaxUI()}

							<div class="mb-2 mr-2">
								<button
									class="rounded-lg py-2 px-4 text-white bg-gray-600 hover:bg-green-600 focus:outline-none"
									value="add more"
									onClick={this.addClick_t.bind(this)}
								>
									Add
								</button>
							</div>
						</div>
					</div>
				</section>

				{/*Company Details*/}
				<section class="text-gray-700 body-font">
					<div class="container py-6 mx-auto flex">
						<div class="lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10  shadow-md">
							<h2 class="text-gray-900 text-lg mb-1 font-medium title-font mb-5">
								Company Details
							</h2>

							<label
								class="block text-gray-700 text-sm font-medium mb-2"
								for="companyname"
							>
								Company Name
							</label>

							<input
								class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline"
								type="text"
								name="cname"
								id="cname"
								placeholder=""
								onChange={this.onChange}
							/>

							<label
								class="block text-gray-700 text-sm font-medium mb-2"
								for="companyaddress"
							>
								Company Address
							</label>

							<input
								class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline"
								type="text"
								name="caddr"
								id="caddr"
								placeholder=""
								onChange={this.onChange}
							/>
							<label
								class="block text-gray-700 text-sm font-medium mb-4"
								for="companyaddress"
							>
								Company Logo
							</label>

							<CustomInput
								type="file"
								name="customFile"
								id="customFile"
								label={"choose an image file"}
								onChange={this.FileOnChange}
								className="w-1/2 mb-4"
							/>
							<div className="">
								<img
									style={{
										maxHeight: "8rem",
									}}
									src={this.state.tempfile}
								/>
							</div>
						</div>
					</div>
				</section>

				{/*Personal Details*/}
				<section class="text-gray-700 body-font">
					<div class="container py-6 mx-auto flex">
						<div class="lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10  shadow-md">
							<h2 class="text-gray-900 text-lg mb-1 font-medium title-font mb-5">
								Personal Details
							</h2>

							<label
								class="block text-gray-700 text-sm font-medium mb-2"
								for="fullname"
							>
								Full Name
							</label>

							<input
								class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline"
								type="text"
								name="fname"
								id="fname"
								placeholder=""
								onChange={this.onChange}
							/>

							<label
								class="block text-gray-700 text-sm font-medium mb-2"
								for="companyaddress"
							>
								ID Number
							</label>

							<input
								class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline"
								type="number"
								name="idno"
								id="ino"
								placeholder=""
								onChange={this.onChange}
							/>

							<label
								class="block text-gray-700 text-sm font-medium mb-2"
								for="companyaddress"
							>
								KRA PIN
							</label>

							<input
								class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline"
								type="text"
								name="kra"
								id="kra"
								placeholder=""
								onChange={this.onChange}
							/>

							<label
								class="block text-gray-700 text-sm font-medium mb-2"
								for="companyaddress"
							>
								Position
							</label>

							<input
								class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline"
								type="text"
								name="position"
								id="position"
								placeholder=""
								onChange={this.onChange}
							/>

							<label
								class="block text-gray-700 text-sm font-medium mb-2"
								for="companyaddress"
							>
								Department
							</label>

							<input
								class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline"
								type="text"
								name="dpt"
								id="dpt"
								placeholder=""
								onChange={this.onChange}
							/>

							<label
								class="block text-gray-700 text-sm font-medium mb-2"
								for="companyaddress"
							>
								Payroll No.
							</label>

							<input
								class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline"
								type="text"
								name="payroll"
								id="payroll"
								placeholder=""
								onChange={this.onChange}
							/>

							<div class="flex flex-wrap -mx-3">
								<div class="w-full lg:w-1/2 px-3">
									<label
										class="block text-gray-700 text-sm font-medium mb-2"
										for="bank"
									>
										Bank
									</label>
									<input
										class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline w-full"
										type="text"
										name="bank"
										id="bank"
										placeholder=""
										onChange={this.onChange}
									/>
								</div>

								<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
									<label
										class="block text-gray-700 text-sm font-medium mb-2"
										for="acc"
									>
										Account Number
									</label>
									<input
										class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline w-full"
										type="text"
										name="acc"
										id="acc"
										placeholder=""
										onChange={this.onChange}
									/>
								</div>
							</div>

							<div class="flex flex-wrap -mx-3">
								<div class="w-full md:w-1/2 px-3">
									<label
										class="block text-gray-700 text-sm font-medium mb-2"
										for="month"
									>
										Month
									</label>
									<select
										class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline w-full"
										type="select"
										name="month"
										id="month"
										placeholder=""
										onChange={this.onChange}
									>
										<option value="--">-- Select Month --</option>

										<option value="JANUARY">January</option>
										<option value="FEBRUARY">
											February
										</option>
										<option value="MARCH">March</option>
										<option value="APRIL">April</option>
										<option value="MAY">May</option>
										<option value="JUNE">June</option>
										<option value="JULY">July</option>
										<option value="AUGUST">August</option>
										<option value="SEPTEMBER">
											September
										</option>
										<option value="OCTOBER">October</option>
										<option value="NOVEMBER">
											November
										</option>
										<option value="DECEMBER">
											December
										</option>
									</select>
								</div>

								<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
									<label
										class="block text-gray-700 text-sm font-medium mb-2"
										for="year"
									>
										Year
									</label>
									<input
										class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline w-full"
										type="number"
										name="year"
										id="year"
										placeholder=""
										onChange={this.onChange}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/*Submit*/}
				<section class="text-gray-700 body-font">
					<div class="container py-6 mx-auto flex">
						<div class="lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10  shadow-md">
							<form onSubmit={this.handleSubmit}>
								<center>
									{/*<Button
										color="primary"
										className="mx-4"
										type="submit"
									>
										Submit
									</Button>*/}

									<div class="mb-2 mr-2">
										<button
											class="rounded-lg py-2 px-4 text-white bg-blue-600 hover:bg-blue-500 focus:outline-none"
											value="add more"
											type="submit"
										>
											Submit
										</button>
									</div>
								</center>
							</form>
						</div>
					</div>
				</section>

				{this.state.downloaded && (
					<Fade in={true} out={true}>
						<section class="text-gray-700 body-font">
							<div class="container py-6 mx-auto flex">
								<div class="lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10  shadow-md">
									<center>
										<a
											
											href = { `http://localhost:5000/slips/${this.state.slip_name}` }

											target="_blank"
											download
										>
											Download File
										</a> or 

										
										<button
											class="rounded-lg mx-3 py-2 px-4 text-blue-600 bg-gray-100 hover:bg-blue-600 hover:text-white focus:outline-none"
											type="button"
											value="Send as Mail"
											onClick={(e) => this.handleAllowEmail(e)}
										>
											Send as Mail
										</button>


										{/*href="http://localhost:5000/slips/payslip.pdf"*/}
										{/*href="/slips/payslip.pdf"*/}
									</center>
								</div>
							</div>
						</section>
					</Fade>
				)}

				{this.state.allowEmail && (

					<Fade in={true} out={true}>
					<section class="text-gray-700 body-font">
						<div class="container py-6 mx-auto flex">
							<div class="lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10  shadow-md">
							<div class="flex flex-col md:flex-row -mx-3">
								<div class="w-12/12 lg:w-5/12 px-3">
								<input
									class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline w-full"
									type="text"
									name="send_to_name"
									id="send_to_name"
									placeholder="Recepient Name"
									onChange={this.onChange}
								/>
								</div>

								<div class="w-12/12 md:w-5/12 px-3">
								<input
									class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline w-full"
									type="email"
									name="send_to_email"
									id="send_to_email"
									placeholder="Recepient Email Address"
									onChange={this.onChange}
								/>
								</div>

							

							<div class="w-1/12 md:w-3/12 px-3">
										<button
											class="rounded-lg mx-3 py-2 px-4 text-white bg-blue-600 hover:bg-blue-500 focus:outline-none"
											type="button"
											value="Send as Mail"
											onClick={(e) => this.handleSendAsMail(e)}
										>
											Send
									</button>
							</div>
						</div>
							</div>
						</div>

						

					</section>
					</Fade>


				)}

				{this.state.mail_sent && (

					<Fade in={true} out={true}>
					<section class="text-gray-700 body-font">

						<div class="container py-6 mx-auto flex">
							<div class="lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10  shadow-md">
								<center>
									Sent!										
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

export default withRouter(HomeComponent);
