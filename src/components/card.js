import React from 'react'

const Card = ({ href, imageURI, title, desc, stack }) => {
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
        src={imageURI}
        style={{
          margin: '0',
        }}
      />
      <h4>{title}</h4>
      <p>{desc}</p>

      <p>Build with : {stack.join(',')}</p>
    </a>
  )
}

export default Card;
