import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ResumePage from './components/ResumePage';
import ContactPage from './components/ContactPage';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

var scrollHeights = {}

class PortfolioSite extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.scrollToRoute(window.location.pathname);
        scrollHeights = {
            homePage: document.getElementById("/").scrollHeight,
            aboutPage: document.getElementById("/me").scrollHeight,
            resumePage: document.getElementById("/resume").scrollHeight,
            contactPage: document.getElementById("/contact").scrollHeight
        }
    }

    componentDidUpdate() {
        this.scrollToRoute(window.location.pathname);
    }

    scrollToRoute (location) {
        var element = document.getElementById(location.toString());
        element.scrollIntoView({behavior: "smooth"});
    };

    handleScroll () {
        console.log(document.scrollingElement.scrollTop);
        /*if (document.scrollingElement.scrollTop === scrollHeights.homePage) {
            document.getElementById("homepage-id").setAttribute("activeClassName", "nav__active-link");
        }
        else if (document.scrollingElement.scrollTop === scrollHeights.aboutPage) {
            document.getElementById("aboutpage-id").setAttribute("activeClassName", "nav__active-link");
        }
        else if (document.scrollingElement.scrollTop === scrollHeights.resumePage) { 
            console.log("match!");
           
            document.getElementById("resumepage-id").setAttribute("activeClassName", "nav__active-link");
        }
        else if (document.scrollingElement.scrollTop === scrollHeights.contactPage) {
            document.getElementById("contactpage-id").setAttribute("activeClassName", "nav__active-link");
        }*/
    }

    render = () => (
        <div id="portfoliosite">
            <Nav/>
            <HomePage />
            <ResumePage  />
            <AboutPage />
            <ContactPage/>
            <Footer />
        </div>
    );
}

ReactDOM.render(<BrowserRouter><PortfolioSite /></BrowserRouter>, document.getElementById('app'));