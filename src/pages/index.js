import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Weapon from "../components/weapon"
import Logo from "../images/logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* About section */}
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: "4" }}>
        <h1>Hi, i’m firmansyah!</h1>
        <h2>student | developer | designer</h2>
        <p>I entered the world of computers starting from my mother's orders to type a document when I was in elementary school. From there I wondered what the computer could do. The first thing I did was create a graphic design to sell game jockey services on Facebook. I found my designs very beautiful, so I branded myself as the youngest great graphic designer at the age of 12. Really childish Haha.</p>
        <p>Several years later, I was introduced to programming. I feel challenged because programming is like solving a puzzle. So, I decided to get serious in this world, because I believe that the future really needs programming. I really like making a product that many people can use. Besides, creating neat code so that it is easy for others to understand is an art over code.</p>
        <p>Now I am a final year student at Padjadjaran University and am looking for a job at a company that has strong technological qualities so that I can learn a lot from that company.</p>
      </div>
      <div style={{ flex: "1" }}>
        <Image />
      </div>
    </div>

    {/* Weapon section */}
    <div style={{ display: "flex", width: '100%' }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ textAlign: "center" }}>Primary</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Weapon href="#" imageURI={Logo} tooltip="NodeJS" />
          <Weapon href="#" imageURI={Logo} tooltip="NodeJS" />
          <Weapon href="#" imageURI={Logo} tooltip="NodeJS" />
          <Weapon href="#dsadsa" imageURI={Logo} tooltip="NodeJS" />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          `<Weapon href="#" imageURI={Logo} tooltip="NodeJS" />
          <Weapon href="#" imageURI={Logo} tooltip="NodeJS" />
          <Weapon href="#" imageURI={Logo} tooltip="NodeJS" />
        </div>`
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ textAlign: "center" }}>Secondary</h3>
        <div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Weapon href="#" imageURI={Logo} tooltip="NodeJS" />
            <Weapon href="#" imageURI={Logo} tooltip="NodeJS" />
            <Weapon href="#" imageURI={Logo} tooltip="NodeJS" />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Weapon href="#" imageURI={Logo} tooltip="NodeJS" />
            <Weapon href="#" imageURI={Logo} tooltip="NodeJS" />
          </div>
        </div>
      </div>
    </div>
    <Link to="/project/">Go to page 2</Link> <br />
  </Layout >
)

export default IndexPage
