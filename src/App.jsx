import React from "react";
import Home from "./Home";
import About from "./About";
import BlogFeed from "./BlogFeed";
import Contact from "./Contact";
import Display from "./Display";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/blogfeed" element={<BlogFeed/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/display" element={<Display/>}/>
      </Routes>
    </>
  );
};

export default App;
