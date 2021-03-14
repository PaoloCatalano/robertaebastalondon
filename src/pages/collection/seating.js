import React from "react"
import Collection from "../../components/Collection"
import { graphql } from "gatsby"
const seating = ({ data }) => {
  return (
    <div>
      <Collection
        pagination={"seating"}
        data={data}
        title="Seating"
        keywords={data.items.nodes[0].categoria}
      />
    </div>
  )
}
export const query = graphql`
  {
    items: allContentfulOggetto(
      filter: { categoria: { eq: "seating" } }
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
export default seating
