import React, { useState } from "react"
import sublinks from "../constants/links"

const GatsbyContext = React.createContext()

//Provider

const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [links, setLinks] = useState(sublinks)
  const [clicked, setClicked] = useState(false)
  const [prodotto, setprodotto] = useState(null)
  const [index, setIndex] = useState(0)
  const [changeCollection, setChangeCollection] = useState(false)
  const [search, setSearch] = useState("")
  const [filtered, setFiltered] = useState(null)

  const filterSearch = e => {
    let value = e.target.value
    setSearch(value)
  }

  const showSidebar = () => {
    setIsSidebarOpen(true)
  }
  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <GatsbyContext.Provider
      value={{
        isSidebarOpen,
        links,
        showSidebar,
        hideSidebar,
        clicked,
        setClicked,
        setIsSidebarOpen,
        prodotto,
        setprodotto,
        index,
        setIndex,
        changeCollection,
        setChangeCollection,
        search,
        filterSearch,
        filtered,
        setFiltered,
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
