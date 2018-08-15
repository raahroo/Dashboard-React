import React, { Component } from 'react';
import Dashboars from './views/Dashboards';
import Home from './views/Home';
import LoginPage from './views/Login';
import MyAccount from './views/MyAccount';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import { Provider } from 'react-redux';
import { Store } from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <div>
            <Header />
              <Route exact path="/" component = {Home} />
              <Route path="/dashboards" component = {Dashboars} />
              <Route path="/profile" component = {MyAccount} />
              <Route path="/login" component = {LoginPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
