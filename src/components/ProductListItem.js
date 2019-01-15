import React from 'react';
import AddBtn from './add-btn';
import RemoveBtn from './remove-btn';

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
                <AddBtn 
                cartItem={props.cartItem} 
                product={props.product} 
                addToCart={props.addToCart}
                />

                {
                    props.cartItem 
                    ?  <RemoveBtn 
                        cartItem={props.cartItem} 
                        product={props.product} 
                        removeFromCart={props.removeFromCart}
                    />
                    : null
                }
                
            </div>
        </div>
    )
}

export default ProductListItem