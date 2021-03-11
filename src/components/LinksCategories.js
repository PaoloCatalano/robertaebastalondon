import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const LinksCategories = () => {
  const {
    allContentfulCollection: { nodes },
  } = useStaticQuery(graphql`
    {
      allContentfulCollection(sort: { fields: indice, order: ASC }) {
        nodes {
          title
          category {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  return (
    <ul className="links-collection">
      {nodes.map((link, index) => {
        return (
          <li key={index} className="link-collection">
            <Link
              to={`/collection/${link.title
                .toLocaleLowerCase()
                .replace(/ /g, "-")}`}
            >
              <div className="link-title">{link.title}</div>

              <Img
                fluid={link.category.fluid}
                alt={link.title}
                className="pic-link-collection"
                backgroundColor="#b8d6d2"
                FadeIn={true}
                durationFadeIn={2000}
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default LinksCategories
