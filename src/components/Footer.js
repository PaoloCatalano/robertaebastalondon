import React from "react"
import { AiOutlineInstagram } from "react-icons/ai"
import { TiSocialFacebook } from "react-icons/ti"

const Footer = ({ contact, nofooter, home }) => {
  return nofooter ? (
    <div></div>
  ) : (
    <div className="footer">
      {home && <p className="century">20TH CENTURY DESIGN</p>}
      {contact && (
        <div className="footer-contact">
          <a href="mailto:london@robertaebasta.com">london@robertaebasta.com</a>
          <div className="underline" style={{ margin: 0 }}></div>
          <a href="tel:+447554544125">+44 (0) 7554 544125</a>
        </div>
      )}
      <div className="footer-social">
        <a
          href="http://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram />
        </a>
        <a
          href="http://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiSocialFacebook />
        </a>
      </div>
    </div>
  )
}

export default Footer
