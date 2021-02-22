import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Logo from "../components/Logo"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout width={370}>
      <main>
        <Navbar />
        <div className="contact-page">
          <div className="logo-side">
            <Logo underline={true} />
          </div>
          <div className="contact-cascading">
            <h3>CONTACT US</h3>
            <div className="underline" />
            <div className="space" />
            <h4>E-MAIL:</h4>
            <a className="no-underline" href="mailto:london@robertaebasta.com">
              london@robertaebasta.com
            </a>
            <div className="space" />
            <h4>PHONE NUMBERS:</h4>
            <p>+44 ( 0 ) 7554 544125</p>
            <div className="space-mini" />
            <p>+44 ( 0 ) 7554 544125</p>
            <div className="space" />
            <h4>GALLERY:</h4>
            <p>85 Pimlico Road, Belgravia</p>
            <div className="space-mini" />

            <p>London, SW1W 8PH</p>
            <div className="space" />
            <h4>OPENING TIMES:</h4>
            <p>Monday to Saturday : 10:00 to 18:00</p>
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
        <Footer contact={false} />
      </main>
    </Layout>
  )
}

export default contact
