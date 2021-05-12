import React from 'react'
import { Link as GatsbyLink } from "gatsby"
import { Link } from 'react-scroll'
import "./menu-header.scss"

const MenuHeader = ({ to, title, link = false }) => (
  link ? <GatsbyLink
    to={to}
    spy={true}
    smooth={true}
    offset={-100}
    duration={500}
    className="button"
    data-hover={title}>
    <span>{title}</span>
  </GatsbyLink> :
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      className="button"
      data-hover={title}>
      <span>{title}</span>
    </Link>
);

export default MenuHeader;