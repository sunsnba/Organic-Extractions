import React from 'react';

import ProductListing from './ProductListing';
import data from '../data/products.json';
import '../myStyles.scss';

const Shop = (props) => {
    return (
            <div className="shopContainer">
                <h2>Shop</h2>
                <ProductListing products={data.products} />
           </div>
    );
};

export default Shop;

