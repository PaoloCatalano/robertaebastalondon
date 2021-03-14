import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Sidebar from "../components/Sidebar"
import NavbarFixed from "../components/NavbarFixed"

const Error = () => {
  return (
    <div className="contact-page-body">
      <NavbarFixed />
      <Sidebar contacts></Sidebar>
      <Layout oneModal title="404">
        <div className="contact-page">
          <div className="phantom-navbar"></div>
          <div className="phantom-column-collection"></div>
          <div className="center">
            <div className="contact-cascading">
              <h3>404 ERROR</h3>
              <div className="underline" />
              <div className="space" />
              <h1>Page not found.</h1>
              <h2 style={{ margin: 50 }}>
                <Link to="/">Back to the Home Page</Link>
              </h2>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Error
