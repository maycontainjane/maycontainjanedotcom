import React from "react";
import Header from './Header';

const ResumePage = () => (
    <div id="/resume">
        <Header title="Resume" subtitle={<div>My <span>professional</span> experience.</div>}/>
        <h3>Interactive Resume</h3>
        <button>Download PDF Resume</button>
    </div>
);

export default ResumePage;