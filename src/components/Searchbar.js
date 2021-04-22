import React, { useContext } from "react"
import { HiOutlineSearch } from "react-icons/hi"
import { Link } from "gatsby"
import { GatsbyContext } from "../context/context"
import { navigate } from "@reach/router"

const Searchbar = ({ home }) => {
  const { filterSearch } = useContext(GatsbyContext)
  return (
    <div className={`searchbar searchsmall ${home ? "searchBarHome" : ""}`}>
      <div className="footer">
        <form
          onSubmit={e => {
            e.preventDefault()
            navigate("/search")
          }}
        >
          <input
            type="text"
            name="search"
            // value={search}
            onChange={filterSearch}
            style={{ transform: "translateY(-6px)" }}
          />
          <button type="submit" style={{ fontSize: 20 }} className="submit">
            <Link to="/search">
              <HiOutlineSearch />
            </Link>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Searchbar
