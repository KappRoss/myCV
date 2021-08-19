import React from 'react'
import s from './aboutMe.module.css'

const AboutMe = () => {
    return (
        <div className={s.AboutMe}>

            <h2>About me.</h2>

            <div className={s.ShortInfo}>
                <p>My name is <span className={s.MyName}>Rostyslav Kaplychnyi</span> , I'm web-developer with a strong
                    interest in
                    creating Web App based on React. I'm always looking forward to
                    learning new technologies and improving already learned ones.
                </p>
            </div>

            <div className={s.Skills}>
                <p><strong>Skills: </strong>JavaScript, HTML, CSS </p>
                <p><strong>Frameworks: </strong>React JS, Gatsby</p>
                <p><strong>Other: </strong>Redux, Graphql, Contentful, Flux, Webpack, Docker, Linux, API </p>
                <p><strong>Integration Tools: </strong>WebStorm, Jira, Git/Github/Bitbucket/Gitlab, Photoshop, Figma</p>
            </div>

            <div className={s.WorkExperience}>
                <strong>Employment History:</strong> <br/>
                <span>⦁ Magedev Group </span>
                <p>
                    React developer (March 2020 – now)<br/>
                    Responsibilities:
                    <ul>
                        <li>Develop website on React/Redux;</li>
                        <li>Participating in building a new scalable solution using modern technology stack;</li>
                        <li>Developing a user interface and logic for complex single-page applications;</li>
                        <li>Troubleshoot and fix production issues;</li>
                        <li>Designed interfaces;</li>
                        <li>Optimized web pages for higher performance and load time;</li>
                        <li>Worked with the UI, changed the layout;</li>
                    </ul>
                </p>
                <span>⦁	Freelance and Pet-projects </span>
                <p>
                    Junior Developer (August 2019 - March 2020) <br/>
                    Responsibilities:
                    <ul>
                        <li>Creating browser-based HTML5 services for web clients;</li>
                        <li>CSS usage</li>
                        <li>Troubleshooting applications.</li>
                        <li>Support of customers</li>
                    </ul>
                </p>
            </div>

            <div className={s.Education}>
                <p>
                    <strong>Education.</strong>
                    <p>
                        2016-2020 State University of Telecommunications (Kiev), Bachelor of Computer Engineering
                    </p>
                </p>
            </div>

            <div className={s.Language}>
                <p>
                    <p><strong>Foreign language: </strong>English - Intermediate.</p>
                </p>
            </div>

            <div className={s.Hobby}>
                <p>
                    <p><strong>Hobby: </strong>football, volleyball, books</p>
                </p>
            </div>

        </div>
    );
}

export default AboutMe