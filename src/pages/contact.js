import React from "react"
import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import NavbarFixed from "../components/NavbarFixed"

const contact = () => {
  return (
    <div className="contact-page-body">
      <NavbarFixed />
      <Sidebar contacts></Sidebar>
      <Layout oneModal title="Contacts">
        <div className="contact-page">
          <div className="phantom-navbar"></div>
          <div className="phantom-column-collection"></div>
          <div className="center">
            <div className="contact-cascading">
              <h3>CONTACT US</h3>
              <div className="underline" />
              <div className="space" />
              <h4>E-MAIL:</h4>
              <a
                className="no-underline"
                href="mailto:london@robertaebasta.com"
              >
                london@robertaebasta.com
              </a>
              <div className="space" />
              <h4>PHONE NUMBERS:</h4>
              <p>
                <a href="tel:+447554544125">+44 ( 0 ) 7554 544125</a>
              </p>
              <div className="space-mini" />
              <p>
                <a href="tel:+442077301263"> +44 ( 0 ) 20 7730 1263</a>
              </p>
              <div className="space" />
              <h4>GALLERY:</h4>
              <p>85 Pimlico Road, Belgravia</p>
              <div className="space-mini" />

              <p>London, SW1W 8PH</p>
              <div className="space" />
              <h4>OPENING TIMES:</h4>
              <p>Monday to Saturday: 10:00 to 18:00</p>
              <div className="space" />
              <p>To see our full collection visit:</p>
              <a
                href="http://www.robertaebasta.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.robertaebasta.com
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default contact
