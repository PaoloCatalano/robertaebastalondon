import React, { useContext, useState } from "react"
import Categories from "../components/Categories"
import { GatsbyContext } from "../context/context"
import { Link } from "gatsby"
import { MdClose } from "react-icons/md"
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

const NavbarModal = ({ children }) => {
  const { links, hideSidebar } = useContext(GatsbyContext)

  const [isSwitched, setIsSwitched] = useState(true)

  const toR = () => {
    setIsSwitched(true)
  }
  const toL = () => {
    setIsSwitched(false)
  }

  return (
    <div className="modal-container">
      <button className="modal-close" onClick={hideSidebar}>
        <MdClose className="icon" />
      </button>
      <div className="modal-links">
        <ul className="modal-4-links">
          {links.map((link, index) => {
            const { url, label } = link
            return (
              <li key={index} className="modal-link london big">
                <Link
                  to={url}
                  onClick={hideSidebar}
                  alt={label}
                  activeStyle={active}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
        <button className="no-show modal-switch to-R" onClick={toR}>
          <IoIosArrowForward />
        </button>
        <div
          className={`no-show modal-top ${isSwitched ? "" : "modal-hidden"}`}
        >
          <div className={`modal-links`}>
            <button className="modal-switch to-L" onClick={toL}>
              <IoIosArrowBack />
            </button>
            <div className="modal-categories">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const active = {
  borderBottom: "solid 0.1px #9e9d9d",
}

export default NavbarModal
