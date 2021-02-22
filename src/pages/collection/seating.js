import React from "react"
import Collection from "../collection"
import { graphql } from "gatsby"
const seating = ({ data }) => {
  console.log(data)

  return (
    <div>
      <Collection pagination={"seating"} data={data} />
    </div>
  )
}
export const query = graphql`
  {
    items: allContentfulOggetto(filter: { categoria: { eq: "seating" } }) {
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
export default seating
