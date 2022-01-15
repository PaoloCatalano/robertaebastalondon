import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Press = () => {
  const {
    allContentfulArticle: { articles },
  } = useStaticQuery(graphql`
    {
      allContentfulArticle(sort: { fields: dataArticolo, order: DESC }) {
        articles: nodes {
          slug: indirizzo
          title: titolo
          desc {
            desc
          }
          date: dataArticolo(formatString: "MMMM YYYY")
          createdAt
          cover {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          pagineArticolo {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  return (
    <div className="about-container">
      <div className="collection-title get-bigger">
        PRESS
        <div className="underline"></div>
      </div>
      <section className="section2">
        <article>
          <p>
            Robertaebasta London is regularly featured on some of the most
            exclusive magazines about design and architecture. Below you can
            find a selection of the latest editorials and articles.
          </p>
        </article>
        <div className="space"></div>
        <article className="gal-container fairs">
          {articles.map(article => (
            <div className="fair" key={article.slug}>
              <div className="frame-press">
                <Link to={article.slug}>
                  <Img fluid={article.cover.fluid} alt="cover" />
                  {/* <img
                  src={article.cover}
                  alt="cover"
                  style={{ width: "100%" }}
                /> */}
                </Link>
              </div>
              <p className="press-title">{article.title}</p>
              <p className="press-date">{article.date}</p>
            </div>
          ))}
        </article>
      </section>
    </div>
  )
}

export default Press
