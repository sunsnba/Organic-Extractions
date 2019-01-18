import React from 'react'
import ProductListItem from './ProductListItem'
import { connect } from 'react-redux'

import fetchApi from '../modules/fetchApi'

// iteratre over our products and give us one product list item component per product 
class ProductListing extends React.Component {
    componentDidMount() {
        const { loadProducts } = this.props
        fetchApi('get', 'https://api.myjson.com/bins/5yxb4')
        .then((json => {
            loadProducts(json)
        }))
    }

    render () {
        const { addToCart, removeFromCart, products, cart } = this.props

        return  <div className="product-listing">
                {   
                products.map( product => 
                    <ProductListItem 
                    product={product}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    cartItem={cart.filter( cartItem => cartItem.id === product.id)[0]}
                    />)
                } 
           </div>
    }
}

// mapStateToProps defines which keys out of our redux store we're going to allow as props inside 
// our our current component. cart key to go to the cart reducer indside of our redux store
//
// grabs all values for cart state and maps it to props so we can get access to values via start.cart
function mapStateToProps(state) {
    return {
        cart: state.cart,
        products: state.products,
    }
}
// maps all of our actions to props on this component 
// dispatches action with type: 'ADD' and payload: 'item' or same for type: 'REMOVE'
function mapDispatchToProps (dispatch) {
    return {
        loadProducts: (products) => {
            dispatch({type: 'LOAD', payload: products })
        },
        addToCart: (item) => {
            dispatch({type: 'ADD', payload: item})
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)

// connect is a function that take these two functions, returns a new function and that new function 
// pass to ProductListing.