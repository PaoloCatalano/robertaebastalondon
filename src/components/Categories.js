import React, { useContext } from "react"
import { GatsbyContext } from "../context/context"
import { Link } from "gatsby"
import Subcategory from "../components/Subcategory"
import { useStaticQuery, graphql } from "gatsby"

const Categories = ({
  categories,
  subcategory,
  page,
  setProducts,
  products,
}) => {
  const {
    allContentfulOggetto: { nodes },
  } = useStaticQuery(graphql`
    {
      allContentfulOggetto {
        nodes {
          categoria
        }
      }
    }
  `)
  //unique categorie
  const tempCategorie = nodes.map(item => {
    return item.categoria.toLocaleLowerCase()
  })
  const categorie = [...new Set(tempCategorie)]

  //select: cms or data
  const sortedCategories = categorie || categories

  sortedCategories
    .sort((a, b) => {
      if (a === "beds") {
        return -1
      }
      return a - b
    })
    .sort((a, b) => {
      if (a === "rugs") {
        return -1
      }
      return a - b
    })
    .sort((a, b) => {
      if (a === "accessories") {
        return -1
      }
      return a - b
    })
    .sort((a, b) => {
      if (a === "fine-art-&-sculptures") {
        return -1
      }
      return a - b
    })
    .sort((a, b) => {
      if (a === "bookcases-&-cabinets") {
        return -1
      }
      return a - b
    })
    .sort((a, b) => {
      if (a === "tables") {
        return -1
      }
      return a - b
    })
    .sort((a, b) => {
      if (a === "seating") {
        return -1
      }
      return a - b
    })
    .sort((a, b) => {
      if (a === "lighting") {
        return -1
      }
      return a - b
    })

  const { hideSidebar, setIndex, setChangeCollection } = useContext(
    GatsbyContext
  )

  return (
    <ul className="cat-container">
      {sortedCategories.map((category, index) => {
        return (
          <li key={index} className="cat-list">
            <Link
              to={`/collection/${category}`}
              alt={category}
              className="collection-link"
              activeStyle={active}
              onClick={() => {
                setProducts(products)
                hideSidebar()
                setIndex(null)
                setChangeCollection(true)
              }}
            >
              {category.replace(/-/g, " ")}
            </Link>
            <div className="subcategory">
              {page === category ? (
                <Subcategory
                  subcategory={subcategory}
                  setProducts={setProducts}
                  products={products}
                />
              ) : null}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
const active = {
  borderBottom: "solid 0.1px #9e9d9d",
}

export default Categories
