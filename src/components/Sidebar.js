import React from "react"
import { Link } from "gatsby"
import Logo from "../components/Logo"

const Sidebar = ({ children, collection, about, contacts }) => {
  return (
    <div className="sidebar">
      <Logo />
      <Link className="a link-padding" to="/">
        HOME
      </Link>
      {collection && <div className="link-padding">{children}</div>}
      {(about || contacts) && (
        <Link className="a link-padding" to="/collection">
          LONDON COLLECTION
        </Link>
      )}
      {about && <div className="link-padding">{children}</div>}
      {(collection || contacts) && (
        <Link className="a link-padding" to="/about/our-history">
          ABOUT US
        </Link>
      )}
      <Link className="a link-padding" to="/contact">
        CONTACTS
        {contacts && <div className="underline"></div>}
      </Link>
    </div>
  )
}

export default Sidebar
