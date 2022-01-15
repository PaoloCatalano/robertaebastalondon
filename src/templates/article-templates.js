import React from "react"
import { graphql } from "gatsby"
import AboutLayout from "../components/AboutLayout"
import SingleArticle from "../components/SingleArticle"

export default function ArticleTemplates({ data }) {
  const {
    articles: { nodes: articleNode },
  } = data

  const article = articleNode[0]

  return (
    <AboutLayout title={article.title}>
      <SingleArticle {...article} />
    </AboutLayout>
  )
}

export const query = graphql`
  query GetSingleArticle($slug: String) {
    articles: allContentfulArticle(filter: { indirizzo: { eq: $slug } }) {
      nodes {
        title: titolo
        desc {
          desc
        }
        date: dataArticolo(formatString: "MMMM YYYY")
        pagineArticolo {
          fluid(maxWidth: 4000, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
