import React from 'react';
import {NavLink} from 'react-router-dom'
import '../myStyles.scss';
import { connect } from 'react-redux'

const Navigation = ({cart}) => {
    return (
        <div>
        <h3 className="phone"> 1-800-555-1234 | info@organicextractions.com </h3>
        <div className="nav">
            <NavLink className="navButton" to="/checkout">CHECKOUT</NavLink>
            <NavLink className="navButton" to="/cart">CART ({cart.reduce((acc, item) => {
                return acc + item.quantity
            }, 0)})</NavLink>
            <NavLink className="navButton" to="/shop">SHOP</NavLink>
            <NavLink className="navButton" to="/news">NEWS</NavLink>
            <NavLink className="navButton" to="/contact">CONTACT</NavLink>
            <NavLink className="navButton" to="/about">ABOUT</NavLink>
            <NavLink className="navButton" to="/">HOME</NavLink>
        </div>
        </div>
    )
}


function mapStateToProps(state) {
  return {
      cart: state.cart
  }
}

export default connect(mapStateToProps)(Navigation) 