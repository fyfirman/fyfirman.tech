import React from 'react'
import './card.scss'

const Card = ({ href, imageURI, title, desc, stack, notAvailable }) => {
  return (
    <div className="card-container">
      <img
        className="card-image"
        src={imageURI}
        alt={title}
      />
      <h4 className="card-title">
        {title}
      </h4>
      <p className="body">{desc}</p>
      <p className="body">Build with : {stack.join(', ')}</p>
      <a className={!notAvailable ? "card-button" : "card-button not-available"} href={href}>
        {!notAvailable ? 'See Project ›' : 'Not available yet'}
      </a >
    </div>
  )
}

export default Card;
