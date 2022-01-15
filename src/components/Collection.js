import React, { useContext, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import Categories from "../components/Categories"
import GridPics from "../components/GridPics"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import NavbarFixed from "../components/NavbarFixed"
import { GatsbyContext } from "../context/context"

const Collection = ({ data, pagination, title, description, keywords }) => {
  const page = pagination
  // CMS
  //category filter
  const { clicked, prodotto, setprodotto, changeCollection } = useContext(
    GatsbyContext
  )
  // useEffect(() => {
  //   setClicked(false)
  // }, [])

  const {
    items: { nodes },
  } = data

  useEffect(() => {
    if (changeCollection) {
      setprodotto(nodes)
    }
    // eslint-disable-next-line
  }, [changeCollection])

  useEffect(() => {
    if (!clicked) {
      setprodotto(nodes)
    }
  })

  //subcategoryfilter
  const listaSottocategoria = nodes.map(item => {
    return item.sottocategoria.toLocaleLowerCase()
  })
  const sottocategoria = [...new Set(listaSottocategoria)]

  return (
    <>
      <NavbarFixed />
      <Sidebar collection>
        <div className="collection-title">
          <Link to="/collection">collection</Link>
          <div className="underline"></div>
        </div>
        <Categories
          subcategory={sottocategoria}
          page={page}
          products={nodes}
          setProducts={setprodotto}
        />
      </Sidebar>
      <Layout
        subcategory={sottocategoria}
        page={page}
        products={nodes}
        setProducts={setprodotto}
        nofooter
        title={title}
        description={description}
        keywords={keywords}
      >
        <div className="collection">
          <div className="phantom-column-collection"></div>
          <div className="pics-container">
            {prodotto && <GridPics products={prodotto} />}
            <div className="banner-collection">
              <p>To see our full collection visit:</p>
              <a
                href="https://robertaebasta.com/"
                alt="robertaebasta.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.robertaebasta.com
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Collection
