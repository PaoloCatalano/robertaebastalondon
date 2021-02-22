import React from "react"
import Homenavbar from "../components/Homenavbar"
import Layout from "../components/Layout"
import MenuBtn from "../components/MenuBtn"
import Logo from "../components/Logo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
export default function Home({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) {
  return (
    <div style={{ overflowX: "hidden" }}>
      <MenuBtn home />
      <div className="homenavbar">
        <Homenavbar />
      </div>
      <Layout home>
        <div className="hero">
          <div className="hero-title">
            {/* <p>DECORATIVE ARTS AND DESIGN OF THE 20TH CENTURY</p> */}
            <Logo />
          </div>
          <div className="hero-pic">
            <Img
              className="img"
              fluid={fluid}
              alt="ROBERTAEBASTA’ S HIGHLIGHTS"
              backgroundColor="#b8d6d2"
              FadeIn={true}
              durationFadeIn={2000}
            />
            <p className="desc-side">ROBERTAEBASTA’ S HIGHLIGHTS</p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "hero-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 5000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
