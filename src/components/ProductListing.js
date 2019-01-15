import React from 'react';

import ProductListItem from './ProductListItem';
import { connect } from 'react-redux';

const ProductListing = (props) => {
    return (
            <div className="product-listing">
                {   
                props.products.map( product => 
                    <ProductListItem product={product} />)
                } 
           </div>
    );
};

// grabs all values for cart state and maps it to props so we can get access values via start.cart
function mapStateToProps (state) {
    return {
        cart: state.cart
    }
}
// maps all of our actions to props on this component 
function mapDispatchToProps (dispatch) {
    return {
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