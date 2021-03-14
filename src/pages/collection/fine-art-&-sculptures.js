import React from "react"
import Collection from "../../components/Collection"
import { graphql } from "gatsby"

const fineArt = ({ data }) => {
  return (
    <div>
      <Collection
        pagination="fine-art-&-sculptures"
        data={data}
        title="Fine Art & Sculptures"
        keywords={data.items.nodes[0].categoria}
      />
    </div>
  )
}
export const query = graphql`
  {
    items: allContentfulOggetto(
      filter: { categoria: { eq: "fine-art-&-sculptures" } }
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
export default fineArt
