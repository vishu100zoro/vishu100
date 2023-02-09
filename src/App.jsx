import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
const App=()=>
{
    return (
        <>
        {/* <h1 className="text-center">Hello this is vishal singh</h1> */}
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
        </>
    )
}

export default App;