import React, { useContext } from "react"
import { GatsbyContext } from "../context/context"
import { Link } from "gatsby"

const Homenavbar = () => {
  const { links } = useContext(GatsbyContext)

  return (
    <div className="navbar" style={{ position: "static" }}>
      <ul>
        {links.map(({ url, label }, index) => {
          return (
            <li key={index}>
              <Link activeStyle={active} to={url} alt={label}>
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
const active = {
  borderBottom: "solid 0.1px #9e9d9d",
}

export default Homenavbar
