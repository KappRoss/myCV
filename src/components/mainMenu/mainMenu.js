import React from 'react'
import s from './mainMenu.module.css'
import { NavLink} from "react-router-dom";

const MainMenu = () => {
  return(
      <div className={s.MainMenu}>
        <div className={s.NavMenu}>
          <div className={s.Item}>
            <NavLink
              to="/AboutMe"
              activeClassName={s.ActiveRoute}
            >About me</NavLink>
          </div>
          <div className={s.Item}>
            <NavLink
              to="/MyProjects"
              activeClassName={s.ActiveRoute}
            >Projects</NavLink>
          </div>
          <div className={s.Item}>
            <NavLink
              to="/MyContacts"
              activeClassName={s.ActiveRoute}
            >Contacts</NavLink>
          </div>
        </div>
        <div className={s.Icons}>
          <div>
            <a href="https://github.com/KappRoss" target='_blank'>
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/%D1%80%D0%BE%D1%81%D1%82%D0%B8%D1%81%D0%BB%D0%B0%D0%B2-%D0%BA%D0%B0%D0%BF%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%B9-985466184/" target='_blank'>
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/profile.php?id=100009867498725" target='_blank'>
              <i className="fab fa-facebook-square"></i>
            </a>
          </div>
        </div>
        <div className={s.Download}>
          <a target="_blank" href='https://drive.google.com/file/d/1crXtpCUMkhrUeNQpQs3Gw8_JIlayxmik/view?usp=sharing'>Download my CV &nbsp;<i className="fas fa-file-download"></i></a>
        </div>
      </div>
  )
}

export default MainMenu