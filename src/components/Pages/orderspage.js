import React from 'React'
import Order from '../../features/orders/index'

export default function OrdersPage (props) {
  return <div>
     <h2>my order</h2> 
     <Order id={props.match.params.id} />
  </div>
}