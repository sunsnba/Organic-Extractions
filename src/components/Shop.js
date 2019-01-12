import React from 'react';

import ProductListing from './ProductListing';
import data from '../data/products.json';

const Shop = (props) => {
    return (
            <div>
                <h2>Shop</h2>
                <ProductListing products={data.products} />
           </div>
    );
};

export default Shop;

