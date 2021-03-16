import React from "react"
import Sidebar from "../components/Sidebar"
import Layout from "../components/Layout"
import NavbarFixed from "../components/NavbarFixed"
import LinksCategories from "../components/LinksCategories"
import { Link } from "gatsby"

const Collection = () => {
  return (
    <>
      <NavbarFixed />
      <Sidebar collection>
        <div className="collection-title">
          <Link to="/collection">collection</Link>
          <div className="underline"></div>
        </div>
      </Sidebar>
      <Layout nofooter oneModal title="London Collection">
        <div className="collection">
          <div className="phantom-column-collection"></div>
          <div className="pics-container prev-collection">
            <LinksCategories />
            <div className="banner-collection">
              <p>To see our full collection visit:</p>
              <a
                href="https://robertaebasta.com/"
                alt="robertaebasta.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.robertaebasta.com
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Collection
