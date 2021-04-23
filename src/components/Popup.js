import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import CookieConsent, { Cookies } from "react-cookie-consent"
import Img from "gatsby-image"

const Popup = () => {
  const logo = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const location = useLocation()

  return (
    <CookieConsent
      overlayClasses="overlayClasses"
      containerClasses="containerClasses"
      buttonWrapperClasses="buttonWrapperClasses"
      buttonClasses="buttonClasses"
      style={comStyle}
      contentStyle={{ margin: 0 }}
      buttonStyle={buttonStyle}
      expires={90}
      cookieName="CookieConsent"
      flipButtons
      ariaAcceptLabel
      overlay
      onAccept={() => {
        Cookies.set("gatsby-gdpr-google-analytics", true)
        Cookies.set("gatsby-gdpr-google-tagmanager", true)
        initializeAndTrack(location)
      }}
      location="bottom"
      buttonText="ACCEPT"
      sameSite="none"
      cookieSecurity
      enableDeclineButton
      declineButtonText="decline"
      ariaDeclineLabel
      declineButtonStyle={declineButton}
      onDecline={() => {
        console.log("Cookies not accepted")
      }}
    >
      <div className="logo-cookie">
        <div style={{ width: 200, textAlign: "center" }}>
          <Img
            className="logo"
            fluid={logo.file.childImageSharp.fluid}
            alt="logo"
            FadeIn={true}
            durationFadeIn={2000}
          />
          <p className="london big">london</p>
        </div>
      </div>
      <div className="notice">
        <h2>Notice</h2>
        We and selected partners use cookies or similar technologies as
        specified in the{" "}
        <span style={{ fontSize: "10px" }}>
          <Link
            style={{ color: "#666666", textDecoration: "underline" }}
            to="/policy"
          >
            cookie and privacy policy
          </Link>
          . We strongly suggest to accept it for a better user experience.
        </span>
      </div>
    </CookieConsent>
  )
}
const comStyle = {
  // default
  alignItems: "baseline",
  background: "#fff",
  color: "white",
  //   display: "flex",
  //   flexWrap: "wrap",
  //   justifyContent: "space-between",
  zIndex: 999,
  //   position: "fixed",
  //   width: "100%",
  //   left: 0,
  // bottom: 0,
  // end of default
  position: "static",
  width: "60vw",
  display: "grid",
  grid: "auto auto / 1fr",
}
const buttonStyle = {
  // default botton style
  // background: rgb(255, 212, 45);
  // border: 0px;
  // border-radius: 0px;
  // box-shadow: none;
  // color: rgb(78, 80, 59);
  // cursor: pointer;
  // flex: 0 0 auto;
  // padding: 5px 10px;
  // margin: 15px;
  // font-size: 14px;
  // font-weight: bold;
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
