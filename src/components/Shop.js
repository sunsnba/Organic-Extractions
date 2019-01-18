import React from 'react';

import ProductListing from './ProductListing';
import '../myStyles.scss';

const Shop = (props) => {
    return (
            <div className="shopContainer">
                <h2>Shop</h2>
                <ProductListing />
           </div>
    );
};

export default Shop;

