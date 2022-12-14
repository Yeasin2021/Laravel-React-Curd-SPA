import React from 'react'
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom"

const Nav = () => { return (
<div>
    {/* <Router> */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home </Link>
                    {/* <Link>Home</Link> */}
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link" href="#">Contact</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    {/* </Router> */}
</div>
) }


export default Nav
