import React from 'react';
import {NavLink} from 'react-router-dom';
import '../myStyles.scss';

const Navigation = () => {
    return (
        <div>
        <h3 className="phone"> 1-800-555-1234 | info@organicextractions.com </h3>
        <div className="nav">
            <NavLink className="navButton" to="/">Home</NavLink>
            <NavLink className="navButton" to="/about">About</NavLink>
            <NavLink className="navButton" to="/contact">Contact</NavLink>
            <NavLink className="navButton" to="/news">News</NavLink>
            <NavLink className="navButton" to="/shop">Shop</NavLink>
        </div>
        </div>
    )
}

export default Navigation 