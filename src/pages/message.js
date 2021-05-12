import React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/index.styles"
import "../styles/message.scss"

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
      <div style={{ display: 'flex', flex: 1, gap: 16, flexDirection: 'column' }}>
        <input
          type="text"
          style={{
            width: '100%',
            color: 'var(--text-body)',
            fontFamily: 'Nunito Sans',
            fontWeight: 500,
            fontSize: '0.875rem',
            padding: 8,
          }}
          placeholder="Name (You can leave it blank)" />
        <textarea
          placeholder="Put your message here"
          style={{
            width: '100%',
            height: '60%',
            color: 'var(--text-body)',
            fontFamily: 'Nunito Sans',
            fontWeight: 500,
            fontSize: '0.875rem',
            padding: 8,
            resize: 'none'
          }} />
        <input
          type="submit"
          className="send-button"
          value="SEND"
          onclick="submit()" />
      </div>
    </div>
  </Layout>
)

export default MessagePage
