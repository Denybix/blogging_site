import React from "react";
import Navbar from "./Navbar";
import './home.css';
import Footer from "./Footer";
import logo from "./images/logo.png"
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-body">
      <Navbar image={logo}/>
      <div className="container">
        <div className="title">
          <h1>Welcome to the Blogsite</h1>
        </div>
        <div className="intro-class">
          <p>
            Dive into a world of insights, inspiration, and ideas. Whether you're here to explore, learn, or simply enjoy a good read, we’ve got something just for you.
            Stay curious. Stay inspired.
            Let’s embark on this journey together!
          </p>
        </div>
        <div className="btn-container">
              <NavLink to="/blogfeed" className="button">
                Post blogs
              </NavLink>
        </div>
      </div>
      <Footer st={{color: "white",
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: "1rem",
        textAlign: "center",
        userSelect: "none",
        fontSize: "17px"}}/>
    </div>
  );
};

export default Home;
