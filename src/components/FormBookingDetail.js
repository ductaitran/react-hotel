import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class FormBookingDetail extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
        <div>
            <Container fluid>
                <Form>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Date Check In</Label>
                                <Input 
                                    type="date" 
                                    onChange={handleChange('dateIn')}
                                    value={values.dateIn}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Date Check Out</Label>
                                <Input 
                                    type="date" 
                                    onChange={handleChange('dateOut')} 
                                    value={values.dateOut}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Adult</Label>
                                <Input type="select" onChange={handleChange('adult')} value={values.adult}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Children</Label>
                                <Input type="select" onChange={handleChange('children')} value={values.children}>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>
                                    <option >4</option>
                                    <option >5</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <Button color="secondary" onClick={this.back} style={style.button}>Back</Button>
                            <Button color="success" onClick={this.continue} style={style.button}>Continue</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
        )
    }
}
const style = {
    button: {
        marginRight: 15
    }
}
export default FormBookingDetail
