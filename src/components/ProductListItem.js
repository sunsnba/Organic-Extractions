import React from 'react';

const ProductListItem = (props) => {
    return (
        <div className="product-list-item">
            <h3>{ props.product.name }</h3>
            <img 
            height={100}
            width={100}
            title= { props.product.name }
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