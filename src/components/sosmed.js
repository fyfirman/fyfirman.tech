import React from 'react'

const Weapon = ({ href, name, middle, position }) => {
  const imageURI = require(`../images/sosmed/${name.toLowerCase().split(' ').join('-')}.svg`)

  return (
    <a
      href={href}
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '16px',
        margin: '8px 24px',
        backgroundColor: !middle ? 'white' : 'black',
        boxShadow: "2px 4px 12px 0px rgba(0, 0, 0, 0.1)",
        borderRadius: 0,
        width: 64,
        height: 64,
        textAlign: 'center',
        transform: 'rotate(45deg)',
        ...(position === 'top' && {
          position: 'relative',
          top: '-48px',
          left: '56px'
        }),
        ...(position === 'bottom' && {
          position: 'relative',
          bottom: '-48px',
          left: '-56px'
        }),
        ...(position === 'left' && {
          position: 'relative',
          left: '80px'
        }),
        ...(position === 'right' && {
          position: 'relative',
          left: '-80px',
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
