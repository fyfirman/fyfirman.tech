import { Link } from "gatsby"
import React from "react"
import "@fontsource/nunito-sans"

import * as styles from "./header.styles"
import Logo from "../../images/logo.svg"

const Header = () => {
  return (
    <header>
      <div style={styles.root}>
        <div style={styles.header}>
          <Link to="#" style={{ flex: 1 }}>
            <img src={Logo} alt="fyfirman.tech" style={{ margin: 0 }} /></Link>
          <div style={styles.nav}>
            <a href="#" style={styles.button}>Projects</a>
            <a href="#" style={styles.button}>About</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
