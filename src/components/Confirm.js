import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';


export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName, email, dateIn, dateOut, adult, children } } = this.props;
        return (
            <div className="confirm-container">
                <Container fluid>
                    <ListGroup>
                        <ListGroupItem>
                            <ListGroupItemHeading>First Name</ListGroupItemHeading>
                            <ListGroupItemText>{firstName}</ListGroupItemText>
                        </ListGroupItem>

                        <ListGroupItem>
                            <ListGroupItemHeading>Last Name</ListGroupItemHeading>
                            <ListGroupItemText>{lastName}</ListGroupItemText>
                        </ListGroupItem>

                        <ListGroupItem>
                            <ListGroupItemHeading>Email</ListGroupItemHeading>
                            <ListGroupItemText>{email}</ListGroupItemText>
                        </ListGroupItem>

                        <ListGroupItem>
                            <ListGroupItemHeading>Date Check In</ListGroupItemHeading>
                            <ListGroupItemText>{dateIn}</ListGroupItemText>
                        </ListGroupItem>

                        <ListGroupItem>
                            <ListGroupItemHeading>Date Check Out</ListGroupItemHeading>
                            <ListGroupItemText>{dateOut}</ListGroupItemText>
                        </ListGroupItem>

                        <ListGroupItem>
                            <ListGroupItemHeading>Number Of Adults</ListGroupItemHeading>
                            <ListGroupItemText>{adult}</ListGroupItemText>
                        </ListGroupItem>

                        <ListGroupItem>
                            <ListGroupItemHeading>Number Of Children</ListGroupItemHeading>
                            <ListGroupItemText>{children}</ListGroupItemText>
                        </ListGroupItem>
                    </ListGroup>
                    <Row>
                        <Col>
                            <Button color="secondary" onClick={this.back} style={style.button}>Back</Button>
                            <Button color="success" onClick={this.continue} style={style.button}>Confirm</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const style = {
    button: {
        marginRight: 15,
        marginTop: 15
    }
}
export default Confirm
