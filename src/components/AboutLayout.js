import React from "react"
import Sidebar from "../components/Sidebar"
import Layout from "../components/Layout"
import NavbarFixed from "../components/NavbarFixed"
import AboutUs from "../components/AboutUs"
import { Link } from "gatsby"
const AboutLayout = ({
  children,
  title,
  description,
  image,
  cms,
  keywords,
}) => {
  return (
    <>
      <NavbarFixed />
      <Sidebar about>
        <div className="collection-title">
          <Link to="/about/our-history">About Us</Link>
          <div className="underline"></div>
        </div>
        <AboutUs />
      </Sidebar>
      <Layout
        nofooter
        about
        title={`${title || "About Us"}`}
        description={description}
        image={image}
        cms={cms}
        keywords={keywords}
      >
        <div className="collection padding">
          <div className="phantom-column-about"></div>
          <div className="flex">{children}</div>
        </div>
      </Layout>
    </>
  )
}

export default AboutLayout
