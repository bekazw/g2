import React, { Component } from 'react';
import './App.css';
//router
import { Route, Switch } from 'react-router-dom';
//comps
import Auth from './Auth/Auth';
import Main from './Main/Main';
import Reg from './Reg/Reg';
import Player from './Player/Player';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path = "/" component = {Auth} />
        <Route path = "/main" component = {Main} />
        <Route path = "/player/:num" component = {Player} />  
        <Route path = "/reg" component = {Reg} />        
      </Switch>
    );
  }
}

export default App;
