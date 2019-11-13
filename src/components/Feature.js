import React, { Component } from 'react';
import './Feature.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Feature extends Component {
  render() {
    return (
      <div className="feature-container">
        <div className="icon">
          <FontAwesomeIcon icon={this.props.icon} />
        </div>
        <div className="text">
          <h4>{this.props.title}</h4>
          <p>Vestibulum efficitur se sit amet sem semper luctus
              pellentes auctor tristique ornare. Ut porta ut magna in cursus.
            </p>
        </div>
      </div>
    )
  }
}

export default Feature
