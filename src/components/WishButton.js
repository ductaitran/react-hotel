import React, { Component } from 'react';
import './WishButton.css';
import { NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList } from '@fortawesome/free-solid-svg-icons';

import { WishContext } from '../contexts/WishList';

export class WishButton extends Component {
  render() {
    return (
      <div className="button-container">
        <WishContext.Consumer>
          {({ itemNumber }) =>
            <NavLink href="/WishRoom">
              <span className="item-number">{(itemNumber)}</span>
              <FontAwesomeIcon className="sticky-button" icon={faThList} />
            </NavLink>
          }
        </WishContext.Consumer>
      </div>
    )
  }
}

export default WishButton
