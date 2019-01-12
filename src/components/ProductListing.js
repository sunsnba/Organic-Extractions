import React from 'react';

import ProductListItem from './ProductListItem';

const ProductListing = (props) => {
    return (
            <div>
                {   
                props.products.map( product => 
                    <ProductListItem product={product} />)
                } 
           </div>
    );
};

export default ProductListing;
