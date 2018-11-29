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
                <NavLink to="/listings" onClick={navResponse}><button>Listings</button></NavLink>
                <NavLink to="/new" onClick={navResponse}><button>Add to Listings</button></NavLink>
                <NavLink to="/about" onClick={navResponse}><button>About</button></NavLink>
            </div>
        </header>
    )
}