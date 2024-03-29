import React from 'react';

import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Footer from './Footer';
import HomePage from './HomePage';
import Nav from './Nav';
import ResumePage from './ResumePage';

import { useNavigate } from 'react-router-dom';

/* json files for populating the website */
const aboutitems_json = require('../data/about_items.json');
const experience_json = require('../data/experience.json');
const skills_json = require('../data/skills.json');

class PortfolioSite extends React.Component {
    constructor(props) {
        super(props);

        /* click and scroll handlers */
        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

        /* hiding and showing elements */
        this.selectAboutitem = this.selectAboutitem.bind(this);
        this.selectMenu = this.selectMenu.bind(this);
        this.showNav = this.showNav.bind(this);
        this.showSkill = this.showSkill.bind(this);
        this.toggleExpandExperience = this.toggleExpandExperience.bind(this);
       
        /* scrolling functions */
        this.elementIsInSight = this.elementIsInSight.bind(this);
        this.scrollToRoute = this.scrollToRoute.bind(this);
    }

    state = {
        skillSelection: 'all',
        selectedAboutitem: 0
    };

    elements = ["/", "/resume", "/me", "/contact"];

    /* fires when the page loads */
    componentDidMount() {
        /* register handlers */
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('click', this.handleClick);
        jQuery('.resumepage__link').click(this.toggleExpandExperience);

        /* scroll to proper url location */
        this.scrollToRoute(window.location.pathname);
    }

    /* fires when any component updates */
    componentDidUpdate() {
        this.scrollToRoute(window.location.pathname);
    }

    /* ============ Handler functions =========== */
    
    /* hides nav dropdown if clicked outside it */
    handleClick(e) {
        if (!jQuery(e.target).hasClass("nav__dropdown")) {
            this.showNav(false);    
        }
    }
    
    /* Change highlighted/displayed nav element based on if element is visible */
    handleScroll() {
        for (var elem in this.elements) {
            var elem_id = this.elements[elem];
            if (this.elementIsInSight(this.elements[elem]) && (window.location.pathname !== elem_id)) {
                jQuery(".nav__links a").removeClass();
                jQuery(".nav__links a[href='"+(elem_id === 'home' ? '' : elem_id)+"']").addClass("nav__scroll");
                /* black magic that changes the url! */
                history.pushState({}, "/", (elem_id === 'home' ? '' : elem_id));
                /* change name of section in mobile dropdown */
                jQuery('.nav__dropdown').html(this.transformPath(elem_id)+" &or;");
            }
        }
    }

    /* ============ Scroll functions =========== */

    /* check if element is on screen */
    elementIsInSight(elem_id) {
        var adjustedScroll = document.scrollingElement.scrollTop + 75;
        // Two sets of conditions, one for browsers that use offsetTop and one for those that use pageYOffset
        if (((document.getElementById(elem_id).offsetTop < adjustedScroll) && 
            (document.getElementById(elem_id).offsetHeight+document.getElementById(elem_id).offsetTop) > adjustedScroll) ||
            ((document.getElementById(elem_id).pageYOffset < adjustedScroll) && 
            (document.getElementById(elem_id).offsetHeight+document.getElementById(elem_id).pageYOffset > adjustedScroll))) {
            return true;
        }
        return false;
    }

    scrollToResumeSection(elem) {
        jQuery('.resumepage__scrollbar button').removeClass('resumepage__button-active');
        jQuery(elem.target).addClass('resumepage__button-active');
        var id = elem.target.innerHTML.replace(" ", "-");
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    }

    scrollToResumeSectionMobile(elem) {
        jQuery('.resumepage__scrollbar-mobile button').removeClass('resumepage__button-active');
        jQuery(elem.target).addClass('resumepage__button-active');
        var id = jQuery(elem.target).attr("data-section");
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    }

    scrollToRoute(location) {
        var elem = document.getElementById(location.toString());
        if (!this.elementIsInSight(location)) {
            elem.scrollIntoView({behavior: "smooth"});
        }
    }

    /* ============ Select functions =========== */

    /* for mobile choose which about item shows */
    selectAboutitem(e) {
        if (jQuery(e.target).hasClass('aboutpage__next')) {
            this.setState((prevState) => {
                if (prevState.selectedAboutitem === (aboutitems_json.length - 1)) {
                    return {selectedAboutitem: 0};
                }
                else {
                    return {selectedAboutitem: prevState.selectedAboutitem + 1};
                }
            });
        } else {
            this.setState((prevState) => {
                if (prevState.selectedAboutitem === 0) {
                    return {selectedAboutitem: aboutitems_json.length - 1};
                }
                else {
                    return {selectedAboutitem: prevState.selectedAboutitem - 1};
                }
            });
        }
    }

    /* determine whether nav is open or not */
    selectMenu() {
        if (jQuery('.nav__list').css('display') === 'none') {
            this.showNav(true);
        } else {
            this.showNav(false);
        }
    }

    /* choose new category for skills */
    showSkill(elem, show) {
        jQuery('.resumepage__skillbuttons button').removeClass('resumepage__button-active');
        jQuery(elem).addClass("resumepage__button-active");
        this.setState(() => ({skillSelection: show}));
    }

    /* if true show nav */
    showNav(show) {
        if (show) {
            jQuery('.nav__list').css('display', 'block');
            jQuery('.nav__dropdown').html('goto &and;').css({"background-color": "rgba(69, 69, 80, 0.2)", "border": "5px solid rgba(69, 69, 80, 0.2)"});
        } else {
            jQuery('.nav__list').css('display', 'none'); 
            jQuery('.nav__dropdown').html(this.transformPath(window.location.pathname)+" &or;").css("background", "none");
        }
        return false;
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

    /* change / to home, /me to me, etc */
    transformPath(path) {
        return (path === "/") ? "home" : path.replace("/", "");
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
                    scrollToResumeSectionMobile={this.scrollToResumeSectionMobile}
                    showSkill={this.showSkill}
                    skillSelection={this.state.skillSelection}
                />
                <AboutPage 
                    aboutitems={aboutitems_json}
                    selectAboutitem={this.selectAboutitem}
                    selectedAboutitem={this.state.selectedAboutitem}
                />
                <ContactPage/>
                <Footer year={new Date().getFullYear()}/>
            </div>
            {/*nav loaded last so it displays over everything else*/}
            <Nav selectMenu={this.selectMenu} transformPath={this.transformPath} scrollToRoute={this.scrollToRoute}/>
        </div>
    );
}

export default PortfolioSite;