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
        our history
        <div className="underline"></div>
      </div>
      <section className="section2">
        <article>
          <p>
            Robertaebasta was established in Milan in 1967 by Roberta
            Tagliavini, a creative and talented woman with an endless love for
            objets d’art and timeless design pieces. Roberta has always sought
            to make a meaningful contribution to the world of art and culture.
            Her passion and eclectic taste are what defines Robertaebasta’s
            reputation as a point of reference for the Decorative Arts and
            Design of the 20th Century.
          </p>
        </article>
        <div className="flex">
          <div className="smaller-pic">
            <Img
              className="img"
              fluid={pic1.c.f}
              alt="ROBERTAEBASTA history"
              backgroundColor="#b8d6d2"
              FadeIn={true}
              durationFadeIn={1000}
            />
          </div>
        </div>
        <article>
          <p>
            Roberta has successfully passed on her passion and her dedication to
            the field of art and design to her son, Mattia Martinelli. Over the
            course of his 25-year career, Mattia has been instrumental in
            developing the gallery’s international network and in nurturing new
            relationships with clients. Mattia’s extensive expertise and
            integrity have allowed him to become a consultant for the Decorative
            Arts at the Milan Court of Justice.
          </p>
        </article>

        <div className="flex">
          <div className="smaller-pic">
            <Img
              className="img"
              fluid={pic2.c.f}
              alt="ROBERTAEBASTA history"
              backgroundColor="#b8d6d2"
              FadeIn={true}
              durationFadeIn={1000}
            />
          </div>
        </div>
        <article>
          <p className="margin-bottom">
            Robertaebasta is more than just a name, it is a world where art,
            creativity and history meet to highlight the outstanding beauty of
            pieces. The Robertaebasta collection comprises the finest pieces of
            Decorative Arts and Modern Design, to offer the very best of our
            shared past. Through its objects, works of art and design pieces,
            Robertaebasta tells a thousand other stories.
          </p>
        </article>
      </section>
    </div>
  )
}

export default History
