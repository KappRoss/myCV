import React from "react";
import s from "./content.module.css"
import AboutMe from "../aboutMe/AboutMe";
import MyProjects from "../myProjects/myProjects";
import MyContacts from "../myContacts/myContacts";
import { Route, Switch } from "react-router";

const Content = () => {
  return(
    <div className={s.Content}>
      <Switch>
        <Route exact path='/AboutMe' component={AboutMe}/>
        <Route exact path='/MyProjects' component={MyProjects}/>
        <Route exact path='/MyContacts' component={MyContacts}/>
        <Route component={AboutMe} />
      </Switch>
    </div>
  )
}

export default Content