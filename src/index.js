import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import './myStyles.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
  
}
  render() {
    return (
          <BrowserRouter >
          <div>
          <Navigation />
          <Switch>
            <Route path={"/"} component={Home} exact/>
            <Route path={"/about"} component={About}/>
            <Route path={"/contact"} component={Contact}/>
            <Route component={Error}/>
            </Switch>
            </div>
          </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));