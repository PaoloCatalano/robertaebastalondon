import React from "react"
import Collection from "../collection"
import { graphql } from "gatsby"

const bookcaseCabinets = ({ data }) => {
  return (
    <div>
      <Collection pagination="bookcases-&-cabinets" data={data} />
    </div>
  )
}
export const query = graphql`
  {
    items: allContentfulOggetto(
      filter: { categoria: { eq: "bookcases-&-cabinets" } }
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
export default bookcaseCabinets
