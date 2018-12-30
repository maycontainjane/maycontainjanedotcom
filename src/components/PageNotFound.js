import React from "react";
import {Link} from "react-router-dom"
import Header from './Header';

const PageNotFound = () => (
    <div>
        <p>That page is just not a thing</p>
        <Link to="/">Take me home, country roads</Link>
    </div>
);

export default PageNotFound;