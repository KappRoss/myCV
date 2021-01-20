import React from "react";
import s from "./content.module.css"
import AboutMe from "../aboutMe/AboutMe";
import MyProjects from "../myProjects/myProjects";
import MyContacts from "../myContacts/myContacts";
import { Route } from "react-router"

const Content = () => {
  return(
    <div className={s.Content}>
      <Route path='/AboutMe' component={AboutMe}/>
      <Route path='/MyProjects' component={MyProjects}/>
      <Route path='/MyContacts' component={MyContacts}/>
    </div>
  )
}

export default Content