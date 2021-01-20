import React from 'react'
import s from './mainPhoto.module.css'
import avatar from '../../img/ava.jpg'

const MainPhoto = () => {
  return (
    <div className={s.MainPhoto}>
      <img className={s.Avatar} src={avatar} alt="Avatar"/>
    </div>
  )
}

export default MainPhoto