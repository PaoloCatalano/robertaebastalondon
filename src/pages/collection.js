import React, { useState, useContext, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import Categories from "../components/Categories"
import GridPics from "../components/GridPics"
import Layout from "../components/Layout"
import products from "../assets/products"
import { Link, graphql } from "gatsby"
import NavbarFixed from "../components/NavbarFixed"
import { GatsbyContext } from "../context/context"

const Collection = ({ data, pagination }) => {
  const page = pagination || "lighting"
  // CMS
  //category filter
  const { setClicked } = useContext(GatsbyContext)
  useEffect(() => {
    setClicked(false)
  }, [])

  const {
    items: { nodes },
  } = data

  const [prodotto, setprodotto] = useState(nodes)

  //subcategoryfilter
  const listaSottocategoria = nodes.map(item => {
    return item.sottocategoria.toLocaleLowerCase()
  })
  const sottocategoria = [...new Set(listaSottocategoria)]

  // constant file
  //sublink filter
  const filteredProducts = products.filter(prod => {
    return prod.category.toLocaleLowerCase() === page
  })
  //subcategory list
  const subcategoryList = filteredProducts.map(product => {
    return product.subcategory.toLocaleLowerCase()
  })
  const subcategory = [...new Set(subcategoryList)]

  //link filter
  const tempProd = products.map(product => {
    return product.category.toLocaleLowerCase()
  })
  const categories = [...new Set(tempProd)]

  //
  return (
    <>
      <NavbarFixed />
      <Sidebar>
        <div className="collection-title">
          collection
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          subcategory={sottocategoria || subcategory}
          page={page}
          products={nodes}
          setProducts={setprodotto}
        />
      </Sidebar>
      <Layout
        subcategory={sottocategoria || subcategory}
        page={page}
        products={nodes}
        setProducts={setprodotto}
        nofooter
      >
        <div className="collection">
          <div className="phantom-column-collection"></div>
          <div className="pics-container">
            <GridPics products={prodotto || filteredProducts} />
            <div className="banner-collection">
              <p>To see our full collection visit:</p>
              <Link to="https://robertaebasta.com/" alt="robertaebasta.com">
                www.robertaebasta.com
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    items: allContentfulOggetto(
      filter: { categoria: { eq: "lighting" } }
      sort: { fields: ordineDisposizione, order: ASC }
    ) {
      nodes {
        titolo
        designer
        sold
        ordineDisposizione
        fotoAnteprima {
          fluid {
            ...GatsbyContentfulFluid_noBase64
          }
        }
        slug: indirizzo

        sottocategoria
      }
    }
  }
`

export default Collection
