import React from 'react'
import './weapon.scss'

const Weapon = ({ name }) => {
  const imageURI = require(`../../images/stack/${name.toLowerCase().split(' ').join('-')}.svg`)

  return (
    <div className="weapon">
      <img
        className="weapon-image"
        src={imageURI}
        alt={name} />
      <span className="tooltip" data-hover={name}>{name}</span>
    </div>
  )
}

export default Weapon;
