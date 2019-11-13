import React, { Component } from 'react';
import './Login.css'
import fire from '../config/Fire';

import { Alert, Form, FormGroup, Input, Label, Button } from 'reactstrap'

import { LoginContext } from '../contexts/Login';
import { NavLink } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isUnavailable: false,
      isInvalid: false,
      isValid: false
    }
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      this.setState({ isUnavailable: false });
      this.setState({ isValid: true });
    }).catch((error) => {
      this.setState({ isUnavailable: true });
      this.setState({ isInvalid: false });
      console.log(error);
    });
  }

  signUp(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      this.setState({ isInvalid: false });
      this.setState({ isUnavailable: false });
      this.setState({ isValid: true });
    }).catch((error) => {
      this.setState({ isInvalid: true });
      console.log(error);
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="form-background">
        <div className="form-container">
          <Form>
            <FormGroup>
              <Label for="exampleEmail" className="label">Email address</Label>
              <Input value={this.state.email} onChange={this.handleChange} type="email" className="input" name="email" id="exampleEmail" placeholder="Enter email" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword" className="label">Password</Label>
              <Input value={this.state.password} onChange={this.handleChange} type="password" className="input" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            <FormGroup>
              <LoginContext.Consumer>
                {({ user }) => user ?
                  <NavLink exact to="/">
                    <Button type="submit" color="primary" className="btn-login">Submit</Button>
                  </NavLink>
                  : <Button onClick={this.login} type="submit" color="primary" className="btn-login">Submit</Button>
                }
              </LoginContext.Consumer>
              <Button onClick={this.signUp} type="submit" color="secondary" className="btn-signup">Sign Up</Button>
            </FormGroup>
            <FormGroup>
              {this.state.isUnavailable ? <Alert color="danger" className="alert">Wrong email or password - Check it out!</Alert>
                : null}
              {this.state.isInvalid ? <Alert color="danger" className="alert">Invalid Account!</Alert>
                : null}
              {this.state.isValid ? <Alert color="success" className="alert">Success!</Alert>
                : null}
            </FormGroup>
          </Form>
        </div>
      </div>
    )
  }
}

