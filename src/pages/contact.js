import React from "react"
import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import NavbarFixed from "../components/NavbarFixed"
import { Link } from "gatsby"
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
              <a
                href="https://www.google.com/maps/place/Robertaebasta%C2%AE+Art+Gallery/@51.4901621,-0.1540795,15z/data=!4m5!3m4!1s0x0:0x9c67552f85d66517!8m2!3d51.4901649!4d-0.1540814"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>85 Pimlico Road, Belgravia</p>
                <div className="space-mini" />

                <p>London, SW1W 8PH</p>
              </a>
              <div className="space" />
              <h4>OPENING TIMES:</h4>
              <p>Monday to Saturday: 10:00 to 18:00</p>
              <div className="space" />
              <Link to="/policy">
                <p>Cookies and Privacy Policy</p>
              </Link>
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
