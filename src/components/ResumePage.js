import React from "react";

import Header from './Header';

const ResumePage = (props) => (
    <div id="/resume">
        <Header title="Resume" subtitle={<div>My <span>professional</span> experience.</div>}/>
        <div className="resumepage">
            <h2>interactive resume</h2>
            <div className="resumepage__interactive">
                <div className="resumepage__scrollbar">
                    <div className="resumepage__scrollbar-container">
                        <button onClick={props.scrollToResumeSection} id="resumepage__button-top">objective</button>
                        <button onClick={props.scrollToResumeSection}>skills</button>
                        <button onClick={props.scrollToResumeSection}>work experience</button>
                        <button onClick={props.scrollToResumeSection} id="resumepage__button-bottom">education</button>
                    </div>
                </div>
                <div className="resumepage__body">
                    <div className="resumepage__anchor" id="objective"></div>
                    <h3>Objective</h3>
                    <p id="resumepage__objective">
                        I am seeking a software engineering position where I can apply my 
                        knowledge of Agile development and passion for finding creative solutions 
                        to technical problems. I carry 4 years of industry experience with a 
                        specialty in testing, scripting, and web development and a strong desire 
                        to learn new things.
                    </p> 
                    <div className="resumepage__anchor" id="skills"></div>
                    <h3>Skills</h3>
                    <div className="resumepage__skillbuttons">
                        <button id="resumepage__button-left">all</button>
                        <button>OS</button>
                        <button>languages</button>
                        <button>web dev</button>
                        <button>data</button>
                        <button id="resumepage__button-right">devops</button>
                    </div>
                    <div className="resumepage__skills">
                        <div className="resumepage_category resumepage__fluent">
                            <h5>fluent in</h5>
                            {
                                props.skills.map((skill) => {
                                    if (skill.skill_level > ((10/3)*2)) {
                                        return (<div className="resumepage__skill" data-categories={skill.categories} title={skill.skill_level}>{skill.title}</div>);
                                    }
                                })
                            }
                        </div>
                        <div className="resumepage_category resumepage__working">
                            <h5>working knowledge</h5>
                            {
                                props.skills.map((skill) => {
                                    if ((((10/3)*2) > skill.skill_level) && (skill.skill_level > (10/3))) {
                                        return (<div className="resumepage__skill" data-categories={skill.categories} title={skill.skill_level}>{skill.title}</div>);
                                    }
                                })
                            }
                        </div>
                        <div className="resumepage_category resumepage__exposed">
                            <h5>exposed to</h5>
                            {
                                props.skills.map((skill) => {
                                    if (skill.skill_level < (10/3)) {
                                        return (<div className="resumepage__skill" data-categories={skill.categories} title={skill.skill_level}>{skill.title}</div>);
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="resumepage__experience">
                        <div className="resumepage__anchor" id="work-experience"></div>
                        <h3>Work Experience</h3>
                        <p className="resumepage__exp-link"><a href="" id="all" onClick={props.toggleExpandExperience}>Expand All</a></p>
                        {
                            props.work_experience.map((workexp) => {
                                return (<WorkExperience 
                                        className="resumepage_expitem" 
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
                    <div className="resumepage__education">
                        <div className="resumepage__anchor" id="education"></div>
                        <h3>Education</h3>
                        <h4>College</h4>
                        <div className="resumepage__education-body">
                            <p><span>Bachelor of Science - Computer Engineering</span></p>
                            <a href="https://twin-cities.umn.edu/">University of Minnesota – Twin Cities</a>
                            <p>Graduated Fall 2015</p>
                        </div>
                        <h4>Certification</h4>
                        <div className="resumepage__education-body">
                            <p><span>Professional Scrum Master I</span></p>
                            <a href="https://www.scrum.org">Scrum.org</a>
                            <p>November 2018</p>
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
    <div className="resumepage__exp"> 
        <h4>{props.position}</h4>
        <p><a href={props.company_href}>{props.company_name}</a></p>
        <p><span>{props.start} - {props.end}</span></p>
        <p className="resumepage__exp-link"><a href="" id={props.start.replace(" ", "_")} onClick={props.toggleExpandExperience}>work responsibilities ></a></p>
        <ul hidden className="resumepage__exp-ul" id={props.start.replace(" ", "_")+"_ul"}>
        { props.work_experience.map((exp) => {
            return (<li>{exp}</li>)
        }) }
        </ul>
    </div>
);

export default ResumePage;