import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap'

export const Home = () => {
    return(
        <div className="landingPage">
            <span>
                <h1> Explore MyAir</h1>
                <Button outline color="primary" >Home</Button>
                <p><NavLink to="/new" className="newListing">Enter</NavLink></p>
            </span>
        </div>
    )
}