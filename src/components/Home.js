import React from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
    return(
        <div className="heroImage">
            <span>
                <h1> Welcome to MyAir</h1>
                <p><NavLink to="/listings" className="listingSubmit">Enter</NavLink></p>
            </span>
        </div>
    )
}