import React, { useState, useContext, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import Categories from "../components/Categories"
import GridPics from "../components/GridPics"
import Layout from "../components/Layout"
import products from "../assets/products"
import NavbarFixed from "../components/NavbarFixed"
import LinksCategories from "../components/LinksCategories"
import { GatsbyContext } from "../context/context"
import { Link } from "gatsby"

const Collection = () => {
  return (
    <>
      <NavbarFixed />
      <Sidebar collection>
        <div className="collection-title">
          <Link to="/collection">london collection</Link>
          <div className="underline"></div>
        </div>
        <Categories />
      </Sidebar>
      <Layout nofooter>
        <div className="collection">
          <div className="phantom-column-collection"></div>
          <div className="pics-container prev-collection">
            {/* <GridPics products={prodotto} /> */}
            <LinksCategories />
            <div className="banner-collection">
              <p>To see our full collection visit:</p>
              <Link to="https://robertaebasta.com/" alt="robertaebasta.com">
                www.robertaebasta.com
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Collection
