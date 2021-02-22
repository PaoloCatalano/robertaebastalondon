import React from "react"
import Collection from "../collection"
import { graphql } from "gatsby"
const rugs = ({ data }) => {
  return (
    <div>
      <Collection pagination="rugs" data={data} />
    </div>
  )
}

export const query = graphql`
  {
    items: allContentfulOggetto(filter: { categoria: { eq: "rugs" } }) {
      nodes {
        titolo
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
export default rugs
