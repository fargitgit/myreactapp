import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link" activeClassName="active" to="/"> Home</NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/about"> About</NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/contact"> Contact</NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/user"> User</NavLink> 
                    <NavLink className="nav-link" activeClassName="active" to="/search"> Search</NavLink>
                </div>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Navbar;