import React, { Component } from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export class Card extends Component {
  render() {
    // const imageUrl = require(`../img/${this.props.imageName}.jpg`);
    return (
      <div className="card">
        <div className="front">
          <img src={this.props.imgUrl} alt="" />
        </div>
        <div className="back">
          <div className="back-content middle">
            <h2>{this.props.title}</h2>
            <span>{this.props.subTitle}</span>
            <div class="social">
              <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://twitter.com/?lang=en"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
