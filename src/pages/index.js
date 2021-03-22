import React, { useContext, useEffect } from "react"
import Homenavbar from "../components/Homenavbar"
import MenuBtn from "../components/MenuBtn"
import Logo from "../components/Logo"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Searchbar from "../components/Searchbar"
import SliderTimer from "../components/SliderTimer"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { GatsbyContext } from "../context/context"

export default function Home({
  data: {
    allContentfulHome: { nodes },
  },
}) {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(GatsbyContext)
  useEffect(() => {
    setIsSidebarOpen(false)
  }, [])

  return (
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <SEO title="Home" />
      <div className="half-background">
        <aside className={`${isSidebarOpen ? "show-modal" : ""}`}>
          <Navbar oneModal />
        </aside>
        <MenuBtn home />
        <main className="main-home">
          <Homenavbar />
          <Searchbar />
          <div className="hero-title">
            <Logo />
            <div className="hero no-mobile">
              <div className="hero-pic">
                <SliderTimer data={nodes} />
              </div>
              <p className="desc-side">ROBERTAEBASTA LONDON’S HIGHLIGHTS</p>
            </div>
          </div>
          <div className="no-mobile"></div>
          <div className="hero yes-mobile">
            <div className="hero-pic">
              <SliderTimer data={nodes} />
            </div>
            <p className="desc-side">ROBERTAEBASTA LONDON’S HIGHLIGHTS</p>
          </div>
          <div className="century">20TH CENTURY DESIGN</div>
          <Footer contact home />
        </main>
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allContentfulHome(sort: { order: ASC, fields: ordineDisposizione }) {
      nodes {
        indirizzo
        foto {
          fluid(maxWidth: 4000, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
