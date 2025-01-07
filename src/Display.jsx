import React,{useEffect, useState} from "react";
import './display.css'
import Navbar from "./Navbar";
import logo from "./images/logo.png"

const Display = () => {
    const [displayData, setDisplayData] = useState([])
    const[searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('formData')) || [];
        setDisplayData(storedData);      
    }, []);

    const handleDelete = (index) =>
    {
        const updatedData = displayData.filter((_,i) => i !== index)
        setDisplayData(updatedData);
        localStorage.setItem('formData', JSON.stringify(updatedData));
    }

    const handleSearchQuery = (event) =>
    {
        setSearchQuery(event.target.value.toLowerCase());
    }

    const filterData = displayData.filter((blog)=>
        blog.title.toLowerCase().includes(searchQuery) || blog.content.toLowerCase().includes(searchQuery)
    )

    const searchbox = (
        <form>
            <input type="text" className="searchbox" placeholder="search here" value={searchQuery} onChange={handleSearchQuery}></input>
        </form>
    );

    return(
        <div className="display-body">
            <Navbar visit='/blogfeed' linkname='PostBlog' image = {logo} searchbox={searchbox}/>
                {filterData.length > 0 ? (
                    filterData.map((blog,index)=>(
                        <div key={index} className="content-container">
                            <h2>{blog.title}</h2>
                            <p>{blog.content}</p> 
                            <button className="delete-button" onClick={()=>handleDelete(index)}>
                                <span className="material-symbols-outlined">delete</span>
                            </button>                  
                        </div>
                    ))
                ) : (
                    <p className="alt-text">No blogs to display</p>
                )}        
            </div>
    );
}

export default Display;