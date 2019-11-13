import React, { Component } from 'react';
import Menubar from '../components/Menubar';
import Footer from '../components/Footer';
import UserForm from '../components/UserForm';
import { Container, Row, Col } from 'reactstrap';

import './Reserve.css'

export class Reserve extends Component {
  render() {
    return (
      <div>
        <Menubar title='Reservation' imageName='nav-reserve-background' />
        <Container>
          <Row>
            <Col>
              <div className="user-form">
                <UserForm />
              </div>
            </Col>
            <Col>
              <div>
                <div>
                  <h4>Address:</h4>
                  <p>98 West 21th Street, CT</p>
                </div>
                <div>
                  <h4>Phone:</h4>
                  <p>(+84)99999999</p>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>ductaitran99@gmail.com</p>
                </div>
              </div>
            </Col>
          </Row>
          {/* <div className="body-container">
            <UserForm />
          </div> */}
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Reserve
