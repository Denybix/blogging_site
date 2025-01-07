import React from "react";
import { NavLink } from "react-router-dom";
const Navbar =(props) => 
{
    return(
        <div className="Navbar">
            <div className="left-section">
                {props.visit == '/blogfeed'? (
                        <img src={props.image} alt="Navbar visual" className="navbar-img"/>
                    ):null}
            </div>
                <div className="middle-section">
                    {props.searchbox ? (
                        props.searchbox
                    ) : props.image ? (
                        <img src={props.image} alt="Navbar visual" className="navbar-image"/>
                    ):null}
                </div>
            <div className="right-section">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/display">BlogPage</NavLink>
                        </li>
                        <li>
                            <NavLink to={props.visit}>{props.linkname}</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;