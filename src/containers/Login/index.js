import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../../components/LoaderButton";
import "./Login.css";
import { Auth } from "aws-amplify";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			isLoading: false
		};
	}

	validateForm(){
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	handleChange = event => {
		this.setState({
			[event.target.id] : event.target.value
		});
	}

	handleSubmit = async event => {
		event.preventDefault();
		this.setState({ isLoading: true });
		try {
			await Auth.signIn(this.state.email, this.state.password);
			this.props.userHasAuthenticated(true);
			this.props.history.push("/");
		} catch (e) {
			alert(e.message);
			this.setState({ isLoading: false });
		}
	}
	render() {
		return(
			<div className="Login">
			<div className="inner-login">
				<div className="logo">
					<img src={process.env.PUBLIC_URL + 'ms-icon-144x144.png'} 
					className="login-image"
					alt="logo" />
				</div>
				<h3>Log In</h3>
				<form onSubmit={this.handleSubmit}>
					<FormGroup controlId="email" bsSize="large" validationState="primary">
						<ControlLabel>Email</ControlLabel>
						<FormControl
							autoFocus
							type="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>

					</FormGroup>
					<FormGroup controlId="password">
						<ControlLabel>Password</ControlLabel>
						<FormControl
							type="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</FormGroup>
					<LoaderButton
						block
						bsSize="large"
						bsStyle="primary"
						disabled={!this.validateForm()}
						type="submit"
						isLoading={this.state.isLoading}
						text="Login"
						loadingText="Logging in..." />
				</form>
				</div>
			</div>

		);
	}
}

export default Login;
