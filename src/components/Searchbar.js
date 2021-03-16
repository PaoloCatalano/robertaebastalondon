import React, { useState, useContext, useEffect } from "react"
import { FaSistrix } from "react-icons/fa"
import { Link } from "gatsby"
import { GatsbyContext } from "../context/context"

const Searchbar = ({ home }) => {
  const { search, filterSearch } = useContext(GatsbyContext)
  return (
    <div className={`searchbar searchsmall ${home ? "searchBarHome" : ""}`}>
      <div className="footer">
        <input
          type="text"
          name="search"
          value={search}
          onChange={filterSearch}
        />
        <button type="submit" style={{ fontSize: 20 }} className="submit">
          <Link to="/search">
            <FaSistrix />
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Searchbar
