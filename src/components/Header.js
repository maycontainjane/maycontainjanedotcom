import React from "react";

const Header = (props) => (
    <div className="header">
        <div className="header__title">
            <h1>{props.title}</h1>
        </div>
        <div className="header__subtitle">
            <h2>{props.subtitle}</h2>
        </div>
    </div>
);

export default Header;