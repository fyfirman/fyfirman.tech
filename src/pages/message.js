import React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/index.styles"

const MessagePage = () => (
  <Layout title="Firmansyah Yanuar | Message">
    <h3 style={styles.title}>Send me a message</h3>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1 }}>
        <p style={styles.body}>
          <b>Feel free</b> to message me about anything like :
        </p>
        <ul style={styles.list}>
          <li>Impression this website</li>
          <li>Discuss about software development (web/android)</li>
          <li>Request for mentorship</li>
          <li>Holding crypto-currency</li>
          <li>Hard feelings for me</li>
          <li>Anything you like</li>
        </ul>
        <p style={styles.body}>
          You can send <b>anonymously</b> or <b>write your name</b>. If you want to
          reply, please state in the message.
        </p>
        <p style={styles.body}>
          Please speak with <b>human language</b>, not a programming language. 😁
        </p>
      </div>
      <div style={{ flex: 1 }}>
        test
      </div>
    </div>
  </Layout>
)

export default MessagePage
