import React from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
    return(
        <div className="landingPage">
            <span>
                <h1> Welcome to MyAir</h1>
                <p><NavLink to="/new" className="newListing">Enter</NavLink></p>
            </span>
        </div>
    )
}