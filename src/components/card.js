import React from 'react'

const Card = ({ href, imageURI, title, desc, stack }) => {
  return (
    <div
      style={{
        margin: '0 48px 48px 0',
        borderRadius: 0,
        textDecoration: 'none',
        color: 'black'
      }}>
      <img
        src={imageURI}
        style={{
          margin: '0',
        }}
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
        }}>Build with : {stack.join(',')}</p>
      <a
        href={href}
        style={{
          fontFamily: 'Nunito Sans',
          fontWeight: 700,
          fontSize: 16,
          color: 'black',
          lineHeight: '145.1%',
          margin: '4px 0',
          textDecoration: 'none'
        }}
      >
        See Project
    </a >
    </div>
  )
}

export default Card;
