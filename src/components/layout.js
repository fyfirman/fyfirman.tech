/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useMediaQuery } from 'react-responsive'
import "@fontsource/nunito-sans"
import "firebase/auth"
import "firebase/database"
import "./layout.css"
import SEO from "../components/seo"
import Header from "./header/header"
import end from '../images/end.svg'

const Layout = ({ children, projectRef, contactRef, title }) => {
  useEffect(() => {
    document.title = title ?? "Firmansyah Yanuar"
  }, [])

  const render3D = useMediaQuery({
    query: '(min-device-width: 1080px)'
  })

  return (
    <>
      <SEO />
      <Header siteTitle={title ?? "Firmansyah Yanuar"} projectRef={projectRef} contactRef={contactRef} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          marginTop: 120
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            textAlign: 'end'
          }}
        >
          {typeof window !== "undefined" ? "NodeJS (No SSR)" : "SSR Mode"}
          <object type="image/svg+xml" data={end} className="end">
            Firmansyah Yanuar
          </object>
        </footer>
      </div>
      {render3D &&
        (<div className="spline-container right">
          <iframe title="3d-spline-danbo" id="spline-danbo" src="https://status.fyfirman.tech/spline-danbo-final/" frameBorder="0" allowtransparency="true" />
        </div>)}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
