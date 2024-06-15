import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo"><a href="Home">OOAK Hotels</a></div>
            <nav>
                <ul className='navlist'>
                    <li><a href="list-hotel">List Hotel</a></li>
                    <li><a href="help-support">Help & Support</a></li>
                    <li><a href="login-container">Login / Sign Up</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
