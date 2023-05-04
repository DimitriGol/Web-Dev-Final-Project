import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom';
import Logo from '../workspace-logo-2.png';

function Nav(){
    const NavStyle = {
        color: 'black'
    };

    return (
        <nav>
            <Link to='/'>
                <img src={Logo} alt="logo" className='nav-logo'/>
            </Link>
            <ul className="nav-links">

                <Link style={NavStyle} to='/employees'>
                    <li>Employees</li>
                </Link>

                <Link style={NavStyle} to='/tasks'>
                    <li>Tasks</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;