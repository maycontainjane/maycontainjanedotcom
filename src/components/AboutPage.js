import React from "react";

import Header from './Header';

const AboutPage = (props) => (
    <div id="/me" className="aboutpage">
        <Header title="About me" subtitle={<div>I don't <span>just</span> write code.</div>}/>
        <div className="aboutpage__content">
        {
            props.aboutitems.map((about) => {
                return <AboutItem className="aboutpage__item" imgsrc={about.src} text={about.text} subtext={about.subtext}/>
            })
        }
        </div>
    </div>
);

const AboutItem = (props) => (
    <div className="aboutitem">
        <img className="aboutpage__icon" src={props.imgsrc} />
        <div className="aboutitem__info">
            <h3 className="aboutitem__text">{props.text}</h3>
            <p className="aboutitem__subtext">{props.subtext}</p>
        </div>
    </div>
);

export default AboutPage;