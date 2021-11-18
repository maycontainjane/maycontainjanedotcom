import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Nav = (props) => (
    <div className="nav">
        <div className="nav__logo">
            <NavLink to="/"><img className="desktop" width="300px" src="/img/logo.png" /><img className="mobile" width="75px" src="/img/favicon.png" /></NavLink>
        </div>
        <div className="nav__links">
            <Link to="/" className="nav__link nav__active-link">home</Link>
            <Link to="/resume" className="nav__link">resume</Link>
            <Link to="/me" className="nav__link">about</Link>
            <Link to="/contact" className="nav__link">find me</Link>
            <div className="nav__dropdown-container mobile">
                <button onClick={props.selectMenu} className="nav__dropdown">{props.transformPath(window.location.pathname)} &or; </button>
            </div>
        </div>
        <div className="nav__list">
            <ul>
                <li className="nav__list-selected"><NavLink to="/" className="nav__active-link">home</NavLink></li>
                <li id="nav__resume"><NavLink to="/resume">resume</NavLink></li>
                <li id="nav__me"><NavLink to="/me" >about</NavLink></li>
                <li id="nav__contact"><NavLink to="/contact">find me</NavLink></li>
            </ul>
        </div>
        <div className="nav__shadow">
        </div>
    </div>
);

export default Nav;