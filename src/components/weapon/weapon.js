import React, { useState, useEffect } from 'react'
import './weapon.scss'

const Weapon = ({ name, color }) => {
  const imageURI = require(`../../images/stack/${name.toLowerCase().split(' ').join('-')}.svg`)

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(localStorage.getItem('theme'))
  }, [])

  return (
    <div className="weapon">
      <img
        className="weapon-image"
        src={imageURI}
        alt={name}
        style={theme === 'dark' ? { outline: `1px solid ${color}` } : {}} />
      <span className="tooltip" data-hover={name}>{name}</span>
    </div>
  )
}

export default Weapon;
