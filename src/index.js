import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import News from './components/News'
import Shop from './components/Shop'
import CartPage from './components/CartPage'
import CheckoutPage from './components/Pages/checkout'
import OrdersPage from './components/Pages/orderspage'
import Error from './components/Error'
import Navigation from './components/Navigation'
import { Route, BrowserRouter, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './config/store'

import './myStyles.scss'


class App extends React.Component {
  constructor(props) {
    super(props)
  
}
  render() {
    return (
          <Provider store={store}> 
          <BrowserRouter >
          <div>
          <Navigation {...this.props }/>
          <Switch>
            <Route exact path={"/"} component={Home} exact/>
            <Route exact path={"/about"} component={About}/>
            <Route exact path={"/contact"} component={Contact}/>
            <Route exact path={"/news"} component={News}/>
            <Route exact path={"/shop"} component={Shop}/>
            <Route exact path={"/cart"} component={CartPage}/>
            <Route exact path={'/checkout'} component={CheckoutPage}/>
            <Route path='/orders/:id' component={OrdersPage} />
            <Route component={Error}/>
            </Switch>
            </div>
          </BrowserRouter>
          </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));