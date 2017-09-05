import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header';
import CreateTrip from './createTrip';
import Signin from './auth/signin';
import Signout from './auth/signout';
import Signup from './auth/signup';
import RequireAuth from './auth/require_auth';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route path="/signin" component={Signin} />
          <Route path="/signout" component={Signout} />
          <Route path="/signup" component={Signup} />
          <Route path="/createTrip" component={RequireAuth(CreateTrip)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
