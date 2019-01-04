import React from "react";

const Header = (props) => (
    <div id="header__container">
        <div className="header">
            <div className="header__title">
                <h1>{props.title}</h1>
            </div>
            <div className="header__subtitle">
                <h2>{props.subtitle}</h2>
            </div>
        </div>
        <div class="header__shadow"></div>
    </div>
);

export default Header;