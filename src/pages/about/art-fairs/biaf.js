import React from "react"
import AboutLayout from "../../../components/AboutLayout"
import SingleFair from "../../../components/SingleFair"
import { graphql } from "gatsby"

const MasterpieceLondon = ({ data }) => {
  return (
    <AboutLayout title="BIAF">
      <SingleFair data={data} />
    </AboutLayout>
  )
}

export const query = graphql`
  {
    fiera: allContentfulOggettoFiera(filter: { fiera: { eq: "biaf" } }) {
      nodes {
        fiera
        titolo
        foto {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
export default MasterpieceLondon
