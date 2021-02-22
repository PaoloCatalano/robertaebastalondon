import React from "react"
import Collection from "../collection"
import { graphql } from "gatsby"

const fineArt = ({ data }) => {
  return (
    <div>
      <Collection pagination="fine-art-&-sculptures" data={data} />
    </div>
  )
}
export const query = graphql`
  {
    items: allContentfulOggetto(
      filter: { categoria: { eq: "fine-art-&-sculptures" } }
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
export default fineArt
