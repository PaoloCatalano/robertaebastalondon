import React, { useContext, useEffect } from "react"
import { GatsbyContext } from "../context/context"
import Sidebar from "../components/Sidebar"
import Layout from "../components/Layout"
import NavbarFixed from "../components/NavbarFixed"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Collection = ({ data }) => {
  const { filtered, setFiltered, search } = useContext(GatsbyContext)

  const {
    items: { nodes },
  } = data

  useEffect(() => {
    let tempItems = nodes
    tempItems = tempItems.filter(item => {
      return item.keywords.includes(search.toLowerCase())
    })
    if (search === "" || search.length >= 1) {
      setFiltered(null)
    }
    if (search.length >= 2) {
      setFiltered(tempItems)
    }
  }, [search])

  return (
    <>
      <NavbarFixed />
      <Sidebar empty>
        <div className="collection-title">
          <Link to="/collection">collection</Link>
          <div className="underline"></div>
        </div>
      </Sidebar>
      <Layout nofooter oneModal title="London Collection Search Page">
        <div className="collection">
          <div className="phantom-column-collection"></div>
          <div className="pics-container prev-collection">
            <span style={{ marginTop: 10 }}>
              {filtered
                ? filtered.length === 1
                  ? filtered.length + ` item found with: ${search}`
                  : filtered.length + ` items found with: ${search}`
                : ""}
            </span>
            <ul className="grid-pics">
              {filtered ? (
                filtered.map((prod, index) => {
                  const {
                    slug,
                    fotoAnteprima: { fluid },
                    sold,
                    designer,
                    titolo,
                  } = prod

                  return (
                    <li key={index} className="grid-pic">
                      <Link
                        to={`/collection/${slug}`}
                        alt={slug}
                        className={`${sold ? "sold" : ""}`}
                      >
                        <Img
                          fluid={fluid}
                          alt=""
                          className="preview"
                          backgroundColor="#b8d6d2"
                          FadeIn={true}
                          durationFadeIn={2000}
                        />
                        {!sold && (
                          <div className="preview-info">
                            <div>{designer}</div>
                            <p>{titolo}</p>
                          </div>
                        )}
                      </Link>
                    </li>
                  )
                })
              ) : (
                <p>Please write a word with more than one letter</p>
              )}
            </ul>
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
export const query = graphql`
  {
    items: allContentfulOggetto(
      sort: {
        order: [ASC, ASC, ASC]
        fields: [categoria, sottocategoria, ordineDisposizione]
      }
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
        keywords
      }
    }
  }
`
export default Collection
