import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo1 from '../../images/site-logo.png'
import logo from '../../images/logo2.PNG'
import './Header.css'

const Header = () => {
    return (
        <div className="d-flex align-items-center justify-content-between bg p-2">
            <div className="ms-5">
                <img className="img" src={logo} alt="" srcset="" />
            </div>
            <div className="d-flex align-items-center fw-bold me-5">
                <Link to="/home" style={{
                    textDecoration: 'none',
                    color: 'White',
                    marginRight: '20px'
                }}>
                    HOME
                </Link>
                <Link to="/courses" style={{
                    textDecoration: 'none',
                    color: 'White',
                    marginRight: '20px'
                }}>
                    COURSES
                </Link>
                <Link to="/blog" style={{
                    textDecoration: 'none',
                    color: 'White',
                    marginRight: '20px'
                }}>
                    BLOG
                </Link>
                <Link to="/about" style={{
                    textDecoration: 'none',
                    color: 'White',
                    marginRight: '20px'
                }}>
                    ABOUT
                </Link>

            </div>
        </div>
    );
};

export default Header;