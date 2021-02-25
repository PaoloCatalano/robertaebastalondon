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
      <div className="collection-title">
        our history
        <div className="underline"></div>
      </div>
      <section className="section1">
        <article className="parag2">
          <p>
            Robertaebasta was established in Milan in 1967 by Roberta
            Tagliavini. A creative and talented woman with a endless love for
            objets d’art, Roberta has always sought to make a meaningful
            contribution to the world of art and culture. Her passion and
            eclectic taste are the true essence behind Robertaebasta’s
            reputation as a point of reference for the Decorative Arts and
            Design of the 20th Century.
          </p>
          <p>
            Like any art lover, Roberta shares her passion and dedication to the
            world of art and culture with her son Mattia Martinelli. Over the
            course of his 25-year career, Mattia has been instrumental in
            developing the gallery’s international network and in nurturing new
            relationships with clients. Mattia also works as consultant in the
            Decorative Arts department at theMilan Court of Justice.
          </p>
        </article>
        <article>
          <Img
            className="img"
            fluid={pic1.c.f}
            alt="ROBERTAEBASTA history"
            backgroundColor="#b8d6d2"
            FadeIn={true}
            durationFadeIn={1000}
          />
        </article>
      </section>
      <section className="section2">
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
          <p>
            Robertaebasta is more than a name and a gallery, Robertaebasta is a
            world where art, creativity and history meet to give a new life to
            objects of outstanding beauty. The Robertaebasta collection is a
            careful selection of the finest pieces of Decorative Arts and Modern
            Design, to offer all our clients just the very best of our shared
            past. Through its obejcts, works of art and design pieces,
            Robertaebasta tells a million different stories.
          </p>
        </article>
      </section>
    </div>
  )
}

export default History
