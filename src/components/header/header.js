import React from "react"
import { Link } from "gatsby"
import "@fontsource/nunito-sans"

import * as styles from "./header.styles"
import MenuHeader from "./menu-header/menu-header"
import Logo from "../../images/logo.svg"

const Header = () => (
  <header>
    <div style={styles.root}>
      <div style={styles.header}>
        <Link to="/">
          <img src={Logo} alt="fyfirman.tech" style={styles.logo} />
        </Link>
        <div style={styles.nav}>
          <MenuHeader
            to="project-section"
            title="Project"
          />
          <MenuHeader
            to="contact-section"
            title="Contact"
          />
        </div>
      </div>
    </div>
  </header>
);


export default Header
