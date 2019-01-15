import React from 'react'

export default function AddBtn (props) {
    return <button
    onClick={ () => props.addToCart(props.product)}
    >Add to Cart({
        (props.cartItem && props.cartItem.quantity) || 0
        // if value is undefined or null we'll return 0 for the quantity.
    })</button>
}