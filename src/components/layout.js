/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Lottie from 'react-lottie'
import "@fontsource/nunito-sans"

import "./layout.css"
import animationData from "../lotties/loading-animation.json"
import Header from "./header/header"
import end from '../images/end.svg'

const Layout = ({ children, projectRef, contactRef }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    document.title = "Loading...";
    setTimeout(() => {
      document.fonts.load("12px Nunito Sans").then(() => setIsReady(true));
    }, 1000);
  }, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return ( isReady ?
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} projectRef={projectRef} contactRef={contactRef} />
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
          <img src={end} alt="Firmansyah Yanuar" />
        </footer>
      </div>
    </>
    :
    <div style={{ display: "flex", alignItems: "center", height: '100vh' }}>
      <Lottie options={lottieOptions} height={250} width={250} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
