import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
const Fair = () => {
  const { master, biaf, biennale, brafa } = useStaticQuery(graphql`
    {
      master: file(relativePath: { eq: "Masterpiece-London-logo.jpg" }) {
        p: childImageSharp {
          f: fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      biaf: file(relativePath: { eq: "Biaf-logo.jpg" }) {
        p: childImageSharp {
          f: fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      biennale: file(relativePath: { eq: "Biennale-Paris-logo.jpg" }) {
        p: childImageSharp {
          f: fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      brafa: file(relativePath: { eq: "Brafa-logo.jpg" }) {
        p: childImageSharp {
          f: fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  console.log(master.p.f.src.slice(master.p.f.src.lastIndexOf("/") + 1))
  return (
    <div className="about-container">
      <div className="collection-title get-bigger">
        art fairs
        <div className="underline"></div>
      </div>
      <section className="section2">
        <article>
          <p>
            In the very heart of Milan, the renowned Brera Design District,
            Robertaebasta welcomes you into its Art Deco and Design galleries.
            These spaces perfectly frame the wonderful and meticulous display of
            Robertaebasta’s vast collection. If you wish to visit one of our
            Milanese galleries, please find all the details below:
          </p>
        </article>
        <article className="gal-container fairs">
          <div className="fair">
            <Link to="">
              <Img
                fluid={master.p.f}
                alt={master.p.f.src.slice(master.p.f.src.lastIndexOf("/") + 1)}
              />
            </Link>
            <p>Masterpiece London</p>
          </div>
          <div className="fair">
            <Link to="">
              <Img
                fluid={brafa.p.f}
                alt={brafa.p.f.src.slice(brafa.p.f.src.lastIndexOf("/") + 1)}
              />
            </Link>
            <p>Brafa</p>
          </div>
          <div className="fair">
            <Link to="">
              <Img
                fluid={biaf.p.f}
                alt={biaf.p.f.src.slice(biaf.p.f.src.lastIndexOf("/") + 1)}
              />
            </Link>
            <p>BIAF</p>
          </div>
          <div className="fair">
            <Link to="">
              <Img
                fluid={biennale.p.f}
                alt={biennale.p.f.src.slice(
                  biennale.p.f.src.lastIndexOf("/") + 1
                )}
              />
            </Link>
            <p>Biennale Paris</p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Fair
