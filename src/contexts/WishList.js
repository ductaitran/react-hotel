import React, { Component } from 'react';
import { wishProductRef } from '../config/Fire';

export const WishContext = React.createContext();

// const products = [];
const keys = {};

export class WishProvider  extends Component {
    constructor(props) {
        super(props);

        this.onRetrieveData = this.onRetrieveData.bind(this);
        this.gotData = this.gotData.bind(this);
        // this.errData = this.errData.bind(this);
        this.addToWish = this.addToWish.bind(this);

        this.state = {
            products: [],
            itemNumber: 0
        };

        this.addToWish = this.addToWish.bind(this);
        this.removeFromWish = this.removeFromWish.bind(this);
    }

    onRetrieveData() {
        wishProductRef.on('value', this.gotData, this.errData);
    }

    gotData(data) {
        const products = data.val();
        this.products = products;
        if (products != null) {
            const keys = Object.keys(products);
            this.keys = keys;
            this.setState({
                itemNumber: keys.length
            });
            for (let i = 0; i < keys.length; i++) {
                let k = keys[i];
                console.log('key: ', keys[i]);
                this.setState({
                    products: this.state.products.concat(products[k])
                })
            }
        }
        console.log(keys);
    }

    addToWish(product) {
        let isduplicate = false;
        if(this.keys != null){
            for (let i = 0; i < this.keys.length; i++) {
                let k = this.keys[i];
                if (product.id === this.products[k].id) {
                    isduplicate = true;
                }
            }
        }

        if (isduplicate === false){
            wishProductRef.push(product);
        }
    }

    componentDidMount() {
        this.onRetrieveData();
    }

    removeFromWish(product) {
        let key = 0;
        for (let i = 0; i < this.keys.length; i++) {
            let k = this.keys[i];
            if (product.id === this.products[k].id) {
                key = k;
                break;
            }
        }
        if (key != 0) {
            wishProductRef.child(key).remove();
        }
    }

    render() {

        return (
            <WishContext.Provider 
                value={{
                    products: this.state.products,
                    itemNumber: this.state.itemNumber,
                    addToWish: this.addToWish,
                    removeFromWish: this.removeFromWish
            }}>
                { this.props.children }
            </WishContext.Provider>
    )
  }
}
