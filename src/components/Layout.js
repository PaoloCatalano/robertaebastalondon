import React, { useContext, useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Searchbar from "../components/Searchbar"
import Categories from "../components/Categories"
import AboutUs from "../components/AboutUs"
import { GatsbyContext } from "../context/context"
import Logo from "../components/Logo"
import SEO from "../components/SEO"
import MenuBtn from "../components/MenuBtn"

const Layout = ({
  children,
  subcategory,
  page,
  products,
  setProducts,
  home,
  nofooter,
  contact,
  oneModal,
  about,
  title,
  description,
  image,
  keywords,
  cms,
}) => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(GatsbyContext)
  useEffect(() => {
    setIsSidebarOpen(false)
  }, [])

  return (
    <>
      <SEO
        title={title}
        description={description}
        image={image}
        keywords={keywords}
        cms={cms}
      />
      <aside className={`${isSidebarOpen ? "show-modal" : ""}`}>
        <Navbar oneModal={oneModal}>
          {products ? (
            <>
              <div className="collection-title get-bigger">
                collection
                <div className="underline"></div>
              </div>
              <Categories
                subcategory={subcategory}
                page={page}
                products={products}
                setProducts={setProducts}
              />
            </>
          ) : about ? (
            <>
              <div className="collection-title get-bigger">
                about us
                <div className="underline"></div>
              </div>
              <AboutUs />
            </>
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

        <div
          style={{ display: "grid", placeItems: "center", width: "100vw" }}
          className="layout-children"
        >
          {children}
        </div>

        <Footer contact={contact} nofooter={nofooter} home={home} />
      </main>
    </>
  )
}

export default Layout
