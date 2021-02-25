import React from "react"
import { FaSistrix } from "react-icons/fa"
import { Link } from "gatsby"

const Searchbar = ({ home }) => {
  return (
    <div className={`searchbar ${home ? "searchBarHome" : ""}`}>
      <div className="footer">
        <input type="text" />
        <button type="submit" className="submit">
          <FaSistrix />
        </button>
      </div>
    </div>
  )
}

export default Searchbar
