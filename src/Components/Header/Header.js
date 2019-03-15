import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className = ' header'>
        <div className = 'logo'>Shelfie</div>
        <Link to = '/'>
        <div className = 'linktoDashboard'>Dashboard</div>
        </Link>
        <Link to = '/add'>
        <div className = 'linktoAdd'> Add Inventory </div>
        </Link>
        </div>
    );
}

export default Header;