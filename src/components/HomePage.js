import React from "react";

import Header from './Header';

const HomePage = () => (
    <div id="/" class="homepage">
        <div id="nav-space"></div>
        <Header title="Welcome!" subtitle={<div>Hi, I'm <span>Jane</span>. I write code.</div>} />
        <div className="homepage__body">
            <div className="homepage__body-img">
                <img src="/img/chance.JPG" />
            </div>
            <div className="homepage__body-text">
                <p className="homepage__body-p">I’m an engineer living in Minneapolis, Minnesota. I love solving 
                problems with software and making the web ecosystem a more beautiful place.</p> 
                <h3>I'm best at:</h3>
                <div className="homepage__body-lists">
                    <ul className="homepage__body-ul">
                        <li>Integration</li>
                        <li>DevOps</li>
                    </ul>
                    <ul className="homepage__body-ul">
                        <li>Testing</li>
                        <li>Web development</li>
                    </ul>
                    <ul className="homepage__body-ul">
                        <li>Python</li>
                        <li>Linux</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;