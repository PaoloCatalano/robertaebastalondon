import React from "react"
import { GoSearch } from "react-icons/go"
import { Link } from "gatsby"

const Searchbar = ({ home }) => {
  return (
    <div className={`searchbar ${home ? "searchBarHome" : ""}`}>
      <div className="footer">
        <input type="text" />
        <button type="submit" className="submit">
          <GoSearch />
        </button>
      </div>
    </div>
  )
}

export default Searchbar
