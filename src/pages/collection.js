import React, { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"
import Categories from "../components/Categories"
import GridPics from "../components/GridPics"
import Layout from "../components/Layout"
import products from "../assets/products"
import { Link, graphql } from "gatsby"
import Logo from "../components/Logo"
import MenuBtn from "../components/MenuBtn"

const Collection = ({ data, pagination }) => {
  const page = pagination || "lighting"
  // CMS
  //category filter

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

  return (
    <>
      <div className="logo-top">
        <Logo />
      </div>
      <MenuBtn />
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
        width={0}
        subcategory={sottocategoria || subcategory}
        page={page}
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
    items: allContentfulOggetto(filter: { categoria: { eq: "lighting" } }) {
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
        categoria
        sottocategoria
      }
    }
  }
`

export default Collection
