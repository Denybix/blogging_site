import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './BlogFeed.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import logo from "./images/logo.png"

const BlogFeed = () =>
{
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let existingblogs = [];
        try
        {
            existingblogs = JSON.parse(localStorage.getItem('formData')) || [];
            if(!Array.isArray(existingblogs))
            {
                existingblogs = [];
            }
        }catch (error)
        {
            console.error("Error parsing localStorage data:", error);
        }
        const newblog = {title, content};
        const updatedBlogs = [...existingblogs, newblog]
        localStorage.setItem('formData', JSON.stringify(updatedBlogs));
        navigate('/display')
    }

    return(
        <div className="blog-body">
            <Navbar image={logo}/>
            <div className="blog-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor='title' className="content-title">Title:</label>
                    <input type='text' id='title' placeholder="Enter your title" className="content-title-input" onChange={(e) => setTitle(e.target.value)}></input>

                    <label htmlFor='content' className="blogpost-title">Blogpost:</label>
                    <textarea id='content' className="blogpost-input" placeholder="Enter your content" onChange={(e) => setContent(e.target.value)}></textarea>
                    
                    <button type="submit">Submit Post</button>
                </form>
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

export default BlogFeed;
