import React from "react"
import Collection from "../../components/Collection"
import { graphql } from "gatsby"

const accessories = ({ data }) => {
  return (
    <div>
      <Collection
        pagination="accessories"
        data={data}
        title="Accessories"
        keywords={data.items.nodes[0].categoria}
      />
    </div>
  )
}
export const query = graphql`
  {
    items: allContentfulOggetto(
      filter: { categoria: { eq: "accessories" } }
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
        categoria
        sottocategoria
      }
    }
  }
`
export default accessories
