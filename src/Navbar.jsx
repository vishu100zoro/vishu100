import React from "react";
import { NavLink } from "react-router-dom";
const Navbar=()=>{
     return(
        <>
        <section id="navbar">
        <div className="container-fluid nav_bg">
           <div className="row">
             <div className="col-10 mx-auto">

           


<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
    <NavLink className="navbar-brand" to="/">#Vishu100</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink activeClassName="" exact className="nav-link naa" to='/' >Home</NavLink>
        </li>
        <li class="nav-item">
         <NavLink activeClassName="active" exact className="nav-link naa" to="/about">About</NavLink>
        </li>   
        <li class="nav-item">
         <NavLink activeClassName="active" exact className="nav-link naa" to="/services">Services</NavLink>
        </li>
        <li class="nav-item">
         <NavLink activeClassName="active" exact className="nav-link naa" to="contact">Contact</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>


             </div>
           </div>
        </div>
        </section>
        </>
     )
}
export default Navbar;