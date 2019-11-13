import React, { Component } from 'react';

import fire from '../config/Fire';

export const LoginContext = React.createContext();

export class LoginProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        });
    }

    render() {
        return (
            <LoginContext.Provider
                value={{
                    user: this.state.user
                }}>
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}
