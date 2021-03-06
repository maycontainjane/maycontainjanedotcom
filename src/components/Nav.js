import React from "react";
import {NavLink} from "react-router-dom";

const Nav = (props) => (
    <div className="nav">
        <div className="nav__logo">
            <NavLink to="/"><img className="desktop" width="300px" src="/img/logo.png" /><img className="mobile" width="75px" src="/img/favicon.png" /></NavLink>
        </div>
        <div className="nav__links">
            <NavLink to="/" activeClassName="nav__active-link" exact={true}>home</NavLink>
            <NavLink to="/resume" activeClassName="nav__active-link">resume</NavLink>
            <NavLink to="/me" activeClassName="nav__active-link">about</NavLink>
            <NavLink to="/contact" activeClassName="nav__active-link">find me</NavLink>
            <div className="nav__dropdown-container mobile">
                <button onClick={props.selectMenu} className="nav__dropdown">{props.transformPath(window.location.pathname)} &or; </button>
            </div>
        </div>
        <div className="nav__list">
            <ul>
                <li className="nav__list-selected"><NavLink to="/" activeClassName="nav__active-link" exact={true}>home</NavLink></li>
                <li id="nav__resume"><NavLink to="/resume" activeClassName="nav__active-link">resume</NavLink></li>
                <li id="nav__me"><NavLink to="/me" activeClassName="nav__active-link">me</NavLink></li>
                <li id="nav__contact"><NavLink to="/contact" activeClassName="nav__active-link">find me</NavLink></li>
            </ul>
        </div>
        <div className="nav__shadow">
        </div>
    </div>
);

export default Nav;