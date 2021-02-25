import React, { useContext, useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Searchbar from "../components/Searchbar"
import Categories from "../components/Categories"
import AboutUs from "../components/AboutUs"
import { GatsbyContext } from "../context/context"
import Logo from "../components/Logo"
import MenuBtn from "../components/MenuBtn"
import Homenavbar from "../components/Homenavbar"

const Layout = ({
  children,
  width,
  subcategory,
  page,
  products,
  setProducts,
  home,
  nofooter,
  contact,
  oneModal,
  about,
}) => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(GatsbyContext)
  useEffect(() => {
    setIsSidebarOpen(false)
  }, [])
  return (
    <>
      <aside className={`${isSidebarOpen ? "show-modal" : ""}`}>
        <Navbar oneModal={oneModal}>
          {products ? (
            <Categories
              subcategory={subcategory}
              page={page}
              products={products}
              setProducts={setProducts}
            />
          ) : about ? (
            <AboutUs />
          ) : (
            ""
          )}
        </Navbar>
      </aside>
      <main>
        <div style={{ height: 100, width: "100vw" }}>
          <div className="navbar-static">
            {!home && (
              <div className="logo-menu">
                <div className="logo-top">
                  <Logo />
                </div>
                <MenuBtn />
              </div>
            )}
            <Searchbar home={home} />
          </div>
        </div>

        <div style={{ display: "grid", placeItems: "center", width: "100vw" }}>
          {children}
        </div>

        <Footer contact={contact} nofooter={nofooter} home={home} />
      </main>
    </>
  )
}

export default Layout
