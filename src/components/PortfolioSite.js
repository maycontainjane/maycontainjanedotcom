import React from 'react';

import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Footer from './Footer';
import HomePage from './HomePage';
import Nav from './Nav';
import ResumePage from './ResumePage';

const aboutitems_json = require('../data/about_items.json');

const experience_json = require('../data/experience.json');
const skills_json = require('../data/skills.json');

class PortfolioSite extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        jQuery('.resumepage__link').click(this.toggleExpandExperience);
        this.scrollToRoute(window.location.pathname);
    }

    componentDidUpdate() {
        this.scrollToRoute(window.location.pathname);
    }

    scrollToRoute (location) {
        var element = document.getElementById(location.toString());
        element.scrollIntoView({behavior: "smooth"});
    }

    toggleExpandExperience(e) {
        e.preventDefault();
        var id = e.target.id;
        console.log(jQuery('#'+id+'_ul').attr('hidden'));
        if (jQuery('#'+id+'_ul').attr('hidden')) {
            jQuery('#'+id+'_ul').removeAttr('hidden');
            jQuery('#'+id).html('collapse responsibilities ^');
        } else {
            jQuery('#'+id+'_ul').attr("hidden", "hidden");
            jQuery('#'+id).html('show responsiblities >');
        }
        return false;
    }

    handleScroll() {
        /* adjust the highlighted link as the page is scrolled */
        var scrolls = {
            /* jQuery doesn't like '#/' so let's use document.getElementById */
            home: [document.getElementById("/").offsetTop, document.getElementById("/").offsetHeight+document.getElementById("/").offsetTop],
            resume: [document.getElementById("/resume").offsetTop, document.getElementById("/resume").offsetHeight+document.getElementById("/resume").offsetTop],
            me: [document.getElementById("/me").offsetTop, document.getElementById("/me").offsetHeight+document.getElementById("/me").offsetTop],
            contact: [document.getElementById("/contact").offsetTop, document.getElementById("/contact").offsetHeight+document.getElementById("/contact").offsetTop]
        };
        for (var scroll in scrolls) {
            /* scrollTop is too low, add 75px easing for better transition during scroll movement */
            var adjustedScroll = document.scrollingElement.scrollTop + 75;
            if (scrolls[scroll][0] <  adjustedScroll && adjustedScroll < scrolls[scroll][1]) {
                jQuery(".nav__links a").removeClass();
                jQuery("[href='/"+(scroll === 'home' ? '' : scroll)+"']").addClass("nav__scroll");
                /* black magic that changes the url! */
                history.pushState({}, "", "/"+(scroll === 'home' ? '' : scroll));
            }
        }
    }

    scrollToResumeSection(e) {
        var id = e.target.innerHTML.replace(" ", "-");
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    }

    render = () => (
        <div id="portfoliosite">
            <div id="page-body">
                <HomePage />
                <ResumePage work_experience={experience_json} skills={skills_json} toggleExpandExperience={this.toggleExpandExperience} scrollToResumeSection={this.scrollToResumeSection}/>
                <AboutPage aboutitems={aboutitems_json}/>
                <ContactPage/>
                <Footer year={new Date().getFullYear()}/>
            </div>
            {/*nav loaded last so it displays over everything else*/}
            <Nav/>
        </div>
    );
}

export default PortfolioSite;