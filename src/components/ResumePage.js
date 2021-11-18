import React from "react";

import Header from './Header';

const ResumePage = (props) => (
    <div id="/resume" className="resumepage">
        <Header title="Resume" subtitle={<div>My <span>professional</span> experience.</div>}/>
        <div className="resumepage__body">
            <h2>interactive resume</h2>
            <div className="resumepage__interactive">
                <div className="resumepage__scrollbar-container">
                    <div className="resumepage__scrollbar">
                        <button className="resumepage__button-active" onClick={props.scrollToResumeSection}>objective</button>
                        <button onClick={props.scrollToResumeSection}>skills</button>
                        <button onClick={props.scrollToResumeSection}>work experience</button>
                        <button onClick={props.scrollToResumeSection}>education</button>
                    </div>
                </div>
                <div className="resumepage__scrollbar-mobile">
                    <button className="resumepage__button-active" onClick={props.scrollToResumeSectionMobile} data-section="objective">obj</button>
                    <button onClick={props.scrollToResumeSectionMobile} data-section="skills">skills</button>
                    <button onClick={props.scrollToResumeSectionMobile} data-section="work-experience">exp</button>
                    <button onClick={props.scrollToResumeSectionMobile} data-section="education">edu</button>
                </div>
                <div className="resumepage__interactive-body">

                    <div className="resumepage__objective">
                        <div className="resumepage__anchor" id="objective"></div>
                        <h3>Objective</h3>
                        <p className="resumepage__body-objective">
                            I am looking for a new position in the software development world doing
                            front-end or full-stack web development. I have 6+ years of software industry
                            experience overall and 3+ years combined in professional and personal web development. 
                            I love being part of dynamic teams and learning new things, as well as passing
                            my knowledge on to others.
                        </p> 
                    </div>

                    <div className="resumepage__skills">
                        <div className="resumepage__anchor" id="skills"></div>
                        <h3>Skills</h3>

                        <div className="resumepage__skillbuttons">
                            <button className="resumepage__button-active" onClick={(e) => props.showSkill(e, 'all')}>all</button>
                            <button onClick={(e) => props.showSkill(e, 'OS')}>OS</button>
                            <button onClick={(e) => props.showSkill(e, 'languages')}>languages</button>
                            <button onClick={(e) => props.showSkill(e, 'web dev')}>web dev</button>
                            <button onClick={(e) => props.showSkill(e, 'data')}>data</button>
                            <button onClick={(e) => props.showSkill(e, 'devops')}>devops</button>
                        </div>
                        <div className="resumepage__skilldropdown">
                            select goes here
                        </div>

                        <div className="resumepage__skills-body">
                            <div className="resumepage__skills-category">
                                <h5>fluent in</h5>
                                <div className="resumepage__skills-list">
                                {
                                    props.skills.map((skill) => {
                                        if ((skill.skill_level >= ((10/3)*2))) {
                                            if ((props.skillSelection === 'all') || (skill.categories.includes(props.skillSelection))) {
                                                return (<div key={skill.title}
                                                            className="resumepage__skills-item" 
                                                            data-categories={skill.categories} 
                                                            title={"skill level: "+skill.skill_level+"/10"}>
                                                            {skill.title}
                                                        </div>
                                                );
                                            }
                                        }
                                    })
                                }
                                </div>
                            </div>

                            <div className="resumepage__divider"></div>

                            <div className="resumepage__skills-category">
                                <h5>working knowledge</h5>
                                <div className="resumepage__skills-list">
                                {
                                    props.skills.map((skill) => {
                                        if ((((10/3)*2) > skill.skill_level) && (skill.skill_level >= (10/3))) {
                                            if ((props.skillSelection === 'all') || (skill.categories.includes(props.skillSelection))) {
                                                return (<div key={skill.title} 
                                                            className="resumepage__skills-item" 
                                                            data-categories={skill.categories} 
                                                            title={"skill level: "+skill.skill_level+"/10"}>
                                                            {skill.title}
                                                        </div>
                                                );
                                            }
                                        }
                                    })
                                }
                                </div>
                            </div>

                            <div className="resumepage__divider"></div>

                            <div className="resumepage__skills-category">
                                <h5>exposed to</h5>
                                <div className="resumepage__skills-list">
                                {
                                    props.skills.map((skill) => {
                                        if ((skill.skill_level < (10/3))) {
                                            if ((props.skillSelection === 'all') || skill.categories.includes(props.skillSelection)) {
                                                return (<div key={skill.title}
                                                            className="resumepage__skills-item" 
                                                            data-categories={skill.categories} 
                                                            title={"skill level: "+skill.skill_level+"/10"}>
                                                            {skill.title}
                                                        </div>
                                                );
                                            }
                                        }
                                    })
                                }
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div className="resumepage__experience">
                        <div className="resumepage__anchor" id="work-experience"></div>
                        <h3>Work Experience</h3>
                        <p className="resumepage__experience-linkall"><a href="" id="all" onClick={props.toggleExpandExperience}>Expand All</a></p>
                        <div className="resumepage__experience-container">
                            {
                                props.work_experience.map((workexp) => {
                                    return (<WorkExperience key={workexp.start_date}
                                            position={workexp.position} 
                                            company_href={workexp.company.href}
                                            company_name={workexp.company.name} 
                                            start={workexp.start_date} 
                                            end={workexp.end_date} 
                                            work_experience={workexp.work_experience}
                                            toggleExpandExperience={props.toggleExpandExperience} 
                                        />
                                    )
                                })
                            }
                        </div>           
                    </div>
                    
                    <div className="resumepage__education">
                        <div className="resumepage__anchor" id="education"></div>
                        <h3>Education</h3>
                        <div className="resumepage__education-container">
                            <div className="resumepage__college">
                                <h4>College</h4>
                                <div className="resumepage__education-body">
                                    <p><span>Bachelor of Science - Computer Engineering</span></p>
                                    <a href="https://twin-cities.umn.edu/">University of Minnesota – Twin Cities</a>
                                    <p>Graduated Fall 2015</p>
                                </div>
                            </div>
                            <div className="resumepage__cert">
                                <h4>Certification</h4>
                                <div className="resumepage__education-body">
                                    <p><span>Professional Scrum Master I</span></p>
                                    <a href="https://www.scrum.org">Scrum.org</a>
                                    <p>November 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resumepage__downloadable">
                <h2>downloadable resume</h2>
                <div className="resumepage__downloadresume"><a href="/doc/JaneKaganResume.pdf" download><button>download .pdf</button></a></div>
            </div>
        </div>
    </div>
);

const WorkExperience = (props) => (
    <div className="resumepage__experience-item"> 
        <h4>{props.position}</h4>
        <p><a href={props.company_href}>{props.company_name}</a></p>
        <p><span>{props.start} - {props.end}</span></p>
        <p className="resumepage__experience-link"><a href="" id={props.start.replace(" ", "_")} onClick={props.toggleExpandExperience}>work responsibilities ></a></p>
        <ul hidden className="resumepage__experience-ul" id={props.start.replace(" ", "_")+"_ul"}>
        { props.work_experience.map((exp) => {
            return (<li key={exp}>{exp}</li>)
        }) }
        </ul>
    </div>
);

export default ResumePage;