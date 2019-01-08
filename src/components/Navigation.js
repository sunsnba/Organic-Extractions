import React from 'react';
import {NavLink} from 'react-router-dom';
import '../myStyles.scss';

const Navigation = () => {
    return (
        <div className="nav">
            <NavLink className="navButton" to="/">Home</NavLink>
            <NavLink className="navButton" to="/about">About</NavLink>
            <NavLink className="navButton" to="/contact">Contact</NavLink>
        </div>
    )
}

export default Navigation 