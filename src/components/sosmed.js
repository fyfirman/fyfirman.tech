import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Weapon = ({ href, name, middle, position }) => {
  const imageURI = require(`../images/sosmed/${name.toLowerCase().split(' ').join('-')}.svg`)

  const resize = useMediaQuery({ query: '(max-width: 530px)' })

  return (
    <a
      href={href}
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '16px',
        margin: resize ? '8px 16px': '8px 24px',
        backgroundColor: !middle ? 'white' : 'black',
        boxShadow: "2px 4px 12px 0px rgba(0, 0, 0, 0.1)",
        borderRadius: 0,
        width: 64,
        minWidth: resize ? 56 : 64,
        aspectRatio: 1,
        textAlign: 'center',
        transform: 'rotate(45deg)',
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
