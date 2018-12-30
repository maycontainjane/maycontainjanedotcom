import React from "react";
import Header from './Header';

const AboutPage = () => (
    <div id="/me">
        <Header title="About me" subtitle={<div>I don't <span>just</span> write code.</div>}/>
        <p>This is the about page</p>
    </div>
);

export default AboutPage;