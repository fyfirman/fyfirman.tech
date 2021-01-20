import React from 'react'

const Card = ({ href, imageURI, title, desc, stack, notAvailable }) => {
  return (
    <div
      style={{
        borderRadius: 0,
        textDecoration: 'none',
        color: 'black',
        marginBottom: 64
      }}>
      <img
        src={imageURI}
        style={{
          margin: '0',
          width: '100%'
        }}
        alt={title}
      />
      <h4
        style={{
          fontFamily: 'Nunito Sans',
          fontWeight: '700',
          fontSize: '20px',
          color: 'black',
          margin: '12px 0'
        }}
      >
        {title}
      </h4>
      <p style={{
        fontFamily: 'Nunito Sans',
        fontWeight: 500,
        fontSize: 14,
        color: '#696969',
        lineHeight: '145.1%',
        margin: '8px 0'
      }}>
        {desc}
      </p>
      <p
        style={{
          fontFamily: 'Nunito Sans',
          fontWeight: 500,
          fontSize: 14,
          color: '#696969',
          lineHeight: '145.1%',
          margin: '8px 0'
        }}>Build with : {stack.join(', ')}</p>
      <a
        href={href}
        style={{
          fontFamily: 'Nunito Sans',
          fontWeight: 700,
          fontSize: 16,
          color: 'black',
          margin: '16px 0',
          textDecoration: 'none'
        }}
      >
        {!notAvailable ? 'See Project ›' : 'Not available yet'}
      </a >
    </div>
  )
}

export default Card;
