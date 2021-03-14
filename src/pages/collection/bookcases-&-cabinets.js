import React from "react"
import Collection from "../../components/Collection"
import { graphql } from "gatsby"

const bookcaseCabinets = ({ data }) => {
  return (
    <div>
      <Collection
        pagination="bookcases-&-cabinets"
        data={data}
        title="Bookcases & Cabinets"
        keywords={data.items.nodes[0].categoria}
      />
    </div>
  )
}
export const query = graphql`
  {
    items: allContentfulOggetto(
      filter: { categoria: { eq: "bookcases-&-cabinets" } }
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
export default bookcaseCabinets
