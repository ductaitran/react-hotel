import React from 'react';
import './Footer.css';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Row classname="row">
                    <Col lg="4" className="footer-item">
                        <div className="quick-menu-container">
                            <h6>Quick Menu</h6>
                            <div>About Us</div>
                            <div>Home</div>
                            <div>Privacy Policy</div>

                        </div>
                    </Col>
                    <Col lg="4" className="footer-item">
                        <div>
                            <h6>Stay Connected With Us</h6>
                            <div className="social-brand">
                                <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="https://twitter.com/?lang=en"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </div>

                        </div>
                    </Col>
                    <Col lg="4" className="footer-item">
                        <div className="sign-up">
                            <h6>Sign up for newsletter</h6>
                            <input type="text" placeholder="Your email..." />
                            <span><FontAwesomeIcon icon={faPaperPlane} /></span>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row className="row">
                    <Col lg="4" className="footer-item">
                        <div>
                            <h6><span className="contact-icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></span> Address:</h6>
                            <p>98 West 21th Street, CT</p>
                        </div>
                    </Col>
                    <Col lg="4" className="footer-item">
                        <div>
                            <h6><span className="contact-icon"><FontAwesomeIcon icon={faPhone} /></span> Phone:</h6>
                            <p>(+84)99999999</p>
                        </div>
                    </Col>
                    <Col lg="4" className="footer-item">
                        <div>
                            <h6><span className="contact-icon"><FontAwesomeIcon icon={faEnvelope} /></span> Email:</h6>
                            <p>ductaitran99@gmail.com</p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}