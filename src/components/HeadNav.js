import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeadNav = () => {
    let navResponse = () => {
        let nav = document.getElementById("navBar");
        if (nav.className === "navbar"){
            nav.className += "responsive";
        } else {
            nav.className = "navBar";
        }
    }

    return(
        <header>
            <div className="navbar" id="navBar">
                <button className="navButton" onClick={navResponse} ></button>
                <NavLink to="/" className="navHome" id="navHome" onClick={navResponse}></NavLink>
                <NavLink to="/listings" onClick={navResponse}>Listings</NavLink>
                <NavLink to="/new" onClick={navResponse}>Add to Listings</NavLink>
                <NavLink to="/about" onClick={navResponse}>About</NavLink>
            </div>
        </header>
    )
}