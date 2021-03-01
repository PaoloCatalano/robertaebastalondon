import React, { useContext } from "react"
import { Link } from "gatsby"
import Subcategory from "../components/Subcategory"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyContext } from "../context/context"

const Categories = ({
  categories,
  subcategory,
  page,
  setProducts,
  products,
}) => {
  //               {category.replaceAll("-", " ")}

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
  //uniche categorie
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

  const [is1coll, setIs1coll] = React.useState(false)

  React.useEffect(() => {
    setIs1coll(() => {
      if (
        window.location.href === window.location.origin + "/collection" ||
        window.location.href === window.location.origin + "/collection/"
      ) {
        return true
      } else {
        return false
      }
    })
  }, [is1coll])

  const { hideSidebar } = useContext(GatsbyContext)

  return (
    <ul className="cat-container">
      {sortedCategories.map((category, index) => {
        return (
          <li
            key={index}
            className={`cat-list ${is1coll ? "initial-cat" : ""}`}
          >
            <Link
              to={`/collection/${category}`}
              alt={category}
              className="collection-link"
              activeStyle={active}
              onClick={() => {
                setProducts(products)
                hideSidebar()
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
