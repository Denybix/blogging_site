import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="Navbar">
            <div className="left-section">
                {props.visit === '/blogfeed' && (
                    <img src={props.image} alt="Navbar visual" className="navbar-img"/>
                )}
            </div>
            <div className="middle-section">
                {props.searchbox ? (
                    props.searchbox
                ) : props.image ? (
                    <img src={props.image} alt="Navbar visual" className="navbar-image"/>
                ) : null}
            </div>
            <div className="right-section">
                <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={toggleMenu}>Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/display" onClick={toggleMenu}>BlogPage</NavLink>
                        </li>
                        <li>
                            <NavLink to={props.visit} onClick={toggleMenu}>{props.linkname}</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;