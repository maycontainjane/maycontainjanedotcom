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

class PortfolioSite extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.scrollToRoute(window.location.pathname);
    }

    componentDidUpdate() {
        this.scrollToRoute(window.location.pathname);
    }

    scrollToRoute (location) {
        var element = document.getElementById(location.toString());
        element.scrollIntoView({behavior: "smooth"});
    }

    handleScroll() {
        // console.log(parseInt(document.scrollingElement.scrollTop), parseInt(document.getElementById("/resume").offsetTop));
        // const locations = ["/", "/råesume", "/me", "/contact"];
        // locations.forEach((loc) => {
        //     if (parseInt(document.scrollingElement.scrollTop)+15 >= parseInt(document.getElementById("/resume").offsetTop) >= parseInt(document.scrollingElement.scrollTop)-15) {
        //         console.log("MATCH");
        //         jQuery("a").removeClass("nav__active-link");
        //         jQuery("[href=\""+loc+"\"").addClass("nav__active-link");
        //     }
        // });
        var scrolls = {
            home: [document.getElementById("/").offsetTop, document.getElementById("/").offsetHeight+document.getElementById("/").offsetTop],
            resume: [document.getElementById("/resume").offsetTop, document.getElementById("/resume").offsetHeight+document.getElementById("/resume").offsetTop],
            me: [document.getElementById("/me").offsetTop, document.getElementById("/me").offsetHeight+document.getElementById("/me").offsetTop],
            contact: [document.getElementById("/contact").offsetTop, document.getElementById("/contact").offsetHeight+document.getElementById("/contact").offsetTop]
        };
        for (var scroll in scrolls) {
            if (scrolls[scroll][0] <  document.scrollingElement.scrollTop && document.scrollingElement.scrollTop < scrolls[scroll][1]) {
                jQuery(".nav__links a").removeClass();
                jQuery("[href='/"+(scroll === 'home' ? '' : scroll)+"']").addClass("nav__scroll");
            }
        }
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