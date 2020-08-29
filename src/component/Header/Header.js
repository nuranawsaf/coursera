import React from 'react';
import logo from '../../img/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="Home/">Home</a>
                <a href="Pages/">Pages</a>
                <a href="Courses">Courses</a>
                <a href="Blog">Blog</a>
            </nav>
            
        </div>
    );
};

export default Header;