import React from "react"
import { Link } from "gatsby"

import * as styles from "../styles/index.styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Weapon from "../components/weapon"
import Card from '../components/card'
import Sosmed from '../components/sosmed'
import pacisBot from "../images/project/pacis-bot.jpg"
import himatifApps from "../images/project/himatif-apps.jpg"
import careIn from "../images/project/carein.jpg"
import terimaCurhatASI from "../images/project/terima-curhat-asi.jpg"
import Self from "../images/self.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* About section */}
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: "4", paddingRight: '10%' }}>
        <h1 style={styles.headings}>Hi, i’m firmansyah!</h1>
        <h2 style={styles.title}>student | developer | designer</h2>
        <p style={styles.aboutMe}>I entered the world of computers starting from my mother's orders to type a document when I was in elementary school. From there I wondered what the computer could do. The first thing I did was create a graphic design to sell game jockey services on Facebook. I found my designs very beautiful, then I called myself as the youngest great graphic designer at the age of 12. Really childish Haha.</p>
        <p style={styles.aboutMe}>Several years later, I was introduced to programming. I feel challenged because programming is like solving a puzzle. So, I decided to get serious in this world, because I believe that the future really needs programming. I really like making a product that many people can use. Besides, creating neat code so that it is easy for others to understand is an art over code.</p>
        <p style={styles.aboutMe}>Now I am a final year student at Padjadjaran University and am looking for a job at a company that has strong technological qualities so that I can learn a lot from that company.</p>
      </div>
      <div style={{ flex: "1" }}>
        <img src={Self} alt="" srcset="" />
      </div>
    </div>

    {/* Weapon section */}
    <h2 style={styles.headings2}>My Weapons</h2>
    <div style={{ display: "flex", width: '100%' }}>
      <div style={{ flex: 1 }}>
        <h3 style={styles.weaponType}>Primary</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Weapon href="#" name="React" />
          <Weapon href="#" name="NodeJS" />
          <Weapon href="#" name="Git" />
          <Weapon href="#" name="Figma" />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Weapon href="#" name="MongoDB" />
          <Weapon href="#" name="MySQL" />
          <Weapon href="#" name="Ubuntu Server" />
        </div>`
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={styles.weaponType}>Secondary</h3>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Weapon href="#" name="Laravel" />
            <Weapon href="#" name="Docker" />
            <Weapon href="#" name="CodeIginiter" />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Weapon href="#" name="Java" />
            <Weapon href="#" name="Python" />
          </div>
        </div>
      </div>
    </div>

    {/* Project Section */}
    <h2 style={styles.headings2}>Selected Project</h2>
    <div style={styles.project(true)}>
      <Card title="Pacis-bot" desc="Auto-fill questionnare on PACIS Unpad" stack={['NodeJS']} imageURI={pacisBot} href="#" />
      <Card title="Himatif Apps" desc="Auto-fill questionnare on PACIS Unpad" stack={['NodeJS']} imageURI={himatifApps} href="#" />
    </div>
    <div style={styles.project(false)}>
      <Card title="Care.in" desc="Auto-fill questionnare on PACIS Unpad" stack={['NodeJS']} imageURI={careIn} href="#" />
      <Card title="Terima Curhat ASI" desc="Auto-fill questionnare on PACIS Unpad" stack={['NodeJS']} imageURI={terimaCurhatASI} href="#" />
    </div>
    {/* <Link to="/project/">See All Project</Link> <br /> */}

    {/* Contact Section */}
    <h2 style={styles.headings2}>Get In Touch With Me</h2>
    <div>
      <Sosmed name="Instagram" href="#" />
      <Sosmed name="Youtube" href="#" />
      <Sosmed name="Youtube" href="#" />
      <Sosmed name="Youtube" href="#" />
      <Sosmed name="Youtube" href="#" />
      <Sosmed name="Youtube" href="#" />
      <Sosmed name="Youtube" href="#" />
    </div>

  </Layout >
)

export default IndexPage
