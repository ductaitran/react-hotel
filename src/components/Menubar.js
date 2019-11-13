import React from 'react';
import './Menubar.css';
import { NavLink as RRNavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import fire from '../config/Fire';

import { WishContext } from '../contexts/WishList';
import { LoginContext } from '../contexts/Login';

export default class Menubar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onLogout = this.onLogout.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onLogout() {
    fire.auth().signOut();
  }

  render() {
    const imageUrl = require(`../img/${this.props.imageName}.jpg`);
    return (
      <div className="nav-wrapper parallax" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="overlay">
          <Navbar light expand="md">
            <NavbarBrand className="nav-brand">
              <NavLink tag={RRNavLink} exact to="/"><span className="nav-brand">RimLand</span></NavLink>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={RRNavLink} exact to="/">
                    <span className="nav-item">Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} exact to="/about">
                    <span className="nav-item">About</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Room">
                    <span className="nav-item">Rooms</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} exact to="/reserve">
                    <span className="nav-item">Reserve</span>
                  </NavLink>
                </NavItem>

                <LoginContext.Consumer>
                  {({ user }) => user ?
                    <span className="">
                      <NavItem>
                        <WishContext.Consumer>
                          {({ itemNumber }) =>
                            // <NavLink tag={RRNavLink} exact to="/wishRoom">
                            <NavLink href="/WishRoom">
                              <span className="nav-item wish-list">
                                <div className="icon">
                                  <FontAwesomeIcon icon={faThList} />
                                </div>
                                <div className="item-number">{(itemNumber)}</div>
                              </span>
                            </NavLink>
                          }
                        </WishContext.Consumer>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={RRNavLink} exact to="/">
                          <div className="icon nav-item">
                            <FontAwesomeIcon icon={faSignOutAlt} onClick={this.onLogout} />
                          </div>
                        </NavLink>
                      </NavItem>
                    </span>
                    :
                    <NavItem>
                      <NavLink tag={RRNavLink} exact to="/Login">
                        <span className="nav-item">Login</span>
                      </NavLink>
                    </NavItem>
                  }
                </LoginContext.Consumer>

                {/* <LoginContext.Consumer>
                  {({ user }) => user ?
                    <NavItem>
                      <NavLink tag={RRNavLink} exact to="/">
                        <div className="icon nav-item">
                          <FontAwesomeIcon icon={faSignOutAlt} onClick={this.onLogout} />
                        </div>
                      </NavLink>
                    </NavItem>
                    :
                    <NavItem>
                      <NavLink tag={RRNavLink} exact to="/Login">
                        <span className="nav-item">Login</span>
                      </NavLink>
                    </NavItem>}
                </LoginContext.Consumer> */}

                {/* <div>
                  { this.state.user ?             //only show button link to wish room when login
                    <LoginContext.Consumer>
                      { ({ shouldRender }) =>  shouldRender ? 
                        <NavItem>
                          <WishContext.Consumer>
                            { ({ wishItems }) =>  
                              <NavLink tag={RRNavLink} exact to="/wishRoom">
                                <span className="nav-item wish-list">
                                  <div className="icon">
                                    <FontAwesomeIcon icon={faThList}/>
                                  </div>
                                  <div className="item-number">{(wishItems.length)}</div>
                                </span>
                              </NavLink>
                            }
                          </WishContext.Consumer>
                        </NavItem> : null }
                    </LoginContext.Consumer>
                  : 
                    <NavItem>
                      <NavLink tag={RRNavLink} exact to="/Login">
                        <span className="nav-item">Login</span>   
                      </NavLink>
                    </NavItem>}
                          </div> */}

                {/* {this.state.shouldRender &&  
                  <NavItem>
                    <WishContext.Consumer>
                      { ({ wishItems }) =>  
                        <NavLink tag={RRNavLink} exact to="/wishRoom">
                          <span className="nav-item wish-list">
                            <div className="icon">
                              <FontAwesomeIcon icon={faThList}/>
                            </div>
                            <div className="item-number">{(wishItems.length)}</div>
                          </span>
                        </NavLink>
                      }
                    </WishContext.Consumer>
                  </NavItem>
                } */}

                {/* // <NavItem>
                //   <WishContext.Consumer>
                //     { ({ wishItems }) =>  
                //       <NavLink tag={RRNavLink} exact to="/wishRoom">
                //         <span className="nav-item wish-list">
                //           <div className="icon">
                //             <FontAwesomeIcon icon={faThList}/>
                //           </div>
                //           <div className="item-number">{(wishItems.length)}</div>
                //         </span>
                //       </NavLink>
                //     }
                //   </WishContext.Consumer>
                // </NavItem> */}

              </Nav>
            </Collapse>
          </Navbar>
          <div className="nav-text"><p>{this.props.title}</p></div>
        </div>
      </div>
    );
  }
}