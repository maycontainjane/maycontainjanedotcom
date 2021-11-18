import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';

import PageNotFound from './components/PageNotFound';
import PortfolioSite from './components/PortfolioSite';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

/* If any errors in rendering of the site, render 404 page */
try {
    ReactDOM.render(<BrowserRouter><PortfolioSite/></BrowserRouter>, document.getElementById('app'));
} catch (e) { 
    ReactDOM.render(<BrowserRouter><PageNotFound/></BrowserRouter>, document.getElementById('app'));
}