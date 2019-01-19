import React from 'react'
import { connect } from 'react-redux'

import Cart from '../cart/index'
import CheckoutForm from './form'

 function Checkout (props) {
   const { cart } = props 
  return <div>
      <div style={{border: '1px solid black'}}> 
        <Cart />
      </div>

      <CheckoutForm />
  </div>
} 

function mapStateToProps(state) {
  return {
      cart: state.cart
  }
}

export default connect(mapStateToProps)(Checkout);
