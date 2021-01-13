import React from 'react'

const Weapon = ({ href, name, secondary }) => {
  const imageURI = require(`../images/stack/${name.toLowerCase().split(' ').join('-')}.svg`)

  return (
    <a
      href={href}
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '8px',
        margin: '8px 16px',
        // marginHorizontal: '16px',
        backgroundColor: !secondary ? 'white' : 'black',
        boxShadow: "2px 4px 12px 0px rgba(0, 0, 0, 0.1)",
        borderRadius: 0,
        width: 64,
        height: 64,
        textAlign: 'center'
      }}
    >
      <img
        src={imageURI}
        alt={name}
        style={{
          margin: '0'
        }} />
    </a>
  )
}

export default Weapon;
