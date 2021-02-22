import React, { useContext } from "react"
import { GatsbyContext } from "../context/context"
import { GiHamburgerMenu } from "react-icons/gi"

const MenuBtn = ({ home }) => {
  const { showSidebar } = useContext(GatsbyContext)

  return (
    <button
      className={`menu-btn ${home ? "MenuBtnHome" : ""}`}
      onClick={showSidebar}
    >
      <GiHamburgerMenu />
    </button>
  )
}

export default MenuBtn
