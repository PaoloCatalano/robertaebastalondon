import React from "react"
import Collection from "../../components/Collection"
import { graphql } from "gatsby"

const beds = ({ data }) => {
  return (
    <div>
      <Collection
        pagination="beds"
        data={data}
        title="Beds"
        keywords={data.items.nodes[0].categoria}
      />
    </div>
  )
}
export const query = graphql`
  {
    items: allContentfulOggetto(
      filter: { categoria: { eq: "beds" } }
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
export default beds
