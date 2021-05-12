import React, { useState } from "react"
import Layout from "../components/layout"
import * as styles from "../styles/index.styles"
import firebase from "gatsby-plugin-firebase"
import axios from "axios"
import "../styles/message.scss"

const MessagePage = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(null)
  const [isSuccess, setIsSuccess] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!message) {
      setError({ isError: true, message: "Please fill your message" })
      return;
    }
    setIsLoading(true);
    axios.get("http://www.geoplugin.net/json.gp").then((res) => {
      console.log(res.data)

      firebase.database().ref('messages/').push({
        date: new Date().toLocaleString(),
        senderName: name,
        info: {
          userAgent: navigator.userAgent,
          platform: navigator.platform,
          ip: res.data.geoplugin_request,
          country: res.data.geoplugin_countryName,
          region: res.data.geoplugin_region,
          city: res.data.geoplugin_city,
          geolocation: {
            latitude: res.data.geoplugin_latitude,
            longitude: res.data.geoplugin_longitude,
            accuracy: res.data.geoplugin_locationAccuracyRadius
          }
        },
        message
      }).then(function (snapshot) {
        console.log(snapshot)
        setIsSuccess(true);
        setIsLoading(false);
      });
    }).catch((e) => {
      setError({ isError: true, message: e.message })
      console.error(error);
      setIsLoading(false);
    });
  }

  const getButtonText = () => {
    if (isSuccess) {
      return "Message sent! Thank you"
    }
    if (isLoading) {
      return "Please wait"
    }

    return "SEND"
  }

  return (<Layout title="Firmansyah Yanuar | Message">
    <h3 style={styles.title}>Send me a message</h3>
    <div className="container">
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
      <form style={{ display: 'flex', flex: 1, gap: 16, flexDirection: 'column' }}>
        <input
          type="text"
          className="input"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name (You can leave it blank)" />
        <textarea
          placeholder="Put your message here"
          onChange={(e) => setMessage(e.target.value)}
          className="input"
        />
        <input
          type="submit"
          className="send-button"
          value={getButtonText()}
          onClick={handleSubmit}
          disabled={isSuccess || isLoading} />
        <span style={{
          width: '100%',
          color: '#FF0000',
          fontFamily: 'Nunito Sans',
          fontWeight: 500,
          fontSize: '0.875rem',
          visibility: error && !isSuccess ? "visible" : "hidden"
        }}>{error?.message ?? ''}</span>
      </form>
    </div>
  </Layout>)
}

export default MessagePage
