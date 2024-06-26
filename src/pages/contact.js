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
              <a className="no-underline" href="mailto:mail@mail.com">
                mail@mail.com
              </a>
              <div className="space" />
              <h4>PHONE NUMBERS:</h4>
              <p>
                <a href="tel:+1234567890">+1234567890</a>
              </p>
              <div className="space-mini" />
              <p>
                <a href="tel:+0987654321"> +0987654321</a>
              </p>
              <div className="space" />
              <h4>GALLERY:</h4>
              <a
                href="https://www.google.com/maps/d/viewer?ie=UTF8&hl=en&msa=0&ll=51.528868434293244%2C-0.10159864999999435&spn=0.009884%2C0.012295&z=7&mid=1F9N6ZW6Al55VBo25BlbXO3i_wUY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>00 London Road, London</p>
                <div className="space-mini" />

                <p>London, AB1C 8DF</p>
              </a>
              <div className="space" />
              <h4>OPENING TIMES:</h4>
              <p>Monday to Friday: 10:00 to 18:00</p>
              <div className="space-mini" />
              <p>Saturday: 11:00 to 15:00</p>
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
