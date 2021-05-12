import React from "react"
import { Link } from "gatsby"

import * as styles from "./header.styles"
import MenuHeader from "./menu-header/menu-header"
import DarkToggler from "../darkToggler/darkToggler"
import Logo from "../../images/logo.svg"

const Header = () => {
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <header>
      <div style={styles.root}>
        <div style={styles.header}>
          <Link to="/">
            <object type="image/svg+xml" data={Logo} style={styles.logo}>
              fyfirman.tech
          </object>
          </Link>
          <div style={styles.nav}>
            {!url.includes('/message') ? <>
              <MenuHeader
                to="/message"
                title="Message"
                link
              />
              <MenuHeader
                to="project-section"
                title="Project"
              />
              <MenuHeader
                to="contact-section"
                title="Contact"
              />
            </> : <>
              <MenuHeader
                to="/"
                title="Home"
                link
              />
              <MenuHeader
                to="/message"
                title="Message"
                link
              />
            </>}
            <DarkToggler />
          </div>
        </div>
      </div>
    </header>
  )
};


export default Header
