import React, { useState } from "react"
import sublinks from "../constants/links"

const GatsbyContext = React.createContext()

//Provider

const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [links, setLinks] = useState(sublinks)
  const [clicked, setClicked] = useState(false)

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
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
