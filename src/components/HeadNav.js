import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeadNav = () => {

    return(
        <header>
            <div className="navbar" id="navBar">
                <button className="navButton"></button>
                <NavLink to="/" className="navHome" id="navHome"></NavLink>
                <NavLink to="/listings"><button>Listings</button></NavLink>
                <NavLink to="/new"><button>Add to Listings</button></NavLink>
                <NavLink to="/featured"><button>Featured</button></NavLink>
                <NavLink to="/about"><button>About</button></NavLink>
            </div>
        </header>
    )
}