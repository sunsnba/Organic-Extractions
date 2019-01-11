import React from 'react';
import {NavLink} from 'react-router-dom';
import '../myStyles.scss';

const Navigation = () => {
    return (
        <div>
        <h3 className="phone"> 1-800-555-1234 | info@organicextractions.com </h3>
        <div className="nav">
            <NavLink className="navButton" to="/cart">CART</NavLink>
            <NavLink className="navButton" to="/shop">SHOP</NavLink>
            <NavLink className="navButton" to="/news">NEWS</NavLink>
            <NavLink className="navButton" to="/contact">CONTACT</NavLink>
            <NavLink className="navButton" to="/about">ABOUT</NavLink>
            <NavLink className="navButton" to="/">HOME</NavLink>
        </div>
        </div>
    )
}

export default Navigation 