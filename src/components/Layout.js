import React, { useContext } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Searchbar from "../components/Searchbar"
import { GatsbyContext } from "../context/context"

const Layout = ({
  children,
  width,
  subcategory,
  page,
  home,
  nofooter,
  products,
}) => {
  const { isSidebarOpen } = useContext(GatsbyContext)
  return (
    <>
      <div className="half-background" style={{ width: `${width}px` }}></div>
      <Searchbar home={home} />
      <aside className={`${isSidebarOpen ? "show-modal" : ""}`}>
        <Navbar subcategory={subcategory} page={page} />
      </aside>
      <main>
        <div style={{ height: 100, width: "100vw" }}></div>
        <div>{children}</div>
        <Footer contact={true} nofooter={nofooter} />
      </main>
    </>
  )
}

export default Layout
