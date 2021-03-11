import React, { useContext, useState } from "react"
import { GatsbyContext } from "../context/context"

const Subcategory = ({ subcategory, setProducts, products }) => {
  const { hideSidebar, clicked, setClicked, index, setIndex } = useContext(
    GatsbyContext
  )

  const showFiltered = (type, typeIndex) => {
    setIndex(typeIndex)
    const tempProducts = products.filter(
      product => product.sottocategoria.toLocaleLowerCase() === type
    )

    setProducts(tempProducts)
    setClicked(true)
    hideSidebar()
  }

  return (
    <div>
      {subcategory.map((type, typeIndex) => {
        return (
          <button
            key={typeIndex}
            type="button"
            onClick={() => {
              showFiltered(type, typeIndex)
            }}
            className={`subcategory-btn ${
              clicked && index === typeIndex ? "btn-active" : ""
            }`}
          >
            {type}
          </button>
        )
      })}
    </div>
  )
}

export default Subcategory
