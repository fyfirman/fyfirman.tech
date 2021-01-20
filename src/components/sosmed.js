import React from 'react'
import "../styles/sosmed.scss"

const Weapon = ({ href, name, middle, position }) => {
  const imageURI = require(`../images/sosmed/${name.toLowerCase().split(' ').join('-')}.svg`)

  return (
    <a
      href={href}
      className={"sosmed " + position}
      style={{
        backgroundColor: !middle ? 'white' : 'black'
      }}
    >
      <img
        src={imageURI}
        alt={name}
        style={{
          margin: '0',
          transform: 'rotate(-45deg)',
        }} />
    </a >
  )
}

export default Weapon;
