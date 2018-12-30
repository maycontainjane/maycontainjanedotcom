import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => (
    <div className="nav">
        <div className="nav__logo">
            <NavLink to="/"><img width="300px" src="/img/logo.png" /></NavLink>
        </div>
        <div className="nav__links">
            <NavLink to="/" activeClassName="nav__active-link" exact={true}>&nbsp;&nbsp;&nbsp;home&nbsp;&nbsp;&nbsp;</NavLink>
            <NavLink to="/resume" activeClassName="nav__active-link">&nbsp;&nbsp;resume&nbsp;&nbsp;</NavLink>
            <NavLink to="/me" activeClassName="nav__active-link">&nbsp;about me&nbsp;</NavLink>
            <NavLink to="/contact" activeClassName="nav__active-link">contact me</NavLink>
        </div>
    </div>
);

export default Nav;