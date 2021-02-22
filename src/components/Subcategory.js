import React, { useContext, useState } from "react"
import { GatsbyContext } from "../context/context"

const Subcategory = ({ subcategory, setProducts, products }) => {
  const { hideSidebar } = useContext(GatsbyContext)
  const [index, setIndex] = useState(0)

  const showFiltered = (type, typeIndex) => {
    setIndex(typeIndex)

    const tempProducts = products.filter(
      product => product.sottocategoria === type
    )

    setProducts(tempProducts)
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
              index === typeIndex ? "btn-active" : ""
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
