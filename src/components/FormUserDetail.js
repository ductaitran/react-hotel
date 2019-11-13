import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './FormUserDetail.css';

export class FormUserDetail extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="container">
                <Container fluid>
                    <Form>
                        <FormGroup>
                            <Row form>
                                <Col md={6}>
                                    <Label className="label">First Name</Label>
                                    <Input
                                        className="input"
                                        type="text"
                                        placeholder="Enter your first name..."
                                        onChange={handleChange('firstName')}
                                        value={values.firstName}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={6}>
                                    <Label className="label">Last Name</Label>
                                    <Input
                                        className="input"
                                        type="text"
                                        placeholder="Enter your last name..."
                                        onChange={handleChange('lastName')}
                                        value={values.lastName}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Label className="label">Email</Label>
                            <Input
                                className="input"
                                type="email"
                                placeholder="Enter your email..."
                                onChange={handleChange('email')}
                                value={values.email}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label className="label">Date Check In</Label>
                                    <Input
                                        className="input"
                                        type="date"
                                        onChange={handleChange('dateIn')}
                                        value={values.dateIn}
                                    />
                                </Col>
                                <Col>
                                    <Label className="label">Date Check Out</Label>
                                    <Input
                                        className="input"
                                        type="date"
                                        onChange={handleChange('dateOut')}
                                        value={values.dateOut}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label className="label">Adult</Label>
                                    <Input className="input" type="select" onChange={handleChange('adult')} value={values.adult}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                                <Col>
                                    <Label className="label">Children</Label>
                                    <Input className="input" type="select" onChange={handleChange('children')} value={values.children}>
                                        <option >1</option>
                                        <option >2</option>
                                        <option >3</option>
                                        <option >4</option>
                                        <option >5</option>
                                    </Input>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Row>
                            <Col className="button"> <Button color="success" onClick={this.continue}>Continue</Button> </Col>
                        </Row>
                    </Form>
                </Container>

            </div>
        )
    }
}

export default FormUserDetail;