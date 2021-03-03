import React from 'react';
import {Link} from 'react-router-dom'

function NavBar(props) {
    return (
        <div id="NavCss">
            <Link to="/">Home</Link>
            <Link to="/AllBeers">All Beers</Link>
            <Link to="/RandomBeer">Random Beer</Link>
            <Link to="/NewBeer">New Beer</Link>
        </div>
    );
}

export default NavBar;