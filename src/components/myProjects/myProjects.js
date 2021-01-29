import React from "react"
import s from './myProjects.module.css'

const MyProjects = () => {
  return(
    <div className={s.Projects}>
      <h2>My pet-projects.</h2>
      <div className={s.ProjectsItem}>
        <p><b>"Quiz"</b>. SPA used ReactJS.</p>
      </div>
      <iframe src="https://kappross.github.io/react-quiz/"  width="100%" height='600px'  frameborder="5"></iframe>
      <p><b>"Abs Tech"</b> (business card website) SPA used ReactJS.</p>
      <iframe src="https://kappross.github.io/petProject/" frameborder="0" width="100%" height='600px'></iframe>
    </div>
  )
}

export default MyProjects