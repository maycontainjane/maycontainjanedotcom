import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => (
    <div className="nav">
        <div className="nav__logo">
            <NavLink to="/"><img width="300px" src="/img/logo.png" /></NavLink>
        </div>
        <div className="nav__links">
            <NavLink to="/" activeClassName="nav__active-link" exact={true}>home</NavLink>
            <NavLink to="/resume" activeClassName="nav__active-link">resume</NavLink>
            <NavLink to="/me" activeClassName="nav__active-link">about</NavLink>
            <NavLink to="/contact" activeClassName="nav__active-link">find me</NavLink>
        </div>
        <div className="nav__shadow">
        </div>
    </div>
);

export default Nav;