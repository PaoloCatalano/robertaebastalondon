import React from "react"
import Logo from "../components/Logo"
import MenuBtn from "../components/MenuBtn"
import Searchbar from "../components/Searchbar"

const NavbarFixed = ({ notEmpty }) => {
  return (
    <div className="navbar-fixed">
      <div className="logo-top">
        <Logo />
      </div>
      <MenuBtn />
      <Searchbar notEmpty={notEmpty} />
    </div>
  )
}

export default NavbarFixed
