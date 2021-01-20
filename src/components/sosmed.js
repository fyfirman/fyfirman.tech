import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Weapon = ({ href, name, middle, position }) => {
  const imageURI = require(`../images/sosmed/${name.toLowerCase().split(' ').join('-')}.svg`)

  const resize = useMediaQuery({ query: '(max-width: 530px)' })

  return (
    <a
      href={href}
      style={{
        backgroundColor: !middle ? 'white' : 'black',
        ...(position === 'top' && {
          position: 'relative',
          top: resize ? -40 : -48,
          left: resize ? 44 : 56
        }),
        ...(position === 'bottom' && {
          position: 'relative',
          top: resize ? 40 : 48,
          left: resize ? -44 : -56
        }),
        ...(position === 'left' && {
          position: 'relative',
          left: resize ? 72 : 80
        }),
        ...(position === 'right' && {
          position: 'relative',
          left: resize ? -72 : -80
        })
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
