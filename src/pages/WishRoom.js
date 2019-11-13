import React, { Component } from 'react';
import './Room.css';
import Menubar from '../components/Menubar';
import Footer from '../components/Footer';
import {
    Container,
    Row, Col, Card as CardItem,
    CardImg, CardBody, CardTitle, CardSubtitle, CardText,
    Spinner
} from 'reactstrap';

import { wishProductRef } from '../config/Fire';

import { WishContext } from '../contexts/WishList';

export class Room extends Component {
    constructor(props) {
        super(props);

        this.onRetrieveData = this.onRetrieveData.bind(this);
        this.gotData = this.gotData.bind(this);
        this.errData = this.errData.bind(this);

        this.state = {
            // products: {},
            products: [],
            spinner: true
        }
    }

    onRetrieveData() {
        wishProductRef.on('value', this.gotData, this.errData);
    }

    gotData(data) {
        this.setState({ spinner: false });
        const products = data.val();
        if (products != null) {
            const keys = Object.keys(products);
            this.setState({
                itemNumber: keys.length
            });
            for (let i = 0; i < keys.length; i++) {
                let k = keys[i];
                this.setState({
                    products: this.state.products.concat(products[k])
                })
            }
        }
    }

    errData(err) {
        console.log(err);
    }

    componentWillMount() {
        this.onRetrieveData();
    }

    onUnMountProduct() {
        this.setState({
            hidden: true
        })
    }

    render() {
        const { products } = this.state;
        return (
            <div>
                <Menubar title='Your Dream Rooms' imageName='nav-wishroom' />
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
                                    <h1>Your Wished Rooms</h1>
                                    <h4>We Will Keep You On Updated With Newest Information</h4>
                                </div>
                            </Col>
                        </Row >

                        <div className="room-list">
                            {/* <Row>

                                <WishContext.Consumer>
                                    {({ products }) =>
                                        (products.map(product => (
                                            <Col lg={4} className="column">
                                                <CardItem>
                                                    <CardImg
                                                        top
                                                        width="100%"
                                                        src={product.imageUrl}
                                                    />
                                                    <CardBody>
                                                        <CardTitle>{product.name}</CardTitle>
                                                        <CardText>{product.description}</CardText>
                                                        <WishContext.Consumer>
                                                            {({ removeFromWish }) => <Button onClick={() => { removeFromWish(product); this.onUnMountProduct(); }}>Remove</Button>}
                                                        </WishContext.Consumer>
                                                    </CardBody>
                                                </CardItem>
                                            </Col>
                                        )))}
                                </WishContext.Consumer>

                            </Row> */}
                            <Row>
                                {products.map(product => (
                                    <Col lg={4} className="column">
                                        <CardItem>
                                            <CardImg
                                                top
                                                width="100%"
                                                src={product.imageUrl}
                                            />
                                            <CardBody>
                                            <CardTitle className="card-title">{product.name}</CardTitle>
                                                <CardSubtitle className="card-price">{product.price}</CardSubtitle>
                                                <CardText className="card-description">{product.description}</CardText>
                                                {/* <WishContext.Consumer>
                                                    {({ removeFromWish }) => <Button onClick={() => { removeFromWish(product); this.onUnMountProduct(); }}>Remove</Button>}
                                                </WishContext.Consumer> */}
                                            </CardBody>
                                        </CardItem>
                                    </Col>
                                ))}
                            </Row>
                        </div>

                        {/* <Row>
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
                </Row>   */}

                    </Container>
                }
                <Footer />
            </div>
        )
    }
}

export default Room
