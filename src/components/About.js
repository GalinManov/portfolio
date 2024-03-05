import { useState, useEffect } from "react";
import ReactPng from '../assets/React.png'
import HTML from '../assets/HTML5.png'
import CSS from '../assets/CSS3.png'
import Node from '../assets/Node.js.png'
import MongoDB from '../assets/MongoDB.png'

export const About = () => {

    const [content, setContent] = useState("skills");
    const [activeSkills, setActiveSkills] = useState(true);
    const [activeExp, setActiveExp] = useState(false)


    function handleClickSkills(e) {
        setActiveSkills(true);
        setActiveExp(false);
        setContent("skills");
    };

    function handleClickExperience(e) {
        setActiveSkills(false);
        setActiveExp(true);
        setContent("education")
    };
    ;


    return (
        <div className="about" id="about">
            <div className="about-intro">
                <h1 className="about-name">Galin Manov, 23</h1>
                <h3 className="about-positions">Student </h3>
                <h1 className="about-bio">A brief bio</h1>
            </div>


            <div className="line" style={{ "margin": "0 auto", "width": "20rem" }}></div>



            <div className="div-bio">
                <div className="col-1">
                    Over the past 3 years I have been actively working towards becoming a Full-time Web Developer. During my time in SoftUni I learned the fundamentals of Programming and Web Development.
                    At first were the basic concepts surrounding programming and afterwards came the more practical tasks, relating to
                    small to medium sized projects and simple apps.
                </div>
                <div className="col-2">
                    <div className="skills-exp">
                        <button className={activeSkills ? "active-btn" : "about-btns"} onClick={handleClickSkills}>Skills & experience</button>
                        <button className={activeExp ? "active-btn" : "about-btns"} onClick={handleClickExperience}>Education & courses</button>
                    </div>

                    {content == "skills" &&
                        <div className="skills-exp-content">
                            <ul>
                                <li>
                                    Frond-end Design
                                </li>
                                <li>
                                    Back-end development with NodeJs, Express
                                </li>
                                <li>
                                    NoSQL and SQL
                                </li>
                                <li>
                                    React and most of its core libraries
                                </li>
                            </ul>
                        </div>}

                    {content == "education" &&
                    
                        <div className="skills-exp-content">                       
                            <ul style={{ "textAlign": "start" }}>
                                <li>
                                    C# Advanced
                                </li>
                                <li>
                                    C# OOP
                                </li>
                                <li>
                                    JS Advanced
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    JS Front-End
                                </li>
                                <li>
                                    JS Back-End
                                </li>
                                <li>
                                    ReactJS
                                </li>
                            </ul>

                        </div>}




                </div>

                <div className="col-1">
                    <p>
                        Finally I dove deep into the World of Web Development by making my first
                        very own Full Stack Web Apps with a responsive Front-End design that communicated with a fully-functioning Back-End service,
                        supporting a variety of different CRUD operations. After completing my journey in SoftUni and until present time I've managed
                        to keep busy by learning new concepts and imroving my skills in the MERN tech stack!

                    </p>

                </div>
            </div>

            <h2 style={{ "marginTop": "4rem" }}>
                Tech Stack:
            </h2>

            <div className="about-stack">
                <div>
                    <img className="about-icons" src={ReactPng}></img>
                    <span>React</span>
                </div>
                <div>
                    <img className="about-icons" src={HTML}></img>
                    <span>HTML5</span>
                </div>
                <div>
                    <img className="about-icons" src={CSS}></img>
                    <span>CSS3</span>
                </div>
                <div>
                    <img className="about-icons" src={Node}></img>
                    <span>NodeJS</span>
                </div>
                <div>
                    <img className="about-icons" src={MongoDB}></img>
                    <span>MongoDB</span>
                </div>

            </div>

        </div>
    )

};