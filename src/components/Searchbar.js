import React, { useContext } from "react"
import { HiOutlineSearch } from "react-icons/hi"
import { Link } from "gatsby"
import { GatsbyContext } from "../context/context"

const Searchbar = ({ home }) => {
  const { filterSearch } = useContext(GatsbyContext)
  return (
    <div className={`searchbar searchsmall ${home ? "searchBarHome" : ""}`}>
      <div className="footer">
        <input
          type="text"
          name="search"
          // value={search}
          onChange={filterSearch}
        />
        <button type="submit" style={{ fontSize: 20 }} className="submit">
          <Link to="/search">
            <HiOutlineSearch />
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Searchbar
