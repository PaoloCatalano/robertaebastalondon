import React from "react"
import { AiOutlineInstagram } from "react-icons/ai"
import { TiSocialFacebook } from "react-icons/ti"
import socials from "../constants/socials"
const Footer = ({ contact, nofooter }) => {
  return nofooter ? (
    <div></div>
  ) : (
    <div className="footer">
      {contact && (
        <div className="footer-contact">
          <a href={`mailto:${socials.email}`}>mail@mail.com</a>
          <div className="underline" style={{ margin: 0 }}></div>
          <a href="tel:+1234567890">+1234567890</a>
        </div>
      )}
      <div className="footer-social">
        <a href={socials.insta} target="_blank" rel="noopener noreferrer">
          <AiOutlineInstagram />
        </a>
        <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
          <TiSocialFacebook />
        </a>
      </div>
    </div>
  )
}

export default Footer
