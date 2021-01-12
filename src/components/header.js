import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"

const Header = () => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        padding: `20px 200px`,
        display: 'flex',
        backgroundColor: 'white'
      }}
    >
      <h1 style={{ margin: 0, flex: 4 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <img src={Logo} alt=""/>
        </Link>
      </h1>
      <a href="#" style={{ margin: 0, padding: '0 20px' }}>Projects</a>
      <a href="#" style={{ margin: 0, padding: '0 20px' }}>About</a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
