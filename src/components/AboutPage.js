import React from "react";

import Header from './Header';

const AboutPage = (props) => (
    <div id="/me" className="aboutpage">
        <Header title="About me" subtitle={<div>I don't <span>just</span> write code.</div>}/>
        <div className="aboutpage__body">
        {
            props.aboutitems.map((about) => {
                return <AboutItem imgsrc={about.src} text={about.text} subtext={about.subtext}/>
            })
        }
        </div>
        <div className="aboutpage__oneitem">
            <button onClick={props.selectAboutitem} className="aboutpage__nav aboutpage__back">&lt;</button>
            {
                <AboutItem 
                    imgsrc={props.aboutitems[props.selectedAboutitem].src} 
                    text={props.aboutitems[props.selectedAboutitem].text} 
                    subtext={props.aboutitems[props.selectedAboutitem].subtext} />
            }
            <button onClick={props.selectAboutitem} className="aboutpage__nav aboutpage__next">&gt;</button>
        </div>
    </div>
);

const AboutItem = (props) => (
    <div className="aboutpage__item">
        <img className="aboutpage__item-icon" src={props.imgsrc} />
        <div className="aboutpage__item-info">
            <h3 className="aboutpage__item-text">{props.text}</h3>
            <p className="aboutpage__item-subtext">{props.subtext}</p>
        </div>
    </div>
);

export default AboutPage;