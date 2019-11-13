import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Reserve from './pages/Reserve';
import About from './pages/About';
import Room from './pages/Room';
import Error from './pages/Error';
import WishRoom from './pages/WishRoom';
import Login from './pages/Login';

import {WishProvider } from './contexts/WishList';
import {LoginProvider} from './contexts/Login';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoginProvider>
      <WishProvider>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/reserve" component={Reserve} exact/>
              <Route path="/about" component={About} exact/>
              <Route path="/room" component={Room} exact />
              <Route path="/wishRoom" component={WishRoom} exact />
              <Route path="/Login" component={Login} exact />
              <Route component={Error} />
            </Switch>
          </BrowserRouter>
        </div>
      </WishProvider>
      </LoginProvider>
    );

    // return (
    //   <div className="App">
    //     <Feature />
    //   </div>
    // );
  }
}

export default App;
