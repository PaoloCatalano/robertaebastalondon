import React from "react"
import links from "../constants/links-about"
import { Link } from "gatsby"

const AboutUs = () => {
  return (
    <ul className="cat-container">
      {links.map((link, index) => {
        return (
          <li key={index} className="cat-list">
            <Link
              to={`/about/${link.url}`}
              alt={link.label}
              className="collection-link"
              activeStyle={active}
            >
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
const active = {
  borderBottom: "solid 0.1px #9e9d9d",
}
export default AboutUs
