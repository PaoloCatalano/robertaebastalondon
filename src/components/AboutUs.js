import React, { useContext } from "react"
import links from "../constants/links-about"
import { Link } from "gatsby"
import { GatsbyContext } from "../context/context"

const AboutUs = () => {
  const { hideSidebar } = useContext(GatsbyContext)

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
              partiallyActive={true}
              onClick={() => {
                hideSidebar()
              }}
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
