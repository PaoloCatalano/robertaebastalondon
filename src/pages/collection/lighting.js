import React from "react"
import Collection from "../collection"
import { graphql } from "gatsby"

const lighting = ({ data }) => {
  return (
    <div>
      <Collection pagination={"lighting"} data={data} />
    </div>
  )
}

export const query = graphql`
  {
    items: allContentfulOggetto(filter: { categoria: { eq: "lighting" } }) {
      nodes {
        titolo

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

export default lighting
