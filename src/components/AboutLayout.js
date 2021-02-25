import React from "react"
import Sidebar from "../components/Sidebar"
import Layout from "../components/Layout"
import NavbarFixed from "../components/NavbarFixed"
import AboutUs from "../components/AboutUs"

const AboutLayout = ({ children }) => {
  return (
    <>
      <NavbarFixed />
      <Sidebar>
        <div className="collection-title">
          About Us
          <div className="underline"></div>
        </div>
        <AboutUs />
      </Sidebar>
      <Layout nofooter about>
        <div className="collection padding">
          <div className="phantom-column-about"></div>
          <div className="flex">{children}</div>
        </div>
      </Layout>
    </>
  )
}

export default AboutLayout
