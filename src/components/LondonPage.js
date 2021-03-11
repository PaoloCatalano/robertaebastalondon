import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const LondonPage = () => {
  const { pic1 } = useStaticQuery(graphql`
    {
      pic1: file(relativePath: { eq: "london.jpg" }) {
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
        the london gallery
        <div className="underline"></div>
      </div>
      <section className="section2">
        <article>
          <p>
            Located in a beautiful Georgian building on Pimlico Road, London’s
            Design mecca, Robertaebasta London was established in September
            2017. The gallery sits in a unique context, where design and
            antiques blend in together. Nicknamed by Sotheby’s “the new kids on
            the block”, the gallery's ethos perfectly embraces the cosmopolitan
            nature of the city.
          </p>
        </article>
        <article>
          <p>
            Robertaebasta London displays a unique collection of eclectic pieces
            of modern Italian and French design, thus bringing an unconventional
            approach to London's finest design district. As Roberta’s love for
            the arts goes beyond Italy and France, the London gallery comprises
            works and pieces by the likes of international artists and
            designers, such as Karel Appel, Vladimir Kagan and Manolo Valdés,
            just to name a few.
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
          <p className="margin-bottom">
            Over the years, Robertaebasta London has forged unique relationships
            with private clients, interior design firms and architectural
            practices and has been widely praised for its original selection of
            pieces of exceptional beauty and exclusivity. Telling a thousand
            other stories is Robertaebasta’s mission, thus giving you an
            opportunity to delve into, revaluate and appreciate our creative
            past and history.
          </p>
        </article>
      </section>
    </div>
  )
}

export default LondonPage
