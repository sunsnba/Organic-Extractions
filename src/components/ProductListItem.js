import React from 'react';

const ProductListItem = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <img 
            height={100}
            title= {props.product.name}
            src={`./Shop/${props.product.image}`}
            />
            <div>{ props.product.description }</div>
            <div>${ props.product.price }</div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductListItem