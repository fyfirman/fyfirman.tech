import React from 'react'

const Sosmed = ({ href, name }) => {
  const imagesURI = require(`../images/sosmed/${name.toLowerCase()}.svg`)

  return (
    <a
      href={href}
      style={{
        padding: '16px',
        margin: '8px',
        backgroundColor: 'white',
        boxShadow: "2px 4px 24px 0px rgba(0, 0, 0, 0.1)",
        borderRadius: 0
      }}
    >
      <img
        src={imagesURI}
        alt={name}
        style={{
          margin: '0',
        }}
      />
    </a>
  )
}

export default Sosmed;
