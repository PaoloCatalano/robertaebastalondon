import React from "react"
import Collection from "../collection"
import { graphql } from "gatsby"

const beds = ({ data }) => {
  return (
    <div>
      <Collection pagination="beds" data={data} />
    </div>
  )
}
export const query = graphql`
  {
    items: allContentfulOggetto(
      filter: { categoria: { eq: "beds" } }
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
export default beds
