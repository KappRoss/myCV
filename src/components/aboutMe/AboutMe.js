import React from 'react'
import s from './aboutMe.module.css'

const AboutMe = () => {
  return(
    <div className={s.AboutMe}>

      <h2>About me.</h2>

      <div className={s.ShortInfo}>
        <p>My name is <span className={s.MyName}>Rostyslav Kaplychnyi</span> , I'm web-developer with a strong interest in
          creating Web App based on React. I'm always looking forward to
          learning new technologies and improving already learned ones.
        </p>
      </div>

      <div className={s.Skills}>
        <p><strong>Skills: </strong>JavaScript, React/Redux, BEM, Photoshop, Figma, Bootstrap, CSS, SASS, HTML .</p>
      </div>

      <div className={s.WorkExperience}>
        <strong>Work experience.</strong> <br/>
        <span>1. Freelance and Pet-projects</span>
        <p>
          Front-end developer, July 2020 – now <br/>
          Responsibilities: develop web site on React.
        </p>
        <span>2. Outsourcing projects</span>
        <p>
          Front-end developer, June – July 2020 <br/>
          Responsibilities: develop web site on React/Redux
        </p>
      </div>

      <div className={s.Education}>
        <p>
          <strong>Education.</strong>
          <p>
            2016-2020 State University of Telecommunications (Kiev), Bachelor of Computer
          </p>
        </p>
      </div>

      <div className={s.Language}>
        <p>
          <p><strong>Foreign language: </strong>English - Intermediate .</p>
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

export  default AboutMe