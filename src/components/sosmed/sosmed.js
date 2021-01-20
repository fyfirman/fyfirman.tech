import React from 'react'
import "./sosmed.scss"

const Weapon = ({ href, name, middle, position }) => {
  const imageURI = require(`../../images/sosmed/${name.toLowerCase().split(' ').join('-')}.svg`)

  return (
    <a
      href={href}
      className={"sosmed " + position}
      style={{
        backgroundColor: !middle ? 'white' : 'black'
      }}
    >
      <img src={imageURI} alt={name} />
    </a >
  )
}

export default Weapon;
