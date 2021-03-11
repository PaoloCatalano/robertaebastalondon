import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const History = () => {
  const { pic1, pic2 } = useStaticQuery(graphql`
    {
      pic1: file(relativePath: { eq: "history1.jpg" }) {
        c: childImageSharp {
          f: fluid(maxWidth: 5000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pic2: file(relativePath: { eq: "history2.jpg" }) {
        c: childImageSharp {
          f: fluid(maxWidth: 5000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <div className="about-container">
      <div className="collection-title get-bigger">
        news
        <div className="underline"></div>
      </div>
      <section className="section2">
        <article>
          <p>
            We would love to share with you any upcoming event that we may take
            part in or host in our beautiful gallery.
          </p>
        </article>
      </section>
    </div>
  )
}

export default History
