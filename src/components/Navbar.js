import React, { useContext, useState } from "react"
import Categories from "../components/Categories"
import { GatsbyContext } from "../context/context"
import { Link } from "gatsby"
import { MdClose } from "react-icons/md"

const NavbarModal = ({ subcategory, page }) => {
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
        <button className="modal-switch to-R" onClick={toR}>
          {">"}
        </button>
      </div>
      <div
        className={`modal-links modal-top ${isSwitched ? "" : "modal-hidden"}`}
      >
        <button className="modal-switch to-L" onClick={toL}>
          {"<"}
        </button>
        <div className="modal-categories">
          <Categories subcategory={subcategory} page={page} />
        </div>
      </div>
    </div>
  )
}

const active = {
  borderBottom: "solid 0.1px #9e9d9d",
}

export default NavbarModal
