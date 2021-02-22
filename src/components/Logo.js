import React, { useContext } from "react"
import { GatsbyContext } from "../context/context"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const { showSidebar } = useContext(GatsbyContext)

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

  return (
    <div className="container-logo">
      <Link to="/" alt="logo home">
        <Img
          className="logo"
          fluid={logo.file.childImageSharp.fluid}
          alt="logo"
          FadeIn={true}
          durationFadeIn={2000}
        />
      </Link>
      <p className="london big">london</p>
    </div>
  )
}

export default Logo
