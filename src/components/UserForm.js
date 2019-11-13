import React, { Component } from 'react';
import FormUserDetail from './FormUserDetail';
import Confirm from './Confirm';

// import { Button } from 'reactstrap';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '', 
        dateIn: '',
        dateOut: '',
        adult: '',
        children: ''
    }

    // proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // handle fields change 
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, dateIn, dateOut, adult, children } = this.state;
    const values = { firstName, lastName, email, dateIn, dateOut, adult, children }
    
    switch (step) {
        case 1:
            return (
                <FormUserDetail
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
        case 2:
            return (
                <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
            />
            )

        case 3: return (
            <h1 style={style.h1}>Thank you for Booking</h1>
        )
    }
  }
}

const style = {
    h1: {
        textAlign: 'center'
    }
}
export default UserForm
