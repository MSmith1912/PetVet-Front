import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <header className="header">
        <div>
            <nav>
                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/animals">Animals</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    
)

export default NavBar;