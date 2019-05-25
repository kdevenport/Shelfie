import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className = ' header'>
        <img src= "/shelfie_icon.png"></img>
        <h1>Shelfie</h1>
        <Link to = '/'> Dashboard</Link>
        <Link to = '/add'>Add Inventory</Link>
        </div>
    );
}

export default Header;