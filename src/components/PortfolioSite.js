import React from 'react';

import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Footer from './Footer';
import HomePage from './HomePage';
import Nav from './Nav';
import ResumePage from './ResumePage';

/* json files for populating the website */
const aboutitems_json = require('../data/about_items.json');
const experience_json = require('../data/experience.json');
const skills_json = require('../data/skills.json');

class PortfolioSite extends React.Component {
    constructor(props) {
        super(props);
        this.showSkill = this.showSkill.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToRoute = this.scrollToRoute.bind(this);
        this.elementIsInSight = this.elementIsInSight.bind(this);
        this.toggleExpandExperience = this.toggleExpandExperience.bind(this);
    }

    state = {
        skillSelection: 'all'
    };

    //scrolls = {};
    elements = ["/", "/resume", "/me", "/contact"];

    /* fires when the page loads */
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        jQuery('.resumepage__link').click(this.toggleExpandExperience);
        this.scrollToRoute(window.location.pathname);
    }

    /* fires when any component updates */
    componentDidUpdate() {
        this.scrollToRoute(window.location.pathname);
    }

    /* opens and closes experience lists */
    toggleExpandExperience(elem) {
        elem.preventDefault();

        var listId = "#"+elem.target.id+"_ul";
        var linkId = "#"+elem.target.id;

        /* Handles 'Expand All' Link */
        if (elem.target.id === "all") {
            if (jQuery('#all').html() === "Expand All") {
                jQuery('.resumepage__experience-ul').removeAttr('hidden');
                jQuery('.resumepage__experience-link a').html('collapse responsibilities ^');
                jQuery('#all').html('Collapse All');
            } else if (jQuery('#all').html() === "Collapse All") {
                jQuery('.resumepage__experience-ul').attr('hidden', 'hidden');
                jQuery('.resumepage__experience-link a').html('work responsibilities >');
                jQuery('#all').html('Expand All');
            }
        }
        /* show hidden */
        else if (jQuery(listId).attr('hidden')) {
            jQuery(listId).removeAttr('hidden');
            jQuery(linkId).html('collapse responsibilities ^');
        } 
        /* hide shown */
        else {
            jQuery(listId).attr("hidden", "hidden");
            jQuery(linkId).html('work responsiblities >');
        }
        /* no action */
        return false;
    }

    /* check if element is on screen */
    elementIsInSight(elem_id) {
        var adjustedScroll = document.scrollingElement.scrollTop + 75;
        if ((document.getElementById(elem_id).offsetTop < adjustedScroll) && 
            (document.getElementById(elem_id).offsetHeight+document.getElementById(elem_id).offsetTop) > adjustedScroll) {
            return true;
        }
        return false;
    }

    handleScroll() {
        for (var elem in this.elements) {
            var elem_id = this.elements[elem];
            if (this.elementIsInSight(this.elements[elem])) {
                jQuery(".nav__links a").removeClass();
                jQuery("[href='"+(elem_id === 'home' ? '' : elem_id)+"']").addClass("nav__scroll");
                /* black magic that changes the url! */
                history.pushState({}, "/", (elem_id === 'home' ? '' : elem_id));
                jQuery('.nav__dropdown').html((elem_id === '/' ? 'home' : elem_id).replace("/", "")+" >");
            }
        }
    }

    scrollToResumeSection(elem) {
        jQuery('.resumepage__scrollbar button').removeClass('resumepage__button-active');
        jQuery(elem.target).addClass('resumepage__button-active');
        var id = elem.target.innerHTML.replace(" ", "-");
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    }

    showSkill(elem, show) {
        jQuery('.resumepage__skillbuttons button').removeClass('resumepage__button-active');
        jQuery(elem).addClass("resumepage__button-active");
        this.setState(() => ({skillSelection: show}));
    }

    scrollToRoute(location) {
        var elem = document.getElementById(location.toString());
        if (!this.elementIsInSight(location)) {
            elem.scrollIntoView({behavior: "smooth"});
        }
    }

    selectMenu(e) {
        if (jQuery('.nav__list').css('display') === 'none') {
            jQuery('.nav__list').css('display', 'block');
        } else {
            jQuery('.nav__list').css('display', 'none'); 
        }
    }

    render = () => (
        <div id="portfoliosite">
            <div id="page-body">
                <HomePage />
                <ResumePage 
                    work_experience={experience_json} 
                    skills={skills_json} 
                    toggleExpandExperience={this.toggleExpandExperience} 
                    scrollToResumeSection={this.scrollToResumeSection}
                    showSkill={this.showSkill}
                    skillSelection={this.state.skillSelection}
                />
                <AboutPage aboutitems={aboutitems_json}/>
                <ContactPage/>
                <Footer year={new Date().getFullYear()}/>
            </div>
            {/*nav loaded last so it displays over everything else*/}
            <Nav selectMenu={this.selectMenu}/>
        </div>
    );
}

export default PortfolioSite;