import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './About.css'
import logo from "./images/logo.png"

const About = () =>
{
    return(
        <div className="about-body">
            <Navbar image={logo}/>
            <div className="about-container">
                <h1>About This Blog</h1>
                <p>Welcome to my mini blogging site—a space where creativity meets simplicity!
                This website is part of my portfolio, showcasing my skills in frontend development. Designed as a mini-project for my resume, 
                it demonstrates my ability to craft responsive and interactive user experiences using modern web technologies.
                While this platform doesn’t yet feature backend integration, it utilizes localStorage to simulate data management, 
                ensuring a seamless and functional blogging experience. Feel free to explore, and if you’re interested in my work, 
                I’d love to connect and discuss how I can contribute to your projects!</p>
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
    )
}

export default About;