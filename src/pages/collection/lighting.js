import React from "react"
import Collection from "../../components/Collection"
import { graphql } from "gatsby"

const lighting = ({ data }) => {
  return (
    <div>
      <Collection pagination={"lighting"} data={data} />
    </div>
  )
}

export const query = graphql`
  {
    items: allContentfulOggetto(
      filter: { categoria: { eq: "lighting" } }
      sort: { order: [ASC, ASC], fields: [sottocategoria, ordineDisposizione] }
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

export default lighting
