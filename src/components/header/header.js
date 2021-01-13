import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "@fontsource/nunito-sans"

import * as styles from "./header.styles"
import Logo from "../../images/logo.svg"

const Header = () => (
  <header>
    <div style={styles.root}>
      <div style={{ width: '100%', maxWidth: 960, display: 'flex' }}>
        <div style={{ margin: 0, flex: 4 }}>
          <Link to="/" style={styles.logo}>
            <img src={Logo} alt="fyfirman.tech" style={{ margin: 0 }} />
          </Link>
        </div>
        <a href="#" style={styles.button}>Projects</a>
        <a href="#" style={styles.button}>About</a>
      </div>
    </div>
  </header>
)

export default Header
