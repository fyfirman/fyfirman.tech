import React from "react"
import { Link } from "gatsby"
import "@fontsource/nunito-sans"

import * as styles from "./header.styles"
import "./header.scss"
import Logo from "../../images/logo.svg"

const Header = ({ projectRef, contactRef }) => {

  const moveTo = (ref) => ref.current.scrollIntoView()

  return (
    <header>
      <div style={styles.root}>
        <div style={styles.header}>
          <Link to="/">
            <img src={Logo} alt="fyfirman.tech" style={styles.logo} />
          </Link>
          <div style={styles.nav}>
            <a onClick={() => moveTo(projectRef)} className="button" data-hover="Project"><span>Project</span></a>
            <a onClick={() => moveTo(contactRef)} className="button" data-hover="Contact"><span>Contact</span></a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
