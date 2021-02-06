import React from 'react'
import "./sosmed.scss"

const Sosmed = ({ href, name, middle, position }) => {
  const imageURI = require(`../../images/sosmed/${name.toLowerCase().split(' ').join('-')}.svg`)

  return (
    <a
      href={href}
      className={"sosmed " + position + " " + (middle ? "middle" : "")}
    >
      <object type="image/svg+xml" data={imageURI} class="svg">
        {name}
      </object>
    </a >
  )
}

export default Sosmed;
