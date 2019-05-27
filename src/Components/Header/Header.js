import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header(){
    return(
        <div className = 'header'>
        <img src= "/shelfie_icon.png"></img>
        <h1>Shelfie</h1>
        <div className="header_links">
        <Link to = '/'> Dashboard</Link>
        <Link to = '/add'>Add Inventory</Link>
        </div>
        </div>
    );
}

export default Header;