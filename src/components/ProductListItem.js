import React from 'react';

const ProductListItem = (props) => {
    
    return (
        <div className="product-list-item">
            <h3>{ props.product.name }</h3>
            <img 
            height={150}
            width={150}
            title= { props.product.name }
            src={`./Shop/${props.product.image}`}
            />
            <div>{ props.product.description }</div>
            <div>${ props.product.price }</div>
            <div>
                <button
                onClick={ () => props.addToCart(props.product)}
                >Add to Cart({
                    (props.cartItem && props.cartItem.quantity) || 0
                    // if value is undefined or null we'll return 0 for the quantity.
                })</button>
            </div>
        </div>
    )
}

export default ProductListItem