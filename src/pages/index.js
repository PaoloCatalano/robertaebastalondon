import React from "react"
import Homenavbar from "../components/Homenavbar"
import Layout from "../components/Layout"
import MenuBtn from "../components/MenuBtn"
import Logo from "../components/Logo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Searchbar from "../components/Searchbar"
import SliderTimer from "../components/SliderTimer"
import Footer from "../components/Footer"

export default function Home({
  data: {
    allContentfulHome: { nodes },
  },
}) {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="half-background"></div>
      {/* <MenuBtn home />
      <div className="homenavbar">
        <Homenavbar />
      </div>
      <div className="navbar-fixed">
        <Searchbar home />
      </div> */}
      <main className="main-home">
        <Homenavbar />
        <Searchbar />
        <div className="hero-title">
          <Logo />
        </div>
        <div className="hero">
          <div className="hero-pic">
            <SliderTimer data={nodes} />
            {/* <p className="century-mobile">20TH CENTURY DESIGN</p> */}
          </div>
          <p className="desc-side">ROBERTAEBASTA’ S HIGHLIGHTS</p>
        </div>
        <div className="century" style={{}}>
          20TH CENTURY DESIGN
        </div>
        <Footer contact home />
      </main>
    </div>
  )
}

export const query = graphql`
  {
    allContentfulHome {
      nodes {
        indirizzo
        foto {
          fluid(maxWidth: 5000, quality: 100) {
            ...GatsbyContentfulFluid_noBase64
          }
        }
      }
    }
  }
`
