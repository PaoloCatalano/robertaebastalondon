import React from "react"

const Sidebar = ({ children, products }) => {
  console.log(products, "rimane il nodes")
  return (
    <div className="sidebar">
      <div>{children}</div>
    </div>
  )
}

export default Sidebar
