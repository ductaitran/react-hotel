import React, { Component } from 'react';
import './About.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Menubar from '../components/Menubar';
import Card from '../components/Card';
import Footer from '../components/Footer';

export class About extends Component {
  render() {
    return (
      <div>
        <Menubar title='About Us' imageName='nav-about2-background'/>
        <Container fluid>
          <Row>
            <Col>
                <div className="title">
                  <h1>Hotel Founders</h1>
                  <h4>Who Built These Spaces</h4>
                </div>
            </Col>
          </Row >

          <div className="card-container">
            <Row>
              <Col lg={4}>
                <div className="card">
                  <Card title='Tony Stark' subTitle='Chief Executive Officer' imgUrl={require(`../img/card-img.jpg`)} />
                </div>
              </Col>
              <Col lg={4}>
                <div className="card">
                  <Card title='Romanoff' subTitle='Founder' imgUrl={require(`../img/card-img2.jpg`)}/>
                </div>
              </Col>
              <Col lg={4}>
                <div className="card">
                  <Card title='Peter Parker' subTitle='Co-Founder' imgUrl={require(`../img/card-img3.jpg`)}/>
                </div>
              </Col>
            </Row>
          </div>
         
          <div className="booking-container ">
            <Row>
              <Col lg={6}>
                <div className="detail">
                  <p>Make Yourself Comfortable in Any of Our Fully-Equipped Rooms</p>
                </div>
                
              </Col>
              <Col lg={6}>
                <NavLink exact to="/reserve">
                  <Button color="secondary" href="./Reserve" className="detail-btn">Reserve Now</Button>
                </NavLink>
              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default About
