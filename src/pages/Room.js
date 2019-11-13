import React, { Component } from 'react';
import './Room.css';
import { NavLink } from 'react-router-dom';
import Menubar from '../components/Menubar';
import Footer from '../components/Footer';
import {
  Container, Row, Col, Button,
  Card as CardItem, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText,
  Spinner
} from 'reactstrap';
import Feature from '../components/Feature';
import { faWifi, faPlane, faPhone, faSwimmingPool } from '@fortawesome/free-solid-svg-icons';

import WishButton from '../components/WishButton';

import { WishContext } from '../contexts/WishList';

import { LoginContext } from '../contexts/Login';

import { productRef } from '../config/Fire';


export class Room extends Component {
  constructor(props) {
    super(props);

    this.onRetrieveData = this.onRetrieveData.bind(this);
    this.gotData = this.gotData.bind(this);
    this.errData = this.errData.bind(this);

    this.state = {
      products: [
        // {
        //     "id": "f419a93a-b943-47b2-802a-3cad28b4d057",
        //     "name": "Superior Room",
        //     "price": "$199",
        //     "description": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in",
        //     "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
        // }, {
        //     "id": "13ddbc95-1641-4d9c-82d5-45263c47bf9d",
        //     "name": "President Room",
        //     "price": "$299",
        //     "description": "eu est congue elementum in hac habitasse platea dictumst morbi vestibulum",
        //     "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        // }, {
        //     "id": "96c715a6-73d4-41ff-a261-63ba3cad8315",
        //     "name": "Luxury Room",
        //     "price": "$250",
        //     "description": "nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi",
        //     "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
        // }, {
        //     "id": "6bcaf2b4-a6ef-4d4e-b757-a4e1a68b8051",
        //     "name": "Couple Room",
        //     "price": "$220",
        //     "description": "condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat",
        //     "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        // }, {
        //     "id": "4e6a8dbb-cbda-4a53-82b1-fb1cf2f486d3",
        //     "name": "Standard Room",
        //     "price": "$100",
        //     "description": "sit amet lobortis sapien sapien non mi integer ac neque",
        //     "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
        // }, {
        //     "id": "845f10b0-a4f2-4bb7-bf50-94ea7ec4c961",
        //     "name": "DOM",
        //     "price": "$50",
        //     "description": "molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci",
        //     "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
        // }
        // }, {
        //     "id": "9a75187c-9514-4493-832c-28d9fa973d2a",
        //     "name": "Cheese - Pied De Vents",
        //     "description": "risus auctor sed tristique in tempus sit amet sem fusce consequat nulla",
        //     "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        // }, {
        //     "id": "762feb73-5462-40d5-9f8e-83adf2f77e76",
        //     "name": "Munchies Honey Sweet Trail Mix",
        //     "description": "suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut",
        //     "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        // }, {
        //     "id": "2d34583b-31e4-4b6e-bd7e-87429782a439",
        //     "name": "Lettuce - Romaine, Heart",
        //     "description": "purus phasellus in felis donec semper sapien a libero nam dui proin leo",
        //     "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        // }
      ],
      spinner: true
    }
  }

  onRetrieveData() {
    productRef.on('value', this.gotData, this.errData);
  }

  gotData(data) {
    this.setState({ spinner: false });
    const products = data.val();
    const keys = Object.keys(products);
    for (let i = 0; i < keys.length; i++) {
      let k = keys[i];
      this.setState({
        products: this.state.products.concat(products[k])
      })
    }
    console.log(keys);
  }

  errData(err) {
    console.log(err);
  }

  componentWillMount() {
    this.onRetrieveData();
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Menubar title='Our Modern Rooms' imageName='nav-room-background' />
        {this.state.spinner ?
          <div className="spinner">
            <Spinner color="primary" style={{ width: '3rem', height: '3rem' }} type="grow" />
            <Spinner color="warning" style={{ width: '3rem', height: '3rem' }} type="grow" />
            <Spinner color="success" style={{ width: '3rem', height: '3rem' }} type="grow" />
            <Spinner color="danger" style={{ width: '3rem', height: '3rem' }} type="grow" />
          </div>
          :
          <Container fluid>
            <Row>
              <Col>
                <div className="title">
                  <h1>Room Types</h1>
                  <h4>Our convenient rooms</h4>
                </div>
              </Col>
            </Row >

            <div className="room-list">
              <Row>
                {products.map(product => (
                  <Col lg={4} className="column">
                    <CardItem>
                      <CardImg
                        top
                        width="100%"
                        height="180px"
                        src={product.imageUrl}
                      />
                      <CardBody>
                        <CardTitle className="card-title">{product.name}</CardTitle>
                        <CardSubtitle className="card-price">{product.price}</CardSubtitle>
                        <CardText className="card-description">{product.description}</CardText>
                        <LoginContext.Consumer>
                          {({ user }) => user ?
                            <WishContext.Consumer>
                              {({ addToWish }) => <Button outline style={{ bottom: "5px" }} color="info" onClick={() => addToWish(product)}>Add To Wish</Button>}
                            </WishContext.Consumer>
                            : <NavLink exact to="/login">
                              <Button>Add To Wish</Button>
                            </NavLink>}
                        </LoginContext.Consumer>
                      </CardBody>
                    </CardItem>
                  </Col>
                ))}
              </Row>
              <LoginContext.Consumer>
                {({ user }) => user ? <WishButton className="sticky-buttonn" /> : null}
              </LoginContext.Consumer>

            </div>

            <Row>
              <Col>
                <div className="title">
                  <h1>Free Services</h1>
                  <h4>We Serve You The Convenience</h4>
                </div>
              </Col>

            </Row >

            <Row>
              <Col>
                <Feature title="Free Hi-Speed Wifi" icon={faWifi} />
              </Col>
              <Col>
                <Feature title="Airport Transfersi" icon={faPlane} />
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

          </Container>
        }
        <Footer />
      </div>
    )
  }
}

export default Room
