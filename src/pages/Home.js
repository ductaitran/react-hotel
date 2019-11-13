import React from 'react';
import './Home.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import image from '../img/General.jpg';
import CarouselSlide from '../components/CarouselSlide';
import Menubar from '../components/Menubar';
import Footer from '../components/Footer';
import Feature from '../components/Feature';
import { faWifi, faPlane, faPhone, faSwimmingPool } from '@fortawesome/free-solid-svg-icons';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Menubar title='Enjoy Your Time' imageName='Nav-background' />
                <Container fluid>
                    <Row className="row intro">
                        <Col>
                            <div>
                                <h2>Welcome <em>to</em></h2>
                                <h2>Rimland.</h2>
                                <div className="intro-detail">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo similique natus,
                                        a recusandae? Dolorum, unde a quibusdam est? Corporis deleniti obcaecati quibusdam
                                        inventore fuga eveniet! Qui delectus tempore amet!
                                </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo similique natus,
                                        a recusandae? Dolorum, unde a quibusdam est? Corporis deleniti obcaecati quibusdam
                                        inventore fuga eveniet! Qui delectus tempore amet!
                                </p>
                                    <NavLink exact to="/about">
                                        <Button color="secondary" className="intro-detail-button">More About Us</Button>{' '}
                                    </NavLink>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="intro-img"><img src={image} height='300px' /></div>
                        </Col>
                    </Row>
                    <div className="content-container">
                        <div className="room-background">
                            <Row className="row">
                                <Col>
                                    <div className="title">
                                        <h1>Our Luxury Rooms</h1>
                                        <h4>Featured Rooms</h4>
                                    </div>
                                </Col>
                            </Row >
                            <div className="room-body-container">
                                <Row className="row">
                                    <Col lg="6">
                                        <div className="room-img"><img src={require('../img/superior.jpg')} /></div>
                                    </Col>
                                    <Col lg="6">
                                        <div className="room-detail room-1">
                                            <h1 className="price">$199<span>/per night</span></h1>
                                            <h3 className="room-name">Superior Room</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Omnis cupiditate deserunt repellendus autem! Incidunt,
                                                cupiditate minus ad ipsam eos laudantium eum harum ut consequatur eligendi,
                                                accusantium reprehenderit quo saepe neque.
                                        </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Omnis cupiditate deserunt repellendus autem!
                                                Incidunt, cupiditate minus ad ipsam eos laudantium eum harum ut consequatur eligendi,
                                                accusantium reprehenderit quo saepe neque.
                                        </p>
                                            <Button outline color="secondary" className="room-1-button">Check out!</Button>{' '}
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="row">
                                    <Col lg="6">
                                        <div className="room-detail room-2">
                                            <h1 className="price">$299<span>/per night</span></h1>
                                            <h3 className="room-name">Presidential Room</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Omnis cupiditate deserunt repellendus autem! Incidunt,
                                                cupiditate minus ad ipsam eos laudantium eum harum ut consequatur eligendi,
                                                accusantium reprehenderit quo saepe neque.
                                        </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Omnis cupiditate deserunt repellendus autem!
                                                Incidunt, cupiditate minus ad ipsam eos laudantium eum harum ut consequatur eligendi,
                                                accusantium reprehenderit quo saepe neque.
                                        </p>
                                            <Button outline color="secondary" className="room-2-button">
                                                <NavLink exact to="/room">Check out!</NavLink>
                                            </Button>{' '}
                                        </div>
                                    </Col>
                                    <Col lg="6">
                                        <div className="room-img"><img src={require('../img/presidential.jpg')} /></div>
                                    </Col>
                                </Row>
                            </div>

                            <Row className="view-button">
                                <Col>
                                    <NavLink exact to="/room">
                                        <Button color="secondary">View All Rooms</Button>{' '}
                                    </NavLink>
                                </Col>
                            </Row>
                        </div>

                        <div className="service-container">
                            <Row className="row">
                                <Col>
                                    <div className="title">
                                        <h1>Our Free Services</h1>
                                        <h4>We Serve You The Convenience</h4>
                                    </div>
                                </Col>
                            </Row >
                            <Row>
                                <Col>
                                    <Feature title="Hi-Speed Wifi" icon={faWifi} />
                                </Col>
                                <Col>
                                    <Feature title="Airport Transfer" icon={faPlane} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Feature title="24 Hour Front Desk" icon={faPhone} />
                                </Col>
                                <Col>
                                    <Feature title="Swimming Pool & Jacuzzi" icon={faSwimmingPool} />
                                </Col>
                            </Row>
                        </div>

                        <div className="gallery-container">
                            <Row className="row">
                                <Col>
                                    <div className="title">
                                        <h1>See The Gallery</h1>
                                        <h4>Some Views Of Our Corners</h4>
                                    </div>
                                </Col>
                            </Row >
                            <Row>
                                <Col><CarouselSlide /></Col>
                            </Row>
                        </div>

                        <div className="reserve">
                            <Row>
                                <Col lg="6">
                                    <div className="reserve-detail"><p>Make Yourself Comfortable in Any of Our Fully-Equipped Rooms</p></div>
                                </Col>

                                <Col lg="6">
                                    <div className="reserve-button">
                                        <NavLink exact to="/reserve">
                                            <Button color="secondary">Reserve Now</Button>{' '}
                                        </NavLink>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
                <Footer />
            </div>
        );
    }
}