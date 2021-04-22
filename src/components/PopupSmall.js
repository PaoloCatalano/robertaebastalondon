import React from "react"
import { useLocation } from "@reach/router"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import CookieConsent, { Cookies } from "react-cookie-consent"

const Popup = () => {
  const location = useLocation()

  return (
    <CookieConsent
      buttonWrapperClasses="buttonWrapperClasses"
      buttonClasses="buttonClasses"
      style={{ background: "#ffffff", width: "100vw" }}
      buttonStyle={buttonStyle}
      expires={90}
      cookieName="CookieConsent"
      flipButtons
      ariaAcceptLabel
      onAccept={() => {
        Cookies.set("gatsby-gdpr-google-tagmanager", true)
        Cookies.set("gatsby-gdpr-google-analytics", true)
        initializeAndTrack(location)
      }}
      location="bottom"
      buttonText="ACCEPT"
      sameSite="none"
      declineButtonStyle={declineButton}
      cookieSecurity
      enableDeclineButton
      declineButtonText="refuse"
      ariaDeclineLabel
      onDecline={() => {
        console.log("Cookies not accepted")
      }}
    ></CookieConsent>
  )
}

const buttonStyle = {
  margin: 0,
  color: "#fff",
  fontSize: "14px",
  fontWeight: "bold",
  width: "90%",
  borderRadius: 64,
  background: "#78beb3",
}
const declineButton = {
  padding: 5,
  margin: 9,
  textTransform: "lowercase",
  backgroundColor: "#fff",
  color: "gray",
  display: "flex",
}
export default Popup
