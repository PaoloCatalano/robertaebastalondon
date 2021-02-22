import React from "react"

const Sidebar = ({ children }) => {
  return (
    <div className="sidebar">
      <div>{children}</div>
    </div>
  )
}

export default Sidebar
