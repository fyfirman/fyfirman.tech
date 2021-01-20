import React from 'react'
import './card.scss'

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
      <p className="body">{desc}</p>
      <p className="body">Build with : {stack.join(', ')}</p>
      <a className={!notAvailable ? "card-button" : "card-button not-available" }href={href}>
        {!notAvailable ? 'See Project ›' : 'Not available yet'}
      </a >
    </div>
  )
}

export default Card;
